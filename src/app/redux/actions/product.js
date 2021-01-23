import axios from "axios";
import { baseUrl } from "../../config/globalConfig";
import {
    ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT,
} from "../types";
import { EnableLoader, DisableLoader } from "./loader";
import { message } from "antd";

export const getProduct = (id) => async (dispatch) => {
    try {
        dispatch(EnableLoader())
        const { data } = await axios.get(`${baseUrl}/product/${id}`)
        message.success(data.message)
        dispatch(DisableLoader())
        return { type: GET_PRODUCT, payload: data }
    }
    catch (error) {
        message.error(error.response && error.response.data.message ? error.response.data.message : error.message)
        dispatch(DisableLoader());
    }

}


export const getProducts = () => async (dispatch) => {
    try {
        dispatch(EnableLoader())
        const { data } = await axios.get(`${baseUrl}/product`)
        // message.success(data.message)
        dispatch(DisableLoader())
        return { type: GET_PRODUCTS, payload: data }
    }
    catch (error) {
        message.error(error.response && error.response.data.message ? error.response.data.message : error.message)
        dispatch(DisableLoader());
    }

}


export const updateProduct = (id) => async (dispatch) => {
    try {
        dispatch(EnableLoader())
        const { data } = await axios.put(`${baseUrl}/product/${id}`, { addedToCart: true })
        message.success(data.message)
        dispatch(DisableLoader())
        return { type: ADD_PRODUCT, payload: data }
    }
    catch (error) {
        message.error(error.response && error.response.data.message ? error.response.data.message : error.message)
        dispatch(DisableLoader());
    }

}

export const addProduct = (dataToSubmit) => async (dispatch) => {
    try {
        dispatch(EnableLoader())
        const { data } = await axios.post(`${baseUrl}/product`, dataToSubmit)
        message.success(data.message)
        dispatch(DisableLoader())
        return { type: ADD_PRODUCT, payload: data }
    }
    catch (error) {
        message.error(error.response && error.response.data.message ? error.response.data.message : error.message)
        dispatch(DisableLoader());
    }

}
