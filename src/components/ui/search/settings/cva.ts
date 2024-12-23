import { cva, type VariantProps } from 'class-variance-authority'

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof selectVariants> {
  placeholder?: string
  type?: string
  onClick?: () => void
}

//* Aqui deberia de aplicar las variantes pero no tuve tiempo */
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
