const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export type HealthResponse = {
  status: string
}

export async function fetchHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/health`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}
