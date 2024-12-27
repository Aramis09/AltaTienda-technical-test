export const add3dotsFormatter = (text: string, length: number | undefined = 10) => {
  if (text.length > 7) {
    return `${text.slice(0, length)}...`
  }
  return text
}

export const prioritiesFormatterVariant = (priority: string) => {
  if (!priority) return 'default'
  const valueLowerCase = priority.toLocaleLowerCase()
  if (valueLowerCase !== 'low' && valueLowerCase !== 'high' && valueLowerCase !== 'medium' && valueLowerCase !== 'danger') { return 'default' }
  return valueLowerCase
}
