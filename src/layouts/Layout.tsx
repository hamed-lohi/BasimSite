import { useState, useEffect } from 'react';
import { Navigation } from './navigation';
// import { Header } from './components/header';
// import { Features } from './components/features';
// import { About } from './components/about';
// import { Services } from './components/services';
// import { Gallery } from './components/gallery';
// import { Testimonials } from './components/testimonials';
import { Contact } from './contact';
import { Footer } from './footer';
import JsonData from 'src/services/data/data.json';
import SmoothScroll from 'smooth-scroll';

import React from 'react';
//import logo from './logo.svg';

import './wp-styles.css';
import './style.css';
import './Layout.css';

import { Fab, SpeedDial, SpeedDialAction, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RTL } from './RTL';
import theme from './theme';
import { Outlet } from 'react-router-dom';

import "src/locales/i18n";

// import { Routes, Route, Outlet, Link } from "react-router-dom";
// import { Post } from './components/post';
// import { Page } from './components/page';
// import { bgcolor, typography } from '@mui/system';
// import { MainPages } from './components/mainPages';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const actions = [
  // { icon: <FileCopyIcon />, name: 'Copy' },
  // { icon: <SaveIcon />, name: 'Save' },
  { icon: <a style={{ color: 'white' }} href='https://wa.me/989128478917' target='_blank' rel="noreferrer" ><WhatsAppIcon sx={{ fontSize: '1.8rem' }} /></a>, color: 'success.light', name: 'ارسال پیام در واتساپ' },
  { icon: <a style={{ color: 'white' }} href='tel:04133310272' ><AddIcCallIcon sx={{ fontSize: '1.8rem' }} /></a>, color: 'success.light', name: 'تماس تلفنی' },
];


function Layout() {

  const [landingPageData, setLandingPageData] = useState<any>({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (

    <ThemeProvider theme={theme}>
      <RTL>
        <div dir='rtl'>
          <Navigation />

          {/* {children} */}
          <Outlet />

          <Contact data={landingPageData.Contact} />
          <Footer />
          <Zoom
            key={154}
            in={true}
            timeout={1500}
            style={{
              transitionDelay: `${700}ms`,
            }}
            unmountOnExit
          >
            <SpeedDial
              ariaLabel="SpeedDial tooltip example"
              sx={{ position: 'fixed', bottom: 12, right: 16 }}
              //icon={<MapsUgcIcon />}
              // onClose={handleClose}
              // onOpen={handleOpen}
              hidden={true}
              open={true}
            >
              {actions.map((action) => (

                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={<span style={{ fontSize: '1.5em', fontFamily: 'web-yekan' }}> {action.name}</span>}
                  sx={{ bgcolor: action.color, color: 'white', width: 50, height: 50, lineHeight: 1 }}
                //tooltipOpen
                //onClick={handleClose}
                />



              ))}
            </SpeedDial>

          </Zoom>

        </div>
      </RTL>
    </ThemeProvider >
  );
  
}

export default Layout;
