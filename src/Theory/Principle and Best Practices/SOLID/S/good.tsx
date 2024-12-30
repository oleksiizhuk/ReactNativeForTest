import React from 'react'
import { View } from 'react-native'
export const useFetchUser = (userId: any) => {
  const [user, setUser] = React.useState<any>(null)
  const [error, setError] = React.useState<any>(null)

  React.useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then(setUser)
      .catch(setError)
  }, [userId])

  return { user, error }
}

export const UserProfile = ({ userId }: any) => {
  const { user, error } = useFetchUser(userId)

  if (error) {
    return <View>Error: {error?.message}</View>
  }
  if (!user) {
    return <View>Loading...</View>
  }

  return <View>{user?.name}</View>
}
