
import React from 'react'
import { Container, FormControl, InputGroup } from 'react-bootstrap'
import iconSearch from '@/assets/images/icon-search.svg';

const SearchForm = () => {
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
                />
            </InputGroup>

        </div>
    )
}

export default SearchForm
