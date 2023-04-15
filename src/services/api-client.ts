import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '06100908bb5044c7bf39d6a9c50279ab'
    }
});