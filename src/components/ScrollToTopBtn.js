import { KeyboardArrowUp } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 57px;
    height: 57px;
    border-radius: 50%;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${mobile({
        bottom: '30px',
        right: '30px',
        zIndex: '10',
    })}
`

export default function ScrollToTopBtn() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
    })

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <Container onClick={() => handleScrollTop()} style={{ display: visible ? 'flex' : 'none' }}>
            <KeyboardArrowUp style={{ color: 'white', fontSize: '36px' }} />
        </Container>
    )
}
