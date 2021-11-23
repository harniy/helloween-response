import React from "react";

export default function Trick() {
  const trickInfo = [
    {
      title: "Toffee",
      subtitle: "Candy",
      price: "$11.99",
      image: "trick-treat1-img.png",
    },
    {
      title: "Bone",
      subtitle: "Accessory",
      price: "$8.99",
      image: "trick-treat2-img.png",
    },
    {
      title: "Scarecrow",
      subtitle: "Accessory",
      price: "$15.99",
      image: "trick-treat3-img.png",
    },
    {
      title: "Candy Cane",
      subtitle: "Candy",
      price: "$7.99",
      image: "trick-treat4-img.png",
    },
    {
      title: "Pumpkin",
      subtitle: "Candy",
      price: "$19.99",
      image: "trick-treat5-img.png",
    },
    {
      title: "Ghost",
      subtitle: "Accessory",
      price: "$17.99",
      image: "trick-treat6-img.png",
    },
  ];
  return (
    <section className="section trick" id="trick">
      <h2 className="section__title">Trick or Treat</h2>

      <div className="trick__container container grid">
        {trickInfo.map(({ title, subtitle, price, image }) => (
          <div className="trick__content" key={title}>
            <img src={require(`../assets/img/${image}`).default} alt="" className="trick__img" />
            <h3 className="trick__title">{title}</h3>
            <span className="trick__subtitle">{subtitle}</span>
            <span className="trick__price">{price}</span>
            <button className="button trick__button">
              <box-icon style={{width: '20px'}} name="cart-alt" color="white" className="trick__icon" ></box-icon>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
