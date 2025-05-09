import styles from "./ReptilesContent.module.css";
import { getImageURL } from "../../utils/functions";
import { useState } from "react";
import AnimalModal from "../AnimalModal";

const ReptilesContent = ({ userHasClicked, currentAnimal }) => {
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
    <div className={styles.reptilesContent}>
      {!userHasClicked && 
      <div>
      <h1> Welcome On Reptile's Page 🦎🐍🐢</h1>
      <p>Reptiles at Paradise’s Zoo have roamed the Earth for millions of years, adapting to extreme environments and developing incredible survival skills.</p>
      <p>At Pardise’s Zoo, you can witness some of the most powerful, unique, and rare reptiles, from giant lizards to majestic sea turtles!</p>
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

export default ReptilesContent;