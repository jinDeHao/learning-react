import HeroImg from '../assets/Hero.png'

export default function Hero() {
	return (
		<div className="Hero">
			<img className="HeroImg" src={HeroImg}></img>
			<div className='HeroContent'>
				<h1>Your One-Stop<br></br> Electronic Market</h1>
				<p>Welcome to e-shop a place where you can buy<br></br>everything electronics related. Sales everyday!</p>
				<button>Shop Now</button>
			</div>
		</div>
	)
}
