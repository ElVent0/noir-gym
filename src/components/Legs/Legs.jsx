import Set from "../Set/Set";
import PropTypes from "prop-types";

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

Legs.propTypes = {
  exercises: PropTypes.array,
  onOpenModalAddExercise: PropTypes.func,
  handleCreateExercise: PropTypes.func,
  handleDeleteExercise: PropTypes.func,
  handleEditExercise: PropTypes.func,
  handleAddExecution: PropTypes.func,
};
