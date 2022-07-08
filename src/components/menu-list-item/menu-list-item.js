import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';


const MenuListItem = ({ menuItem }) => {
    const { title, price, url, category } = menuItem;
    function clickProduct(e) {
        e.preventDefault();
        <Link className="header__link" to='/product' />
        console.log(1);
    }
    return (

        <li className="menu__item" >
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}</span></div>
            <button className="menu__btn" onClick={clickProduct} >Add to cart</button>
        </li>


    )
}

export default MenuListItem;