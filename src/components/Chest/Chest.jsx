// import { NavLink } from "react-router-dom";
import Set from "../Set/Set";

const Legs = ({ exercises, onOpenModalAddExercise, handleCreateExercise }) => {
  const onCreateExercise = (data) => {
    handleCreateExercise({
      exercisesType: "chest",
      ...data,
    });
  };

  return (
    <Set
      setType="chest"
      exercises={exercises}
      onOpenModalAddExercise={onOpenModalAddExercise}
      onCreateExercise={onCreateExercise}
    />
  );
};

export default Legs;
