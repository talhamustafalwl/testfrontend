import React from 'react'
import moment from 'moment'
import { Row, Col, Space, Card, Button } from "antd";

export default function ProductCart(props) {
    const { data } = props

    return (
        <>
            <Row gutter={20}>

                {data.map(e => (
                    <Col style={{ marginTop: 20 }} key={e._id}>
                        <Card style={{ minWidth: 310 }}>

                            <Space>
                                <div className="greyText fsSmaller">Registration date:</div>
                                <div className="fsSmaller">{moment(e.createdAt).format("DD MMM, YYYY")}</div>
                            </Space>
                            <div></div>
                            <Space style={{ marginTop: 20 }} >
                                <div className="greyText fsSmaller">Price:</div>
                                <div className="fsSmaller">{e.price}</div>
                            </Space>
                            <div></div>
                            <Space>
                                <div className="greyText fsSmaller">Quantity:</div>
                                <div className="fsSmaller">{e.quantity}</div>
                            </Space>
                            <div></div>
                            <Space style={{ marginTop: 20 }} >
                                <div className="greyText fsSmaller">Name:</div>
                                <div className="fsSmaller">{e.name}</div>
                            </Space>
                            <div></div>
                            <Space style={{ marginTop: 20 }} >
                                <div className="greyText fsSmaller">Description:</div>
                                <div className="fsSmaller">{e.description}</div>
                            </Space>
                            <div></div>
                            <Button>Checkout</Button>

                        </Card>
                    </Col>
                ))}

            </Row>
        </>
    )
}
