import {
  StyledContent,
  ContentStyled,
  MainContent,
  Header,
  Logo,
  Title,
  List,
  Item,
  Link,
  Paragraph,
  NumberOfExercises,
  Info,
  Gif,
  Gradient,
} from "./Content.styled";
import LogoLight from "../../media/logo-light.png";
// import { gym } from "../../media";
// import LogoDark from "../../media/logo-dark.png";

const Content = ({ exercises }) => {
  const numbersOfExercises = {
    back: exercises.back.length,
    biceps: exercises.biceps.length,
    chest: exercises.chest.length,
    legs: exercises.legs.length,
    shoulders: exercises.shoulders.length,
    triceps: exercises.triceps.length,
  };

  console.log(numbersOfExercises);

  return (
    <StyledContent>
      <Header>
        <Logo src={LogoLight}></Logo>
        <Gradient></Gradient>
        <Gradient></Gradient>
        <Title>Записник для тренажерного залу</Title>
      </Header>
      <Gif src={require("../../media/gym.gif")} alt="" />
      <ContentStyled>
        <MainContent>
          <Info>Що плануєш робити сьогодні?</Info>
          <List>
            <Item>
              <Link to="/legs">
                <Paragraph>Ноги</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.legs}
                </NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/shoulders">
                <Paragraph>Плечі</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.shoulders}
                </NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/back">
                <Paragraph>Спина</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.back}
                </NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/triceps">
                <Paragraph>Трицепс</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.triceps}
                </NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/biceps">
                <Paragraph>Біцепс</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.biceps}
                </NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/chest">
                <Paragraph>Груди</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.chest}
                </NumberOfExercises>
              </Link>
            </Item>
          </List>
        </MainContent>
      </ContentStyled>
    </StyledContent>
  );
};

export default Content;
