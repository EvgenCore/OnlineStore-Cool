import React from 'react'
import Poster from '../Poster/Poster'
import { Category } from './Category'
import { useParams } from 'react-router-dom';

export const SingleCategory = () => {

  const { id } = useParams(); 

  

  return (
    <>
      <Poster />
      <Category type={id} />
    </>
  )
}
