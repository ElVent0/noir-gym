import Content from "./Content/Content";
import Legs from "./Legs/Legs";
import Shoulders from "./Shoulders/Shoulders";
import Back from "./Back/Back";
import Triceps from "./Triceps/Triceps";
import Biceps from "./Biceps/Biceps";
import Chest from "./Chest/Chest";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [exercises, setExercises] = useState({
    legs: [
      {
        exerciseName: "Жим лежачи",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          // { setsNumber: 4, repetitions: 8, weight: "20" },
          // { setsNumber: 4, repetitions: 10, weight: "25" },
          // { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        exerciseName: "Гантелі на біцепс",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        exerciseName: "Т-гриф",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        exerciseName: "Жим Арнольда",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
    ],
    shoulders: [],
    back: [],
    triceps: [],
    biceps: [],
    chest: [],
  });

  const handleCreateExercise = (data) => {
    console.log("---------------------------------------", data);

    if (data.name !== "") {
      switch (data.exercisesType) {
        case "legs":
          setExercises((prevState) => ({
            ...prevState,
            legs: [
              {
                exerciseName: data.name,
                description: data.description,
                exerciseDescription: [],
              },
              ...prevState.legs,
            ],
          }));
          break;
        case "back":
          setExercises((prevState) => ({
            ...prevState,
            back: [
              {
                exerciseName: data.name,
                description: data.description,
                exerciseDescription: [],
              },
              ...prevState.back,
            ],
          }));
          break;
        case "biceps":
          setExercises((prevState) => ({
            ...prevState,
            biceps: [
              {
                exerciseName: data.name,
                description: data.description,
                exerciseDescription: [],
              },
              ...prevState.biceps,
            ],
          }));
          break;
        case "triceps":
          setExercises((prevState) => ({
            ...prevState,
            triceps: [
              {
                exerciseName: data.name,
                description: data.description,
                exerciseDescription: [],
              },
              ...prevState.triceps,
            ],
          }));
          break;
        case "chest":
          setExercises((prevState) => ({
            ...prevState,
            chest: [
              {
                exerciseName: data.name,
                description: data.description,
                exerciseDescription: [],
              },
              ...prevState.chest,
            ],
          }));
          break;
        case "shoulders":
          setExercises((prevState) => ({
            ...prevState,
            shoulders: [
              {
                exerciseName: data.name,
                description: data.description,
                exerciseDescription: [],
              },
              ...prevState.shoulders,
            ],
          }));
          break;
        default:
          console.log("Wrong case");
      }
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content exercises={exercises} />}></Route>
        <Route
          path="/legs"
          element={
            <Legs
              exercises={exercises.legs}
              handleCreateExercise={handleCreateExercise}
              // onOpenModalAddExercise={onOpenModalAddExercise}
            />
          }
        ></Route>
        <Route
          path="/shoulders"
          element={
            <Shoulders
              exercises={exercises.shoulders}
              handleCreateExercise={handleCreateExercise}
              // onOpenModalAddExercise={onOpenModalAddExercise}
            />
          }
        ></Route>
        <Route
          path="/back"
          element={
            <Back
              exercises={exercises.back}
              handleCreateExercise={handleCreateExercise}
              // onOpenModalAddExercise={onOpenModalAddExercise}
            />
          }
        ></Route>
        <Route
          path="/triceps"
          element={
            <Triceps
              exercises={exercises.triceps}
              handleCreateExercise={handleCreateExercise}
              // onOpenModalAddExercise={onOpenModalAddExercise}
            />
          }
        ></Route>
        <Route
          path="/biceps"
          element={
            <Biceps
              exercises={exercises.biceps}
              handleCreateExercise={handleCreateExercise}
              // onOpenModalAddExercise={onOpenModalAddExercise}
            />
          }
        ></Route>
        <Route
          path="/chest"
          element={
            <Chest
              exercises={exercises.chest}
              handleCreateExercise={handleCreateExercise}
              // onOpenModalAddExercise={onOpenModalAddExercise}
            />
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
