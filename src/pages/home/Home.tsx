import { getProducts } from '@/services/getProducts'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Category from '@/components/category/Category'
import Hero from './components/Hero'
import NewProduct from './components/NewProduct'
import Related from './components/Related'
import SearchForm from '../../components/searchForm/SearchForm'
import './home.less'


const Home = () => {

    return (
        <div className="home">
            <Container>
                <Hero />
                <SearchForm />
                <Category />
                <NewProduct />
                <Related />
            </Container>
        </div>
    )
}

export default Home
