import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'umi'
import Categories from '../Categories'

const Breadcrumb = () => {

    const params = useParams()

    const [categories, setCategories] = useState([])
    const [categoriesForId, setCategoriesForId] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const res = await fetch('https://web-api.storee.be/categories', {
                headers: {
                    'Domain-Name': 'shopee.storee.be'
                }
            })
            const resJson = await res.json()

            const { data } = resJson

            const { list } = data

            setCategories(list)
        }

        getCategories()
    }, [])

    const category = categories.filter(category => category.id === params.id)


    return (
        <div className="breadcrumb">
            <ul>
                <li>
                    <Link to='/'>Trang Chủ</Link>
                </li>
                <li>
                    <Link to={`/category/${params.id}`}>{category.length !== 0 ? category[0].name : ''}
                    </Link>
                </li>
                <li>
                    <p></p>
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumb
