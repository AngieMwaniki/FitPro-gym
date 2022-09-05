alert('Welcome to FitPro, please subscribe and leave a comment.')

const submit = document.querySelector ("#one")
submit.addEventListener('click', ()=>{
  alert('Thanks for signing up to FitPro gym. YOU ARE IN FOR A RIDE!!')
})

let colors = ['blue', 'yellow', 'black', 'red', 'brown' ,'orange'];
const hover = document.querySelector('.second')
hover.addEventListener(onmouseover,function(){
  var randomColor = colors[Math.floor(math.random() * colors.length)]
  hover.getElementsByClassName.background = randomColor
})

var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count(){likeCount.value = parseInt(likeCount.value) +1;
}

function count1(){dislikeCount.value = parseInt(dislikeCount.value) +1;
} 

var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
    
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
    
});
