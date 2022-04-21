import React, {useState} from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import {Modal} from '../modal/Modal'


const CTA = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className='cta'>
        <a onClick={openModal} className='btn'>Brochure<AiOutlineDownload className='cta__icon'/></a>
        <a href="#contact" className='btn btn-primary'>Contact Us</a>
        <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default CTA