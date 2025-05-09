import MammalsContent from "../MammalsContent";
import Sidebar from "../Sidebar";
import styles from "./MammalsPage.module.css";

const MammalsPage = ({ animalDisplayed, userHasClicked, handleUserClick, updateAnimal, currentAnimal }) => {
  return (
    <>
      <div className={styles.mammalsPage}>
        <Sidebar animalList={animalDisplayed} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} />
        <MammalsContent userHasClicked={userHasClicked} currentAnimal={currentAnimal} />
      </div>
    </>
  );
};

export default MammalsPage;