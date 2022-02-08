import { useState, useEffect } from 'react';

import { Header } from '@components/header';
import { Features } from '../../components/features';
import { About } from '../../components/about';
import { Services } from '../../components/services';
// import { Gallery } from './components/gallery';
// import { Testimonials } from './components/testimonials';
// import { Contact } from '../components/contact';
// import { Footer } from '../components/footer';
import JsonData from 'src/services/data/data.json';

//import './home.css';

//import { Routes, Route, Outlet, Link } from "react-router-dom";
import { MainPages } from 'src/components/main-pages';


function Home() {

  const [landingPageData, setLandingPageData] = useState<any>({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <>
      <Header data={landingPageData.Header} />
      <MainPages parentId={9}></MainPages>
      <Features data={landingPageData.Features} />
      <Services data={landingPageData.Services} />
      <About data={landingPageData.About} />
    </>
  );
}

export default Home;
