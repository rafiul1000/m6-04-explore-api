function somePhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => newPhotos(data));
}

function newPhotos(photos){
    const photosContainer = document.getElementById('photos-container');
    for(const photo of photos){
        const createPhotoDiv = document.createElement('div');
        createPhotoDiv.classList.add('photo')
        createPhotoDiv.innerHTML = `
        <h3>title: ${photo.title}</h3>
        <p>albumId: ${photo.albumId}</p>
        <p>id: ${photo.id}</p>
        <p>url: ${photo.url}</p>
        `;
        photosContainer.appendChild(createPhotoDiv);
    }
}

somePhotos();