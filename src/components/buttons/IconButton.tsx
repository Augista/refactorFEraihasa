import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'warning',
  'unstyled',
}

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant;
  size?: keyof typeof ButtonSize;
  icon?: IconType;
  isOutline?: boolean;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'button'>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'unstyled',
      disabled: buttonDisabled,
      isOutline = false,
      iconClassName,
      size = 'base',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        disabled={buttonDisabled}
        className={clsxm(
          'button inline-flex items-center justify-center',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-50',
          'transition duration-100',
          'min-h-[28px] min-w-[28px] rounded-lg p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          'text-sm md:text-base',

          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[44px] min-w-[44px] p-2 md:min-h-[48px] md:min-w-[48px] md:p-2.5',
            ],
            size === 'base' && [
              'min-h-[36px] min-w-[36px] p-1 md:min-h-[40px] md:min-w-[40px] md:p-1.5',
            ],
            size === 'sm' && [
              'min-h-[32px] min-w-[32px] p-0.5 md:min-h-[36px] md:min-w-[36px] md:p-1',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variant ===========
          [
            variant === 'primary' && [
              !isOutline
                ? 'text-primary-white bg-primary-blue'
                : 'text-primary-blue bg-transparent border-2 border-primary-blue',
              'hover:bg-primary-60',
              'active:bg-primary-70',
              'shadow-p-100 hover:shadow-p-200 disabled:hover:shadow-p-100',
              'disabled:bg-primary-70 disabled:brightness-90 disabled:hover:bg-primary-70',
            ],
            variant === 'warning' && [
              !isOutline
                ? 'text-primary-white bg-primary-orange'
                : 'text-primary-orange bg-transparent border-2 border-primary-orange',
              'hover:bg-warning-20 active:bg-warning-40',
              'disabled:bg-warning-30 disabled:brightness-95',
            ],
            variant === 'unstyled' && [
              'bg-transparent text-black-100 border-typo-outline',
              'hover:text-white hover:border-typo-label',
              'active:text-white active:bg-typo-label disabled:bg-transparent disabled:text-black-100 disabled:border-typo-outline',
            ],
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && (
          <Icon className={clsxm('w-6 h-6 text-typo-primary', iconClassName)} />
        )}
      </button>
    );
  }
);

export default IconButton;
