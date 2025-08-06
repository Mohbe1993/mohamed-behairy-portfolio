'use client'

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'

type WeatherData = {
  temp: number | null;
  disc: string;
  hum: number | null;
};

const City = {
  London: {
    img: '/imgs/download.png',
    lat: '44.34',
    lon: '10.99'
  },
  Cairo: {
    img: "/imgs/eg.png",
    lat: '30.033333',
    lon: '31.233334'
  },
  Dubai: {
    img: "/imgs/ae.png",
    lat: '25.276987',
    lon: '55.296249'
  },
};

function News() {
  const [cityName, setCityName] = React.useState('London');
  const cityData = City[cityName as keyof typeof City];
  const [buttonDisplay, setButtonDisplay] = React.useState(true);

  const [temp, setTemp] = React.useState<WeatherData>({
    temp: null,
    disc: "",
    hum: null,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setCityName(event.target.value);
    setButtonDisplay(true);
  };

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&appid=e0a8e2026213ace48fbd3f3e0c3d76c3&units=metric`
      )
      .then(function (response) {
        const resTemp = Math.round(response.data.main.temp);
        const resHum = response.data.main.humidity;
        const resDisc = response.data.weather[0].description;
        setTemp({
          temp: resTemp,
          disc: resDisc,
          hum: resHum,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [cityData]);

  return (
    <Container className='flex items-center justify-center' sx={{
      height: {
        xs: 'calc(100vh - 3.5rem)',
        md: 'calc(100vh - 4.5rem)',
        lg: 'calc(100vh - 4.3rem)',
      },
    }}>
      <Card sx={{
        maxWidth: '90vw', height: {
          xs: 'calc(100vh - 18rem)',
          md: 'calc(100vh - 15rem)',
          lg: 'calc(100vh - 4.3rem)',
        }
      }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              maxWidth: '90vw', height: {
                xs: 'calc(100vh - 45rem)',
                md: 'calc(100vh - 40rem)',
                lg: 'calc(100vh - 25rem)',
              }
            }}
            image={cityData.img}
            alt={cityName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Today&apos;s weather in {cityName}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              it is generally a good idea to check the weather forecast before leaving your home, especially if you&apos;re planning to be outdoors for an extended period or if the weather is known to be changeable
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Select City</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="selectV"
              value={cityName}
              label="Select City"
              onChange={handleChange}
            >
              <MenuItem value={'London'}>London</MenuItem>
              <MenuItem value={'Cairo'}>Cairo</MenuItem>
              <MenuItem value={'Dubai'}>Dubai</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
        <CardActions>
          <Button variant="contained" color="success" sx={{ display: buttonDisplay ? 'block' : 'none' }} onClick={() => {
            setButtonDisplay(false)
          }}>
            Show temperature
          </Button>
        </CardActions>
        <CardContent sx={{ height: '100%', display: buttonDisplay ? 'none' : 'block' }}>
          <Typography variant="h5" component="div">
            {`Temp. now: ${temp.temp}°C`}
          </Typography>
          <Typography variant="h5" component="div">
            {`Humidity: ${temp.hum} %`}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {`Description: ${temp.disc}`}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default News;