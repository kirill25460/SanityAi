import styled from 'styled-components';

export const MainContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  height: 100vh;
`;

export const LinkProduct = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #000000;
  margin-top: 140px;
  margin-left: 60px;
  margin-bottom: 60px;
`;

export const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 309px; // Ширина карточки
  margin: 10px;
  gap: 30px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Плавный переход */

  &:hover {
    transform: translateY(-5px); /* Легкое поднятие карточки */

    /* Изменение стиля для дочернего блока с height 65px */
    & .bottom-block {
      background: black !important; /* Изменение фона при ховере */
    }
  }
`;

export const ImageBlock = styled.div`
  width: 309px;
  height: ${props => props.height || '50%'};
  background-image: url(${props => props.src});
  background-position: ${props => props.position};
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0; /* убираем маргин для отсутствия отступов */
  display: flex;
  align-items: center;
  border-radius: 5px;
  
  
  /* Изначальный фон для блока */
  /* background: ${props => (props.height === '65px' ? 'transparent' : '')}; */
`;

export const ImageBlockText = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #ffffff;
  margin: 0;
  padding-left: 30px;
`;
