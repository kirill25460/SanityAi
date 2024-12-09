import { MainContainer, MainP,MedusaImg1,MedusaImg2,MedusaImg3} from "./Main.styled";
import MainImg from '../../images/Vector.png'
import medusa1 from "../../images/medusa1.png";
import medusa2 from "../../images/medusa2.png";
import medusa3 from "../../images/medusa3.png";

export const Main = () => {
    return (
   <MainContainer>
   <img  src={MainImg} alt="SANITYAI" />
   <MedusaImg1 src={medusa1} alt="Medusa1"/>
   <MedusaImg2 src={medusa2} alt="Medusa2"/>
   <MedusaImg3 src={medusa3} alt="Medusa3"/>
   <MainP>From scratch to perfection</MainP>
   </MainContainer>
    );
  };
  