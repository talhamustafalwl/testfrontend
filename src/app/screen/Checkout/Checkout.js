import React, { useState, useEffect } from 'react'
import { Row, Space, Button, Input } from "antd";
import { Link } from "react-router-dom";
// import { Button, SelectSimple, Input } from '../../components/index'
import CheckoutCart from './CheckoutCart'
import { getProducts, updateProduct } from '../../redux/actions/product'
import { addProductUser } from '../../redux/actions/productUser'
import { useDispatch } from "react-redux";

export default function Checkout(props) {

    const dispatch = useDispatch();
    const [Products, setProducts] = useState([])

    const GetProducts = async () => {
        let success = await dispatch(getProducts())
        if (success) { setProducts(success.payload.data.filter(e => e.addedToCart)) }
    }

    useEffect(() => {
        GetProducts()
    }, [])

    const UpdateCartProduct = async (id) => {
        let success = await dispatch(updateProduct(id))
        if (success) { GetProducts() }

    }


    const AddProductUser = async (data) => {
        let success = await dispatch(addProductUser(data))
        if (success) { props.history.goBack() }

    }

    return (
        <div className="coverScreen">

            <Row style={{ justifyContent: "space-between" }}>
                <div className="heading">Checkout Products</div>

                <Space >
                    <Link to="/" ><Button >See Product</Button> </Link>
                </Space>

            </Row>
            <CheckoutCart data={Products} {...props} UpdateCartProduct={(id) => UpdateCartProduct(id)} AddProductUser={(v) => AddProductUser(v)} />
        </div>
    )
}
