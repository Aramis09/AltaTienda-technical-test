import Home from '@/app/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fireEvent, render, screen } from '@testing-library/react'

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false // Opcional, para evitar reintentos durante las pruebas
      }
    }
  })
const queryClient = createTestQueryClient()

describe('Test home page', () => {
  it('The title "Your Favorite List !" should be in the document', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )

    expect(screen.getByText('Your Favorite List !')).toBeInTheDocument()
  })

  it('The search input should be in the document', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )

    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
  })

  it('The search input value should update correctly when typing', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    )

    const searchInput = screen.getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'New Task' } })
    // @ts-expect-error error types
    expect(searchInput.value).toBe('New Task')
  })
})
