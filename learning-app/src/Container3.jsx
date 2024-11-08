import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {motion} from 'framer-motion'
const Container3 = () => {
  return (
    <div className='container'>
        <div className="row">
        <div className='col-lg-6' style={{background:'#22303C'}}>
            <img src="https://t4.ftcdn.net/jpg/02/87/66/91/360_F_287669118_j5dQdApPRxoXuyXMrrGavM7uTydyh1AG.jpg"
            className='img-fluid rounded shadow-lg'
            style={{ borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}/>
        </div>
        <div className='col-lg-6' style={{background:'#22303C'}}>
            <h1 className='m-3 fs-3 text-light text-center'style={{fontFamily:'Tahoma'}}>Why choose Us?</h1>
            <motion.p 
        className="text-light mx-3 my-3 p-2 fs-5"
        style={{fontFamily:'Tahoma'}}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
    >
Innovative Approach: We’re constantly evolving to provide the best learning experience, incorporating new technologies and methods to keep you ahead of the curve.
Affordable Education: We believe that high-quality learning should be accessible to everyone, which is why we offer competitive pricing and flexible payment options.
Success-Driven: Our platform is designed to help you achieve real, measurable outcomes—whether it’s mastering a new skill, earning a certification, or advancing in your career.
        </motion.p>
        </div>
        </div>
    </div>
  )
}

export default Container3