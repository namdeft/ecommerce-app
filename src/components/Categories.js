import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { categoriesFirstRow, categoriesSecondRow } from '../data'
import { tablet, mobile } from '../responsive'

const StyledLink = styled(Link)``

const Container = styled.div`
    padding: 30px 40px;

    ${tablet({
        padding: 0,
    })}

    ${mobile({
        padding: 0,
    })}
`

const FirstRow = styled.div`
    display: flex;
    ${tablet({
        flexDirection: 'column',
    })}

    ${mobile({
        flexDirection: 'column',
    })}
`

const SecondRow = styled.div`
    display: flex;

    ${tablet({
        flexDirection: 'column',
    })}

    ${mobile({
        flexDirection: 'column',
    })}
`

const Item = styled.div`
    height: 70vh;
    flex: 1;
    margin: 5px;
    position: relative;

    ${tablet({
        flex: 'none',
        height: '81vh',
        margin: 0,
    })}

    ${mobile({
        flex: 'none',
        margin: 0,
    })}
`

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const Title = styled.h1`
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50%;
    top: 40%;
    text-align: center;
    ${tablet({
        top: '36%',
        fontSize: '46px',
    })}
`

const Button = styled.button`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50%;
    top: 55%;
    margin: 0 auto;
    width: 200px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    background-color: white;
    color: gray;
    border: none;
    cursor: pointer;
    ${tablet({
        top: '59%',
        height: '73px',
        width: '40%',
        fontSize: '23px',
        fontWeight: '600',
    })}
`

export default function Catergories() {
    return (
        <Container>
            <FirstRow>
                {categoriesFirstRow &&
                    categoriesFirstRow.map((item) => {
                        return (
                            <Item key={item.id} row='first'>
                                <Img src={item.img} />
                                <Title>{item.title}</Title>
                                <StyledLink to='/product'>
                                    <Button>SHOW NOW</Button>
                                </StyledLink>
                            </Item>
                        )
                    })}
            </FirstRow>
            <SecondRow>
                {categoriesSecondRow &&
                    categoriesSecondRow.map((item) => {
                        return (
                            <Item key={item.id} row='second'>
                                <Img src={item.img} />
                                <Title>{item.title}</Title>
                                <StyledLink to='/product'>
                                    <Button>SHOW NOW</Button>
                                </StyledLink>
                            </Item>
                        )
                    })}
            </SecondRow>
        </Container>
    )
}
