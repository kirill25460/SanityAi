import {
  MainContainer,
  LinkProduct,
  CardWrap,
  CardList,
  CardItem,
  ImageBlock,
  ImageBlockText,
} from './Products.styled';
import block from '../../images/back.png';
import { Link } from 'react-router-dom';

export const Products = () => {

  const data = [{
    img: block,
    text: 'Call Center QA',
  },
  {
    img: block,
    text: 'Call Center QA',
  },
  {
    img: block,
    text: 'Call Center QA',
  },
  {
    img: block,
    text: 'Call Center QA',
  },
  {
    img: block,
    text: 'Call Center QA',
  },
  {
    img: block,
    text: 'Call Center QA',
  }]

  return (
    <MainContainer id="Products">
      <LinkProduct>Sanity / Products</LinkProduct>
      <CardWrap>
        <CardList>

          {data?.map((item, index) => {
            if (index % 2 === 0) {
              // Для четных индексов
              return (
                <Link to={`/Product/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardItem key={index}>
                    <ImageBlock src={item.img} position="top" height="418px" />
                    <ImageBlock src={item.img} position="bottom" height="65px" className="bottom-block">
                      <ImageBlockText>{item.text}</ImageBlockText>
                    </ImageBlock>

                  </CardItem>
                </Link>
              );
            } else {
              // Для нечетных индексов
              return (
                <Link to={`/Product/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardItem key={index}>
                    <ImageBlock src={item.img} position="top" height="65px" className="bottom-block">
                      <ImageBlockText>{item.text}</ImageBlockText>
                    </ImageBlock>
                    <ImageBlock src={item.img} position="bottom" height="418px" />
                  </CardItem>
                </Link>
              );
            }
          })}
        </CardList>
      </CardWrap>
    </MainContainer>
  );
};
