import {
  ModalBackdrop,
  ModalAddExerciseStyled,
  ModalButtons,
  ButtonModal,
  AddExerciseForm,
  AddExerciseInput,
} from "./ModalAddExercise.styled";
import { useState, useEffect } from "react";

const ModalAddExercise = ({ onCloseModal, onAddExerciseToState }) => {
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
    onAddExerciseToState({ name, description });
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <ModalBackdrop>
      <ModalAddExerciseStyled>
        <AddExerciseForm onSubmit={onFormSubmit}>
          <AddExerciseInput
            type="text"
            name="name"
            placeholder="Назва вправи"
            onChange={onChangeInput}
            value={name}
            autocomplete="off"
          />
          <AddExerciseInput
            type="text"
            name="description"
            placeholder="Коментар (не обов'язково)"
            onChange={onChangeInput}
            value={description}
            autocomplete="off"
          />
          <ModalButtons>
            <ButtonModal type="reset" onClick={handleCloseModal}>
              Скасувати
            </ButtonModal>
            <ButtonModal type="submit" onClick={onFormSubmit}>
              Додати
            </ButtonModal>
          </ModalButtons>
        </AddExerciseForm>
      </ModalAddExerciseStyled>
    </ModalBackdrop>
  );
};

export default ModalAddExercise;
