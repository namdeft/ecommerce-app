import {
    AccountCircleOutlined,
    EmailOutlined,
    KeyboardArrowLeft,
    LockOutlined,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
        fontSize: '23px',
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

const Agreement = styled.span`
    margin-bottom: 36px;
    margin-top: 14px;
    display: flex;
    align-items: center;

    ${tablet({
        margin: '18px 0',
    })}
`

const InputCheckbox = styled.input`
    margin-right: 10px;

    ${tablet({
        marginRight: '23px',
        marginLeft: '5px',
        transform: 'scale(1.5)',
    })}
`

const UnderlineText = styled.span`
    text-decoration: underline;
    margin-left: 5px;
    cursor: pointer;
`

const InputSubmit = styled.input`
    width: 100%;
    padding: 10px;
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
        marginTop: '23px',
    })}

    &:hover {
        color: white;
        background-color: teal;
    }
`

export default function Resgister() {
    return (
        <Container>
            <BackBtn to='/'>
                <KeyboardArrowLeft style={{ color: 'white', fontSize: '30px' }} />
            </BackBtn>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <InputContainer>
                        <AccountCircleOutlined />
                        <Input placeholder='Username' type='text' />
                    </InputContainer>
                    <InputContainer>
                        <EmailOutlined />
                        <Input placeholder='Email' type='email' />
                    </InputContainer>
                    <InputContainer>
                        <LockOutlined />
                        <Input placeholder='Password' type='password' />
                    </InputContainer>
                    <InputContainer>
                        <LockOutlined />
                        <Input placeholder='Confirm Password' type='password' />
                    </InputContainer>
                </Form>
                <Agreement>
                    <InputCheckbox type='checkbox' /> I agree to the{' '}
                    <UnderlineText>term &amp; conditions</UnderlineText>
                </Agreement>
                <InputSubmit type='submit' value='Resgister'></InputSubmit>
            </Wrapper>
        </Container>
    )
}
