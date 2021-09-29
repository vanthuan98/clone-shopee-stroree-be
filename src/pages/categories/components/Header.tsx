import React from 'react'
import { Link } from 'umi'
import logo from '@/assets/images/avatar-hero.jpeg'
import SearchForm from '@/components/searchForm/SearchForm'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to='/' >
                    <img src={logo} alt="logo-image" />
                    <span>Shoppe</span>
                </Link>
            </div>
            <SearchForm />
        </div>
    )
}

export default Header
