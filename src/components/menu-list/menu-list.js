import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { Route, Routes } from 'react-router-dom';
import { menuLoaded, menuRequested, menuFailed } from '../../actions';
import { ProductPage } from '../pages';
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
        const { menuItems, loading, failed } = this.props

        if (loading) {
            return <Spinner />
        }

        if (failed) {
            return <Failed />
        }



        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem} />
                    })

                }

            </ul>

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
    menuFailed
}
export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));