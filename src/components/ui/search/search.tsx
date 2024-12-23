import { Search } from 'lucide-react'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { type SearchInputProps } from './settings/cva'

export function SearchInput({
  placeholder,
  type,
  onClick,
  ...props
}: SearchInputProps) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type={type ?? 'text'}
        variant={'search'}
        placeholder={placeholder ?? 'search titles...'}
        {...props}
      />
      <Button
        type="submit"
        variant={'icon'}
        size={'icon'}
        rounded={'full'}
        onClick={onClick}
        name='search'
      >
        <Search
          style={{
            width: 40,
            height: 30,
            color: 'white'
          }}
        />
      </Button>
    </div>
  )
}
