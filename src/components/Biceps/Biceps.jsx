// import { NavLink } from "react-router-dom";
import Set from "../Set/Set";

const Legs = ({
  exercises,
  onOpenModalAddExercise,
  handleCreateExercise,
  handleDeleteExercise,
  handleEditExercise,
  handleAddExecution,
}) => {
  const onCreateExercise = (data) => {
    handleCreateExercise({
      exercisesType: "biceps",
      ...data,
    });
  };

  const onDeleteExercise = (id) => {
    handleDeleteExercise({
      exercisesType: "biceps",
      id,
    });
  };

  const onEditExercise = (data) => {
    handleEditExercise({
      exercisesType: "biceps",
      ...data,
    });
  };

  const onAddNewExecution = (data) => {
    console.log(1234, data);
    handleAddExecution({
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
      onDeleteExercise={onDeleteExercise}
      onChangeExercise={onEditExercise}
      onAddNewExecution={onAddNewExecution}
    />
  );
};

export default Legs;
