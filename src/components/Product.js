import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'

const StyledLink = styled(Link)`
    color: black;
`

const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: all 0.4s ease;
`

const Container = styled.div`
    height: 400px;
    background-color: #f5fbfd;
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 5px;

    &:hover ${Info} {
        opacity: 1;
    }

    ${mobile({
        margin: '10px',
    })}
`

const Circle = styled.div`
    border-radius: 50%;
    background-color: white;
    height: 250px;
    width: 250px;
    position: absolute;
`

const Img = styled.img`
    height: 75%;
    z-index: 2;
`

const Icon = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
        transform: scale(1.2);
        background-color: #e9f5f5;
    }
`

export default function Product({ product }) {
    const handleCheckProduct = (product) => {}

    return (
        <Container>
            <Circle />
            <Img src={product.image.url} />
            <Info>
                <StyledLink to={`/product/${product.id}`}>
                    <Icon onClick={() => handleCheckProduct(product)}>
                        <SearchOutlined />
                    </Icon>
                </StyledLink>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}
