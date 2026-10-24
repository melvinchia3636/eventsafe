import { useQuery } from '@tanstack/react-query'
import { fetchHealth } from './api'

function App() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  })

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-gray-950 text-gray-100">
      <h1 className="text-4xl font-semibold tracking-tight">EventSafe</h1>
      <p className="text-gray-400">
        API status:{' '}
        {isPending ? (
          <span className="text-gray-300">checking…</span>
        ) : isError ? (
          <span className="text-red-400">unreachable</span>
        ) : (
          <span className="text-green-400">{data.status}</span>
        )}
      </p>
    </main>
  )
}

export default App
