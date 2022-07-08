import React from 'react';
import { connect } from 'react-redux';

const ProductItem = ({ menuItem }) => {
    const { title, price, url, category } = menuItem;
    return (
        <div>
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}</span></div>
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        failed: state.failed
    }
}

export default connect(mapStateToProps)(ProductItem);