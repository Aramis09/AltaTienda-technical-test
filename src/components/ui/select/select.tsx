import React from 'react'
import { type SelectProps } from './settings/cva'
import { cn } from '@/utils/tailwind'

export function Select<T>({
  items,
  onItemClick,
  title,
  classNameTitle,
  error,
  className,
  ...props
}: SelectProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onItemClick) {
      const selectedValue = e.target.value
      onItemClick(selectedValue as T)
    }
  }

  return (
    <div className={cn('w-full', className)}>
      {title
        ? (
        <label className={cn(classNameTitle, 'text-white')}>{title}</label>
          )
        : undefined}
      <select
        {...props}
        onChange={handleChange}
        className="w-full rounded-md p-2 bg-inputBackground text-white border-2 border-inputBorder"
      >
        {items.map((item, index) => (
          <option key={index} value={String(item.value)}>
            {item.title}
          </option>
        ))}
      </select>
      {error && <span className='text-sm text-red-600 text-left ml-2'>{error}</span>}
    </div>
  )
}

Select.displayName = 'Select'
