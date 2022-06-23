

const clientList = () =>
    //const promise = new Promise((resolve, reject) => {
    //    const http = new XMLHttpRequest();
    //    http.open("GET", "http://localhost:3000/perfil");
    //
    //    http.send();

    //    http.onload = () => {
    //        const response = JSON.parse(http.response);
    //        if (http.status >= 400) {
    //            reject(response);
    //        } else {
    //            resolve(response);
    //        }
    //    };
    //})
    //return promise;
    fetch("http://localhost:3000/perfil").then((response) => response.json());
;

const createClient = (name, email) => {
    return fetch("http://localhost:3000/perfil/", {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({name,email,id:uuid.v4()})
    })
}

const deleteClient = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method:"DELETE",
    })
}

const detailClient = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((response) => 
        response.json()
    )
}

const actualizeClient = (name, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method:"PUT",
        headers: {
        "content-type": "application/json"
        },
        body: JSON.stringify({ name, email }),
    })
        .then((response) => response)
        .catch((err) => console.log(err))
    }
export const clientServices = {
    clientList,
    createClient,
    deleteClient,
    detailClient,
    actualizeClient
}
