import React, { useState } from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(2);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((values, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {values}
          </li>
        ))}
        {/*  */}
      </ul>
    </div>
  );
}
export default Categories;
