import React from 'react'
import Content from '../components/Content'
// import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SurplusSection from '../components/SurplusSection';
import AboutSection from '../components/AboutSection';


const Home = () => {
  return (
    <>
    <Content/>
    <AboutSection/>
    <SurplusSection/>
    <HowItWorksSection />
    {/* <FeaturesSection /> */}
    
    </>
  )
}

export default Home