import React from 'react'
import './header.css'
import Logo from '../../assets/Funiro..svg'
import useState from '../../assets/Vector.svg'
import lostImage from '../../assets/Cart.svg'
import johnsonImg from '../../assets/Ellipse 2.svg'
import logo from '../../assets/Ellipse.svg'
import imglogo from '../../assets/Active.svg'
import imglogo2 from '../../assets/Ellipse 1.png'
import imglogo3 from '../../assets/Ellipse 2 (1).png'
import imglogo4 from '../../assets/Ellipse 3.svg'
import imgStrelka from '../../assets/Group 22.svg'
import imgFon from '../../assets/2563956 1.svg'
import imgFonBig from '../../assets/1528 1.svg'
import imgLeft from '../../assets/Rectangle 48.svg'
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='header_nav'>
                <div className='fonBig'>
                <p className='part1'>
            <ul className='header_menu'>
        <h1 className='header_title'>
            <img src={Logo} alt=''/>
            </h1>
                  <li className='header_item'>Products ⌄</li>
                <li className='header_item'>Rooms ⌄</li>
            <li className='header_item'>Inspirations</li>
        </ul>
    <p className='img_circule'>
        <img src={imglogo} alt='' className='bigCircule' />
            <img src={imglogo2} alt="" className='smallCircule1' />
        <img src={imglogo3} alt="" className='smallCircule2' />
    <img src={imglogo4} alt="" />
        </p>
     <h1 className='img_fon'>
        <img src={imgFon} alt="" />
             </h1>
    </p>
    </div>
        <p className='input'>
            <img src={logo} alt=''className='img_poisk' />  
                <h2 className='text_input'>Search for minimalist chair</h2> 
            </p>
                <img src={imgFonBig} alt="" className='img_fon_big' /> 
        <p className='modal_window'>
    <h1  className='text_title'>
       High-Quality Furniture Just For You
        </h1>    
    <h2 className='text_subtitle'>
    Our furniture is made from selected and best quality materials that are suitable for your dream home
    </h2>
        <button id='btn_window'>
        <h4 className='btn_text'>Shop Now</h4>
            </button>
    </p>
            <p className='part2'>
    <img src={useState} alt='' className='img_icon_heart' />  
        <img src={lostImage} alt='' className='img_icon_carzina' />
            <img src={johnsonImg} alt='' className='img_icon_profile' />
        <h1 className='imgStrelka'>
            <img src={imgStrelka} alt="" />
        </h1>
        <p className='mini_window'>
            <h1 className='mini_text'>Bohauss</h1>
            <h2 className='mini_subtext'>Luxury big sofa 2-seat</h2>
            <h3 className='mini_price'>Rp 17.000.000</h3>
        </p>
    <img src={imgLeft} alt="" className='img_left' />
            </p>
            
            </nav>
        </div>
    </header>

  )
}

export default Header;