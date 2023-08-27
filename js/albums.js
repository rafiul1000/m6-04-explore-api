function displayAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => albumsContainer(data));
}

function albumsContainer(albums){
    const getId = document.getElementById('album-container');
    for(const album of albums){
        const createADiv = document.createElement('div');
        createADiv.innerHTML = `
        <h5>title: ${album.title}</h5>
        <p>user Id: ${album.userId}</p>
        <p>id: ${album.id}</p>
        

        `;
        getId.appendChild(createADiv)
    }
}

displayAlbum();