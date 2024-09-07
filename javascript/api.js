import token from "../envy.js"

const URL = `https://superheroapi.com/api.php/${token}/search/batman`

const fetchApi = async ()=>{
    const response = await fetch(URL)
    const data = await response.json()
    return data
}
fetchApi()

const data = await fetchApi()
console.log(data)
export default fetchApi