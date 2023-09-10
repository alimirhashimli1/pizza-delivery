import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      yoyo: 2
    }
  }
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{scale: 1.3, color: "#f8e112", originX: 0, fontWeight: "bold"}}
              transition={{type: "spring", stiffness: 300}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        // whileHover={{scale:1.1,
        //   textShadow: "0px 0px 8px rgb(255, 255, 255)",
        //   boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        //   }}
        //   transition={{duration:0.2}}
        variants={buttonVariants}
        whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;