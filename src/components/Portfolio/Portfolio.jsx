import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  const githubLinks = [
    'https://github.com/Tanishagupta17/ecommerce-style-sphere',
    'https://github.com/Tanishagupta17/MailMorph',
    'https://github.com/Tanishagupta17/sorting-pathfinding-visualizer',
    'https://github.com/Tanishagupta17',
    'https://github.com/Tanishagupta17/webshooter',
  ];

  const handleClick = (index) => {
    window.open(githubLinks[index], '_blank');
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>

        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Projects</span>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img variants={fadeIn("up", "tween", 0.5, 0.6)} src="./stylesphere.png" alt="project" onClick={() => handleClick(0)} />
          <motion.img variants={fadeIn("up", "tween", 0.7, 0.6)} src="./mailmorph.png" alt="project" onClick={() => handleClick(1)} />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./visualizer.png" alt="project" onClick={() => handleClick(2)} />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./netflix.png" alt="project" onClick={() => handleClick(3)} />
          <motion.img variants={fadeIn("up", "tween", 0.9, 0.6)} src="./webshooter.png" alt="project" onClick={() => handleClick(4)} />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
