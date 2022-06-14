import NavBar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Catergories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ScrollToTopBtn from '../components/ScrollToTopBtn'
import Loading from '../components/Loading'

export default function Home({ products, cart }) {
    return (
        <>
            <Announcement />
            <NavBar cart={cart} />
            <Slider />
            <Catergories />
            <Products products={products} />
            <Newsletter />
            <Footer />
            <ScrollToTopBtn />
        </>
    )
}
