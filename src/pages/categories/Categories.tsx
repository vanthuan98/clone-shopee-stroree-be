import React from 'react'
import { history, useParams } from 'umi';
import Category from '@/components/category/Category'
import Header from './components/Header'
import { Container } from 'react-bootstrap';
import './categories.less'
import Breadcrumb from './components/Breadcrumb'

const Categories = () => {

    return (
        <div className="categories">
            <Header />
            <Container>
                <Category />
                <Breadcrumb />
            </Container>
        </div>
    )
}

export default Categories
