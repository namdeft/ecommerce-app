import styled from 'styled-components'
import { tablet, mobile } from '../responsive'

const Container = styled.div`
    height: 45px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    ${tablet({
        fontSize: '23px',
    })}
    font-weight: 500;
`

export default function Announcement() {
    return <Container>Super Deal! Free Shipping on Orders Over $50</Container>
}
