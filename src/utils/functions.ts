export const add3dotsFormatter = (text: string, length: number | undefined = 10) => {
  if (text.length > 7) {
    return `${text.slice(0, length)}...`
  }
  return text
}

export const prioritiesFormatterVariant = (priority: string) => {
  return priority.toLocaleLowerCase() as 'default' | 'danger' | 'high' | 'medium' | 'low' | null | undefined
}
