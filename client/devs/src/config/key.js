import axios from "axios"

export const APIURL = 'http://127.0.0.1:8000'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'