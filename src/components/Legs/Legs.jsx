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
      exercisesType: "legs",
      ...data,
    });
  };

  const onDeleteExercise = (id) => {
    handleDeleteExercise({
      exercisesType: "legs",
      id,
    });
  };

  const onEditExercise = (data) => {
    handleEditExercise({
      exercisesType: "legs",
      ...data,
    });
  };

  const onAddNewExecution = (data) => {
    console.log(1234, data);
    handleAddExecution({
      exercisesType: "legs",
      ...data,
    });
  };

  return (
    <Set
      setType="legs"
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
