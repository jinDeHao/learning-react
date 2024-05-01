import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'

import locationIcon from '../assets/location.svg'
import phoneIcon from '../assets/phone.svg'

export default function PreNav1() {
	return (
		<div id="PreNav1">
			<ul id="PreNav1_ul_1">
				<li id="PreNav1_li"><img src={locationIcon}></img>123 Main Street, Anytown USA</li>
				<hr className='horisental_line'></hr>
				<li id="PreNav1_li"><img src={phoneIcon}></img>+1(555) 123-4567</li>
			</ul>
			<ul id="PreNav1_ul_2">
				<li id="PreNav1_li">
					<select className='selectionNav'>
						<option>MAD</option>
						<option>USD</option>
						<option>ERU</option>
					</select>
				</li>
				<hr className='horisental_line'></hr>
				<li id="PreNav1_li">
					<select className='selectionNav'>
						<option value="EN">🇬🇧&emsp;Enlish</option>
						<option value="AR">🇲🇦&emsp;Arabic</option>
						<option value="FR">🇫🇷&emsp;Frensh</option>
					</select>
				</li>
				<hr className='horisental_line'></hr>
				<li id="PreNav1_li">
					<ul id="PreNav1_icons_ul">
						<li><img src={facebookIcon} /></li>
						<li><img src={instagramIcon} /></li>
						<li><img src={twitterIcon} /></li>
					</ul>
				</li>
			</ul>
		</div>
	)
}
