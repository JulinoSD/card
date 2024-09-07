import fetchApi from "./api.js"


const {results} = await fetchApi()

console.log("Imprimindo os dados a partir de data-frame", results)

const data = async () => {
    const {results} = await fetchApi()
    const person = results.map(({id, name, biography, powerstats})=>{
        console.log(name, id, biography, powerstats)
    })
    const newPerson = person
}
data()

export default data