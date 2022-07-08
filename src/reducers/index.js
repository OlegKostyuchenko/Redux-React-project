const initialState = {
    menu: [],
    loading: true,
    failed: false
}

const reduser = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'MENU_FAILED':
            return {
                menu: state.menu,
                loading: state.failed,
                failed: true
            };
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                failed: false
            };
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true,
                failed: false
            };

        default:
            return state;
    }
}

export default reduser;