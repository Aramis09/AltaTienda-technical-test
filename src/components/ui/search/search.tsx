import React from 'react'
import { Input } from '@/components/ui/input/input'
import { Button } from '../button/button'
import { Search } from 'lucide-react'
export function SearchInput () {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" variant={'search'} placeholder="search titles..." />
      <Button type="submit" variant={'icon'} size={'icon'} rounded={'full'} >
        <Search style={{
          width: 40,
          height: 30,
          color: 'white'
        }}/>
      </Button>
    </div>
  )
}
