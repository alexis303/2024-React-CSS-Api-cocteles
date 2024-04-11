import React from 'react'
// @ts-ignore
import image1 from '../../images/coctel1.jpg'
// @ts-ignore
import image2 from '../../images/coctel2.jpg'
// @ts-ignore
import image3 from '../../images/coctel3.jpg'
// @ts-ignore
import image4 from '../../images/coctel4.jpg'
// @ts-ignore
import image5 from '../../images/coctel5.jpg'


const Home = () => {
  


  return (
    <div className='containerHome'>
      
     
      <div className='containerHomeImagenParallax'>
        <div className='cardParallax'>
          <h1>Bar NombreBAR</h1>
          <h2>¿Qué deseas Beber?</h2>
          <h3>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</h3>

        </div>
      </div>
      <div style={{background:"linear-gradient(180deg, #1c0022 0%, rgba(12,12,12,1) 50%, #00131f 100%)"}}>
        <div className='containertitleCarouselHome'>
          <h1 className='titleCarouselHome'>Tragos Populares</h1>
        </div>
        <div className='containerMainHomeCarousel'>
          <div className='cardImageCarousel'><img src={image1} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image2} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image3} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image4} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image5} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image1} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image2} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image3} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image4} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
          <div className='cardImageCarousel'><img src={image5} alt="" style={{width:"100%", height:"100%", backgroundImage:"cover"}}/></div>
        </div>
      </div>

  
      <div className='containerMainInfoRedes'>
        <div className='containerInfoRedes'>
          <h3>Instagram</h3>
          <h3>Faceebook</h3>
          <h3>Twitter</h3>
        </div>
        <div className='containerInfoRedes'>
          <h3 style={{fontSize:"20px"}}>Derechos de autor</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Home