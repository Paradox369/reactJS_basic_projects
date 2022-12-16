import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import Buttons from "./Buttons";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";

          if (personIndex === index) position = "activeSlide";
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          )
            position = "lastSlide";

          return (
            <article className={position} key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title"> {title} </p>
              <p className="text"> {quote} </p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <Buttons
          swipeLeft={() => setIndex(index - 1)}
          swipeRight={() => setIndex(index + 1)}
        />
      </div>
    </section>
  );
}

export default App;
