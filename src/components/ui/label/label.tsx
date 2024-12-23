import * as React from 'react'
import { cn } from '@/utils/tailwind'
import { labelVariants, type LabelProps } from './settings/cva'

const Label = React.forwardRef<HTMLParagraphElement, LabelProps>(
  ({ className, children, rounded, variant, ...props }, ref) => {
    return (
      <p
        className={cn(labelVariants({
          rounded,
          variant
        })
        )}
        ref={ref}
        {...props}
      >{children}</p>
    )
  }
)
Label.displayName = 'Label'

export { Label }
