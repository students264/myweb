import React from 'react'
import { motion } from 'framer-motion'
const Container2 = () => {
  return (
    <div className='container'>
        <div className="row">
        <div className='col-12' style={{background:'#22303C', fontFamily: 'Tahoma'}}>
            <h1 className='m-3 fs-3 text-light text-center'>About Us</h1>
            <motion.p 
        className="text-light mx-3 my-3 p-2 fs-5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
    >
      Welcome to Skillwise – Your Learning Journey, Anytime, Anywhere!
      At Skillwise, we believe that learning should be accessible, engaging, and tailored to each individual. 
      Whether you're looking to master a new skill, boost your career, or explore new passions, our platform empowers you to take control of your education with flexible,
      high-quality courses designed for learners at every stage.
        </motion.p>
        </div>
        </div>
    </div>
  )
}

export default Container2