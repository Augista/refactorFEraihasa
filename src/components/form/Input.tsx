import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { HiEye, HiEyeOff } from 'react-icons/hi';

import ErrorMessage from '@/components/form/ErrorMessage';
import HelperText from '@/components/form/HelperText';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';

export type InputProps = {
  id: string;
  label?: string;
  helperText?: string;
  helperTextClassName?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  prefix?: string;
  suffix?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  divClassName?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export default function Input({
  id,
  label,
  helperText,
  hideError = false,
  validation,
  className,
  type = 'text',
  readOnly = false,
  prefix,
  suffix,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  helperTextClassName,
  divClassName,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);
  const error = get(errors, id);

  return (
    <div className={clsxm('w-full space-y-1.5 rounded-md', divClassName)}>
      {label && (
        <label htmlFor={id} className='flex space-x-1'>
          <Typography
            font='inter'
            variant='c1'
            weight='semibold'
            className='text-sm'
          >
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-red'>*</Typography>
          )}
        </label>
      )}

      <div className='w-full flex relative rounded-md'>
        <div className='absolute w-full h-full rounded-md ring-1 ring-inset ring-slate-400 pointer-events-none' />
        {prefix && (
          <Typography
            variant='c1'
            className='flex items-center px-3 bg-slate-300 text-slate-600 rounded-l-md text-sm'
          >
            {prefix}
          </Typography>
        )}

        <div
          className={clsxm(
            'relative w-full rounded-md',
            prefix && 'rounded-l-md',
            suffix && 'rounded-r-md'
          )}
        >
          {LeftIcon && (
            <div
              className={clsxm(
                'absolute top-0 left-0 h-full',
                'flex justify-center items-center pl-2.5',
                'text-slate-500 text-lg md:text-xl',
                leftIconClassName
              )}
            >
              <LeftIcon />
            </div>
          )}

          <input
            {...register(id, validation)}
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            id={id}
            name={id}
            readOnly={readOnly}
            disabled={readOnly}
            className={clsxm(
              'w-full h-full px-3 py-3 rounded-md border-none',
              [LeftIcon && 'pl-9', RightIcon && 'pr-9'],
              'focus:ring-2 focus:ring-inset',
              'bg-transparent font-primary text-primary-typo text-sm',
              'placeholder:font-primary placeholder:text-slate-500',
              readOnly && 'cursor-not-allowed',
              error
                ? 'border-none focus:ring-red ring-1 ring-inset ring-red '
                : 'focus:ring-primary-typo',
              prefix && 'rounded-l-none rounded-r-md',
              suffix && 'rounded-r-none rounded-l-md',
              prefix && suffix && 'rounded-none',
              className
            )}
            aria-describedby={id}
            {...rest}
          />

          {RightIcon && type !== 'password' && (
            <div
              className={clsxm(
                'absolute bottom-0 right-0 h-full',
                'flex justify-center items-center pr-2.5',
                'text-slate-500 text-lg md:text-xl',
                rightIconClassName
              )}
            >
              <RightIcon />
            </div>
          )}

          {type === 'password' && (
            <div
              className={clsxm(
                'absolute bottom-0 right-0 h-full',
                'flex justify-center items-center pr-3',
                'text-slate-800 text-lg md:text-xl',
                rightIconClassName
              )}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </div>
          )}
        </div>

        {suffix && (
          <Typography
            variant='c1'
            className='flex items-center px-3 bg-slate-300 text-slate-600 rounded-r-md text-sm'
          >
            {suffix}
          </Typography>
        )}
      </div>

      {!hideError && error && <ErrorMessage>{error.message}</ErrorMessage>}
      {!error && helperText && (
        <HelperText helperTextClassName={helperTextClassName}>
          {helperText}
        </HelperText>
      )}
    </div>
  );
}
