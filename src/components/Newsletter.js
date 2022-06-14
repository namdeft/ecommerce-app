import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { tablet, mobile } from '../responsive'

const Container = styled.div`
    margin-top: 20px;
    background-color: #fcf5f5;
    text-align: center;
    padding: 140px 0;

    ${tablet({
        marginTop: '0px',
    })}

    ${mobile({
        margin: '0',
    })}
`

const Title = styled.h1`
    font-size: 80px;

    ${mobile({
        fontSize: '64px',
    })}
`

const Description = styled.p`
    font-size: 28px;
    font-weight: 300;
    margin-top: 20px;

    ${tablet({
        marginTop: '36px',
    })}

    ${mobile({
        fontSize: '20px',
    })}
`

const EmailContainer = styled.div`
    width: 50%;
    margin: 23px auto;
    display: flex;

    ${tablet({
        width: '64%',
        margin: '57px auto 0 auto',
    })}

    ${mobile({
        width: '90%',
    })}
`

const EmailInput = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;
    outline: none;
    font-size: 18px;
    padding: 14px;
`

const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    padding: 0 36px;
    cursor: pointer;
`

export default function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <EmailContainer>
                <EmailInput placeholder='Your email...' />
                <Button>
                    <Send />
                </Button>
            </EmailContainer>
        </Container>
    )
}
