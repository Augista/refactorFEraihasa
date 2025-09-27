import * as React from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import ErrorMessage from '@/components/form/ErrorMessage';
import FilePreview from '@/components/form/FilePreview';
import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';
import api from '@/lib/api';
import clsxm from '@/lib/clsxm';
import { FileWithPreview } from '@/types/form/dropzone';

export type FileInputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  accept?: Accept;
  // acceptTypes?: string;
  maxFiles?: number;
  className?: string;
};

export default function FileInput({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  accept = { 'image/*': ['.jpg', '.jpeg', '.png'] },
  // acceptTypes = 'JPG, JPEG, atau PNG',
  maxFiles = 1,
  className,
}: FileInputProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const dropzoneRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [error]);

  const [files, setFiles] = React.useState<FileWithPreview[]>(
    getValues(id) || []
  );

  const onDrop = React.useCallback(
    async <T extends File>(
      acceptedFiles: T[],
      rejectedFiles: FileRejection[]
    ) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ?? [...files]);
        setError(id, {
          type: 'manual',
          message:
            rejectedFiles &&
            `${
              rejectedFiles[0].errors[0].code === 'file-too-large'
                ? 'File tidak boleh lebih dari 10MB'
                : rejectedFiles[0].errors[0].code === 'file-invalid-type'
                ? 'Tipe file tidak didukung'
                : rejectedFiles[0].errors[0].message
            }`,
        });
      } else {
        const formData = new FormData();

        formData.append('file', acceptedFiles[0]);

        try {
          const res = await api.post('/file', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          const acceptedFilesPreview = acceptedFiles.map((file: T) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          );

          setFiles(
            files
              ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
              : acceptedFilesPreview
          );

          setValue(id, res.data.data.file_name);

          clearErrors(id);
        } catch {
          setError(id, {
            type: 'manual',
            message: 'Gagal mengunggah file',
          });
        }
      }
    },
    [clearErrors, files, id, setError, setValue, maxFiles]
  );

  React.useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const deleteFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview
  ) => {
    e.preventDefault();
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);

    setFiles(newFiles.length > 0 ? newFiles : []);
    setValue(id, newFiles.length > 0 ? newFiles : null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize: 10000000,
  });

  return (
    <div className='w-full space-y-1.5 rounded-md'>
      {label && (
        <label htmlFor={id} className='flex space-x-1 mb-3'>
          <Typography
            weight='semibold'
            className='text-sm md:text-base text-typo-primary'
          >
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-[#FF4D4D]'>*</Typography>
          )}
        </label>
      )}

      <Controller
        control={control}
        name={id}
        rules={validation}
        render={() => (
          <div
            ref={dropzoneRef}
            className='focus:outline-none group'
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <div
              className={clsxm(
                'w-full cursor-pointer bg-base-white rounded-md',
                'grid grid-cols-1 items-center',
                error
                  ? 'border-red group-focus:border-red'
                  : 'group-focus:border-typo-primary group-hover:border-typo-primary',
                className
              )}
            >
              {files.length > 0 ? (
                files.map((file, index) => (
                  <FilePreview
                    key={index}
                    file={file}
                    deleteFile={deleteFile}
                  />
                ))
              ) : (
                <Button
                  leftIcon={AiOutlinePlus}
                  className='bg-transparent text-[#FB991A] border-2 border-[#FB991A]'
                >
                  <Typography variant='btn' className='text-[#FB991A] py-1/2'>
                    Tambahkan File
                  </Typography>
                </Button>
              )}
            </div>
          </div>
        )}
      />

      {!error && helperText && (
        <HelperText helperTextClassName='mt-2'>{helperText}</HelperText>
      )}
      {/* <Typography variant='c1' className='text-neutral-70'>
        Format file {acceptTypes}
      </Typography> */}
      {/* {files.length > 0 &&
        files.map((file, index) => (
          <FilePreview key={index} file={file} deleteFile={deleteFile} />
        ))} */}
      {/* <Typography variant='c1' className='text-neutral-70'>
        Format file {acceptTypes}
      </Typography> */}
      {/* {files.length === 0 && (
        <Typography variant='bt' className='text-neutral-80 mt-3'>
          Belum ada file diunggah
        </Typography>
      )} */}
      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
}
