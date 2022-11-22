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
      exercisesType: "back",
      ...data,
    });
  };

  const onDeleteExercise = (id) => {
    handleDeleteExercise({
      exercisesType: "back",
      id,
    });
  };

  const onEditExercise = (data) => {
    handleEditExercise({
      exercisesType: "back",
      ...data,
    });
  };

  const onAddNewExecution = (data) => {
    console.log(1234, data);
    handleAddExecution({
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
      onDeleteExercise={onDeleteExercise}
      onChangeExercise={onEditExercise}
      onAddNewExecution={onAddNewExecution}
    />
  );
};

export default Legs;
