import axios from "axios";

export function queryImageDepotList() {
    return axios.get('/img_depot/index');
}