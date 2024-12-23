import { cva, type VariantProps } from 'class-variance-authority'
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textVariants> {
  classNameTitle?: string
  error: string
}

export const textVariants = cva(
  'flex h-9 w-full rounded-md border min-h-32 border-white bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default: 'bg-inputBackground border-inputBorder focus:border-gray-200 text-white',
        search: 'bg-white-900'
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
      rounded: 'default'
    }
  }
)
