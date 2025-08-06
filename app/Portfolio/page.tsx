import { Container } from '@mui/material'
import React from 'react'

function Portfolio() {
    return (
<div className={`w-full bg-[url('/imgs/contact-us-background-eps-vector-600nw-2491405611.webp')] bg-cover bg-center lg:bg-[center_75%] bg-no-repeat h-fit `}>


      <Container className='flex items-center justify-center' sx={{
        height: {
          xs: 'calc(100vh - 3.5rem)',
          md: 'calc(100vh - 4.5rem)',
          lg: 'calc(100vh - 4.3rem)',
        },
      }}>

      </Container>
    </div>
    )
}

export default Portfolio