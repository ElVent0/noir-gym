import Set from "../Set/Set";
import PropTypes from "prop-types";

const Triceps = ({
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

export default Triceps;

Triceps.propTypes = {
  exercises: PropTypes.array,
  onOpenModalAddExercise: PropTypes.func,
  handleCreateExercise: PropTypes.func,
  handleDeleteExercise: PropTypes.func,
  handleEditExercise: PropTypes.func,
  handleAddExecution: PropTypes.func,
};
