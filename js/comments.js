function allCommentsData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(rec => rec.json())
    .then(data => commentsDataLoad(data));
}

function commentsDataLoad(commentsDatas){
    const getCommentsContainerId = document.getElementById('comments-container');
    for(const commentsData of commentsDatas){
        const createCommentElement = document.createElement('div');
        createCommentElement.classList.add('comment')
        createCommentElement.innerHTML = `
        <h3>All details are Here: </h3>
        <p>post Id: ${commentsData.postId}</p>
        <p>Id: ${commentsData.Id}</p>
        <p>name: ${commentsData.name}</p>
        <p>email: ${commentsData.email}</p>
        <p>body: ${commentsData.body}</p>

        `;
        getCommentsContainerId.appendChild(createCommentElement);
    }
}

allCommentsData();