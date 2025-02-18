import { useEffect, useState } from 'react'

export const useUsers = (fetchUsers = defaultFetchUsers) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | any>(null)

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [fetchUsers])

  return { users, loading, error }
}

const defaultFetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return response.json()
}
