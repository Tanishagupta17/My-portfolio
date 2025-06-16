import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Tanisha Gupta.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            Software Engineer{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./photo12 (1).png" alt="" 
           />
        </motion.div>


        <div className={css.lowerElements}>
        <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
        <a href="https://www.linkedin.com/in/tanishagupta17/" className="secondaryText">
  <img src='/linked in.png' alt="LinkedIn" className="icon" style={{ width: '32px', height: '32px', marginRight:'2rem'}} />
</a>
<a href="https://github.com/Tanishagupta17" className="secondaryText">
  <img src='/github.svg' alt="GitHub" className="icon" style={{ width: '32px', height: '32px', marginRight:'2rem'}} />
</a>
<a href="https://leetcode.com/u/tanishag111/" className="secondaryText">
  <img src='/leetcode.svg' alt="LeetCode" className="icon" style={{ width: '32px', height: '32px',marginRight:'2rem' }} />
</a>

</motion.div>



</div>

      </motion.div>
    </section>
  );
};

export default Hero;
