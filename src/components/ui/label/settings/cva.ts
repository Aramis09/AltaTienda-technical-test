import { cva, type VariantProps } from 'class-variance-authority'
export interface LabelProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof labelVariants> { }

export const labelVariants = cva(
  'p-5 w-20 h-8 font-bold text-sm  flex justify-center items-center text-center',
  {
    variants: {
      variant: {
        default: 'bg-[#86A788]',
        danger: 'bg-danger',
        high: 'bg-priorityHigh animate-shake',
        medium: 'bg-priorityMedium',
        low: 'bg-priorityLow'

      },
      rounded: {
        default: 'rounded-full',
        none: 'rounded-none',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        full: 'rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'default'
    }
  }
)
