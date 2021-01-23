import React from 'react';
import { Select, Form } from 'antd';
import './select.scss'
const { Option } = Select;

function CustomSelect(props) {
    const { handleChange, option, name, displayName, validateTrigger, method, customName, width, defaultValue } = props
    return (
        <Form.Item name={name} initialValue={defaultValue} style={{ width: width ? width : "60%" }} validateTrigger={validateTrigger}
            rules={[{ required: true, message: `Please select ${displayName ? displayName : name}` },]}>
            <Select  {...props} className='customSelect' onChange={handleChange}>

                {option && option.map((e) => (
                    <Option value={method ? e[method] : e.name ? e.name : e} key={e._id ? e._id : e}>{customName ? customName(e) : e.name ? e.name : e}</Option>
                ))}
            </Select>
        </Form.Item>
    );
}

export default CustomSelect;