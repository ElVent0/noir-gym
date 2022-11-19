// import { NavLink } from "react-router-dom";
import Set from "../Set/Set";

const Legs = ({ exercises, onOpenModalAddExercise, handleCreateExercise }) => {
  const onCreateExercise = (data) => {
    handleCreateExercise({
      exercisesType: "triceps",
      ...data,
    });
  };

  return (
    <Set
      setType="triceps"
      exercises={exercises}
      onOpenModalAddExercise={onOpenModalAddExercise}
      onCreateExercise={onCreateExercise}
    />
  );
};

export default Legs;
