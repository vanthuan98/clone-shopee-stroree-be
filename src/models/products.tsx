import getProducts from '@/services/getProducts';

const productsModel = {
    namespace: 'products',
    state: [],
    reducers: {
        update(state: string, action: any) {
            return [...state, ...action.payload.data];
        },
    },
    effects: {
        *fecthProducts({}, { call, put }) {
            const result = yield call(getProducts);
            yield put({
                type: 'update',
                payload: {
                    data: result.list,
                },
            });
        },
    },
};

export default productsModel;
