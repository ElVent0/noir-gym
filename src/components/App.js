import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { presetOne } from "../data/presets";
import { lazy } from "react";
import Set from "../pages/Set/Set";

const Content = lazy(() => import("../pages/Content/Content"));

const App = () => {
  const parsetData = () => {
    try {
      return JSON.parse(localStorage.getItem("exercisesSetForNoirGym"));
    } catch (e) {
      console.log(e);
    }
  };
  const initData = () => {
    if (parsetData()) {
      return parsetData();
    } else {
      return presetOne;
    }
  };

  const [exercises, setExercises] = useState(initData);

  useEffect(() => {
    localStorage.setItem("exercisesSetForNoirGym", JSON.stringify(exercises));
  }, [exercises]);

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

  const parts = [
    { name: "legs", path: "/legs", componentName: "Legs" },
    { name: "shoulders", path: "/shoulders", componentName: "Shoulders" },
    { name: "back", path: "/back", componentName: "Back" },
    { name: "triceps", path: "/triceps", componentName: "Triceps" },
    { name: "biceps", path: "/biceps", componentName: "Biceps" },
    { name: "chest", path: "/chest", componentName: "Chest" },
  ];

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Content exercises={exercises} />}></Route>
        {parts.map((item) => {
          return (
            <Route
              key={item.name}
              path={item.name}
              element={
                <Set
                  setType={item.name}
                  exercises={exercises[item.name]}
                  handleCreateExercise={handleCreateExercise}
                  handleDeleteExercise={handleDeleteExercise}
                  handleEditExercise={handleEditExercise}
                  handleAddExecution={handleAddExecution}
                />
              }
            ></Route>
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;

// ?????????????? ?????? ??????????????????
// ?????????????????? ?????????? ????????????
// ?????? ????????????????????????
