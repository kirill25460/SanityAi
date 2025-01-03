import HeaderWhite from "components/HeaderWhite/HeaderWhite";
import ProductItem from "components/ProductItem/ProductItem";
import { ProductPageContainer } from "./ProductPage.styled";

const ProductPage = () => {
    return (<ProductPageContainer>
        <HeaderWhite />
        <ProductItem />
    </ProductPageContainer>)
}

export default ProductPage;