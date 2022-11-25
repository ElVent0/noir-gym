import {
  ModalBackdrop,
  ModalAddExerciseStyled,
  ModalButtons,
  ButtonModal,
  Title,
} from "./ModalDeleteExercise.styled";
import { RiDeleteBin5Fill } from "react-icons/ri";
import PropTypes from "prop-types";

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

ModalDeleteExercise.propTypes = {
  onCloseModal: PropTypes.func,
  onDelExerciseFromState: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};
