import { cva, type VariantProps } from 'class-variance-authority'
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const buttonVariants = cva(
  'w-full inline-flex items-center justify-center gap-2 whitespace-nowrap hover:opacity-80 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-gradiantStart to-gradiantEnd text-white  flex justify-center items-center font-semibold',
        destructive:
          'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
        outline:
          'border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
        link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
        icon: 'flex justify-center items-center'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'h-10 w-10'
      },
      rounded: {
        default: 'rounded-md',
        none: 'rounded-none',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        full: 'rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'default',
      size: 'default'
    }
  }
)
