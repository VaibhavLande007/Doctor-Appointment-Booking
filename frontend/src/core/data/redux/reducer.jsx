const rootReducer = (state, action) => {
  switch (action.type) {
    case 'MOBILE_SIDEBAR':
      return { ...state, mobileSidebar: action.payload };
  }
}