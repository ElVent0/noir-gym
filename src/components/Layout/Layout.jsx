import { Outlet } from "react-router-dom";
import {
  LayoutStyled,
  Media,
  MediaInfo,
  MediaParagraph,
  Button,
} from "./Layout.styled";
import { useState } from "react";

const Layout = () => {
  const [modal, setModal] = useState(true);

  const onModalClick = () => {
    setModal(!modal);
  };

  return (
    <LayoutStyled>
      {/* <Media>
        <MediaInfo>
          <MediaParagraph>
            На даний момент доступна тільки мобільна версія сайту
          </MediaParagraph>
          <MediaParagraph>
            Для перегляду використайте ваш смартфон або відкрийте інструменти
            розробника (f12)
          </MediaParagraph>
        </MediaInfo>
      </Media> */}
      {modal && (
        <Media>
          <MediaInfo>
            <MediaParagraph>
              Застосунок знаходиться на етапі розробки. Зустрічаються нерівності
              в графічному інтерфейсі ПК версії сайту. Для кращої взаємодії
              використайте ваш смартфон або відкрийте інструменти розробника
              (f12)
            </MediaParagraph>
            <Button type="button" onClick={onModalClick}>
              ОК
            </Button>
          </MediaInfo>
        </Media>
      )}
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
