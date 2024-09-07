import fetchApi from "./api.js"


const data = await fetchApi()
const {drinks} = data
console.log("Imprimindo os dados a partir de data-frame", drinks[0])

export default data