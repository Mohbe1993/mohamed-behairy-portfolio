import { Box, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';



function Contact() {
    return (


        <div className={`w-full bg-[url('/imgs/contact-us-background-eps-vector-600nw-2491405611.webp')] bg-cover bg-center lg:bg-[center_75%] bg-no-repeat h-fit `}>


            <Container className='flex items-center justify-center' sx={{
                height: {
                    xs: 'calc(100vh - 3.5rem)',
                    md: 'calc(100vh - 4.5rem)',
                    lg: 'calc(100vh - 4.3rem)',
                },
            }}>
                <Box sx={{ bgcolor: 'inherit', height: '50vh' }} >

                    <CardContent className='flex flex-col gap-5 text-blue-300'>
                        <Typography variant="h3" component="div">
                            Let&apos;s get in touch
                        </Typography>
                        <hr />
                        <Typography sx={{ fontSize: 14 }}>


                            <WhatsAppIcon />
                            <PhoneAndroidIcon />

                        </Typography>
                        <Typography
                            variant="h5"
                            component="a"
                            href="tel:+971586533278"
                            sx={{ textDecoration: 'underline', }}
                        >
                            +971586533278
                        </Typography>
                        <hr />

                        <Typography sx={{ mb: 1.5 }}><EmailIcon /></Typography>
                        <Typography variant="h5" component="a" href="mailto:mohamedbehairy1993@yahoo.com" sx={{ color: 'inherit', textDecoration: 'underline' }}>
                            mohamedbehairy1993@yahoo.com
                        </Typography>
                    </CardContent>

                </Box>
            </Container>
        </div>


    )
}

export default Contact