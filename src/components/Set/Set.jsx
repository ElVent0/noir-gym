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
} from "./Set.styled";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiAddLine } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ImFileEmpty } from "react-icons/im";
import { useState, useEffect } from "react";
// import Exercise from "../Exercise/Exercise";

const Set = ({ setType }) => {
  const [exercises, setExercises] = useState({
    legs: [
      {
        exerciseName: "Жим лежачи",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        exerciseName: "Гантелі на біцепс",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        exerciseName: "Т-гриф",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
      {
        exerciseName: "Жим Арнольда",
        exerciseDescription: [
          { setsNumber: 4, repetitions: 8, weight: "20" },
          { setsNumber: 4, repetitions: 10, weight: "25" },
          { setsNumber: 4, repetitions: 12, weight: "30" },
        ],
      },
    ],
    shoulders: [],
    back: [],
    triceps: [],
    biceps: [],
    chest: [],
  });

  console.log(exercises, setType);
  const currentData = exercises[setType];
  console.log(currentData);

  return (
    <SetStyled>
      <HeaderMenu>
        <Link to="/">
          <BsArrowLeftShort />
        </Link>
        {currentData.length > 0 && (
          <ButtonAdd type="button">
            <AiFillFileAdd />
            <span>Додати вправу</span>
          </ButtonAdd>
        )}
      </HeaderMenu>
      {currentData.length > 0 ? (
        <List>
          {currentData.map((item) => {
            console.log(item);
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
                <ExerciseList>
                  <ExerciseItem>
                    <Paragraph>18.11</Paragraph>
                    <Paragraph>
                      <span>{item.exerciseDescription[0].weight}</span> кг
                    </Paragraph>
                    <Paragraph>
                      <span>{item.exerciseDescription[0].setsNumber}</span> по{" "}
                      <span>{item.exerciseDescription[0].repetitions}</span>
                    </Paragraph>
                  </ExerciseItem>
                  <ExerciseItem>
                    <Paragraph>18.11</Paragraph>
                    <Paragraph>
                      <span>{item.exerciseDescription[1].weight}</span> кг
                    </Paragraph>
                    <Paragraph>
                      <span>{item.exerciseDescription[1].setsNumber}</span> по{" "}
                      <span>{item.exerciseDescription[1].repetitions}</span>
                    </Paragraph>
                  </ExerciseItem>
                  <ExerciseItem>
                    <Paragraph>18.11</Paragraph>
                    <Paragraph>
                      <span>{item.exerciseDescription[2].weight}</span> кг
                    </Paragraph>
                    <Paragraph>
                      <span>{item.exerciseDescription[2].setsNumber}</span> по{" "}
                      <span>{item.exerciseDescription[2].repetitions}</span>
                    </Paragraph>
                  </ExerciseItem>
                  <ExerciseItem>
                    <button type="button">
                      <BsPlusLg />
                    </button>
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
          <ButtonAdd type="button">
            <AiFillFileAdd />
            <span>Додати вправу</span>
          </ButtonAdd>
        </InfoBlock>
      )}
    </SetStyled>
  );
};

export default Set;
