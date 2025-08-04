
'use client'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type news = {
  urlToImage: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
};


function News() {

  const [counter, setCounter] = useState(0)

  const [news, setNews] = useState<news[] | null>(null);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=de8b4e9b337b434f8856144b5b2d6e8e')
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.error(err));
  }, [counter]);
  if (!news) return null;
  return (


    <Box sx={{
      bgcolor: '#cfe8fc', height: {
        xs: 'calc(100vh - 3.5rem)',
        md: 'calc(100vh - 4.5rem)',
        lg: 'calc(100vh - 4.3rem)',

      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "none",

    }}>

      <Card sx={{
        maxWidth: {
          xs: '90%',
          md: '80%',
          lg: '70%',
        }
      }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`${news[counter].urlToImage}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {news[counter].title}
            </Typography>
            <Typography variant="h5" sx={{ color: 'text.secondary' }}>
              {news[counter].description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {news[counter].url && (
                <Typography
                  variant="h6"
                  component="a"
                  href={news[counter].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'inherit', textDecoration: 'underline' }}
                >
                  View more
                </Typography>
              )}
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={() => {

                setCounter(counter + 1)
              }}>
                Next
              </Button></Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>


  )
}

export default News