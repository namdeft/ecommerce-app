import styled from 'styled-components'
import Product from './Product'
import { tablet, mobile } from '../responsive'
import { useEffect, useState } from 'react'
import Loading from './Loading'

const Container = styled.div`
    padding: 20px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ${tablet({
        padding: '20px 0',
    })}

    ${mobile({
        padding: '10px 0',
    })}
`
const Title = styled.h1`
    padding: 0 40px;

    ${mobile({
        padding: '30px 0 20px',
        textAlign: 'center',
        fontWeight: '600',
    })}
`

export default function Products({ products }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        products ? setLoading(false) : setLoading(true)
    }, [products])

    return (
        <>
            <Title>Popular Products</Title>
            <Container>
                {loading === false &&
                    products &&
                    products.map((product) => {
                        return <Product product={product} key={product.id} />
                    })}
                {loading === true && <Loading />}
            </Container>
        </>
    )
}
