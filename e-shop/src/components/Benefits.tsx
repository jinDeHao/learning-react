import ResponsiveIcon from '../assets/responsive.svg'
import SecureIcon from '../assets/secure.svg'
import ShippingIcon from '../assets/shipping.svg'
import TransparentIcon from '../assets/transparent.svg'

export default function Benefits() {
	return (
		<div className="Benefits">
			<ul className="Benefits_ul">
				<li>
					<img src={ResponsiveIcon}></img>
					<h4>Responsive</h4>
					<p>Costumers service available 24/7</p>
				</li>
				<li>
					<img src={SecureIcon}></img>
					<h4>Secure</h4>
					<p>Certified marketplace since 2017</p>
				</li>
				<li>
					<img src={ShippingIcon}></img>
					<h4>Shipping</h4>
					<p>Free, fast, and reliable worldwide</p>
				</li>
				<li>
					<img src={TransparentIcon}></img>
					<h4>Transparent</h4>
					<p>Hassle-free return policy</p>
				</li>
			</ul>
		</div>
	)
}
