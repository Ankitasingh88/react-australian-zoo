import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import MammalsPage from "./components/MammalsPage";
import BirdsPage from "./components/BirdsPage";
import ReptilesPage from "./components/ReptilesPage";
import Footer from "./components/Footer";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
import { arrayOfAnimals, arrayOfBirds, arrayOfMammals, arrayOfReptiles } from "./data/data";

function App() {
  const [animalDisplayed, setAnimalDisplayed] = useState(arrayOfAnimals);
  const [userHasClicked, setUserHasClicked] = useState(null);
  const [currentAnimal, setCurrentAnimal] = useState(null);

  const handleUserClick = (animalName) => {
    setUserHasClicked((prevState) => (prevState === animalName ? null : animalName));
  };

  const updateAnimal = (animalName) => {
    const selectedAnimal = animalDisplayed.find((animal) => animal.name === animalName);
    setCurrentAnimal(selectedAnimal);
  };

  return (
    <>
      <Header img={"logo.png"} />
      <Routes>
        <Route element={<Layout setUserHasClicked={setUserHasClicked} />}>
          <Route path="/" element={<MainPage animalList={animalDisplayed} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} currentAnimal={currentAnimal} />} />
          <Route path="/mammals" element={<MammalsPage animalDisplayed={arrayOfMammals} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} currentAnimal={currentAnimal} />} />
          <Route path="/reptiles" element={<ReptilesPage animalDisplayed={arrayOfReptiles} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} currentAnimal={currentAnimal} />} />
          <Route path="/birds" element={<BirdsPage animalDisplayed={arrayOfBirds} userHasClicked={userHasClicked} handleUserClick={handleUserClick} updateAnimal={updateAnimal} currentAnimal={currentAnimal} />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
