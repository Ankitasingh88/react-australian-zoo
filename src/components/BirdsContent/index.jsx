import { useState } from "react";
import styles from "./BirdsContent.module.css";
import { getImageURL } from "../../utils/functions";
import AnimalModal from "../AnimalModal";

const BirdsContent = ({ userHasClicked, currentAnimal }) => {
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
    <div className={styles.birdsContent}>

      {!userHasClicked && 
       <div>
       <h1> Welcome To Bird's Page  🦜🦢🦅</h1>
        <p>Birds at Paradise's Zoo","Birds are among the most diverse and fascinating creatures on Earth, known for their bright plumage.</p>
        <p>Melodic calls, and incredible flight abilities. At Nature's Zoo, you can experience a wide variety of birds, from powerful raptors to colorful songbirds!!</p>
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
}
export default BirdsContent;