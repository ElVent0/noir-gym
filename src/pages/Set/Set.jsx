import {
  SetStyled,
  SetContainer,
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
  Gradient,
} from "./Set.styled";
import ModalAddExercise from "../../components/ModalAddExercise/ModalAddExercise";
import ModalDeleteExercise from "../../components/ModalDeleteExercise/ModalDeleteExercise";
import ModalEditExercise from "../../components/ModalEditExercise/ModalEditExercise";
import ModalAddExecution from "../../components/ModalAddExecution/ModalAddExecution";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ImFileEmpty } from "react-icons/im";
import { useState } from "react";
import PropTypes from "prop-types";

const Set = ({
  setType,
  exercises,
  handleCreateExercise,
  handleDeleteExercise,
  handleEditExercise,
  handleAddExecution,
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
      return {
        ...prevState,
        status: "edit",
        name,
        description,
        id,
      };
    });
  };

  const onAddExecution = (id) => {
    setOpenModal((prevState) => {
      return { ...prevState, status: "execution", id };
    });
  };

  const onAddExerciseToState = (data) => {
    handleCreateExercise({ exercisesType: setType, ...data });
    onCloseModal();
  };

  const onAddExecutionToState = (data) => {
    handleAddExecution({ exercisesType: setType, ...data });
    onCloseModal();
  };

  const onDelExerciseFromState = (id) => {
    handleDeleteExercise({ exercisesType: setType, id });
    onCloseModal();
  };

  const onEditExerciseInState = (data) => {
    handleEditExercise({ exercisesType: setType, ...data });
    onCloseModal();
  };

  return (
    <SetStyled>
      <Gradient></Gradient>
      <SetContainer>
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
                              <Paragraph>
                                {item.exerciseDescription[0].date}
                              </Paragraph>
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
                              <Paragraph>
                                {item.exerciseDescription[1].date}
                              </Paragraph>
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
                              <Paragraph>
                                {item.exerciseDescription[2].date}
                              </Paragraph>
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
                      <ButtonPlus
                        type="button"
                        onClick={() => {
                          onAddExecution(item.id);
                        }}
                      >
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
      </SetContainer>
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
      {openModal.status === "execution" && (
        <ModalAddExecution
          onCloseModal={onCloseModal}
          onAddExecutionToState={onAddExecutionToState}
          name={openModal.name}
          description={openModal.description}
          id={openModal.id}
        />
      )}
    </SetStyled>
  );
};

export default Set;

Set.propTypes = {
  exercises: PropTypes.array,
  onOpenModalAddExercise: PropTypes.func,
  handleCreateExercise: PropTypes.func,
  handleDeleteExercise: PropTypes.func,
  handleEditExercise: PropTypes.func,
  handleAddExecution: PropTypes.func,
};
