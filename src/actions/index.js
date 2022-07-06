const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
};

const menuFailed = () => {
    return {
        type: 'MENU_FAILED'
    }
};

export {
    menuLoaded,
    menuRequested,
    menuFailed
};