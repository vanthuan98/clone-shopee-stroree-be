const getProducts = async () => {
  const url = 'https://web-api.storee.be/shop-products';
  const response = await fetch(url, {
    headers: {
      'Domain-Name': 'shopee.storee.be',
    },
  });
  const responseData = await response.json();
  const { data } = responseData;
  return data;
};

export default getProducts;
