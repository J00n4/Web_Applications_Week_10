import {Link} from 'react-router-dom';

function Menu() {
    return (
        <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>           
        </div>
    )
}

export default Menu
