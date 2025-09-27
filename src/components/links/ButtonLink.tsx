import * as React from 'react';
import { IconType } from 'react-icons';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';
import clsxm from '@/lib/clsxm';

enum ButtonSize {
  'sm',
  'base',
  'lg',
}

enum ButtonVariant {
  'primary',
  'warning',
  'unstyled',
}

type ButtonLinkProps = {
  size?: keyof typeof ButtonSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  isOutline?: boolean;
  leftIconClassName?: string;
  rightIconClassName?: string;
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      variant = 'red',
      size = 'unstyled',
      isOutline = false,
      leftIconClassName,
      rightIconClassName,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'button inline-flex items-center justify-center rounded-md md:rounded-lg',
          'focus:outline-none focus-visible:ring focus-visible:ring-blue-500',
          'transition duration-200 ease-in-out',
          'text-sm md:text-base font-semibold',
          //#region  //*=========== Size ===========
          [
            size === 'lg' && [
              'min-h-[42px] py-2 px-3 md:min-h-[48px] md:py-2.5 md:px-6',
            ],
            size === 'base' && [
              'min-h-[34px] py-1.5 px-2.5 md:min-h-[40px] md:py-[6px] md:px-5',
            ],
            size === 'sm' && [
              'min-h-[30px] py-[1px] px-2 md:min-h-[34px] md:py-[2px] md:px-4',
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
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
          //#endregion  //*======== Variants ===========
          className
        )}
      >
        {/* Left Icon */}
        {LeftIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'mr-[10px]',
              size === 'base' && 'mr-[8px]',
              size === 'lg' && 'mr-[8px]',
            ])}
          >
            <LeftIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsxm([
              size === 'sm' && 'ml-[10px]',
              size === 'base' && 'ml-[8px]',
              size === 'lg' && 'ml-[8px]',
            ])}
          >
            <RightIcon
              className={clsxm(
                'text-sm md:text-2xl font-semibold',
                rightIconClassName
              )}
            />
          </div>
        )}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
