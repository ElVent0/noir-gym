// import { NavLink } from "react-router-dom";
import Set from "../Set/Set";

const Legs = ({ exercises, onOpenModalAddExercise, handleCreateExercise }) => {
  const onCreateExercise = (data) => {
    handleCreateExercise({
      exercisesType: "back",
      ...data,
    });
  };

  return (
    <Set
      setType="back"
      exercises={exercises}
      onOpenModalAddExercise={onOpenModalAddExercise}
      onCreateExercise={onCreateExercise}
    />
  );
};

export default Legs;
