import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga laboriosam magni, id aliquam beatae quas tempore nesciunt perspiciatis, ea repellat nemo. Dolor enim iste sint pariatur non, est provident nulla qui commodi et. In, consequuntur ipsa molestiae, atque nesciunt quisquam eos dolor libero, fugiat officiis vitae eius reiciendis error. Recusandae!</p>
            <p>Go back to</p><Link to="/register">Register</Link>
        </div>
    );
};

export default Terms;