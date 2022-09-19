
async function MakeLike(event){
    event.preventDefault();
    let target = event.target;
    let url = target.href;
    let response = await fetch(url);
    let response_json = await response.json();
    let count = response_json.count;
    console.log(count);
    let articleId = target.dataset.articleId;
    let span = document.getElementById(articleId);
    span.innerText = `Лайки: ${count}`;
    if(target.innerText === "Дизлайк"){
        target.innerText = "Лайк";
    }
    else{
        target.innerText = "Дизлайк";
    }
}

async function MakeCommentLike(event){
    event.preventDefault();
    let target = event.target;
    let url = target.href;
    let response = await fetch(url);
    let response_json = await response.json();
    let count = response_json.count;
    console.log(count);
    let commentId = target.dataset.commentId;
    let span = document.getElementById(commentId);
    span.innerText = `Лайки: ${count}`;
    if(target.innerText === "Дизлайк"){
        target.innerText = "Лайк";
    }
    else{
        target.innerText = "Дизлайк";
    }
}


function countLikes() {

    let likes = document.getElementsByClassName("likes");
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener("click", MakeLike)
    }
}

function countCommentLikes() {

    let likes = document.getElementsByClassName("likes-comment");
    for (let i = 0; i < likes.length; i++) {
        likes[i].addEventListener("click", MakeCommentLike)
    }
}

window.addEventListener("load", countLikes)
window.addEventListener("load", countCommentLikes)
