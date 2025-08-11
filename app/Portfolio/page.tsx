import { Container } from '@mui/material'
import React from 'react'
import ToDo from '../components/PortofolioComponents/ToDo'

function Portfolio() {
  return (
    <div className="w-[100vw] h-fit bg-[url('/imgs/work.jpeg')] bg-cover bg-center bg-fixed ">


      <Container className='flex items-center justify-center' sx={{
        height: {
          xs: 'calc(100vh - 3.5rem)',
          md: 'calc(100vh - 4.5rem)',
          lg: 'calc(100vh - 3rem)',
        },
        paddingBottom: '1rem',

      }}>
        <ToDo />
      </Container>

    </div>
  )
}

export default Portfolio