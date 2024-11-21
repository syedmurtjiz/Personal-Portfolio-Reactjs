import React from 'react'
import Info from '../Components/Info'
import Achivements from '../Components/Achivements'
import Skills from '../Components/Skills'
import RecentProject from '../Components/RecentProject'
import Educationwork from '../Components/Education-work'
import Header from '../Components/Header'
const Home = () => {
  return (
   <>
  <Header />
  <Info />
  <Achivements/>  
  <Skills/>
  <RecentProject/>
  <Educationwork/>

   </>
  )
}

export default Home
