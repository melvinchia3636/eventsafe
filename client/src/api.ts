const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export type HealthResponse = {
  status: string
}

export type TestRow = {
  id: string
  checked: boolean
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, init)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

export function fetchHealth(): Promise<HealthResponse> {
  return request('/health')
}

export function fetchTest(): Promise<TestRow | null> {
  return request('/test')
}

export function updateTestChecked(checked: boolean): Promise<TestRow> {
  return request('/test', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ checked }),
  })
}
