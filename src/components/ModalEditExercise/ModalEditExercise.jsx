import {
  ModalBackdrop,
  ModalAddExerciseStyled,
  ModalButtons,
  ButtonModal,
  AddExerciseForm,
  AddExerciseInput,
  Textarea,
  Title,
} from "./ModalEditExercise.styled";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import PropTypes from "prop-types";

const ModalEditExercise = ({
  onCloseModal,
  onEditExerciseInState,
  name: nameOfExercise,
  description: descriptionOfExercise,
  id,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onChangeInput = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onEditExerciseInState({ id, name, description });
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <ModalBackdrop>
      <ModalAddExerciseStyled>
        <FiEdit />
        <Title>Редагувати</Title>
        <AddExerciseForm onSubmit={onFormSubmit}>
          <AddExerciseInput
            type="text"
            name="name"
            placeholder={nameOfExercise}
            onChange={onChangeInput}
            value={name}
            autocomplete="off"
            autoFocus
          />
          <Textarea
            type="text"
            name="description"
            placeholder={descriptionOfExercise}
            onChange={onChangeInput}
            value={description}
            rows="4"
            autocomplete="off"
          />
          <ModalButtons>
            <ButtonModal type="reset" onClick={handleCloseModal}>
              Скасувати
            </ButtonModal>
            <ButtonModal type="submit" onClick={onFormSubmit}>
              Змінити
            </ButtonModal>
          </ModalButtons>
        </AddExerciseForm>
      </ModalAddExerciseStyled>
    </ModalBackdrop>
  );
};

export default ModalEditExercise;

ModalEditExercise.propTypes = {
  onCloseModal: PropTypes.func,
  onEditExerciseInState: PropTypes.func,
  name: PropTypes.func,
  description: PropTypes.func,
  id: PropTypes.func,
};
