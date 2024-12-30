import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

interface UserService {
  getUser(): Promise<{ name: string }>
}

const ApiUserService: UserService = {
  getUser: () =>
    fetch('https://api.example.com/user/1').then((res) => res.json()),
}

export const UserProfile = ({ userService }: { userService: UserService }) => {
  const [user, setUser] = useState<{ name: string } | null>(null)

  useEffect(() => {
    userService.getUser().then(setUser)
  }, [userService])

  if (!user) {
    return <Text>Loading...</Text>
  }
  return <Text>User: {user.name}</Text>
}

export const App = () => <UserProfile userService={ApiUserService} />
