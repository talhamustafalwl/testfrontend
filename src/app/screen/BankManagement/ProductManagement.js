import React, { useState, useEffect } from 'react'
import { Row, Space, Button, Input } from "antd";
import { Link } from "react-router-dom";
// import { Button, SelectSimple, Input } from '../../components/index'
import ProductCart from './ProductCart'
import { getProducts, updateProduct } from '../../redux/actions/product'
import { useDispatch } from "react-redux";

export default function ProductManagement(props) {

    const dispatch = useDispatch();
    const [Products, setProducts] = useState([])

    const GetProducts = async () => {
        let success = await dispatch(getProducts())
        if (success) { setProducts(success.payload.data) }
    }

    useEffect(() => {
        GetProducts()
    }, [])

    const UpdateCartProduct = async (id) => {
        let success = await dispatch(updateProduct(id))
        if (success) { GetProducts() }

    }

    return (
        <div className="coverScreen">

            <Row style={{ justifyContent: "space-between" }}>
                <div className="heading">Products</div>

                <Space >
                    <Link to="/soldItems" ><Button >Sold Items</Button> </Link>
                    <Link to="/checkout" ><Button >Checkout</Button> </Link>
                    <Link to="/product/new" ><Button >Add a new Product</Button> </Link>
                </Space>

            </Row>
            <ProductCart data={Products} {...props} UpdateCartProduct={(id) => UpdateCartProduct(id)} />
        </div>
    )
}
