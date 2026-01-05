import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

function fetchUserData() {
  return fetch('https://api.example.com/user/1').then((res) => res.json())
}

export const UserProfile = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    fetchUserData().then(setUser)
  }, [])

  if (!user) {
    return <Text>Loading...</Text>
  }

  return <Text>User: {user.name}</Text>
}
