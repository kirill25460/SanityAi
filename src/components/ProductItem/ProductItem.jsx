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
  RightBotContainer,
  RightBotImgSmall,
  RightBotImgBig,
  HowItWorksMainText,
  HowItWorksMainContainer,
  HowItWorksImg,
  HowItWorksContainer,
  HowItWorksBlock,
  HowItWorksSubText,
  WhyWeMainContainer,
  WhyWeMainText,
  WhyWeInsideContainer,
  WhyWeSubContainer,
  WhyWeBlock,
  CenteredNumber,
  WhyWeBlockBig,
  CenteredNumberBig,
  WhyWeSubText,
} from './ProductItem.styled';
import back from '../../images/back.png';

const ProductItem = () => {
  return (
    <>
      <ProductMainContainer>
        <ProductMainTitle>Sanity / Products / </ProductMainTitle>
        <ProductMainName>Callbuddy</ProductMainName>
        <ProductInfoContainer>
          <ProductInfoLeftContainer>
            <ProductInfoLeftText>
              Вступительный текст, который описывает продукт. Вступительный
              текст, который описывает продукт. Вступительный текст, который
              описывает продукт. Вступительный текст, который описывает продукт.
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
            <RightTopImg src={back} />
            <RightBotContainer>
              <RightBotImgSmall src={back} />
              <RightBotImgBig src={back} />
            </RightBotContainer>
          </ProductInfoRightContainer>
        </ProductInfoContainer>
        <HowItWorksMainText>Как это работает?</HowItWorksMainText>
        <HowItWorksMainContainer>
          <HowItWorksImg src={back} />
          <HowItWorksContainer>
            <HowItWorksBlock>
              <HowItWorksSubText>
                Вступительный текст, который описывает продукт. Вступительный
                текст, который описывает продукт.
              </HowItWorksSubText>
            </HowItWorksBlock>
            <HowItWorksBlock>
              <HowItWorksSubText>
                Вступительный текст, который описывает продукт. Вступительный
                текст, который описывает продукт.
              </HowItWorksSubText>
            </HowItWorksBlock>
          </HowItWorksContainer>
        </HowItWorksMainContainer>
      </ProductMainContainer>
      <WhyWeMainContainer>
        <WhyWeInsideContainer>
          <WhyWeMainText>Почему это именно то что вам нужно?</WhyWeMainText>
          <WhyWeSubContainer>
            <WhyWeBlock>
              <CenteredNumber>1</CenteredNumber>
              <HowItWorksSubText>
                Вступительный текст, который описывает продукт. Вступительный
                текст, который описывает продукт.
              </HowItWorksSubText>
            </WhyWeBlock>
            <WhyWeBlock>
              <CenteredNumber>2</CenteredNumber>
              <HowItWorksSubText>
                Вступительный текст, который описывает продукт. Вступительный
                текст, который описывает продукт.
              </HowItWorksSubText>
            </WhyWeBlock>
          </WhyWeSubContainer>
          <WhyWeBlockBig>
            <CenteredNumberBig>3</CenteredNumberBig>
            <WhyWeSubText>
              Вступительный текст, который описывает продукт. Вступительный
              текст, который описывает продукт.
            </WhyWeSubText>
          </WhyWeBlockBig>
        </WhyWeInsideContainer>
      </WhyWeMainContainer>
    </>
  );
};

export default ProductItem;
