'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { wrap } from 'module';

const pages = ['Home', 'Portfolio', 'About', 'Contacts'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pathname = usePathname()
  const [quote, setQuote] = React.useState('');
  React.useEffect(() => {
    axios.get('http://api.quotable.io/random')
      .then((res) => setQuote(res.data.content))
      .catch((err) => console.error(err));
  }, []);


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mohamed
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages
                .filter((page) => {
                  const pagePath = page === 'Home' ? '/' : `/${page}`
                  return pagePath !== pathname
                })
                .map((page) => (
                  <Link key={page} href={page === 'Home' ? '/' : `/${page}`}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'inherit', display: 'block' }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mohamed
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages
              .filter((page) => {
                const pagePath = page === 'Home' ? '/' : `/${page}`
                return pagePath !== pathname
              })
              .map((page) => (
                <Link key={page} href={page === 'Home' ? '/' : `/${page}`}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'inherit', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
          </Box>
          <Typography
            variant="h1"
            component="a"
            maxWidth={1050}
            sx={{
              mx: 1, p: .5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '20px',

            }}
          >
            {quote ? `"${quote}"` : 'Loading...'}

          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Link href='/'>

              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/imgs/IMG-20241015-WA0033.jpg" />
              </IconButton>

            </Link>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}