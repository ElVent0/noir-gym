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
import ModalDeleteExercise from "../ModalDeleteExercise/ModalDeleteExercise";
import ModalEditExercise from "../ModalEditExercise/ModalEditExercise";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ImFileEmpty } from "react-icons/im";
import { useState, useEffect } from "react";
// import Exercise from "../Exercise/Exercise";

const Set = ({
  exercises,
  onCreateExercise,
  onDeleteExercise,
  onChangeExercise,
}) => {
  const [openModal, setOpenModal] = useState({
    status: null,
    name: null,
    description: null,
    id: null,
  });

  const onCloseModal = () => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        status: null,
        name: null,
        description: null,
        id: null,
      };
    });
  };

  const onAddExercise = () => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        status: "add",
        name: null,
        description: null,
        id: null,
      };
    });
  };

  const onDelExercise = (name, id) => {
    setOpenModal((prevState) => {
      return {
        ...prevState,
        status: "delete",
        name: name,
        description: null,
        id: id,
      };
    });
  };

  const onEditExercise = (name, description, id) => {
    setOpenModal((prevState) => {
      return { ...prevState, status: "edit", name, description, id };
    });
  };

  const onAddExerciseToState = (data) => {
    onCreateExercise(data);
    onCloseModal();
  };

  const onDelExerciseFromState = (id) => {
    onDeleteExercise(id);
    onCloseModal();
  };

  const onEditExerciseInState = (data) => {
    onChangeExercise(data);
    onCloseModal();
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
              return (
                <Item key={item.id}>
                  <Header>
                    <Title>{item.exerciseName}</Title>
                    <ButtonDelete
                      type="button"
                      onClick={() =>
                        onEditExercise(
                          item.exerciseName,
                          item.description,
                          item.id
                        )
                      }
                    >
                      <FiEdit />
                    </ButtonDelete>
                    <ButtonDelete
                      type="button"
                      onClick={() => onDelExercise(item.exerciseName, item.id)}
                    >
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
      {openModal.status === "add" && (
        <ModalAddExercise
          onCloseModal={onCloseModal}
          onAddExerciseToState={onAddExerciseToState}
        />
      )}
      {openModal.status === "delete" && (
        <ModalDeleteExercise
          onCloseModal={onCloseModal}
          onDelExerciseFromState={onDelExerciseFromState}
          name={openModal.name}
          id={openModal.id}
        />
      )}
      {openModal.status === "edit" && (
        <ModalEditExercise
          onCloseModal={onCloseModal}
          onEditExerciseInState={onEditExerciseInState}
          name={openModal.name}
          description={openModal.description}
          id={openModal.id}
        />
      )}
    </>
  );
};

export default Set;
