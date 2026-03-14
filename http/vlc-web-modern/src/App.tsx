import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Layout } from './components/Layout'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 1000, // Poll VLC API every second
      refetchOnWindowFocus: true,
    },
  },
})

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
