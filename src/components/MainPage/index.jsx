import styles from "./MainPage.module.css";
import Sidebar from "../Sidebar";
import MainContent from "../MainContent";

const MainPage = ({ animalList, userHasClicked, handleUserClick, updateAnimal, currentAnimal }) => {
  return (
    <div className={styles.mainPage}>
      <Sidebar animalList={animalList} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} />
      <MainContent userHasClicked={userHasClicked} currentAnimal={currentAnimal} />
    </div>
  );
};

export default MainPage;