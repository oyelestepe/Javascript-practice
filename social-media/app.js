const likeBtn = document.querySelector('.like-button');
const likeIcon = document.querySelector('#like-icon');

// like button
likeBtn.addEventListener( 'click', () => {
    likeIcon.classList.toggle("like-icon-active")
});


// add comment

const commentInput = document.getElementById('comment-input');
const commentUl = document.getElementById('comment-ul');
const commentLi = document.getElementById('comment-li');

function comment() {
    let input = commentInput.value
    let createComment = document.createElement('li');
    let commentText = createComment.innerText = input;

    console.log(input)
   if(input === '') {
        alert("Enter some text ")
    } else {
        document.getElementById('comment-ul').appendChild(createComment).classList.add('comment-li');
        let deleteComment = document.createElement("button");
        deleteComment.innerHTML = "delete"
        createComment.appendChild(deleteComment).setAttribute('id', 'close');
    };

    commentInput.value = "";    

    commentUl.addEventListener('click', (e) => {
        if(e.target.id === 'close'){
            e.target.parentElement.remove()
        }
    })
}