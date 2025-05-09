import React from "react";
import BirdsContent from "../BirdsContent";
import Sidebar from "../Sidebar";
import styles from "./BirdsPage.module.css";

const BirdsPage = ({ animalDisplayed, userHasClicked, handleUserClick, updateAnimal, currentAnimal }) => {
  return (
    <>
      <div className={styles.birdsPage}>
        <Sidebar animalList={animalDisplayed} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} />
        <BirdsContent userHasClicked={userHasClicked} currentAnimal={currentAnimal} />
      </div>
    </>
  );
};

export default BirdsPage;