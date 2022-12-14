import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";



const data = [
  {
    avatar: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  },
  {
    avatar: AVTR2,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  },
  {
    avatar: AVTR3,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  },
  {
    avatar: AVTR4,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at adipisci illo voluptatibus ex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        
        {data.map(({ avatar, name, review }, index) => {

          return (
            <article key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </article>
          );
        })}
      </div>

      
    </section>
  );
};

export default Testimonials;
