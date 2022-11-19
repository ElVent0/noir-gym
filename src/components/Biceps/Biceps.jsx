// import { NavLink } from "react-router-dom";
import Set from "../Set/Set";

const Legs = ({ exercises, onOpenModalAddExercise, handleCreateExercise }) => {
  const onCreateExercise = (data) => {
    handleCreateExercise({
      exercisesType: "biceps",
      ...data,
    });
  };

  return (
    <Set
      setType="biceps"
      exercises={exercises}
      onOpenModalAddExercise={onOpenModalAddExercise}
      onCreateExercise={onCreateExercise}
    />
  );
};

export default Legs;
