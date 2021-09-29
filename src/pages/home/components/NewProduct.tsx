import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import prod1 from '@/assets/images/prod1.png'
import CardProduct from './CardProduct'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const NewProduct = () => {

    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const url = 'https://web-api.storee.be/shop-products'
        const fetchData = async () => {
            const response = await fetch(url, {
                headers: {
                    "Domain-Name": "shopee.storee.be"
                }
            })
            const responseData = await response.json()

            const { data } = responseData

            const { list, limit, total } = data

            setItems(list)

        }
        fetchData()
    }, [])


    const isItemSelected = (id: string) => !!selected.find((el) => el === id);

    const handleClick = (id: any) => () => {
        const itemSelected = isItemSelected(id)

        setSelected((currentSelected) =>
            itemSelected
                ? currentSelected.filter((el) => el !== id)
                : currentSelected.concat(id)
        );
    }

    return (
        <div className="new-product">
            <div className="header-prod">
                <h2>Sản Phẩm Mới</h2>
                <a href="#">Xem thêm</a>
            </div>

            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
            >
                {items.map((product: object, index) => (
                    <CardProduct
                        item={product}
                        key={index}
                    />)
                )}
            </ScrollMenu>
        </div>
    )
}

function Arrow({
    children,
    disabled,
    onClick
}: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none"
            }}
        >
            {children}
        </button>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <span className="left-arrow-scroll" >{'<'}</span>
        </Arrow>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <span className="right-arrow-scroll" >{'>'}</span>
        </Arrow>
    );
}

export default NewProduct
