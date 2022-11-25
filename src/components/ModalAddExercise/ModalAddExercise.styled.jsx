import styled from "styled-components";

export const ModalBackdrop = styled.div`
  background: linear-gradient(90deg, #32323280 2.54%, #59595980 100%);
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4vw;
  z-index: 1004;
`;

export const ModalAddExerciseStyled = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  padding: 12vw 4vw 6vw 4vw;
  background: linear-gradient(135deg, #e2e2e2 0%, #ffffff 30%, #e2e2e2 100%);
  & > svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8vw;
    color: #8000ff;
    font-size: 22vw;
  }
`;

export const Title = styled.h2`
  margin-bottom: 6vw;
  text-align: center;
  font-size: 8vw;
  color: #5c5c5c;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8vw;
  margin-top: 8vw;
`;

export const ButtonModal = styled.button`
  text-align: center;
  width: 30vw;
  height: 12vw;
  font-size: 4.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
  &:nth-child(1) {
    background-color: transparent;
    border: 0.4vw solid #5c5c5cd6;
    color: #5c5c5c;
    &:hover,
    &:focus {
      color: #646464;
      border: 0.4vw solid #646464;
    }
  }
  &:nth-child(2) {
    background-color: #8000ff;
    color: #f9f9f9;
    &:hover,
    &:focus {
      background-color: #9830ff;
    }
  }
`;

export const AddExerciseForm = styled.form``;

export const AddExerciseInput = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4vw;
  background-color: transparent;
  border: 0.4vw solid #5c5c5c60;
  border-radius: 2vw;
  width: 68vw;
  font-size: 4.4vw;
  color: #5c5c5c;
  padding: 2vw 4vw;
  &::placeholder {
    color: #5c5c5c60;
  }
  :focus {
    outline: none;
    border: 0.4vw solid #5c5c5cd6;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: 0.4vw solid #5c5c5c60;
  border-radius: 2vw;
  width: 68vw;
  font-size: 4.3vw;
  color: #5c5c5c;
  padding: 2vw 4vw;
  margin-bottom: 0;
  resize: none;
  &::placeholder {
    color: #5c5c5c60;
  }
  :focus {
    outline: none;
    border: 0.4vw solid #5c5c5cd6;
  }
`;
