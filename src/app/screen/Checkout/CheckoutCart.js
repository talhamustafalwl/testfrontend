import React, { useState } from 'react'
import moment from 'moment'
import { Row, Col, Space, Card, Button, Modal, Form, Input } from "antd";

export default function CheckoutCart(props) {
    const { data, AddProductUser } = props
    const [CartProducts, setCartProducts] = useState([])
    const [visible, setvisible] = useState(false)
    const [finishClicked, setFinishClicked] = useState(false)

    const HandleCartProducts = (product, type) => {
        let elementsIndex, data, qty, remove, update;

        elementsIndex = CartProducts.findIndex(e => e.productId === product._id)
        switch (type) {
            case "plus":
                if (elementsIndex !== -1) {
                    qty = CartProducts.filter(e => e.productId === product._id)[0]
                    if (product.quantity > qty.quantity) {
                        update = CartProducts.map(x => (x.productId === product._id ? { ...x, quantity: qty.quantity + 1 } : x));
                        setCartProducts(update)
                    }
                    else {
                        alert("Quantity exceed")
                    }

                }
                else {
                    if (product.quantity !== 0) {
                        data = { productId: product._id, product: product, quantity: 1, price: product.price }
                        setCartProducts(CartProducts.concat(data))
                    }
                    else {
                        alert("Quantity exceed")
                    }
                }
                return;

            case "minus":
                qty = CartProducts.filter(e => e.productId === product._id)[0]
                if (qty?.quantity > 1) {
                    update = CartProducts.map(x => (x.productId === product._id ? { ...x, quantity: qty.quantity - 1 } : x));
                    setCartProducts(update)
                }
                else {
                    remove = CartProducts.filter(e => e.productId !== product._id)
                    setCartProducts(remove)
                }

                return;
            default:
                return;
        }

    }


    const onFinishRegistered = (values) => {

        let amount = CartProducts.length > 0 ? CartProducts.reduce((total, num) => total + parseInt(num.price) * num.quantity, 0) + 0 : 0
        values.amount = amount;
        values.productId = CartProducts.map(a => ({ _id: a.productId, quantity: a.quantity, name: a.product.name }))
        AddProductUser(values)
    }


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
                            <div></div>
                            <Space style={{ marginTop: 20 }} >
                                <div className="greyText fsSmaller">Name:</div>
                                <div className="fsSmaller">{e.name}</div>
                            </Space>
                            <div></div>
                            <Space style={{ marginTop: 20 }} >
                                <div className="greyText fsSmaller">Quantity:</div>
                                <div className="fsSmaller">{e.quantity}</div>
                            </Space>

                            <div></div>
                            <Space style={{ marginTop: 20 }} >
                                <div className="greyText fsSmaller">Description:</div>
                                <div className="fsSmaller">{e.description}</div>
                            </Space>
                            <div></div>

                            <Space>
                                <Button onClick={() => HandleCartProducts(e, "minus")}>- </Button>
                                <b>{CartProducts.filter(val => val.productId === e._id)[0]?.quantity ?
                                    CartProducts.filter(val => val.productId === e._id)[0]?.quantity : 0}</b>
                                <Button onClick={() => HandleCartProducts(e, "plus")}>+</Button>
                            </Space>

                        </Card>
                    </Col>
                ))}

            </Row>

            <Space style={{ marginTop: 20 }}>
                <div className="heading">Total Price :</div>
                <div className="heading">{CartProducts.length > 0 ? CartProducts.reduce((total, num) => total + parseInt(num.price) * num.quantity, 0) + 0 : 0}</div>
                {CartProducts.length > 0 &&
                    <Button onClick={() => setvisible(true)}>Place Order</Button>
                }
            </Space>


            <Modal title="Confirm Order" visible={visible} footer={null} closable={false} centered>
                <Form onFinish={onFinishRegistered} >
                    <Form.Item validateTrigger={finishClicked ? "onChange" : "onSubmit"} validateFirst="true" name="name" style={{ width: "60%" }}
                        rules={[{ required: true, message: "Please enter name" },
                        { pattern: new RegExp(/^[A-Za-z ]+$/i), message: "only characters not allowed" },
                        ]}>
                        <Input placeholder={"Enter name"} />
                    </Form.Item>

                    <Form.Item validateTrigger={finishClicked ? "onChange" : "onSubmit"} validateFirst="true" name="email" style={{ width: "60%" }}
                        rules={[{ required: true, message: "Please enter email" },
                        ]}>
                        <Input placeholder={"Enter email"} />
                    </Form.Item>

                    <Button className="smallButton" onClick={() => setvisible(false)}>Cancel</Button>
                    <Button className="smallButton" type="submit" htmlType="submit" onClick={() => setFinishClicked(true)}>
                        Confirm Order
                            </Button>

                </Form>
            </Modal>

        </>
    )
}
