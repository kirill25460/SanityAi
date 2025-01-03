import styled from 'styled-components';

export const CompanyMainContainer = styled.div`
  width: 1320px;
  margin: 60px auto 0;
`;

export const CompanyTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin: 0 0 60px 0;
`;

export const CompanyMainTitleContainer = styled.div`
  display: flex;
`;

export const CompanyMainTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  color: #ffffff;
  margin: 0 22px 30px 0;
  width: 702px;
`;

export const MainSquirrel = styled.img`
  width: 596px;
  height: 36px;
`;

export const CompanySubTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 35px;
  color: #ffffff;
  width: 1165px;
  margin-bottom: 100px;
`;

export const ValueCompanyTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  color: #ffffff;
  margin: 0 0 55px 0;
`;

export const ValueMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const ValueList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  list-style: none;
  padding: 0;
  margin: 0 0 60px 0;
  width: 100%; /* Растянуть список на всю ширину */
`;

export const ValueItem = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  color: #ffffff;

  display: inline-block;
  border-bottom: 1px solid #ffffff;
  text-align: center;
  padding: 16px 52px;
  white-space: nowrap;
  cursor: pointer; /* Указатель при наведении */
`;

export const DetailBlock = styled.div`
  background-color: transparent;
  border: 1px solid #fff;
  margin: -30px 0 30px 0;
  width: 100%; /* Занимает всю ширину */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Для визуализации */
`;

export const DetailBlockTitle = styled.h4`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 37px;
  margin: 50px 50px 16px 50px;
`;
export const DetailBlockSubTitle = styled.h4`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  margin: 50px 0 50px 50px;
`;
