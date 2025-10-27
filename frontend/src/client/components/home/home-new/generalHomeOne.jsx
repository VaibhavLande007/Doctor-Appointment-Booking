import React, { useEffect } from 'react'
import Header from './header'
import HomeBanner from './homeBanner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionList from './sectionList';
import SectionSpeciality from './sectionSpeciality';
import SectionDoctor from './sectionDoctor';
import SectionService from './sectionService';
import SectionReason from './sectionReason';
import SectionBook from './sectionBook';
import SectionTestimonial from './sectionTestimonial';
import SectionApp from './sectionApp';
import SectionFaq from './sectionFaq';
import SectionArtical from './sectionArtical';
import Footer from './footer';


const GeneralHomeOne = () => {

  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };

  return (
    <div className='main-wrapper'>
      <Header />
      <HomeBanner />
      <SectionList />
      <SectionSpeciality />
      <SectionDoctor />
      <SectionService />
      <SectionReason />
      <SectionBook />
      <SectionTestimonial />
      <SectionFaq />
      <SectionApp />
      <SectionArtical />
      <Footer />
    </div>
  )
}

export default GeneralHomeOne
