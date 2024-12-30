import { CompanyMainContainer, CompanyMainTitle, CompanyTitle, CompanySubTitle, CompanyMainTitleContainer, MainSquirrel } from "./Company.styled";
import squirrel from '../../images/squirrel.png';

export const Company = () => {
  return (
    <CompanyMainContainer>
      <CompanyTitle>Sanity / Company </CompanyTitle>
      <CompanyMainTitleContainer>
        <CompanyMainTitle>From Scratch to Perfection</CompanyMainTitle>
        <MainSquirrel src={squirrel} alt="squirrel" />
      </CompanyMainTitleContainer>
      <CompanySubTitle>Про наш принцип роботи, яким інструментам віддаєтся перевага, філософія компанії. Про наш принцип роботи, яким інструментам віддаєтся перевага, філософія компанії. </CompanySubTitle>
    </CompanyMainContainer >
  );
};
