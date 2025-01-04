import {
  ProductInfoLeftContainer,
  ProductInfoContainer,
  ProductMainContainer,
  ProductMainName,
  ProductMainTitle,
  ProductInfoLeftText,
  ProductInfoLeftBotContainer,
  Block280x180,
  Block280x180TopText,
  Block280x180BotText,
  Block240x180,
  Block240x180Text,
  Block160x120,
  Block160x120TopText,
  Block160x120BotText,
  Block360x120,
  Block360x120TopText,
  Block360x120BotText,
  TopRow,
  BotRow,
  ProductInfoRightContainer,
  RightTopImg,
} from './ProductItem.styled';
import back from '../../images/back.png'

const ProductItem = () => {
  return (
    <ProductMainContainer>
      <ProductMainTitle>Sanity / Products / </ProductMainTitle>
      <ProductMainName>Callbuddy</ProductMainName>
      <ProductInfoContainer>
        <ProductInfoLeftContainer>
          <ProductInfoLeftText>
            Вступительный текст, который описывает продукт. Вступительный текст,
            который описывает продукт. Вступительный текст, который описывает
            продукт. Вступительный текст, который описывает продукт.
            Вступительный текст.
          </ProductInfoLeftText>
          <ProductInfoLeftBotContainer>
            <TopRow>
              <Block280x180>
                <Block280x180TopText>98%</Block280x180TopText>
                <Block280x180BotText>Корректных проверок</Block280x180BotText>
              </Block280x180>
              <Block240x180>
                <Block240x180Text>Надо придумать)</Block240x180Text>
              </Block240x180>
            </TopRow>
            <BotRow>
              <Block160x120>
                <Block160x120TopText>5/5</Block160x120TopText>
                <Block160x120BotText>рейтинг</Block160x120BotText>
              </Block160x120>
              <Block360x120>
                <Block360x120TopText>База клиентов</Block360x120TopText>
                <Block360x120BotText>Более 300тыс.</Block360x120BotText>
              </Block360x120>
            </BotRow>
          </ProductInfoLeftBotContainer>
        </ProductInfoLeftContainer>
        <ProductInfoRightContainer>
            <RightTopImg src={back}/>
        </ProductInfoRightContainer>
      </ProductInfoContainer>
    </ProductMainContainer>
  );
};

export default ProductItem;
