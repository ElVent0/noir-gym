// import { NavLink } from "react-router-dom";
import Set from "../Set/Set";

const Legs = ({ exercises, onOpenModalAddExercise, handleCreateExercise }) => {
  const onCreateExercise = (data) => {
    handleCreateExercise({
      exercisesType: "shoulders",
      ...data,
    });
  };

  return (
    <Set
      setType="shoulders"
      exercises={exercises}
      onOpenModalAddExercise={onOpenModalAddExercise}
      onCreateExercise={onCreateExercise}
    />
  );
};

export default Legs;
