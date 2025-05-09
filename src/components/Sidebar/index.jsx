import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ animalList, handleUserClick, updateAnimal }) => {
  const handleClick = (animalName) => {
    handleUserClick(animalName);
    updateAnimal(animalName);
  };

  return (
    <div className={styles.sidebar}>
      <ul>
        {Array.isArray(animalList) ? (
          animalList.map((animal, index) => (
            <li key={index} onClick={() => handleClick(animal.name)}>
              {animal.name}
            </li>
          ))
        ) : (
          <li>No animals to display</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;