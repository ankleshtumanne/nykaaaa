import React from 'react'
import "./Home.css"
import ImageSlider from '../../Home_Components/ImageSlider';
import Part2 from '../../Home_Components/Part2';
import Part3 from '../../Home_Components/Part3';
import Part4 from '../../Home_Components/Part4';
import Reuse3Card from '../../Home_Components/Reuse3Card';
// import image1 from '../assets/image1.gif'
import image2 from '../assets/image2.gif'
// import image3 from '../assets/image3.webp'
// import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import image6 from '../assets/image6.webp'
// import image7 from '../assets/image7.gif'
import image8 from '../assets/image8.webp'
// import image9 from '../assets/image9.webp'
import Repeatpart3 from '../../Home_Components/Repeatpart3';
import bannerP4 from '../assets/bannerP4.webp'
import bannerP5 from '../assets/bannerP5.webp'
import { Link } from 'react-router-dom';
import hotdeal1 from '../assets/hotdeal1.gif' 
import hotdeal2 from '../assets/hotdeal2.webp'
import hotdeal3 from '../assets/hotdeal3.webp'
import girl1 from '../assets/girl1.avif'
import girl2 from '../assets/girl2.avif'
import girl3 from '../assets/girl3.avif'
// import p2 from '../assets/p2.webp'
// import p3 from '../assets/p3.webp'
import Part3Reuse from '../../Home_Components/Part3Reuse';
import Part3Reuse2 from '../../Home_Components/Part3Reuse2';
// import lastB1 from '../assets/lastB1.webp'
// import lastB2 from '../assets/lastB2.webp'
import Slidder21 from '../assets/Slidder21.avif';
import slidder22 from '../assets/slidder22.avif';
import slidder23 from '../assets/slidder23.avif'


function Home() {
  const images = [
  
    Slidder21,
    slidder22,
    slidder23,
    image6,
    image5,
    image2,
   
   
    image8,
    // image9,
  ];
  const images2=[
    Slidder21,
    slidder22,
    slidder23
  ];
  return (
    <div className="App">
    <ImageSlider images={images} />
    <Part2/>
    <Part3 />
    <Part4 h1Name={'-----REFER YOUR FRIENDS------'} image={bannerP4}/>
    <Reuse3Card name={'---HOT DEALS---'} image1={hotdeal1} image2={hotdeal2} image3={hotdeal3}/>
    <Repeatpart3/>
    <Part4 h1Name={`LA LA LOVE 18HR LIQUID LIPSTICKS ! NOW IN 6 NEW SHADES
      `} image={bannerP5}  W={{width:'70%'}}/>
    <Reuse3Card name={'----TOP PICKS OF THE WEEK----'} image1={girl1} image2={girl2} image3={girl3}/>
    <Part3Reuse/>
    <Part3Reuse2/>
    <ImageSlider images={images2}/>
    
  </div>
    
  )
}

export default Home