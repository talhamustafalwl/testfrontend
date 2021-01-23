import axios from "axios";
import { baseUrl } from "../../config/globalConfig";
import {
    ADD_PRODUCTUSER, GET_PRODUCTUSERS,
} from "../types";
import { EnableLoader, DisableLoader } from "./loader";
import { message } from "antd";


export const getProductUsers = () => async (dispatch) => {
    try {
        dispatch(EnableLoader())
        const { data } = await axios.get(`${baseUrl}/productUser`)
        // message.success(data.message)
        dispatch(DisableLoader())
        return { type: GET_PRODUCTUSERS, payload: data }
    }
    catch (error) {
        message.error(error.response && error.response.data.message ? error.response.data.message : error.message)
        dispatch(DisableLoader());
    }

}


export const addProductUser = (dataToSubmit) => async (dispatch) => {
    try {
        dispatch(EnableLoader())
        const { data } = await axios.post(`${baseUrl}/productUser`, dataToSubmit)
        message.success(data.message)
        dispatch(DisableLoader())
        return { type: ADD_PRODUCTUSER, payload: data }
    }
    catch (error) {
        message.error(error.response && error.response.data.message ? error.response.data.message : error.message)
        dispatch(DisableLoader());
    }

}
