import React from 'react'
import { useUsers } from './hook/useUsers'
import { useForm } from './hook/useForm'
import { LowCouplingTemplate } from './LowCoupling.Template'
import { SuspenseView } from '../../../components/Molecules/SuspenseView/SuspenseView'

export const LowCouplingScreen = () => {
  const { users, loading, error } = useUsers()
  const formValues = useForm({ name: '', email: '' })

  return (
    <SuspenseView loading={loading} error={error}>
      {/*// @ts-ignore*/}
      <LowCouplingTemplate users={users} formValues={...formValues} />
    </SuspenseView>
  )
}
