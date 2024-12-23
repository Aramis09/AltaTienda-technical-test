import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type ButtonProps, buttonVariants } from './settings/cva'
import { cn } from '@/utils/tailwind'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, rounded, name = 'Button', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, rounded }))}
        name={name}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
