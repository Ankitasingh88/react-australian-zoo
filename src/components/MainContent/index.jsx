import React, { useState } from "react";
import styles from "./MainContent.module.css";
import { getImageURL } from "../../utils/functions";
import AnimalModal from "../AnimalModal";

const MainContent = ({ userHasClicked, currentAnimal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = () => {
    console.log("Image not found!");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const animalGroupClick = () => {
    const groupUrl = `/${currentAnimal.group}`;
    window.location.href = groupUrl;
  };

  return (
    <div className={styles.mainContent}>
      {!userHasClicked && 
       <div>
      <h1>!!Welcome to Paradise Zoo🦘🐨🦜🐍!!</h1>
      <h2>"Experience the Wild Like Never Before!" </h2>
      <p>Step into Paradise's Zoo, where adventure meets education! Explore diverse habitats </p>
      <p>You will discover amazing animals, and learn about the importance of wildlife conservation. </p>
      <p>Whether you love majestic mammals, fascinating reptiles, or colorful birds, we have something for everyone! </p>
      <p>Visitors can learn about native and exotic animals while also understanding the importance of conservation. </p>
      <p>With its combination of thrilling experiences and dedication to animal welfare, Australia Zoo remains a top tourist destination and a legacy of Steve Irwin’s passion for wildlife.</p>
      </div>
      }

      {userHasClicked && currentAnimal && (
        <>
          <div className={styles.activeAnimal}>
            <img className={styles.contentImg} src={getImageURL(currentAnimal.bigimg)} alt={currentAnimal.img} onError={handleImageError} />
            <h1 className={styles.title}>{currentAnimal.name}</h1>
            <p className={styles.description}>{currentAnimal.description}</p>
            <p className={styles.food}>Usually eats: {currentAnimal.food}</p>
            <div className={styles.buttonContainer}>
              <button onClick={animalGroupClick}> {currentAnimal.group} </button>
              <button className={styles.linkButton} onClick={openModal}>
                Read More
              </button>
            </div>
          </div>
          {isModalOpen && <AnimalModal currentAnimal={currentAnimal} onClose={closeModal} />}
        </>
      )}
      {userHasClicked && !currentAnimal && <p>No animal details available.</p>}
    </div>
  );
};

export default MainContent;