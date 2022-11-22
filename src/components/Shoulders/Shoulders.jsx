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
      exercisesType: "shoulders",
      ...data,
    });
  };

  const onDeleteExercise = (id) => {
    handleDeleteExercise({
      exercisesType: "shoulders",
      id,
    });
  };

  const onEditExercise = (data) => {
    handleEditExercise({
      exercisesType: "shoulders",
      ...data,
    });
  };

  const onAddNewExecution = (data) => {
    console.log(1234, data);
    handleAddExecution({
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
      onDeleteExercise={onDeleteExercise}
      onChangeExercise={onEditExercise}
      onAddNewExecution={onAddNewExecution}
    />
  );
};

export default Legs;
