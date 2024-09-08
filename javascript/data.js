import fetchApi from "./api.js"

const content = document.querySelector('.content')

const data = async () => {
    const {results} = await fetchApi()
    const person = results.map(({id, name, biography, powerstats, image, connections})=>{
        console.log(name, id, biography, powerstats, image, connections)
        return `
        <article class="sample exaple-1">
            <figure class="image-container">
                <img src="${image.url}" alt="${name}" srcset="${image.url}">
                <figcaption class="info">
                    <div class="text-info">
                        <h4>${name}</h4>
                        <a href="http://wa.me/+55199842872" class="whatsapp">
                            whatsapp
                        </a>
                    </div>
                    <details>
                        <summary>Connections</summary>
                        <h5>Group: </h5>
                        <p>${connections.relatives}</p>
                    </details> 
                </figcaption>
            </figure>       
        </article>
        `

    }).join(' ')
    content.innerHTML = person

}
data()

export default data