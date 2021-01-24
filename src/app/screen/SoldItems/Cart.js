import React from 'react'
import { Row, Col, Space } from "antd";
import moment from 'moment'

export default function TransactionCart(props) {
    const { data } = props
    return (
        <div>
            {data.map(e => (
                <Row className="whiteBackground" style={{ marginTop: 20, borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={24} md={3} className="Cart" >
                        <div >{moment(e.date).format("DD MMM,YYYY")}</div>
                    </Col>
                    <Col xs={24} md={4} className="Cart" >
                        <div >{e.name}</div>
                    </Col>
                    <Col xs={24} md={4} className="Cart" >
                        <div >{e.email}</div>
                    </Col>
                    <Col xs={24} md={3} className="Cart" >
                        <div>Rs {e.amount}</div>
                    </Col>


                    <Col xs={24} md={8} className="Cart" >
                        {e.productId.map(e => (
                            <div>[productName: {e.name}- qty:{e.quantity}]
                            </div>
                        ))}
                    </Col>

                </Row>
            ))}

        </div>
    )
}
