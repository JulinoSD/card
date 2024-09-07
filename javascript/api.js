const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
const fetchApi = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    return data
}
fetchApi()

const data = await fetchApi()
console.log(data)
export default fetchApi