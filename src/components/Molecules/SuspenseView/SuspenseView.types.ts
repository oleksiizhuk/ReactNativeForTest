import { ReactNode } from 'react'

export interface SuspenseViewProps {
  children?: ReactNode
  error?: boolean
  loading?: boolean
}
