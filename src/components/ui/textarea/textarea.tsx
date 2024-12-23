import * as React from 'react'

import { textVariants, type TextareaProps } from './settings/cva'
import { cn } from '@/utils/tailwind'

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, classNameTitle, rounded, variant, title, ...props }, ref) => {
    return (
      <div className={cn(className, 'w-full')}>
        {title ? <h6 className={cn(classNameTitle, 'text-white')}>{title}</h6> : undefined}
        <textarea
        className={cn(textVariants({
          rounded,
          variant
        })
        )}
        ref={ref}
        {...props}
      />
      </div>
    )
  }
)
TextArea.displayName = 'TextArea'

export { TextArea }
