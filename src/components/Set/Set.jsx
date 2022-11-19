import {
  SetStyled,
  HeaderMenu,
  Link,
  ButtonAdd,
  List,
  Item,
  Header,
  Title,
  ButtonDelete,
  ExerciseList,
  ExerciseItem,
  Paragraph,
  InfoBlock,
  Description,
  ButtonPlus,
  ExecutionInfo,
} from "./Set.styled";
import ModalAddExercise from "../ModalAddExercise/ModalAddExercise";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ImFileEmpty } from "react-icons/im";
import { useState, useEffect } from "react";
// import Exercise from "../Exercise/Exercise";

const Set = ({ exercises, onCreateExercise }) => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModalAddExercise = () => {
    setOpenModal((prevState) => !prevState);
  };

  const onAddExercise = () => {
    onToggleModalAddExercise();
  };

  const onCloseModal = () => {
    onToggleModalAddExercise();
  };

  const onAddExerciseToState = (data) => {
    onToggleModalAddExercise();
    onCreateExercise(data);
  };

  return (
    <>
      <SetStyled>
        <HeaderMenu>
          <Link to="/">
            <BsArrowLeftShort />
          </Link>
          {exercises.length > 0 && (
            <ButtonAdd type="button" onClick={onAddExercise}>
              <AiFillFileAdd />
              <span>Додати вправу</span>
            </ButtonAdd>
          )}
        </HeaderMenu>
        {exercises.length > 0 ? (
          <List>
            {exercises.map((item) => {
              // console.log(item);
              return (
                <Item>
                  <Header>
                    <Title>{item.exerciseName}</Title>
                    <ButtonDelete type="button">
                      <FiEdit />
                    </ButtonDelete>
                    <ButtonDelete type="button">
                      <RiDeleteBin5Fill />
                    </ButtonDelete>
                  </Header>
                  {item.description && (
                    <Description>{item.description}</Description>
                  )}
                  <ExerciseList>
                    {item.exerciseDescription.length > 0 ? (
                      <>
                        {item.exerciseDescription[0] && (
                          <ExerciseItem>
                            <>
                              <Paragraph>18.11</Paragraph>
                              <Paragraph>
                                <span>
                                  {item.exerciseDescription[0].weight}
                                </span>{" "}
                                кг
                              </Paragraph>
                              <Paragraph>
                                <span>
                                  {item.exerciseDescription[0].setsNumber}
                                </span>{" "}
                                по{" "}
                                <span>
                                  {item.exerciseDescription[0].repetitions}
                                </span>
                              </Paragraph>
                            </>
                          </ExerciseItem>
                        )}
                        {item.exerciseDescription[1] && (
                          <ExerciseItem>
                            <>
                              <Paragraph>18.11</Paragraph>
                              <Paragraph>
                                <span>
                                  {item.exerciseDescription[1].weight}
                                </span>{" "}
                                кг
                              </Paragraph>
                              <Paragraph>
                                <span>
                                  {item.exerciseDescription[1].setsNumber}
                                </span>{" "}
                                по{" "}
                                <span>
                                  {item.exerciseDescription[1].repetitions}
                                </span>
                              </Paragraph>
                            </>
                          </ExerciseItem>
                        )}
                        {item.exerciseDescription[2] && (
                          <ExerciseItem>
                            <>
                              <Paragraph>18.11</Paragraph>
                              <Paragraph>
                                <span>
                                  {item.exerciseDescription[2].weight}
                                </span>{" "}
                                кг
                              </Paragraph>
                              <Paragraph>
                                <span>
                                  {item.exerciseDescription[2].setsNumber}
                                </span>{" "}
                                по{" "}
                                <span>
                                  {item.exerciseDescription[2].repetitions}
                                </span>
                              </Paragraph>
                            </>
                          </ExerciseItem>
                        )}
                      </>
                    ) : (
                      <ExecutionInfo>
                        Ти ще не виконував цю вправу, додай запис про виконання
                      </ExecutionInfo>
                    )}
                    <ExerciseItem>
                      <ButtonPlus type="button">
                        <BsPlusLg />
                      </ButtonPlus>
                    </ExerciseItem>
                  </ExerciseList>
                </Item>
              );
            })}
          </List>
        ) : (
          <InfoBlock>
            <ImFileEmpty />
            <p>Тут поки нічого немає, додайте свою першу вправу</p>
            <ButtonAdd type="button" onClick={onAddExercise}>
              <AiFillFileAdd />
              <span>Додати вправу</span>
            </ButtonAdd>
          </InfoBlock>
        )}
      </SetStyled>
      {openModal && (
        <ModalAddExercise
          onCloseModal={onCloseModal}
          onAddExerciseToState={onAddExerciseToState}
        />
      )}
    </>
  );
};

export default Set;
