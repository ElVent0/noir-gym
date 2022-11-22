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
      exercisesType: "triceps",
      ...data,
    });
  };

  const onDeleteExercise = (id) => {
    handleDeleteExercise({
      exercisesType: "triceps",
      id,
    });
  };

  const onEditExercise = (data) => {
    handleEditExercise({
      exercisesType: "triceps",
      ...data,
    });
  };

  const onAddNewExecution = (data) => {
    console.log(1234, data);
    handleAddExecution({
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
      onDeleteExercise={onDeleteExercise}
      onChangeExercise={onEditExercise}
      onAddNewExecution={onAddNewExecution}
    />
  );
};

export default Legs;
