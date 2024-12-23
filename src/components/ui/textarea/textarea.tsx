import * as React from 'react'

import { textVariants, type TextareaProps } from './settings/cva'
import { cn } from '@/utils/tailwind'

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, classNameTitle, rounded, variant, title, error, ...props },
    ref
  ) => {
    return (
      <div className={cn(className, 'w-full')}>
        {title
          ? (
          <h6 className={cn(classNameTitle, 'text-white')}>{title}</h6>
            )
          : undefined}
        <textarea
          className={cn(
            textVariants({
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
TextArea.displayName = 'TextArea'

export { TextArea }
