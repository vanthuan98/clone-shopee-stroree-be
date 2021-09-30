import getCategory from '@/services/getCategory';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'umi';

const Breadcrumb = () => {
  const params: any = useParams();

  const [categories, setCategories] = useState([]);
  const [categoriesForId, setCategoriesForId] = useState([]);

  useEffect(() => {
    const getCategoryRequest = async () => {
      try {
        const response = await getCategory();
        const { list } = response;
        setCategories(list);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryRequest();
  }, []);

  const category: any = categories.filter((category: any) => category.id === params.id);

  return (
    <div className="breadcrumb">
      <ul>
        <li>
          <Link to="/">Trang Chủ</Link>
        </li>
        <li>
          <Link to={`/category/${params.id}`}>{category.length !== 0 ? category[0].name : ''}</Link>
        </li>
        <li>
          <p></p>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
