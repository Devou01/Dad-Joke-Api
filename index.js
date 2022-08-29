let joke = document.getElementById("joke")
let btn = document.getElementById("btn")


btn.addEventListener("click", getjokeApi)


getjokeApi()



async function getjokeApi(){
    const config = {headers:
        {
            Accept : 'application/json'



    },
}
        const Apifetch = await fetch('https://icanhazdadjoke.com', config)

        const data = await Apifetch.json()

        joke.innerHTML = data.joke
    }

