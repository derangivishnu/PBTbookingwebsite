import React from 'react';
import { Container, Typography, Link, Grid, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer>
      <Box sx={{ backgroundColor: '#000000 ', color: 'white', padding: '20px 0' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Contact Us</Typography>
              <address>
                123 Main Street<br />
                City, State ZIP<br />
                Email: <Link href="mailto:info@example.com">info@example.com</Link><br />
                Phone: (123) 456-7890
              </address>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Quick Links</Typography>
              
                <Link href="#">Home</Link> <br />
                <Link href="#">About Us</Link> <br />
                <Link href="#">Services</Link> <br />
                <Link href="#">Contact</Link>
             
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Follow Us</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="#" color="inherit" sx={{ margin: '0 8px' }}>
                  <FacebookIcon />
                </Link>
                <Link href="#" color="inherit" sx={{ margin: '0 8px' }}>
                  <TwitterIcon />
                </Link>
                <Link href="#" color="inherit" sx={{ margin: '0 8px' }}>
                  <LinkedInIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <p>© 2023 pbtblouses.com, All Rights Reserved.  Designed by: D.Vishnuvardhan</p> 
      </Box>
     
    </footer>
  );
}

export default Footer;

