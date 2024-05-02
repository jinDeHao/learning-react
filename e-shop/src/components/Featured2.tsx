import freeShippingImg from '../assets/freeShipping.jpeg'
import blackFriday from '../assets/blackFriday.jpg'

export default function Featured2() {
	return (
		<div className="Featured2">
			<section className="Featured2_section">
				<img src={freeShippingImg}></img>
				<div className='Featured2_section_layer'>
					<h1>Free <br></br>Shipping</h1>
					<p>Special for orders above $500.00 worldwide<br>
					</br> Available throughout May & June 2023.</p>
					<button>Shop Now</button>
				</div>
			</section>
			<section className="Featured2_section">
				<img src={blackFriday}></img>
				<div className='Featured2_section_layer'>
					<h1>Black Friday<br></br> Clearance</h1>
					<p>Get promo up to 80% for all products.</p>
					<button>Shop Now</button>
				</div>
			</section>
		</div>
	)
}
