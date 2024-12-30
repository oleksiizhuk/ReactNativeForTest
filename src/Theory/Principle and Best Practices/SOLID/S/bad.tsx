import React from 'react'
import { View } from 'react-native'
export const UserProfile = ({ userId }: { userId: number }) => {
  const [user, setUser] = React.useState<any>(null)
  const [error, setError] = React.useState<any>(null)

  React.useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then(setUser)
      .catch(setError)
  }, [userId])

  if (error) {
    return <View>Error: {error?.message}</View>
  }
  if (!user) {
    return <View>Loading...</View>
  }

  return <View>{user.name}</View>
}
