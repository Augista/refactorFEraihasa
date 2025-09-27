import {
  DatePicker as NextUIDatePicker,
  DatePickerProps as NextUIDatePickerProps,
} from '@heroui/react';
import clsx from 'clsx';
import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type DatePickerProps = {
  validation?: RegisterOptions;
  label?: string | null;
  id: string;
  placeholder?: string;
  defaultValue?: string;
  helperText?: string;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  containerClassName?: string;
} & Omit<NextUIDatePickerProps, 'onChange'>;

export default function DatePicker({
  validation,
  label,
  id,
  placeholder,
  defaultValue,
  helperText,
  hideError = false,
  containerClassName,
  ...rest
}: DatePickerProps) {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const convertToISO = (date: any): string => {
    if (date?.toDate) {
      return date.toDate().toISOString();
    }
    return new Date(date).toISOString();
  };

  return (
    <div className={clsxm('relative', containerClassName)}>
      {withLabel && (
        <Typography as='label' variant='bt' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}

      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={id}
        render={({ field: { onChange, onBlur } }) => (
          <>
            <div className={clsx('relative', withLabel && 'mt-1')}>
              <NextUIDatePicker
                name={id}
                onChange={(date) => {
                  const isoString = convertToISO(date);
                  onChange(isoString);
                }}
                onBlur={onBlur}
                aria-describedby={id}
                showMonthAndYearPickers
                {...rest}
              />
            </div>
            {helperText && (
              <Typography variant='c1' color='secondary' className='mt-1'>
                {helperText}
              </Typography>
            )}
            {!hideError && error && (
              <Typography variant='c1' color='danger' className='mt-1'>
                {error?.message?.toString()}
              </Typography>
            )}
          </>
        )}
      />
    </div>
  );
}
