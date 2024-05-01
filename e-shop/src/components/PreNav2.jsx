import sreach from '../assets/search.svg'
const PreNav2 = () =>
    <div className="PreNav2">
        <h3>e-shop<span>.</span></h3>
        <div className="search-bar" >
            <input type="text" placeholder="Search Products ..." />
            <a href="">
                <img src={sreach} alt="" />
            </a>
        </div>
        <div className="properties">
            <div>
                <div className="key">Cart</div>
                <div className="val">$ 150.00</div>
            </div>
            <div>
                <div className="key">User</div>
                <div className="val">Account</div>
            </div>
        </div>
    </div>;

export default PreNav2;
