import pkdtImg from '@/assets/images/pk-dt.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'umi';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const url = 'https://web-api.storee.be/categories';
    const fetchData = async () => {
      const response = await fetch(url, {
        headers: {
          'Domain-Name': 'shopee.storee.be',
        },
      });
      const responseData = await response.json();

      const { data } = responseData;

      const { list, limit, total } = data;

      setCategory(list);
    };
    fetchData();
  }, []);

  return (
    <div className="category mt-5 w-100">
      <ul>
        {category.map((item: any) => (
          <li key={item.id}>
            <Link to={`/category/${item.id}/all`}>
              <img src={item.icon.small.url} alt="category-image" />
              <p style={{ color: item.color }}>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Category;
