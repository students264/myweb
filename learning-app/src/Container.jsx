import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {motion} from 'framer-motion'
const container = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'style={{background:'#22303C'}}>
               <img src="https://images.prismic.io/edapp-website/NzAzMTZiZWItYmEzOS00M2MwLWIyMjUtZTlhN2JkMTUxODQz_interactive-elearning-tools.jpg?auto=format%2Ccompress&q=15&w=768"className='img-fluid rounded mt-3 shadow-lg'alt='online learn'
               style={{ borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} />
            </div>
            <div className='col-lg-6'style={{background:'#22303C'}}>
            <motion.p
               className='fs-3 text-light mx-3 my-3'
               initial={{ opacity: 0, y: 20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
            >
            Online learning platforms can help keep students motivated with progress trackers.
            </motion.p>
                <motion.p className='fs-3 text-light mx-3 my-3'
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale:1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
                >
                    Learn our course in Free
                </motion.p>
                <motion.button
                className='btn btn-success btn-sm mt-3 mx-4'
                whileHover={{ scale: 1.1, backgroundColor: '#5cb85c', boxShadow: '0px 4px 15px rgba(0, 123, 0, 0.3)' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                Join With Us
                </motion.button>
            </div>
            
        </div>
    </div>
  )
}

export default container