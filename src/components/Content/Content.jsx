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
  Calendar,
  CalendarTitle,
  CalendarParagraph,
  CalendarInfo,
  CalendarSpan,
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

  const DayOfToday = () => {
    const day = new Date().getDay();
    const today = {
      day: null,
      plan: null,
    };
    switch (day) {
      case 1:
        today.day = "ПОНЕДІЛОК";
        today.plan = ["НОГИ", "ПЛЕЧІ"];
        break;
      case 2:
        today.day = "ВІВТОРОК";
        today.plan = 0;
        break;
      case 3:
        today.day = "СЕРЕДА";
        today.plan = ["СПИНА", "ТРИЦЕПС"];
        break;
      case 4:
        today.day = "ЧЕТВЕР";
        today.plan = 0;
        break;
      case 5:
        today.day = "П'ЯТНИЦЯ";
        today.plan = ["Груди", "Біцепс"];
        break;
      case 6:
        today.day = "СУБОТА";
        today.plan = 0;
        break;
      case 7:
        today.day = "НЕДІЛЯ";
        today.plan = 0;
        break;
      default:
        return 0;
    }
    return today;
  };

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
        <Calendar>
          <CalendarTitle>{DayOfToday().day}</CalendarTitle>
          <CalendarParagraph>План на сьогодні:</CalendarParagraph>
          {DayOfToday().plan === 0 ? (
            <CalendarInfo>На сьогодні планів немає</CalendarInfo>
          ) : (
            DayOfToday().plan.map((item) => <CalendarSpan>{item}</CalendarSpan>)
          )}
        </Calendar>
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
              <Link to="/chest">
                <Paragraph>Груди</Paragraph>
                <NumberOfExercises>
                  Вправ: {numbersOfExercises.chest}
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
          </List>
        </MainContent>
      </ContentStyled>
    </StyledContent>
  );
};

export default Content;
