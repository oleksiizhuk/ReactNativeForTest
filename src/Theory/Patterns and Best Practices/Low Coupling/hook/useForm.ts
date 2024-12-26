import { useState } from 'react'

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (field: any, value: any) => {
    setValues((prev: any) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return { values, handleChange, resetForm }
}
