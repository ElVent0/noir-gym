import {
  ModalBackdrop,
  ModalAddExerciseStyled,
  ModalButtons,
  ButtonModal,
  AddExerciseForm,
  Paragraph,
  List,
  Item,
  Button,
  ActiveButton,
  Title,
} from "./ModalAddExecution.styled";
import { FaDumbbell } from "react-icons/fa";
import { useState, useEffect } from "react";

const ModalAddExercise = ({ onCloseModal, onAddExecutionToState, id }) => {
  // console.log("id", id);
  const [executionData, setExecutionData] = useState({
    weight: null,
    approaches: null,
    repetitions: null,
    date: null,
    id,
  });

  const dateOfToday = `${new Date().getDate()}.${new Date().getMonth() + 1}`;

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      executionData.weight !== null &&
      executionData.approaches !== null &&
      executionData.repetitions !== null
    ) {
      // console.log(executionData);
      onAddExecutionToState({ ...executionData, date: dateOfToday });
    } else {
      alert("Недостатньо введених даних");
    }
    setExecutionData({
      weight: null,
      approaches: null,
      repetitions: null,
      date: null,
      id,
    });
  };

  const onUpdateWeigth = (e) => {
    setExecutionData((prevState) => {
      return { ...prevState, weight: Number(e.target.name) };
    });
    // console.log(executionData);
  };

  const onUpdateApproaches = (e) => {
    setExecutionData((prevState) => {
      return { ...prevState, approaches: Number(e.target.name) };
    });
    // console.log(executionData);
  };

  const onUpdateRepetitions = (e) => {
    setExecutionData((prevState) => {
      return { ...prevState, repetitions: Number(e.target.name) };
    });
    // console.log(executionData);
  };

  const handleCloseModal = () => {
    onCloseModal();
  };

  const weightOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25,
    30, 35, 40, 45, 50, 55, 60, 65, 70,
  ];

  const approachesOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  const repetitionsOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <ModalBackdrop>
      <ModalAddExerciseStyled>
        <FaDumbbell />
        {/* <Title>Скільки взяв?</Title> */}
        <AddExerciseForm onSubmit={onFormSubmit}>
          <Paragraph>Яка вага?</Paragraph>
          <List>
            {weightOptions.map((item) => {
              if (executionData.weight !== item) {
                // console.log(1, executionData.weight, item);
                return (
                  <Item key={item}>
                    <Button type="button" name={item} onClick={onUpdateWeigth}>
                      {item}
                    </Button>
                  </Item>
                );
              } else if (executionData.weight === item) {
                // console.log(2, executionData.weight, item);
                return (
                  <Item key={item}>
                    <ActiveButton
                      type="button"
                      name={item}
                      onClick={onUpdateWeigth}
                    >
                      {item}
                    </ActiveButton>
                  </Item>
                );
              }
            })}
          </List>
          <Paragraph>Скільки підходів?</Paragraph>
          <List>
            {approachesOptions.map((item) => {
              if (executionData.approaches !== item) {
                // console.log(1, executionData.approaches, item);
                return (
                  <Item key={item}>
                    <Button
                      type="button"
                      name={item}
                      onClick={onUpdateApproaches}
                    >
                      {item}
                    </Button>
                  </Item>
                );
              } else if (executionData.approaches === item) {
                // console.log(2, executionData.approaches, item);
                return (
                  <Item key={item}>
                    <ActiveButton
                      type="button"
                      name={item}
                      onClick={onUpdateApproaches}
                    >
                      {item}
                    </ActiveButton>
                  </Item>
                );
              }
            })}
          </List>
          <Paragraph>Скільки повторень?</Paragraph>
          <List>
            {repetitionsOptions.map((item) => {
              if (executionData.repetitions !== item) {
                // console.log(1, executionData.repetitions, item);
                return (
                  <Item key={item}>
                    <Button
                      type="button"
                      name={item}
                      onClick={onUpdateRepetitions}
                    >
                      {item}
                    </Button>
                  </Item>
                );
              } else if (executionData.repetitions === item) {
                // console.log(2, executionData.repetitions, item);
                return (
                  <Item key={item}>
                    <ActiveButton
                      type="button"
                      name={item}
                      onClick={onUpdateRepetitions}
                    >
                      {item}
                    </ActiveButton>
                  </Item>
                );
              }
            })}
          </List>
          <ModalButtons>
            <ButtonModal type="reset" onClick={handleCloseModal}>
              Скасувати
            </ButtonModal>
            <ButtonModal type="submit">Додати</ButtonModal>
          </ModalButtons>
        </AddExerciseForm>
      </ModalAddExerciseStyled>
    </ModalBackdrop>
  );
};

export default ModalAddExercise;
