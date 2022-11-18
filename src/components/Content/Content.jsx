import { ContentStyled, List, Item, Link } from "./Content.styled";

const Content = () => {
  return (
    <ContentStyled>
      <List>
        <Item>
          <Link to="/legs">Ноги</Link>
        </Item>
        <Item>
          <Link to="/shoulders">Плечі</Link>
        </Item>
        <Item>
          <Link to="/back">Спина</Link>
        </Item>
        <Item>
          <Link to="/triceps">Трицепс</Link>
        </Item>
        <Item>
          <Link to="/biceps">Біцепс</Link>
        </Item>
        <Item>
          <Link to="/chest">Груди</Link>
        </Item>
      </List>
    </ContentStyled>
  );
};

export default Content;
