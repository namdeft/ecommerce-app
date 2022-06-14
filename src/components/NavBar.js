import { Badge } from '@material-ui/core'
import { ArrowDropDown, Close, Menu, Search, ShoppingCartOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { tablet, mobile } from '../responsive'

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    ${mobile({
        display: 'none',
    })}
`

const StyledLinkMobile = styled(Link)`
    ${mobile({
        padding: '18px',
        textDecoration: 'none',
        fontSize: '18px',
        color: 'white',
        display: 'block',
        transition: '0.3s',
    })}
`

const Container = styled.div`
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ContainerMobile = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    overflow-x: hidden;
`

const ContainerMobileContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`

const Left = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    flex: 1;
`

const Language = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    ${tablet({
        fontSize: '23px',
    })}

    ${mobile({
        display: 'none',
    })}
`

const SearchContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    margin-left: 20px;
    padding: 5px;

    ${mobile({
        display: 'none',
    })}
`

const SearchContainerMobile = styled.div`
    display: none;

    ${mobile({
        display: 'inline',
    })}
`

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
`

const Center = styled.div`
    margin: 20px;
    flex: 1;
    display: flex;
    justify-content: center;
`
const Logo = styled.a`
    font-weight: 700;
    font-size: 50px;
    align-items: center;
    margin: 0 auto;
    color: black;
    text-decoration: none;
`

const Right = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    flex: 1;

    ${tablet({
        flex: 2,
    })}
    justify-content: flex-end;
`

const MenuItem = styled.div`
    margin: 0 4px 0 30px;
    font-size: 20px;
    cursor: pointer;

    ${tablet({
        marginLeft: '7px',
    })}
`

const MenuHamburger = styled.div`
    display: none;
    ${tablet({
        display: 'none',
    })}

    ${mobile({
        display: 'inline',
    })}
`

export default function NavBar({ cart }) {
    const [navBarExtended, setNavBarExtended] = useState(false)

    const handleTurnNavBar = () => {
        setNavBarExtended(true)
    }

    const handleOffNavBar = () => {
        setNavBarExtended(false)
    }

    const goHomePage = () => {
        setNavBarExtended(false)
    }

    return (
        <>
            {navBarExtended ? (
                <>
                    <Container>
                        <Left>
                            <Language>
                                EN
                                <ArrowDropDown />
                            </Language>
                            <SearchContainer>
                                <Input placeholder='Search...' />
                                <Search></Search>
                            </SearchContainer>
                            <SearchContainerMobile>
                                <Search />
                            </SearchContainerMobile>
                        </Left>
                        <Center>
                            <Logo href='/'>DEFT.</Logo>
                        </Center>
                        <Right>
                            <StyledLink to='/resgister'>
                                <MenuItem>REGISTER</MenuItem>
                            </StyledLink>
                            <StyledLink to='/login'>
                                <MenuItem>SIGN IN</MenuItem>
                            </StyledLink>
                            <StyledLink to='/shoppingcart'>
                                <MenuItem>
                                    <Badge
                                        badgeContent={cart?.total_items}
                                        color='primary'
                                        overlap='rectangular'
                                    >
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </MenuItem>
                            </StyledLink>
                            <MenuHamburger onClick={() => handleTurnNavBar()}>
                                <Menu />
                            </MenuHamburger>
                        </Right>
                    </Container>
                    <ContainerMobile>
                        <Close
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '30px',
                                color: 'white',
                            }}
                            onClick={() => handleOffNavBar()}
                        />
                        <ContainerMobileContent>
                            <StyledLinkMobile to='/' onClick={() => goHomePage()}>
                                HOME
                            </StyledLinkMobile>
                            <StyledLinkMobile to='/product'>PRODUCT</StyledLinkMobile>
                            <StyledLinkMobile to='/resgister'>REGISTER</StyledLinkMobile>
                            <StyledLinkMobile to='/login'>SIGN IN</StyledLinkMobile>
                            <StyledLinkMobile to='/shoppingcart'>CART</StyledLinkMobile>
                        </ContainerMobileContent>
                    </ContainerMobile>
                </>
            ) : (
                <Container navBarExtended={navBarExtended}>
                    <Left>
                        <Language>
                            EN
                            <ArrowDropDown />
                        </Language>
                        <SearchContainer>
                            <Input placeholder='Search...' />
                            <Search></Search>
                        </SearchContainer>
                        <SearchContainerMobile>
                            <Search />
                        </SearchContainerMobile>
                    </Left>
                    <Center>
                        <Logo href='/'>DEFT.</Logo>
                    </Center>
                    <Right>
                        <StyledLink to='/resgister'>
                            <MenuItem>REGISTER</MenuItem>
                        </StyledLink>
                        <StyledLink to='/login'>
                            <MenuItem>SIGN IN</MenuItem>
                        </StyledLink>
                        <StyledLink to='/shoppingcart'>
                            <MenuItem>
                                <Badge
                                    badgeContent={cart?.total_items}
                                    color='primary'
                                    overlap='rectangular'
                                >
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </StyledLink>
                        <MenuHamburger onClick={() => handleTurnNavBar()}>
                            <Menu />
                        </MenuHamburger>
                    </Right>
                </Container>
            )}
        </>
    )
}
