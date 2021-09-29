import React from 'react'
import { Col } from 'react-bootstrap'
import prod1 from '@/assets/images/prod1.png'
import imgDefault from '@/assets/images/imgdefault.svg'
import { VisibilityContext } from "react-horizontal-scrolling-menu"
import { Link } from 'umi'



const CardProduct = ({ item }) => {
    const visibility = React.useContext(VisibilityContext);

    const visible = visibility.isItemVisible(item.id);

    return (
        <Col>
            <Link to={`/product/${item.id}`}>
                <div className="product-card">
                    <div className="img-prod">
                        <img src={item.photos.length !== 0 ? item.photos[0].small.url : imgDefault} alt="image product" />
                    </div>
                    <div className="content-prod">
                        <p>{item.name}</p>
                        <span>{item.price}đ</span>
                    </div>
                </div>
            </Link>
        </Col>
    )
}

export default CardProduct
