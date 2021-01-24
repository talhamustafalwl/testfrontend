import React, { useState, useEffect } from 'react'
import { Row, Space, Button, Col } from "antd";
import { Link } from "react-router-dom";
// import { Button, SelectSimple, Input } from '../../components/index'
import Cart from './Cart'
import { getProductUsers } from '../../redux/actions/productUser'
import { useDispatch } from "react-redux";

export default function Checkout(props) {

    const dispatch = useDispatch();
    const [ProductUsers, setProductUsers] = useState([])

    const GetProductUsers = async () => {
        let success = await dispatch(getProductUsers())
        console.log(success)
        if (success) { setProductUsers(success.payload.data) }
    }

    useEffect(() => {
        GetProductUsers()
    }, [])


    return (
        <div className="coverScreen">

            <Row style={{ justifyContent: "space-between" }}>
                <div className="heading">Sold Items</div>

                <Space >
                    <Link to="/" ><Button >See Product</Button> </Link>
                </Space>

            </Row>



            <Row className="primaryBackground" style={{ marginTop: 20, borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Col xs={24} md={3} >
                    <div className="headingBar">Date</div>
                </Col>
                <Col xs={24} md={4}>
                    <div className="headingBar">Name</div>
                </Col>
                <Col xs={24} md={4} style={{ textAlign: 'center' }}>
                    <Space direction="vertical">
                        <div className="headingBar">Email</div>
                    </Space>
                </Col>
                <Col xs={24} md={4} style={{ textAlign: 'center' }}>
                    <Space direction="vertical">
                        <div className="headingBar">Amount</div>
                    </Space>
                </Col>
                <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                    <Space direction="vertical">
                        <div className="headingBar">Products With Quantity</div>
                    </Space>
                </Col>

            </Row>


            <Cart data={ProductUsers} {...props} />
        </div>
    )
}
