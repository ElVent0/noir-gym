import Set from "../Set/Set";
import PropTypes from "prop-types";

const Back = ({
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

export default Back;

Back.propTypes = {
  exercises: PropTypes.array,
  onOpenModalAddExercise: PropTypes.func,
  handleCreateExercise: PropTypes.func,
  handleDeleteExercise: PropTypes.func,
  handleEditExercise: PropTypes.func,
  handleAddExecution: PropTypes.func,
};
