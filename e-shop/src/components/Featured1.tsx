import Right from '../assets/buttons/right.svg'
import Left from '../assets/buttons/left.svg'
import star from '../assets/star.svg'
import halfStar from '../assets/half-star.svg'
import product0Image from '../assets/products/product-0.jpg'
import product1Image from '../assets/products/product-1.jpg'
import product2Image from '../assets/products/product-2.jpg'
import product3Image from '../assets/products/product-3.jpg'
import favorite from '../assets/buttons/add-to-favorite.svg'
import cart from '../assets/buttons/add-to-cart.svg'
import share from '../assets/buttons/share.svg'
import { useRef } from 'react';

const products_images = [product0Image, product1Image, product2Image, product3Image]
const Featured1 = () => {
    const scrollRef = useRef(null);
    const handleNav = (direction: string) => {
        if (direction === 'left') {
            scrollRef ? (scrollRef.current.scrollLeft -= 200) : null;
        } else {
            scrollRef ? (scrollRef.current.scrollLeft += 200) : null;
        }
    }
    function setStars(num: number) {
        const stars = [];
        for (let i = 1; i <= num; i++) {
            stars.push(<img src={star} alt="" />)
        }
        if (!Number.isInteger(num)) {
            stars.push(<img src={halfStar} alt="" />)
        }
        return stars;
    }
    const article = [];
    for (let i = 0; i <= 10; i++) {
        article.push(<>
            <div className='product'>
                <img className='product-image' src={products_images[i % 4]} alt="" />
                <div className='product-options'>
                    <img src={cart} alt="" />
                    <img src={favorite} alt="" />
                    <img src={share} alt="" />
                </div>
            </div>

            <div className='product-desc'>Camera
                <h4>CANON lens {i}</h4>
                <div>
                    {setStars(1 + 0.5 * i % 4).map((item) => (
                        item
                    ))}
                </div>
                <span className="product-price">$1097.09</span>
            </div></>)
    }

    return <div className="Featured1">
        <h3>Featured Products</h3>
        <div className='Featured-Container'>
            <img className='Button' onClick={() => handleNav('left')} src={Left} alt="" />
            <section className="Featured-Products" ref={scrollRef}>
                {article.map((item, index) => (
                    <article key={index}>{item}</article>
                ))}
            </section>
            <img className='Button' onClick={() => handleNav('right')} src={Right} alt="" />
        </div>
    </div >;
}

export default Featured1;
