const category = {
  namespace: 'category',
  state: [1, 3, 4],
  reducers: {
    updateArr(state: any, action: any) {
      return [...state, action.payload];
    },
  },
};

export default category;
