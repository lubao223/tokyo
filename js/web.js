function go(website){
    window.open(website)
}

let comments = [
    {"who": "蛇老大", "pic": "assets/head10.png", "what": "謝謝資訊 已經買機票了"}
];

function updatecomment() {
    let who = document.getElementById("who").value;
    let picurl = document.getElementById("pic").value || 'assets/head10.png';
    let com = document.getElementById("comment").value;
    if(who&&picurl&&com){
        comments.push({"who": who, "pic": picurl, "what": com});
        document.getElementById("who").value = '';
        document.getElementById("pic").value = ''; 
        document.getElementById("comment").value = ''; 
        displayComments();
    }else{
        alert("有資訊為空")
    }

    
}

function displayComments(){
    let commentSection = document.querySelector(".comment-bar");
    commentSection.innerHTML = "";
    
    comments.forEach(function(comment) {
        let commentHTML = `
            <div class="comment">
                <div>
                    <img src="${comment.pic}" alt="${comment.who}'s photo" width="100%" height="100%">
                </div>
                <div class="usercom">
                    <strong style=" display: block;">${comment.who}</strong>
                    <br>
                    <span>${comment.what}</span>
                </div>
            </div>
            <br>
        `;
        commentSection.innerHTML += commentHTML;
    });
}
displayComments();



