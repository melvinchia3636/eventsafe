import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchHealth, fetchTest, updateTestChecked, type TestRow } from './api'

function App() {
  const queryClient = useQueryClient()

  const health = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
  })

  const test = useQuery({
    queryKey: ['test'],
    queryFn: fetchTest,
  })

  const toggle = useMutation({
    mutationFn: (checked: boolean) => updateTestChecked(checked),
    onSuccess: (row) => queryClient.setQueryData<TestRow | null>(['test'], row),
  })

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white text-gray-900">
      <h1 className="text-4xl font-semibold tracking-tight">EventSafe</h1>

      <p className="text-gray-500">
        API status:{' '}
        {health.isPending ? (
          <span className="text-gray-600">checking…</span>
        ) : health.isError ? (
          <span className="text-red-600">unreachable</span>
        ) : (
          <span className="text-green-600">{health.data.status}</span>
        )}
      </p>

      {test.isPending ? (
        <p className="text-gray-500">Loading test row…</p>
      ) : test.isError ? (
        <p className="text-red-600">Could not load test row</p>
      ) : test.data ? (
        <label className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-gray-700">
          <input
            type="checkbox"
            className="size-4 accent-blue-600"
            checked={test.data.checked}
            disabled={toggle.isPending}
            onChange={(event) => toggle.mutate(event.target.checked)}
          />
          Test flag
        </label>
      ) : (
        <p className="text-gray-500">No test row found</p>
      )}
    </main>
  )
}

export default App
