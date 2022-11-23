import {
  ModalBackdrop,
  ModalAddExerciseStyled,
  ModalButtons,
  ButtonModal,
  Title,
} from "./ModalDeleteExercise.styled";
// import { useState, useEffect } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ModalDeleteExercise = ({
  onCloseModal,
  onDelExerciseFromState,
  id,
  name,
}) => {
  const handleDeleteExercise = () => {
    onDelExerciseFromState(id);
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  return (
    <ModalBackdrop>
      <ModalAddExerciseStyled>
        <RiDeleteBin5Fill />
        <Title>
          Ви дійсно бажаєте видалити вправу: <b>"{name}"</b>?
        </Title>
        <ModalButtons>
          <ButtonModal type="reset" onClick={handleCloseModal}>
            Скасувати
          </ButtonModal>
          <ButtonModal type="submit" onClick={handleDeleteExercise}>
            Видалити
          </ButtonModal>
        </ModalButtons>
      </ModalAddExerciseStyled>
    </ModalBackdrop>
  );
};

export default ModalDeleteExercise;
