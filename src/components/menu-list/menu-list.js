import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';

import { menuLoaded, menuRequested, menuFailed, addedToCart } from '../../actions';

import Spinner from '../spinner'
import Failed from '../failed';

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();

        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(result => this.props.menuLoaded(result))
            .catch(this.props.menuFailed)

    }

    render() {
        const { menuItems, loading, failed, addedToCart } = this.props

        if (loading) {
            return <Spinner />
        }

        if (failed) {
            return <Failed />
        }



        return (
            <div>
                <ul className="menu__list">
                    {
                        menuItems.map(menuItem => {
                            return <MenuListItem
                                key={menuItem.id}
                                onAddToCart={() => addedToCart(menuItem.id)}
                                menuItem={menuItem} />
                        })

                    },


                </ul>
            </div>


        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        failed: state.failed
    }
}

const mapDispatchToProps = {
    menuRequested,
    menuLoaded,
    menuFailed,
    addedToCart
}
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));