import {
  ModalBackdrop,
  ModalAddExerciseStyled,
  ModalButtons,
  ButtonModal,
  AddExerciseForm,
  AddExerciseInput,
  Textarea,
  Title,
} from "./ModalAddExercise.styled";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useState } from "react";
import { nanoid } from "nanoid";

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
    const id = nanoid(10);
    onAddExerciseToState({ id, name, description });
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <ModalBackdrop>
      <ModalAddExerciseStyled>
        <GiWeightLiftingUp />
        <Title>Нова вправа</Title>
        <AddExerciseForm onSubmit={onFormSubmit}>
          <AddExerciseInput
            type="text"
            name="name"
            placeholder="Назва вправи"
            onChange={onChangeInput}
            value={name}
            autocomplete="off"
            autoFocus
          />
          <Textarea
            type="text"
            name="description"
            placeholder="Коментар (не обов'язково)"
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
              Додати
            </ButtonModal>
          </ModalButtons>
        </AddExerciseForm>
      </ModalAddExerciseStyled>
    </ModalBackdrop>
  );
};

export default ModalAddExercise;
