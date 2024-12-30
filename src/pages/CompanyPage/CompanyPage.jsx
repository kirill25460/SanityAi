import { Company } from "components/Company/Company";
import HeaderWhite from "components/HeaderWhite/HeaderWhite";
import { CompanyPageContainer } from "./CompanyPage.styled";
export const CompanyPage = () => {
  return (
    <CompanyPageContainer>
      <HeaderWhite />
      <Company />
    </CompanyPageContainer>
  );
};
