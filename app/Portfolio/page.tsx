import { Container } from '@mui/material'
import React from 'react'
import ToDo from '../components/PortofolioComponents/ToDo'
import TictacTo from '../components/ticTacTo/TictacTo'
import Posts from '../ui/components/posts/postsHome'
import News from '../components/News'



function Portfolio() {
  return (
    <div className="w-[100vw] h-fit bg-[url('/imgs/work.jpeg')] bg-cover bg-center bg-fixed ">


      <Container className='flex items-center justify-center flex-col ' sx={{

        paddingBottom: '1rem',

      }}>
        <News />
        <ToDo />
        <TictacTo />
        



      </Container>

    </div>
  )
}

export default Portfolio