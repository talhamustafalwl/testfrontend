import React, { useState, useEffect } from 'react'
import { Select } from '../../components/select'
import { Row, Col, Form, Space, Input, Button, } from "antd";
import { addProduct } from '../../redux/actions/product'
import { useDispatch } from "react-redux";

export default function AddProduct(props) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [finishClicked, setFinishClicked] = useState(false);

    const onFinishRegistered = async (values) => {
        console.log(values);
        let formdata = new FormData();
        for (var key in values) { formdata.append(key, values[key]); }
        let success = await dispatch(addProduct(formdata))
        if (success) { props.history.goBack() }

    }

    return (
        <div>
            <div className="heading">Add a new Product</div>
            <Form onFinish={onFinishRegistered} form={form}>
                {/* <Upload setImage={setImage} title="Upload Product Logo" /> */}


                <b className="darkgreyText">Product </b>
                <Form.Item validateTrigger={finishClicked ? "onChange" : "onSubmit"} validateFirst="true" name="name" style={{ width: "60%" }}
                    rules={[{ required: true, message: "Please enter Product name" },
                    { pattern: new RegExp(/^[A-Za-z ]+$/i), message: "only characters not allowed" },
                    ]}>
                    <Input placeholder={"Enter Product name"} />
                </Form.Item>

                <b className="darkgreyText">Price</b>
                <Form.Item validateTrigger={finishClicked ? "onChange" : "onSubmit"} validateFirst="true" name="price" style={{ width: "60%" }}
                    rules={[{ required: true, message: "Please enter Price" },
                    { pattern: new RegExp(/^[0-9]+$/i), message: "alphabets and special characters not allowed" },
                    { min: 1, message: 'Price must be minimum 1 characters' },
                    { max: 10, message: 'Price must be maximum 24 characters' },

                    ]}>
                    <Input placeholder={"Enter Price"} />
                </Form.Item>



                <b className="darkgreyText">Quantity</b>
                <Form.Item validateTrigger={finishClicked ? "onChange" : "onSubmit"} validateFirst="true" name="quantity" style={{ width: "60%" }}
                    rules={[{ required: true, message: "Please enter Quantity" },
                    { pattern: new RegExp(/^[0-9]+$/i), message: "alphabets and special characters not allowed" },
                    { min: 1, message: 'Quantity must be minimum 1 characters' },
                    { max: 10, message: 'Quantity must be maximum 24 characters' },

                    ]}>
                    <Input placeholder={"Enter Quantity"} />
                </Form.Item>




                <b className="darkgreyText">Description</b>
                <Form.Item validateTrigger={finishClicked ? "onChange" : "onSubmit"} validateFirst="true" name="description" style={{ width: "60%" }}
                    rules={[{ required: true, message: "Please enter Description" },
                    { pattern: new RegExp(/^[A-Za-z ]+$/i), message: "only characters not allowed" },
                    { min: 10, message: 'Description must be minimum 10 characters' },
                    { max: 50, message: 'Description must be maximum 24 characters' },

                    ]}>
                    <Input placeholder={"Enter Description"} />
                </Form.Item>


                <Row style={{ justifyContent: "space-between", width: "60%" }}>
                    <Col></Col>
                    <Col>
                        <Space>
                            <Button className="smallButton" onClick={() => props.history.goBack()}>Cancel</Button>
                            <Button className="smallButton" type="submit" htmlType="submit" onClick={() => setFinishClicked(true)}>
                                Add
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Form>

        </div >
    )
}
