import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { SlSocialFacebook } from "react-icons/sl";
import { CgInstagram } from "react-icons/cg";
const Footer = () => {
  return ( 
    <div style={{
      background: 'black',
      height: '380px',
      width: '100%',
      padding: '30px 10%',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
      }}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/9594/9594791.png" 
            alt="Logo"
            height="60" 
            width="60" 
            style={{ marginBottom: '10px' }} 
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <SlSocialFacebook style={{ height: '30px', width: '30px', color: 'white' }} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <CgInstagram style={{ height: '30px', width: '30px', color: 'white' }} />
        </a>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="text-light fs-5" style={{ fontSize: '18px', marginBottom: '15px' }}>Page Links</h1>
        <ul style={{
          listStyleType: 'none',
          paddingLeft: '0',
          fontSize: '14px',
          marginTop: '0'
        }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }} onMouseOver={(e) => e.target.style.color = '#00bcd4'} onMouseOut={(e) => e.target.style.color = 'white'}>
              Home
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }} onMouseOver={(e) => e.target.style.color = '#00bcd4'} onMouseOut={(e) => e.target.style.color = 'white'}>
              About
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }} onMouseOver={(e) => e.target.style.color = '#00bcd4'} onMouseOut={(e) => e.target.style.color = 'white'}>
              What We Do
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }} onMouseOver={(e) => e.target.style.color = '#00bcd4'} onMouseOut={(e) => e.target.style.color = 'white'}>
              Courses
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p style={{
          fontSize: '14px',
          fontStyle: 'italic',
          marginTop: '0',
          padding: '0 10px'
        }}>
          "Empowering your learning journey, anytime, anywhere. Our mission is to make quality education accessible to all, breaking barriers and creating opportunities for growth."
        </p>
      </div>
    
    </div>
    
  )
}

export default Footer