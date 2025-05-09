import styles from "./AnimalModal.module.css";
import { getImageURL } from "../../utils/functions";

const AnimalModal = ({ currentAnimal, onClose }) => {
  const handleImageError = () => {
    console.log("Image not found!");
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <img className={styles.contentImg} src={getImageURL(currentAnimal.smallimg)} alt={currentAnimal.img} onError={handleImageError} />
        <h1 className={styles.title}>{currentAnimal.name}</h1>
        <p className={styles.description}>{currentAnimal.description}</p>
        <p className={styles.lifespan}> This Animal typically lives: {currentAnimal.lifespan}</p>
        <p className={styles.food}>Usually eats: {currentAnimal.food}</p>
        <p className={styles.length}>Length: {currentAnimal.length}</p>
        <p className={styles.weight}>Weight: {currentAnimal.weight}</p>
        <p className={styles.location}>Where can you find me? in {currentAnimal.location}</p>
        <button className={styles.closeButton2} onClick={onClose}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AnimalModal;