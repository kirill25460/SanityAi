import styled from 'styled-components';

const SvgComponent = ({ color = 'black' }) => (
  <svg width="84" height="59" viewBox="0 0 84 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M74.4201 34.5588C74.4201 25.9237 70.9898 17.6422 64.8838 11.5363C58.7779 5.43029 50.4964 2 41.8613 2C33.2262 2 24.9447 5.43029 18.8387 11.5362C12.7328 17.6422 9.30249 25.9237 9.30249 34.5588" stroke={color} strokeWidth="4"/>
    <path d="M1.62599 40.61C1.43272 39.2553 1.94538 37.8959 2.98502 37.0061L11.8663 29.4052C14.3086 27.315 18.0939 28.8137 18.4435 32.0092L20.7255 52.8705C20.9657 55.0665 19.3802 57.0415 17.1842 57.2817L8.0551 58.2803C5.90975 58.515 3.96504 57.0055 3.66024 54.869L1.62599 40.61Z" fill={color}/>
    <path d="M82.2178 40.61C82.411 39.2553 81.8984 37.8959 80.8587 37.0061L71.9774 29.4052C69.5351 27.315 65.7498 28.8137 65.4003 32.0092L63.1183 52.8705C62.878 55.0665 64.4635 57.0415 66.6596 57.2817L75.7886 58.2803C77.934 58.515 79.8787 57.0055 80.1835 54.869L82.2178 40.61Z" fill={color}/>
  </svg>
);

export const ServicesMainContainer = styled.div`
  width: 1320px;
  margin: 60px auto 0;
`;

export const ServicesTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin: 0 0 80px 0;
`;

export const ServicesMainTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 77px;
  width: 820px;
  margin: 0 0 20px 0;
`;

export const ServicesSubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 60px;
`;

export const ServicesSubTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 34px;
  line-height: 41px;
  width: 570px;
`;

export const ServicesChoose = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  color: #838383;
`;

export const ServicesBlockContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Устанавливает 2 колонки */
  gap: 60px; /* Устанавливает отступы между элементами */
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ServicesBlockItem = styled.li`
  background: radial-gradient(
    80.41% 147.41% at 19.65% 38.84%,
    #fefefe 0%,
    #f4f4f4 100%
  );
  border-radius: 15px;
  padding: 36px;
  cursor: pointer;
`;

export const ServicesBlockItemWithBorder = styled.li`
  position: relative; /* Для того чтобы псевдоэлемент был относительно этого элемента */
  background: radial-gradient(
      80.41% 147.41% at 19.65% 38.84%,
      #fefefe 0%,
      #f4f4f4 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 1px 1px 7.2px rgba(0, 0, 0, 0.21),
    3px 3px 30.4px rgba(0, 0, 0, 0.21);
  border-radius: 15px;
  padding: 36px;
  cursor: pointer;

  /* Псевдоэлемент для создания бордера на расстоянии 5px */
  &::before {
    content: '';
    position: absolute;
    top: -13px; /* Расстояние от верхней границы */
    left: -13px; /* Расстояние от левой границы */
    right: -13px; /* Расстояние от правой границы */
    bottom: -13px; /* Расстояние от нижней границы */
    border: 1px solid grey; /* Цвет и стиль бордера */
    border-radius: 20px; /* Радиус бордера такой же, как у блока */
  }
`;

export const ServicesTopCon = styled.div`
  display: flex;
  margin-bottom: 38px;
`;

export const ServicesTopImgContainer = styled.div`
  display: flex;
  justify-content: center; /* Центрирует содержимое по горизонтали */
  align-items: center; /* Центрирует содержимое по вертикали */
  background: linear-gradient(114.76deg, #ffffff 2.06%, #e7e7e7 162.17%);
  border-radius: 21px;
  width: 134px;
  height: 134px;
  margin-right: 64px;
`;

export const ServicesTopImgContainerChoose = styled.div`
  display: flex;
  justify-content: center; /* Центрирует содержимое по горизонтали */
  align-items: center; /* Центрирует содержимое по вертикали */
  background: linear-gradient(114.76deg, #000000 2.06%, #474747 162.17%);
  border-radius: 21px;
  width: 134px;
  height: 134px;
  margin-right: 64px;
`;

export const ServicesImg = styled(SvgComponent)`
  height: auto;
  display: block;
`;

export const ServicesMainTitleContainer = styled.h4`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 35.7px;
  line-height: 44px;
  display: flex;
  align-items: center;
  width: 359px;

  background: linear-gradient(90.78deg, #363636 -22.99%, #a7a7a7 130.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ServicesMainTitleContainerChoose = styled.h4`
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 35.7px;
  line-height: 44px;
  display: flex;
  align-items: center;
  width: 359px;

  background: linear-gradient(90.78deg, #363636 -22.99%, #090909 130.88%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const ServicesBlockSubTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
`;
