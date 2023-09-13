import React from 'react'
import {motion, useCycle} from "framer-motion"


const loaderVariants = {
    animationOne: {
        x: [-20, 20],
        y: [0, -30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    },
    animationTwo: {
        y: [-300, -330],
        x:[100,60],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    },
    animationThree: {
        y: [0, -40],
        x: 0,
        transition: {
            y: {
                yoyo: Infinity,
                duration: 0.25,
                ease: "easeOut"
            }
        }
    }
}

const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")
  return (
    <>
        <motion.div className='loader'
        variants={loaderVariants}
        animate="animationOne"
        >

        </motion.div>
        <motion.div className='loader'
        variants={loaderVariants}
        animate="animationTwo"
        >

        </motion.div>
        <motion.div className='loader'
        variants={loaderVariants}
        animate="animationThree"
        >

        </motion.div>
        <div onClick={() => cycleAnimation()}></div>
    </>
  )
}

export default Loader