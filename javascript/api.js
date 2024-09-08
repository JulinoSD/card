import token from "../envy.js"

const URL = `https://superheroapi.com/api.php/${token}/search/batman`

const fetchApi = async ()=>{
    const response = await fetch(URL)
    try{
        if(!response.ok){
           throw new Error(`Response status: ${response.status}`) 
        }            
        const data = await response.json()
        return data
    } catch (error){
        console.log(error.message)
    }
}
fetchApi()

export default fetchApi