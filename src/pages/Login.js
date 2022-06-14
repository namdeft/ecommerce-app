import { EmailOutlined, KeyboardArrowLeft, LockOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { tablet, mobile } from '../responsive'

const BackBtn = styled(Link)`
    position: fixed;
    top: 50px;
    left: 50px;
    background-color: white;
    width: 57px;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: teal;

    ${tablet({
        top: '20px',
        left: '20px',
    })}

    ${mobile({
        top: '20px',
        left: '20px',
    })}
`

const StyledLink = styled(Link)`
    color: black;
    text-decoration: underline;
    margin-top: 16px;
    font-size: 18px;
    cursor: pointer;
    margin: 4px 0;

    ${tablet({
        fontSize: '20px',
    })}
`

const Container = styled.div`
    background-color: #f5fbfd;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    background-color: white;
    padding: 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 12px;

    ${tablet({
        width: '66%',
    })}

    ${mobile({
        width: '63%',
    })}
`

const Title = styled.h1`
    margin-bottom: 20px;

    ${tablet({
        marginBottom: '30px',
    })}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    padding: 5px;
    border: none;
    outline: none;
    font-size: 18px;
    width: 100%;
    margin-left: 5px;

    ${tablet({
        fontSize: '23px',
    })}
`

const InputSubmit = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: white;
    border: 2px solid teal;
    border-radius: 30px;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.4s ease;

    ${tablet({
        fontSize: '23px',
        marginTop: '36px',
    })}

    &:hover {
        color: white;
        background-color: teal;
    }
`

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 23px;

    ${tablet({
        flexDirection: 'row',
        marginTop: '36px',
        justifyContent: 'space-between',
    })}
`

export default function Login() {
    return (
        <Container>
            <BackBtn to='/'>
                <KeyboardArrowLeft style={{ color: 'white', fontSize: '30px' }} />
            </BackBtn>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <InputContainer>
                        <EmailOutlined />
                        <Input placeholder='Email' type='email' />
                    </InputContainer>
                    <InputContainer>
                        <LockOutlined />
                        <Input placeholder='Password' type='password' />
                    </InputContainer>
                </Form>
                <InputSubmit type='submit' value='Login'></InputSubmit>
                <LinkContainer>
                    <StyledLink to='/resgister'>FORGOT PASSWORD ?</StyledLink>
                    <StyledLink to='/resgister'>CREATE A NEW ACCOUNT</StyledLink>
                </LinkContainer>
            </Wrapper>
        </Container>
    )
}
