const productsModel = {
  namespace: 'products',
  state: 'abc',
  reducers: {
    update(state: string, action: any) {
      return action.payload;
    },
  },
};

export default productsModel;
