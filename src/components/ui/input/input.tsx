import * as React from 'react'

import { inputVariants, type InputProps } from './settings/cva'
import { cn } from '@/utils/tailwind'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      classNameTitle,
      type,
      rounded,
      variant,
      title,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(className, 'w-full')}>
        {title
          ? (
          <label className={cn(classNameTitle, 'text-white')}>{title}</label>
            )
          : undefined}
        <input
          type={type}
          className={cn(
            inputVariants({
              rounded,
              variant
            })
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-600 text-left ml-2">{error}</span>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
