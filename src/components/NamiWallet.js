import "./NamiWallet.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function NamiWallet() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="wallet">
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default NamiWallet;
