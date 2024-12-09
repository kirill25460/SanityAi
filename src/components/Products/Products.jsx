import { MainContainer,LinkProduct,CardWrap,CardList,CardItem,BigCard,SmallCard} from "./Products.styled";
import bigCard from "../../images/big_card.png";
import smallCard from "../../images/small_card.png";
export const Products = () => {
    return (
   <MainContainer id="Products">
<LinkProduct>Sanity / Products</LinkProduct>
<CardWrap>
    <CardList>
        <CardItem><BigCard src={bigCard} alt="bigCard" /><SmallCard src={smallCard} alt="SANITYAI"/></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
    </CardList>
</CardWrap>
   </MainContainer>
    );
  };
  