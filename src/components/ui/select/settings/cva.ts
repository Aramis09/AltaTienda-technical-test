import { cva, type VariantProps } from 'class-variance-authority'

export interface SelectProps<T = string>
  extends React.HTMLAttributes<HTMLSelectElement>,
  VariantProps<typeof selectVariants> {
  items: Array<{
    value: T
    title: string
  }>
  onItemClick: (value: T) => void
  classNameTitle?: string
  title?: string
  error?: string
}

export const selectVariants = cva(
  '',
  {
    variants: {
      variant: {

      },
      rounded: {

      }
    },
    defaultVariants: {

    }
  }
)
