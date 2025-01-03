import {
  MainContainer,
  LinkProduct,
  CardWrap,
  CardList,
  CardItem,
  BigCard,
  SmallCard,
  ImageBlock,
  ImageBlockText,
} from './Products.styled';
import bigCard from '../../images/big_card.png';
import smallCard from '../../images/small_card.png';
import block from '../../images/back.png';

export const Products = () => {
  return (
    <MainContainer id="Products">
      <LinkProduct>Sanity / Products</LinkProduct>
      <CardWrap>
        <CardList>
          <CardItem>
            <ImageBlock src={block} position="top" height="418px" />
            <ImageBlock src={block} position="bottom" height="65px" className="bottom-block">
              <ImageBlockText>Call Center QA</ImageBlockText>
            </ImageBlock>
          </CardItem>
          <CardItem>
            <ImageBlock src={block} position="top" height="65px" className="bottom-block">
              <ImageBlockText>Call Center QA</ImageBlockText>
            </ImageBlock>
            <ImageBlock src={block} position="bottom" height="418px" />
          </CardItem>
          <CardItem>
            <ImageBlock src={block} position="top" height="418px" />
            <ImageBlock src={block} position="bottom" height="65px" className="bottom-block">
              <ImageBlockText>Call Center QA</ImageBlockText>
            </ImageBlock>
          </CardItem>
          <CardItem>
            <ImageBlock src={block} position="top" height="65px" className="bottom-block">
              <ImageBlockText>Call Center QA</ImageBlockText>
            </ImageBlock>
            <ImageBlock src={block} position="bottom" height="418px" />
          </CardItem>
          <CardItem>
            <ImageBlock src={block} position="top" height="418px" />
            <ImageBlock src={block} position="bottom" height="65px" className="bottom-block">
              <ImageBlockText>Call Center QA</ImageBlockText>
            </ImageBlock>
          </CardItem>
          <CardItem>
            <ImageBlock src={block} position="top" height="65px" className="bottom-block">
              <ImageBlockText>Call Center QA</ImageBlockText>
            </ImageBlock>
            <ImageBlock src={block} position="bottom" height="418px" />
          </CardItem>
        </CardList>
      </CardWrap>
    </MainContainer>
  );
};
