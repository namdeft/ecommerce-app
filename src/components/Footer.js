import { Email, Facebook, GitHub, Instagram, LocalPhone, LocationOn } from '@material-ui/icons'
import styled from 'styled-components'
import { tablet, mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 40px;

    ${tablet({
        flexDirection: 'column',
        padding: '30px',
    })}

    ${mobile({
        flexDirection: 'column',
        padding: '12px 20px',
    })}
`

const First = styled.div`
    flex: 1;

    ${mobile({
        marginTop: '20px',
    })}
`

const Logo = styled.a`
    font-size: 50px;
    font-weight: 700;
    text-decoration: none;
    color: black;
`

const Description = styled.p`
    margin-top: 20px;
    font-size: 20px;
`

const Second = styled.div`
    flex: 1;
    padding: 0 50px;

    ${tablet({
        padding: '30px 0',
    })}

    ${mobile({
        padding: '0',
        marginTop: '20px',
    })}
`

const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
`

const ListItem = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 20px 0 0 0;
    font-size: 20px;
    padding: 0;

    ${tablet({
        fontSize: '23px',
    })}
`

const Item = styled.li`
    width: 50%;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const Third = styled.div`
    flex: 1;

    ${tablet({
        paddingBottom: '30px',
    })}

    ${mobile({
        marginTop: '20px',
    })}
`

const ContactContainer = styled.div`
    margin-top: 20px;
`

const ContactItem = styled.p`
    display: flex;
    align-items: center;
    margin-top: 14px;
    font-size: 20px;

    ${tablet({
        fontSize: '23px',
    })}
`

const Payment = styled.img`
    cursor: pointer;
    margin-top: 20px;
`

const Fourth = styled.div`
    flex: 1;

    ${mobile({
        marginTop: '20px',
    })}
`

const SocialIconContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const SocialIcon = styled.a`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-top: 12px;
    color: white;
    background-color: #${(props) => props.backgroundColor};
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.4s ease;

    ${tablet({
        marginRight: '37px',
    })}

    &:hover {
        transform: scale(1.2);
    }
`

export default function Footer() {
    return (
        <Container>
            <First>
                <Logo href='/'>DEFT.</Logo>
                <Description>
                    Sign up now and be the first to stay informed about new items, promotions,
                    in-store events, and various owners.
                </Description>
            </First>
            <Second>
                <Title>Useful Links</Title>
                <ListItem>
                    <Item>Information</Item>
                    <Item>Store Locator</Item>
                    <Item>FAQ</Item>
                    <Item>Profile</Item>
                    <Item>Membership</Item>
                    <Item>Accessibility</Item>
                    <Item>Privacy Policy</Item>
                    <Item>Coupons</Item>
                </ListItem>
            </Second>
            <Third>
                <Title>Contact</Title>
                <ContactContainer>
                    <ContactItem>
                        <LocationOn style={{ marginRight: '10px' }} />
                        Hanoi, Vietnam
                    </ContactItem>
                    <ContactItem>
                        <LocalPhone style={{ marginRight: '10px' }} />
                        0378159610
                    </ContactItem>
                    <ContactItem>
                        <Email style={{ marginRight: '10px' }} />
                        dinhnam2306@gmail.com
                    </ContactItem>
                    <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
                </ContactContainer>
            </Third>
            <Fourth>
                <Title>Social Account</Title>
                <SocialIconContainer>
                    <SocialIcon
                        backgroundColor='3B5999'
                        href='https://www.facebook.com/to.thich.ca/'
                    >
                        <Facebook fontSize='large' />
                    </SocialIcon>
                    <SocialIcon
                        backgroundColor='E4405F'
                        href='https://www.instagram.com/_namdeftt/'
                    >
                        <Instagram fontSize='large' />
                    </SocialIcon>
                    <SocialIcon backgroundColor='000000' href='https://github.com/namdeft'>
                        <GitHub fontSize='large' />
                    </SocialIcon>
                </SocialIconContainer>
            </Fourth>
        </Container>
    )
}
