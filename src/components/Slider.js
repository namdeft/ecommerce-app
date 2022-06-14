import { ArrowBackIosOutlined, ArrowForwardIosOutlined, ArrowRight } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { tablet, mobile } from '../responsive'

const StyledLink = styled(Link)`
    max-width: 250px;
    text-decoration: none;

    ${tablet({
        maxWidth: '66%',
    })}

    ${mobile({
        maxWidth: 'none',
    })}
`

const Container = styled.div`
    height: 100vh;
    ${tablet({
        height: '82vh',
    })}
    display: flex;
    position: relative;
    overflow: hidden;
    padding-bottom: 20px;

    ${mobile({
        paddingBottom: '46px',
    })}
`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    background-color: #${(props) => props.bg};
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: ease 1s;

    ${tablet({
        height: '100%',
    })}

    ${mobile({
        flexDirection: 'column',
        paddingBottom: '46px',
    })}
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;

    ${tablet({
        display: 'flex',
        alignItems: 'center',
    })}

    ${mobile({
        height: '46%',
    })}
`

const Img = styled.img`
    height: 80%;

    ${tablet({
        height: '68%',
    })}
    display: block;
    margin: 0 auto;

    ${mobile({
        height: '100%',
    })}
`

const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 50px;
    ${tablet({
        padding: 0,
    })}
`

const Title = styled.h1`
    padding-bottom: 40px;
    font-size: 80px;

    ${mobile({
        paddingBottom: '23px',
        fontSize: '48px',
    })}
`

const Description = styled.p`
    padding-bottom: 40px;
    font-size: 20px;
    letter-spacing: 4px;

    ${mobile({
        paddingBottom: '23px',
        fontSize: '18px',
    })}
`

const Btn = styled.button`
    width: 100%;
    padding: 10px 0;
    background-color: white;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${tablet({
        maxWidth: '100%',
    })}
`

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)

    const changeSlide = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        if (direction === 'right') {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => changeSlide('left')}>
                <ArrowBackIosOutlined />
            </Arrow>
            <Wrapper>
                {sliderItems &&
                    sliderItems.length > 0 &&
                    sliderItems.map((item) => {
                        return (
                            <Slide key={item.id} bg={item.bgColor} slideIndex={slideIndex}>
                                <ImgContainer>
                                    <Img src={item.img}></Img>
                                </ImgContainer>
                                <InfoContainer>
                                    <Title>{item.title}</Title>
                                    <Description>{item.description}</Description>
                                    <StyledLink to='/product'>
                                        <Btn>
                                            SHOP NOW
                                            <ArrowRight />
                                        </Btn>
                                    </StyledLink>
                                </InfoContainer>
                            </Slide>
                        )
                    })}
            </Wrapper>
            <Arrow direction='right' onClick={() => changeSlide('right')}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
}
