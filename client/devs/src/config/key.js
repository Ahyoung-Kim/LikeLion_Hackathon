import axios from "axios"

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

export const APIURL = 'http://127.0.0.1:8000'