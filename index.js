alert('Welcome to FitPro, please subscribe and leave a comment.')

const submit = document.querySelector ("#one")
submit.addEventListener('click', ()=>{
  alert('Thanks for signing up to FitPro gym. YOU ARE IN FOR A RIDE!!')
})

var likeCount = document.querySelector('#text');
var dislikeCount = document.querySelector('#dislike');

function count(){likeCount.value = parseInt(likeCount.value) ++1;
}

function count(){dislikeCount.value = parseInt(dislikecount.value) ++1;
} 

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    
});
