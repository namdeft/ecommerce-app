import { Add, Clear, Remove } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { tablet, mobile } from '../responsive'

const StyledLink = styled(Link)``

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px 40px;

    ${tablet({
        padding: '20px',
    })}

    ${mobile({
        padding: '20px',
    })}
`

const Top = styled.div`
    margin: 30px 0;
`

const Title = styled.h1`
    text-align: center;
    font-weight: 500;
`

const Button = styled.button`
    background-color: ${(props) => (props.type === 'filled' ? 'black' : 'white')};
    color: ${(props) => (props.type === 'filled' ? 'white' : 'black')};
    width: ${(props) => props.type === 'filled' && '100%'};
    border: 2px solid black;
    padding: 10px 20px;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;

    ${tablet({
        fontSize: '23px',
        width: '75%',
        margin: '20px 80px 0 80px',
        padding: '18px 20px',
    })}

    ${mobile({
        width: '80%',
        margin: '20px 20px 0px 32px',
    })}
`

const Bottom = styled.div`
    display: flex;
    margin: 30px 0;

    ${tablet({
        flexDirection: 'column',
    })}

    ${mobile({
        flexDirection: 'column',
    })}
`

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;

    ${mobile({
        marginTop: '20px',
    })}
`

const Product = styled.div`
    display: flex;
    margin: 30px 0;
    padding-bottom: 50px;
    border-bottom: 1px solid lightgray;
    border-radius: 10px;

    ${mobile({
        flexDirection: 'column',
        position: 'relative',
        margin: '37px 0',
    })}
`

const ProductDetailContainer = styled.div`
    display: flex;
    flex: 2;
`

const Img = styled.img`
    width: 200px;

    ${mobile({
        height: '100%',
        width: '180px',
    })}
`

const ProductDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
`

const ProductInfo = styled.span`
    font-size: 23px;

    ${mobile({
        marginTop: '14px',
    })}
`

const Color = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f5f5dc;

    ${mobile({
        marginTop: '14px',
    })}
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    ${mobile({
        marginTop: '23px',
    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const Amount = styled.span`
    font-size: 30px;
    margin: 0 10px;
`

const Price = styled.span`
    font-size: 40px;

    ${mobile({
        marginTop: '23px',
    })}
`

const DeleteBtn = styled.div`
    cursor: pointer;

    ${mobile({
        position: 'absolute',
        top: '-50px',
        right: '0px',
    })}
`

const CheckoutContainer = styled.div`
    flex: 1;
    border-radius: 10px;
    padding: 30px 20px;
    margin-left: 50px;
    height: 500px;

    ${tablet({
        margin: '0px',
    })}

    ${mobile({
        margin: '0px',
        padding: '0px',
    })}
`

const CheckoutTitle = styled.h1`
    font-weight: 400;
`

const CheckoutItem = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${(props) => (props.type === 'total' ? '600' : '300')};
    font-size: ${(props) => (props.type === 'total' ? '30px' : '20px')};
`

const CheckoutText = styled.span``

const CheckoutPrice = styled.span``

export default function ShoppingCart({ cart, handleRemoveProduct, handleUpdateCart }) {
    return (
        <Container>
            <Announcement />
            <NavBar cart={cart} />
            <Wrapper>
                <Top>
                    <Title>YOUR BAG</Title>
                    <StyledLink to='/product'>
                        <Button>CONTINUE SHOPPING</Button>
                    </StyledLink>
                </Top>
                <Bottom>
                    <ProductContainer>
                        {cart &&
                            cart.line_items?.map((product) => {
                                return (
                                    <Product key={product.id}>
                                        <ProductDetailContainer>
                                            <Img src={product.image.url} />
                                            <ProductDetail>
                                                <ProductInfo>
                                                    <b>Product: </b> {product.name}
                                                </ProductInfo>
                                                <ProductInfo>
                                                    <b>ID: </b> {cart.created}
                                                </ProductInfo>
                                                <Color></Color>
                                                <ProductInfo>
                                                    <b>Size: </b> M
                                                </ProductInfo>
                                            </ProductDetail>
                                        </ProductDetailContainer>
                                        <PriceDetail>
                                            <AmountContainer>
                                                <Remove
                                                    style={{ cursor: 'pointer' }}
                                                    fontSize='large'
                                                    onClick={() =>
                                                        handleUpdateCart(
                                                            product.id,
                                                            product.quantity - 1
                                                        )
                                                    }
                                                />
                                                <Amount>{product.quantity}</Amount>
                                                <Add
                                                    style={{ cursor: 'pointer' }}
                                                    fontSize='large'
                                                    onClick={() =>
                                                        handleUpdateCart(
                                                            product.id,
                                                            product.quantity + 1
                                                        )
                                                    }
                                                />
                                            </AmountContainer>
                                            <Price>{product.line_total.formatted_with_code}</Price>
                                        </PriceDetail>
                                        <DeleteBtn onClick={() => handleRemoveProduct(product.id)}>
                                            <Clear fontSize='large' />
                                        </DeleteBtn>
                                    </Product>
                                )
                            })}
                    </ProductContainer>
                    <CheckoutContainer>
                        <CheckoutTitle>ORDER SUMMARY</CheckoutTitle>
                        <CheckoutItem>
                            <CheckoutText>Subtotal</CheckoutText>
                            <CheckoutPrice>{cart?.subtotal.formatted_with_code}</CheckoutPrice>
                        </CheckoutItem>
                        <CheckoutItem>
                            <CheckoutText>Estimated Shipping</CheckoutText>
                            <CheckoutPrice>0</CheckoutPrice>
                        </CheckoutItem>
                        <CheckoutItem>
                            <CheckoutText>Shipping Discount</CheckoutText>
                            <CheckoutPrice>- 0</CheckoutPrice>
                        </CheckoutItem>
                        <CheckoutItem type='total'>
                            <CheckoutText>Total</CheckoutText>
                            <CheckoutPrice>{cart?.subtotal.formatted_with_code}</CheckoutPrice>
                        </CheckoutItem>
                        <Button type='filled'>CHECKOUT NOW</Button>
                    </CheckoutContainer>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
