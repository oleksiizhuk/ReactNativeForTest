import React from 'react'
import { View } from 'react-native'

function withAuth(Component: any) {
  return function WrappedComponent(props: any) {
    const isAuthenticated = false
    return <Component {...props} isAuthenticated={isAuthenticated} />
  }
}

function Profile({ isAuthenticated }: { isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    return <View>Limited Profile Information</View>
  }
  return <View>Full Profile Information</View>
}

export function Main() {
  const ProtectedProfile = withAuth(Profile)
  return <ProtectedProfile />
}
