import React, { useState } from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import iconSearch from '@/assets/images/icon-search.svg';
import './searchForm.less';
import getProducts from '@/services/getProducts';

const SearchForm = () => {
  const [result, setResult] = useState([]);

  const inputGroup = document.querySelector('.form-control');
  const modalResultSearch = document.querySelector('.modal-result-search');
  window.onclick = (e) => {
    if (e.target !== inputGroup) {
      modalResultSearch.style.display = 'none';
    } else {
      modalResultSearch.style.display = 'block';
    }
  };

  const handleSearchProduct = (e) => {
    const keyword = e.target.value;

    if (keyword.trim() === '') {
      setResult([]);

      return;
    }

    const fetchProductRequest = async () => {
      try {
        const response = await getProducts();
        const { list } = response;
        const result = list.filter((item) => {
          const name = item.name.toLowerCase();
          console.log(keyword);

          return name.indexOf(keyword) !== -1;
        });

        setResult(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductRequest();
  };

  return (
    <div className="search-form mt-5">
      <InputGroup className="bg-white rounded text-truncate">
        <InputGroup.Text id="basic-addon1" className="bg-transparent border-0">
          <img src={iconSearch} alt="" />
        </InputGroup.Text>
        <FormControl
          className="bg-white border-0 text-truncate"
          placeholder="Tìm kiếm sản phẩm"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleSearchProduct}
        />
      </InputGroup>
      <div className="modal-result-search">
        {result.length === 0 ? null : (
          <ul className="has-result">
            {result.map((item) => (
              <li key={item.id}>
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
