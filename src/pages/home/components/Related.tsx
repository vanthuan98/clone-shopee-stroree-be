import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import prod1 from '@/assets/images/prod1.png';
import imgDefault from '@/assets/images/imgdefault.svg';
import { Link } from 'umi';

const Related = () => {
  const [products, setProducts] = useState([]);

  const convertPriceThousand = (price) => {
    const pattern = /(\d)(?=(\d{3})+(?!\d))/g;
    const repl = '$1.';
    const string = String(price);
    return string.replace(pattern, repl);
  };

  useEffect(() => {
    const url = 'https://web-api.storee.be/shop-products?limit=8&sort=newest';
    const fetchData = async () => {
      const response = await fetch(url, {
        headers: {
          'Domain-Name': 'shopee.storee.be',
        },
      });
      const responseData = await response.json();

      const { data } = responseData;

      const { list } = data;

      setProducts(list);
    };
    fetchData();
  }, []);

  return (
    <div className="related mt-5">
      <div className="header-ralated">
        <h2>Giới thiệu đến bạn</h2>
        <a href="#">Xem thêm</a>
      </div>

      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <Link to={`/product${product.id}`}>
              <div className="product-card">
                <div className="img-prod">
                  <img
                    src={product.photos.length !== 0 ? product.photos[0].small.url : imgDefault}
                    alt="image product"
                  />
                </div>
                <div className="content-prod">
                  <p>{product.name}</p>
                  <span>{convertPriceThousand(product.price)}đ</span>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Related;
