
import React from 'react';
import { Container, } from '@mui/material';
import type { Metadata } from "next";
import PostsHome from './ui/components/posts/postsHome';
import AllPosts from './ui/components/posts/allPosts';
export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <Container sx={{
      paddingY: '.5rem',
      // height: {
      //   xs: 'calc(100vh - 3.5rem)',
      //   md: 'calc(100vh - 4.5rem)',
      //   lg: 'calc(100vh - 4.3rem)',
      // },


    }}>
      <PostsHome />
      <AllPosts />
    </Container>




  );
}
