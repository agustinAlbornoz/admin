import { clientServices } from '../services/client-service.js'

const form = document.querySelector("[data-form]")


const getInformation = async () => {

    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));

    if (id === null) {
        window.location.href = "/screens/error.html";
    }
    const name = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");


    try {
        const perfil = await clientServices.detailClient(id)
        if(perfil.name && perfil.email){
            name.value = perfil.name;
            email.value = perfil.email;
        }else{
            throw new Error
        }
       
    } catch (err) {
        console.log('catch error', err)
        window.location.href ="/screens/error.html"
    }


}
getInformation();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));
    const name = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(name, email)
    clientServices.actualizeClient(name, email, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html";
    });

})