import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './container'
import Container2 from './Container2'
import Container3 from './Container3'
import Contain from './Contain'
import Text from './Text'
import Container4 from './Container4'
import Footer from './Footer'
const RMain = () => {
  return (
    <div style={{background:'#22303C',height:'120em'}}>
         <Container/>
         <Container2/>
         <Container3/>
         <Contain/>
         <Text/>
         <Container4/>
         <Footer/>
    </div>
  )
}

export default RMain