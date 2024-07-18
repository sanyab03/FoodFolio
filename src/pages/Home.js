import React from 'react'
import Content from '../components/Content'
import Problems from '../components/Problems'
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';


const Home = () => {
  return (
    <>
    <Content/>
    <Problems/>
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    </>
  )
}

export default Home