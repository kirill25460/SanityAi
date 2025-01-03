import HeaderWhite from "components/HeaderWhite/HeaderWhite";
import { ServicesPageContainer } from "./ServicesPage.styled";
import Services from "components/Services/Services";

export const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <HeaderWhite />
      <Services/>
    </ServicesPageContainer>
  );
};
