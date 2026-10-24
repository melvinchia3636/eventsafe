import { useQuery } from '@tanstack/react-query'
import { fetchHealth } from './api'

function App() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  })

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-white text-gray-900">
      <h1 className="text-4xl font-semibold tracking-tight">EventSafe</h1>
      <p className="text-gray-500">
        API status:{' '}
        {isPending ? (
          <span className="text-gray-600">checking…</span>
        ) : isError ? (
          <span className="text-red-600">unreachable</span>
        ) : (
          <span className="text-green-600">{data.status}</span>
        )}
      </p>
    </main>
  )
}

export default App
