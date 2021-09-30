const homeModel = {
  namespace: 'home',
  state: 'this home',
  reducers: {
    setState(state: any, action: any) {
      return (state = action.payload);
    },
  },
};

export default homeModel;
