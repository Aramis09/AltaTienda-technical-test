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
//* Aqui podria agregar variantes pero no tuve tiempo, igual es expandible */
export const selectVariants = cva(
  'w-full rounded-md p-2 bg-inputBackground text-white border-2 border-inputBorder',
  {
    variants: {
      variant: {

      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md'
      }
    },
    defaultVariants: {

    }
  }
)
