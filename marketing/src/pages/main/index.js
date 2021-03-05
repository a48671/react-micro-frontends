import React from 'react';
import { Link } from 'react-router-dom';

export function Main() {

    return (
        <div>
            <h1>Index Page</h1>
            <Link to="/prices">Prices</Link>
        </div>
    );
}
