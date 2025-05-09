import React from "react";
import ReptilesContent from "../ReptilesContent";
import Sidebar from "../Sidebar";
import styles from "./ReptilesPage.module.css";

const ReptilesPage = ({ animalDisplayed, userHasClicked, handleUserClick, updateAnimal, currentAnimal }) => {
  return (
    <>
      <div className={styles.reptilesPage}>
        <Sidebar animalList={animalDisplayed} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} />
        <ReptilesContent userHasClicked={userHasClicked} currentAnimal={currentAnimal} />
      </div>
    </>
  );
};

export default ReptilesPage;