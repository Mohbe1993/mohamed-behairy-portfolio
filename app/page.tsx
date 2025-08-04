
import React from 'react';
import News from './components/News';
import { Container, } from '@mui/material';
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <body className={`w-[100vw] bg-[url('/imgs/shutterstock-1665254809.webp')] bg-cover bg-center  bg-no-repeat `}>
      <Container sx={{
        height: {
          xs: 'calc(100vh - 3.5rem)',
          md: 'calc(100vh - 4.5rem)',
          lg: 'calc(100vh - 4.3rem)',
        },


      }}>
        <News />
      </Container>
    </body>



  );
}
