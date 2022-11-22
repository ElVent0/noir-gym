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
        id: "1234567890",
        exerciseName: "Жим лежачи",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20", date: "24.11" },
          { setsNumber: 4, repetitions: 10, weight: "25", date: "22.11" },
          { setsNumber: 4, repetitions: 12, weight: "30", date: "20.11" },
        ],
      },
      {
        id: "1234567891",
        exerciseName: "Гантелі на біцепс",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          // { setsNumber: 4, repetitions: 8, weight: "20" },
          // { setsNumber: 4, repetitions: 10, weight: "25" },
          // { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        id: "1234567892",
        exerciseName: "Т-гриф",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          // { setsNumber: 4, repetitions: 8, weight: "20" },
          // { setsNumber: 4, repetitions: 10, weight: "25" },
          // { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        id: "1234567893",
        exerciseName: "Жим Арнольда",
        description:
          "Кілька слів для опису вправи, кілька слів для опису вправи",
        exerciseDescription: [
          // { setsNumber: 4, repetitions: 8, weight: "20" },
          // { setsNumber: 4, repetitions: 10, weight: "25" },
          // { setsNumber: 4, repetitions: 12, weight: "30" },
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
    if (data.name !== "") {
      setExercises((prevState) => ({
        ...prevState,
        [data.exercisesType]: [
          {
            id: data.id,
            exerciseName: data.name,
            description: data.description,
            exerciseDescription: [],
          },
          ...prevState[data.exercisesType],
        ],
      }));
    }
  };

  const handleDeleteExercise = ({ exercisesType, id }) => {
    setExercises((prevState) => ({
      ...prevState,
      [exercisesType]: [
        ...prevState[exercisesType].filter((item) => item.id !== id),
      ],
    }));
  };

  const handleEditExercise = ({ exercisesType, id, name, description }) => {
    setExercises((prevState) => ({
      ...prevState,
      [exercisesType]: [
        ...prevState[exercisesType]
          .filter((item) => item.id !== id)
          .slice(
            0,
            prevState[exercisesType].findIndex((item) => item.id === id)
          ),
        {
          id: id,
          exerciseName: name,
          description: description,
          exerciseDescription: [
            ...prevState[exercisesType][
              prevState[exercisesType].findIndex((item) => item.id === id)
            ].exerciseDescription,
          ],
        },
        ...prevState[exercisesType]
          .filter((item) => item.id !== id)
          .slice(
            prevState[exercisesType].findIndex((item) => item.id === id),
            prevState[exercisesType].length
          ),
      ],
    }));
  };

  const handleAddExecution = ({
    exercisesType,
    weight,
    approaches,
    repetitions,
    date,
    id,
  }) => {
    // console.log(data);
    console.log(
      "tratata",
      exercises[exercisesType].filter((item) => item.id === id)
    );
    setExercises((prevState) => ({
      ...prevState,
      [exercisesType]: [
        ...prevState[exercisesType]
          .filter((item) => item.id !== id)
          .slice(
            0,
            prevState[exercisesType].findIndex((item) => item.id === id)
          ),
        {
          // ...prevState[exercisesType].filter((item) => item.id === id),
          // exerciseDescription: [
          //   ...prevState[exercisesType][
          //     prevState[exercisesType].findIndex((item) => item.id === id)
          //   ].exerciseDescription,
          //   { setsNumber: 3, repetitions: 3, weight: "3" },
          //   // { setsNumber: 3, repetitions: 3, weight: "3" },
          //   // { setsNumber: 3, repetitions: 3, weight: "3" },
          // ],

          id: id,
          exerciseName: prevState[exercisesType].filter(
            (item) => item.id === id
          )[0].exerciseName,
          description: prevState[exercisesType].filter(
            (item) => item.id === id
          )[0].description,
          exerciseDescription: [
            {
              setsNumber: approaches,
              repetitions: repetitions,
              weight: weight,
              date: date,
            },
            ...prevState[exercisesType][
              prevState[exercisesType].findIndex((item) => item.id === id)
            ].exerciseDescription.slice(0, 2),
          ],
        },
        ...prevState[exercisesType]
          .filter((item) => item.id !== id)
          .slice(
            prevState[exercisesType].findIndex((item) => item.id === id),
            prevState[exercisesType].length
          ),
      ],
    }));
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
              handleDeleteExercise={handleDeleteExercise}
              handleEditExercise={handleEditExercise}
              handleAddExecution={handleAddExecution}
            />
          }
        ></Route>
        <Route
          path="/shoulders"
          element={
            <Shoulders
              exercises={exercises.shoulders}
              handleCreateExercise={handleCreateExercise}
              handleDeleteExercise={handleDeleteExercise}
              handleEditExercise={handleEditExercise}
              handleAddExecution={handleAddExecution}
            />
          }
        ></Route>
        <Route
          path="/back"
          element={
            <Back
              exercises={exercises.back}
              handleCreateExercise={handleCreateExercise}
              handleDeleteExercise={handleDeleteExercise}
              handleEditExercise={handleEditExercise}
              handleAddExecution={handleAddExecution}
            />
          }
        ></Route>
        <Route
          path="/triceps"
          element={
            <Triceps
              exercises={exercises.triceps}
              handleCreateExercise={handleCreateExercise}
              handleDeleteExercise={handleDeleteExercise}
              handleEditExercise={handleEditExercise}
              handleAddExecution={handleAddExecution}
            />
          }
        ></Route>
        <Route
          path="/biceps"
          element={
            <Biceps
              exercises={exercises.biceps}
              handleCreateExercise={handleCreateExercise}
              handleDeleteExercise={handleDeleteExercise}
              handleEditExercise={handleEditExercise}
              handleAddExecution={handleAddExecution}
            />
          }
        ></Route>
        <Route
          path="/chest"
          element={
            <Chest
              exercises={exercises.chest}
              handleCreateExercise={handleCreateExercise}
              handleDeleteExercise={handleDeleteExercise}
              handleEditExercise={handleEditExercise}
              handleAddExecution={handleAddExecution}
            />
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
