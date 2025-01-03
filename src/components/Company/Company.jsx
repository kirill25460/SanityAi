import React, { useState } from 'react';
import {
  CompanyMainContainer,
  CompanyMainTitle,
  CompanyMainTitleContainer,
  CompanySubTitle,
  CompanyTitle,
  DetailBlock,
  DetailBlockSubTitle,
  DetailBlockTitle,
  MainSquirrel,
  ValueCompanyTitle,
  ValueItem,
  ValueList,
  ValueMainContainer,
} from './Company.styled';
import squirrel from '../../images/squirrel.png'

export const Company = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const handleClick = (index) => {
    setActiveItemIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const values = [
    'Люди це ідеї',
    'Крок за кроком до цілі',
    'Крута фраза 2',
    'Ініціатива - рушій прогрессу',
    'Люди це ідеї',
    'Крута фраза 2',
    'Ініціатива - рушій прогрессу',
    'Люди це ідеї',
    'Крута фраза 2',
  ];

  const detailTexts = [
    'Детальная информация для "Люди це ідеї"... 1',
    'Детальная информация для "Крок за кроком до цілі"... 2',
    'Детальная информация для "Крута фраза 2"... 3',
    'Детальная информация для "Ініціатива - рушій прогрессу"... 4',
    'Детальная информация для "Люди це ідеї"... 5',
    'Детальная информация для "Крута фраза 2"... 6',
    'Детальная информация для "Ініціатива - рушій прогрессу"... 7',
    'Детальная информация для "Люди це ідеї"... 8',
    'Детальная информация для "Крута фраза 2"... 9',
  ];

  const itemsPerRow = 3;
  const rows = Math.ceil(values.length / itemsPerRow);

  return (
    <CompanyMainContainer>
      <CompanyTitle>Sanity / Company</CompanyTitle>
      <CompanyMainTitleContainer>
        <CompanyMainTitle>From Scratch to Perfection</CompanyMainTitle>
        <MainSquirrel src={squirrel} alt="squirrel" />
      </CompanyMainTitleContainer>
      <CompanySubTitle>
        Про наш принцип роботи, яким інструментам віддаєтся перевага, філософія
        компанії. Про наш принцип роботи, яким інструментам віддаєтся перевага,
        філософія компанії.
      </CompanySubTitle>
      <ValueCompanyTitle>Цінності компанії</ValueCompanyTitle>
      <ValueMainContainer>
        {[...Array(rows)].map((_, rowIndex) => {
          const startIndex = rowIndex * itemsPerRow;
          const rowItems = values.slice(startIndex, startIndex + itemsPerRow);

          return (
            <React.Fragment key={rowIndex}>
              <ValueList>
                {rowItems.map((value, itemIndex) => {
                  const currentIndex = startIndex + itemIndex; // получаем общий индекс элемента
                  return (
                    <ValueItem key={currentIndex} onClick={() => handleClick(currentIndex)}>
                      {value}
                    </ValueItem>
                  );
                })}
              </ValueList>
              {activeItemIndex !== null && activeItemIndex >= startIndex && activeItemIndex < startIndex + itemsPerRow && (
                <DetailBlock>
                  <DetailBlockTitle>{rowItems[activeItemIndex - startIndex]}</DetailBlockTitle>
                  <DetailBlockSubTitle>{detailTexts[activeItemIndex]}</DetailBlockSubTitle>
                </DetailBlock>
              )}
            </React.Fragment>
          );
        })}
      </ValueMainContainer>
    </CompanyMainContainer>
  );
};

export default Company;