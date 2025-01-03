import { ProductInfoLeftContainer, ProductInfoContainer, ProductMainContainer, ProductMainName, ProductMainTitle, ProductInfoLeftText } from "./ProductItem.styled";

const ProductItem = () => {
    return (<ProductMainContainer>
        <ProductMainTitle>Sanity / Products / </ProductMainTitle>
        <ProductMainName>Callbuddy</ProductMainName>
        <ProductInfoContainer>
            <ProductInfoLeftContainer>
                <ProductInfoLeftText>Вступительный текст, который описывает продукт. Вступительный текст, который описывает продукт. Вступительный текст, который описывает продукт. Вступительный текст, который описывает продукт. Вступительный текст.</ProductInfoLeftText>
            </ProductInfoLeftContainer>
        </ProductInfoContainer>
    </ProductMainContainer>)
}

export default ProductItem;