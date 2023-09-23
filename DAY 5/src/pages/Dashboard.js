import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from './authActions';
import '../assets/css/Dashboard.css'; // Import your dashboard CSS for styling
import { selectUser } from '../redux/userSlice';
export const Dashboard = () => {
    // const user = useSelector((state) => state.user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log(user)
    const handleLogout = () => {
        // Dispatch a logout action
        dispatch(logoutUser());
        // Redirect to the login page (you can use react-router-dom for this)
        navigate('/');
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="logo"></div>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/academic">Houses</Link></li>
                    <li><Link to="/application">Location</Link></li>
                    <li><Link to="/application">Price</Link></li>
                    <li><Link to="/application">Help center</Link></li>
                </ul>
            </div>
            <div className="content">
                <header>
                    <div className="top-nav">
                        <div className="welcome">Welcome, {user.email}</div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </header>
                <main>
                    {/* Your dashboard content goes here */}
                    <h1>Welcome to Your Dashboard</h1>
                    <p>This is where you can manage your information.</p>
                    <section className="product-management">
                        <div className="product-card">
                            {/* <img src="product1.jpg" alt="Product 1" class="product-image"> */}
                            <h2 className="product-title">HOUSE 1</h2>
                            <p className="product-description">Description of HOUSE 1</p>
                            <p className="product-price">$15,000</p>
                        </div>

                        <div className="product-card">
                            {/* <img src="product2.jpg" alt="Product 2" class="product-image"> */}
                            <h2 className="product-title">HOUSE 2</h2 >
                            <p className="product-description">Description of HOUSE 2</p>
                            <p class="product-price">$29,000</p>
                        </div>

                        <div class="product-card">
                            {/* <img src="product3.jpg" alt="Product 3" class="product-image"> */}
                            <h2 class="product-title">HOUSE 3</h2>
                            <p class="product-description">Description of HOUSE 3</p>
                            <p class="product-price">$39,000</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

