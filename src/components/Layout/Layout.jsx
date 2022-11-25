import { Outlet } from "react-router-dom";
import {
  LayoutStyled,
  Media,
  MediaInfo,
  MediaParagraph,
} from "./Layout.styled";

const Layout = () => {
  return (
    <LayoutStyled>
      <Media>
        <MediaInfo>
          <MediaParagraph>
            На даний момент доступна тільки мобільна версія сайту
          </MediaParagraph>
          <MediaParagraph>
            Для перегляду використайте ваш смартфон або відкрийте інструменти
            розробника (f12)
          </MediaParagraph>
        </MediaInfo>
      </Media>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
