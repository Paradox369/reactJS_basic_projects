import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
            deserunt facilis cumque voluptates, blanditiis aperiam fuga
            necessitatibus dolores, sapiente itaque nam! Vitae, enim rerum cum
            doloremque obcaecati sit rem totam molestiae quasi! Aliquid culpa
            temporibus architecto optio perferendis natus cum soluta in?
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
