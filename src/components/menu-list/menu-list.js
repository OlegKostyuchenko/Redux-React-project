import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuFailed } from '../../actions';
import Spinner from '../spinner'
import Failed from '../failed';
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();
        const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(result => this.props.menuLoaded(result))
            .catch((reason) => {

                this.props = { failed: true };
                return console.log(this.props);
            })
    }
    componentDidUpdate() {
        if ({ failed: true }) {
            return <Failed />
        }
    }

    render() {
        const { menuItems, loading, failed } = this.props
        if (loading) {
            return <Spinner />;
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