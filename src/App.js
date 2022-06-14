import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Resgister from './pages/Register'
import Login from './pages/Login'
import ShoppingCart from './pages/ShoppingCart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import { useEffect, useState } from 'react'
import { commerce } from './lib/commerce'

export default function App() {
    const [products, setProducts] = useState()
    const [cart, setCart] = useState()

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProducts(data)
    }

    const fetchCart = async () => {
        const cart = await commerce.cart.refresh()
        setCart(cart)
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity)
        setCart(item.cart)
    }

    const handleUpdateCart = async (productId, quantity) => {
        const res = await commerce.cart.update(productId, { quantity })
        setCart(res.cart)
    }

    const handleRemoveProduct = async (productId) => {
        const res = await commerce.cart.remove(productId)
        setCart(res.cart)
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home products={products} cart={cart} />}></Route>
                <Route path='resgister' element={<Resgister />} />
                <Route path='login' element={<Login />} />
                <Route
                    path='shoppingcart'
                    element={
                        <ShoppingCart
                            cart={cart}
                            handleRemoveProduct={handleRemoveProduct}
                            handleUpdateCart={handleUpdateCart}
                        />
                    }
                />
                <Route
                    path='product'
                    exact
                    element={<ProductList products={products} cart={cart} />}
                />
                <Route
                    path='product/:id'
                    element={
                        <Product
                            products={products}
                            handleAddToCart={handleAddToCart}
                            cart={cart}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}
