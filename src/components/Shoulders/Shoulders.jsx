import Set from "../Set/Set";
import PropTypes from "prop-types";

const Shoulders = ({
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

export default Shoulders;

Shoulders.propTypes = {
  exercises: PropTypes.array,
  onOpenModalAddExercise: PropTypes.func,
  handleCreateExercise: PropTypes.func,
  handleDeleteExercise: PropTypes.func,
  handleEditExercise: PropTypes.func,
  handleAddExecution: PropTypes.func,
};
