import {
  StyledContent,
  ContentStyled,
  MainContent,
  Logo,
  List,
  Item,
  Link,
  Paragraph,
  NumberOfExercises,
  Info,
} from "./Content.styled";
import LogoLight from "../../media/logo-light.png";
// import LogoDark from "../../media/logo-dark.png";

const Content = () => {
  return (
    <StyledContent>
      <Logo src={LogoLight}></Logo>
      <ContentStyled>
        <MainContent>
          <Info>Що плануєш робити сьогодні?</Info>
          <List>
            <Item>
              <Link to="/legs">
                <Paragraph>Ноги</Paragraph>
                <NumberOfExercises>7 вправ</NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/shoulders">
                <Paragraph>Плечі</Paragraph>
                <NumberOfExercises>7 вправ</NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/back">
                <Paragraph>Спина</Paragraph>
                <NumberOfExercises>7 вправ</NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/triceps">
                <Paragraph>Трицепс</Paragraph>
                <NumberOfExercises>7 вправ</NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/biceps">
                <Paragraph>Біцепс</Paragraph>
                <NumberOfExercises>7 вправ</NumberOfExercises>
              </Link>
            </Item>
            <Item>
              <Link to="/chest">
                <Paragraph>Груди</Paragraph>
                <NumberOfExercises>7 вправ</NumberOfExercises>
              </Link>
            </Item>
          </List>
        </MainContent>
      </ContentStyled>
    </StyledContent>
  );
};

export default Content;
