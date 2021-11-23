import React from "react";



export default function Category() {
  const categoryInfo = [
    {
      title: "Ghosts",
      description: "Choose the ghosts, the scariest there are",
      img: "category1-img.png",
    },
    {
      title: "Pumpkins",
      description: "You look at the scariest pumpkins there is.",
      img: "category2-img.png",
    },
    {
      title: "Witch Hat",
      description: "Pick the most stylish witch hats out there.",
      img: "category3-img.png",
    },
  ];

  return (
    <section className="section container category" style={{ textAlign: "center" }}>
      <h2 className="section__title">
        Favorite Scare <br /> Category
      </h2>

      <div className="category__container conyainer grid">
        {categoryInfo.map(({ title, description, img }) => (
          <div className="category__data" key={title}>
            <img src={require("../assets/img/" + img).default} className="category__img" />
            <h3 className="category__title">{title}</h3>
            <p className="category__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
