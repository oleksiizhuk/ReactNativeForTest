import React, { useState } from 'react'
import { Modal } from 'react-native'

export const useModal = () => {
  const [isModalVisible, setModalVisible] = useState(false)

  const openModal = () => setModalVisible(true)
  const closeModal = () => setModalVisible(false)

  const ModalComponent = ({ children }: any) => (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  )

  return { isModalVisible, openModal, closeModal, ModalComponent }
}
