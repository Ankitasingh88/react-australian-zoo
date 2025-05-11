import React from "react";
import styles from "./MammalsContent.module.css";
import { getImageURL } from "../../utils/functions";
import { useState } from "react";
import AnimalModal from "../AnimalModal";

const MammalsContent = ({ userHasClicked, currentAnimal }) => {
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
    <div className={styles.mammalsContent}>
       
      {!userHasClicked &&
      <div>
      <h1> Welcome To Mammal's Page 🦘🐨🐻</h1> 
        <p>"Mammals are some of the most fascinating creatures on Earth, known for their warm-blooded nature, fur or hair, and ability to nurse their young. </p>
        <p> At Paradise's Zoo, we house a diverse collection of mammals, from playful marsupials to powerful predators!"</p>
      </div>}

      {userHasClicked && currentAnimal && (
        
        <>
          <div className={styles.activeAnimal}>
            <img className={styles.contentImg} src={getImageURL(currentAnimal.bigimg)} alt={currentAnimal.img} onError={handleImageError} />
            <h1 className={styles.title}> {currentAnimal.name}</h1>
            <p className={styles.description}> {currentAnimal.description}</p>
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

export default MammalsContent;