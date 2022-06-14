import styled from 'styled-components'
import Announcement from '../components/Announcement'
import NavBar from '../components/NavBar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useState } from 'react'
import { mobile } from '../responsive'

const Container = styled.div``

const Title = styled.h1`
    margin: 25px;
    font-size: 50px;
`

const FilterContainer = styled.div`
    margin: 40px 25px;
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection: 'column',
        margin: '10px 25px',
    })}
`

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${mobile({
        justifyContent: 'normal',
        marginTop: '10px',
    })}
`

const FilterTitle = styled.span`
    font-size: 25px;
    font-weight: 500;
    margin-right: 20px;
`

const FilterSelect = styled.select`
    padding: 10px 15px;
    margin-right: 20px;
    font-size: 16px;
`

const FilterOptions = styled.option``

export default function ProductList({ products, cart }) {
    const [filters, setFilters] = useState({})

    return (
        <Container>
            <Announcement />
            <NavBar cart={cart} />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Filter Products:</FilterTitle>
                    <FilterSelect name='Color' defaultValue={'DEFAULT'}>
                        <FilterOptions disabled value='DEFAULT'>
                            Color
                        </FilterOptions>
                        <FilterOptions>Black</FilterOptions>
                        <FilterOptions>White</FilterOptions>
                        <FilterOptions>Red</FilterOptions>
                        <FilterOptions>Beige</FilterOptions>
                        <FilterOptions>Green</FilterOptions>
                    </FilterSelect>
                    <FilterSelect name='Size' defaultValue={'DEFAULT'}>
                        <FilterOptions disabled value='DEFAULT'>
                            Size
                        </FilterOptions>
                        <FilterOptions>L</FilterOptions>
                        <FilterOptions>S</FilterOptions>
                        <FilterOptions>M</FilterOptions>
                    </FilterSelect>
                </Filter>
                <Filter>
                    <FilterTitle>Filter Sorts:</FilterTitle>
                    <FilterSelect defaultValue={'DEFAULT'}>
                        <FilterOptions disabled value='DEFAULT'>
                            Sort
                        </FilterOptions>
                        <FilterOptions>Price ↑</FilterOptions>
                        <FilterOptions>Price ↓</FilterOptions>
                    </FilterSelect>
                </Filter>
            </FilterContainer>
            <Products products={products} />
            <Newsletter />
            <Footer />
        </Container>
    )
}
