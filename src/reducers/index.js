const initialState = {
    menu: [],
    loading: true,
    failed: false,
    items: []
}

const reduser = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_FAILED':
            return {
                ...state,
                menu: state.menu,
                loading: state.failed,
                failed: true
            };
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
                failed: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true,
                failed: false
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                price: item.price,
                id: item.id
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };

        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const itemTndex = state.items.findIndex(item => item.id === idx)
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemTndex),
                    ...state.items.slice(itemTndex + 1)
                ]
            }
        default:
            return state;
    }
}

export default reduser;