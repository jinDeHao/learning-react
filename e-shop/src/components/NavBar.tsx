import menu from '../assets/menu.svg'
const NavBar = () =>
    <div className="NavBar">
        <nav>
            <ul>
                <li><img src={menu} alt="" /><>All Categories</></li>
                <li>Products</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li>LIMITED SALE</li>
                <li>Best Seller</li>
                <li>New Arrival</li>
            </ul>
        </nav>
    </div>

export default NavBar
