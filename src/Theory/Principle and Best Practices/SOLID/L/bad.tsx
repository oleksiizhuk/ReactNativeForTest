import React from 'react'
import { View } from 'react-native'

function withAuth(Component: any) {
  return function WrappedComponent(props: any) {
    const isAuthenticated = false
    if (!isAuthenticated) {
      return <View>Access Denied</View>
    }
    return <Component {...props} />
  }
}

function Profile() {
  return <View>Profile Information</View>
}

export function Main() {
  const ProtectedProfile = withAuth(Profile)
  return <ProtectedProfile />
}
