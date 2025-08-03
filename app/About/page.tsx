import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'

function About() {
    return (
        <Container sx={{ display: "flex", alignItems: 'center', justifyContent: "flex-start", height: '90vh' }} >

            <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column", }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/imgs/360_F_180837604_UyJZNTHPluIJNQJjmTkCpE4XLJ03Zott.jpg"
                        alt="green iguana"
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div">
                            Mohamed
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            I&apos;m a front-end developer with a focus on building responsive and user-friendly web applications using modern frameworks like Next.js and React. I have experience working with Tailwind CSS, Material UI, and integrating APIs. My projects reflect a strong attention to design, performance, and clean code. I’m passionate about continuous learning, UI/UX improvement, and creating seamless digital experiences.


                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card></Container>
    )
}

export default About