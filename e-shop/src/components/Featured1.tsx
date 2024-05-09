import Right from '../assets/buttons/right.svg'
import Left from '../assets/buttons/left.svg'
import Iphone from '../assets/products/IPHONE.webp'

const Featured1 = () =>
    <div className="Featured1">
        <h3>Featured Products</h3>
        <div className='Featured-Container'>
            <img src={Left} id="Featured1ButtonLeft" alt="" />
            <section className="Featured-Products">
                <article>
                    <img className='product-image' src={Iphone} alt="" />
                    <p className='product-desc'>Phone
                        <h4>iphone 16 pro</h4>
                        <span className="product-price">$1097.09</span>
                    </p>
                </article>
                <article>
                    <img className='product-image' src={Iphone} alt="" />
                    <p className='product-desc'>Phone
                        <h4>iphone 16 pro</h4>
                        <span className="product-price">$1097.09</span>
                    </p>
                </article>
                <article>
                    <img className='product-image' src={Iphone} alt="" />
                    <p className='product-desc'>Phone
                        <h4>iphone 16 pro</h4>
                        <span className="product-price">$1097.09</span>
                    </p>
                </article>
                <article>
                    <img className='product-image' src={Iphone} alt="" />
                    <p className='product-desc'>Phone
                        <h4>iphone 16 pro</h4>
                        <span className="product-price">$1097.09</span>
                    </p>
                </article>
                <article>
                    <img className='product-image' src={Iphone} alt="" />
                    <p className='product-desc'>Phone
                        <h4>iphone 16 pro</h4>
                        <span className="product-price">$1097.09</span>
                    </p>
                </article>
            </section>
            <img src={Right} id="Featured1ButtonRight" alt="" />
        </div>
    </div >

export default Featured1;
