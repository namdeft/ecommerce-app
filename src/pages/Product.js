import { Add, Remove } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import { tablet, mobile } from '../responsive'

import { commerce } from '../lib/commerce'
import Loading from '../components/Loading'

const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;

    ${tablet({
        flexDirection: 'column',
        padding: '54px 20px 30px 20px',
    })}

    ${mobile({
        flexDirection: 'column',
        padding: '20px',
    })}
`

const ImgContainer = styled.div`
    flex: 1;
    background-color: #f5fbfd;
`

const Img = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    margin-left: 40px;

    ${tablet({
        margin: '30px 0',
    })}

    ${mobile({
        margin: '30px 0 20px 0',
    })}
`

const Title = styled.h1`
    font-size: 40px;
    font-weight: 500;

    ${tablet({
        fontSize: '54px',
    })}
`

const Description = styled.p`
    font-size: 18px;
    margin: 30px 0px 40px 0;

    ${tablet({
        fontSize: '23px',
    })}
`

const Price = styled.span`
    font-size: 50px;
    font-weight: 300;

    ${mobile({
        fontSize: '40px',
    })}
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 64%;
    margin-top: 40px;

    ${tablet({
        width: '100%',
        margin: '40px 0',
    })}

    ${mobile({
        width: '100%',
    })}
`

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 23px;
    font-weight: 300;
    margin-right: 12px;

    ${tablet({
        fontSize: '28px',
        marginRight: '20px',
    })}
`

const FilterColor = styled.div`
    background-color: ${(props) => props.color};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    transition: all 0.4s ease;
    cursor: pointer;

    ${tablet({
        width: '40px',
        height: '40px',
        marginRight: '18px',
    })}

    &:hover {
        transform: scale(1.2);
    }
`

const FilterSelectSize = styled.select`
    padding: 10px 15px;

    ${tablet({
        padding: '16px 28',
        fontSize: '20px',
    })}
`

const FilterOptionsSize = styled.option``

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 64%;
    margin-top: 40px;

    ${tablet({
        width: '100%',
        marginTop: '50px',
    })}

    ${mobile({
        width: '100%',
    })}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 23px;
    font-weight: 700;
`

const Amount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 40px;
    margin: 0 10px;
    border: 1px solid teal;
    border-radius: 10px;

    ${tablet({
        width: '50px',
        height: '45px',
        margin: '0 23px',
        fontSize: '28px',
    })}
`

const Button = styled.button`
    padding: 16px 20px;
    background-color: white;
    border: 2px solid teal;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;

    ${tablet({
        padding: '20px 39px',
        fontSize: '20px',
    })}

    &:hover {
        background-color: teal;
        color: white;
    }
`

export default function Product({ handleAddToCart, cart }) {
    const [product, setProduct] = useState()
    const [quantity, setQuantity] = useState(1)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    const fetchProduct = async () => {
        const res = await commerce.products.retrieve(`${id}`)
        setProduct(res)
    }

    useEffect(() => {
        fetchProduct()
    }, [id])

    useEffect(() => {
        product ? setLoading(false) : setLoading(true)
    }, [product])

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
    }

    return (
        <Container>
            <Announcement />
            <NavBar cart={cart} />
            <Wrapper>
                {loading === false && product && (
                    <>
                        <ImgContainer>
                            <Img src={product.image.url} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{product.name}</Title>
                            <Description
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            ></Description>
                            <Price>{product.price.formatted_with_code}</Price>
                            <FilterContainer>
                                <Filter>
                                    <FilterTitle>Color</FilterTitle>
                                    {product.variant_groups?.length
                                        ? product.variant_groups[1].options?.map((color) => {
                                              return (
                                                  <FilterColor
                                                      color={color.name}
                                                      key={color.id}
                                                  ></FilterColor>
                                              )
                                          })
                                        : null}
                                </Filter>
                                <Filter>
                                    <FilterTitle>Size</FilterTitle>
                                    <FilterSelectSize>
                                        {product.variant_groups?.length
                                            ? product.variant_groups[0].options?.map((size) => {
                                                  return (
                                                      <FilterOptionsSize key={size.id}>
                                                          {size.name}
                                                      </FilterOptionsSize>
                                                  )
                                              })
                                            : null}
                                    </FilterSelectSize>
                                </Filter>
                            </FilterContainer>
                            <AddContainer>
                                <AmountContainer>
                                    <Remove
                                        style={{ cursor: 'pointer' }}
                                        fontSize='large'
                                        onClick={() => decreaseQuantity()}
                                    />
                                    <Amount>{quantity}</Amount>
                                    <Add
                                        style={{ cursor: 'pointer' }}
                                        fontSize='large'
                                        onClick={() => increaseQuantity()}
                                    />
                                </AmountContainer>
                                <Button onClick={() => handleAddToCart(product.id, quantity)}>
                                    ADD TO CART
                                </Button>
                            </AddContainer>
                        </InfoContainer>
                    </>
                )}
                {loading === true && <Loading />}
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
