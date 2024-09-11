/*1-Vamos a traer todo el contenido que vamos a mostrar en pantalla*/
/*2- exportamos la funcion fetchPosts con dos parametros page y limit,
que nos indicara la pagina en la que nos encontramos y el limite
de posts que queremos obtener*/

export async function fetchPosts(page , limit){
    /*3-Enviamos la peticion HTTP GET al endpoint de la API de jsonplaceholder
    que nos permite obtener los posts, utilizando la variable page y limit para
    paginar los resultados*/
    const response = await fetch(
    /*4-La URL del endpoint de la API de jsonplaceholder*/
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );

    const data = await response.json();
    return data;
}