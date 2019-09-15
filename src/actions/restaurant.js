import { httpHandler } from "../../src/utils/axios";
import { GET_LIST } from "../actions/actionTypes";

export const getList = (dispatch) => {
    return httpHandler("get", "/restaurant/list").then((data) => {
        //return { type: "LIST_GET", data:[] }
        dispatch({ type: GET_LIST, data: data });
    });
    //console.log("click....")

}