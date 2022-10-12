import axios from "axios";
import { request } from "./request";


export function requestdata(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })

    return instance(config)
}