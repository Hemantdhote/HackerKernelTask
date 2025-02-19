var i1=document.querySelector("#i1");
var i2=document.querySelector("#i2");
var i3=document.querySelector("#i3");

i1.addEventListener("click",function(){
  i1.style.backgroundColor="#E1E1E1"
  i2.style.backgroundColor=""
  i3.style.backgroundColor=""
})

i2.addEventListener("click",function(){
  i2.style.backgroundColor="#E1E1E1"
  i1.style.backgroundColor=""
  i3.style.backgroundColor=""
})

i3.addEventListener("click",function(){
  i3.style.backgroundColor="#E1E1E1"
  i2.style.backgroundColor=""
  i1.style.backgroundColor=""
})


var input=document.querySelector(".pin input");
var submitBtn=document.querySelector(".btn2");
var cancelBtn=document.querySelector(".btn3");

var commentSection=document.querySelector(".commentsContainer")

input.addEventListener("input",function(){
  submitBtn.disabled=input.value.trim()==="";
  submitBtn.style.opacity=input.value.trim()===""? "0.2":"1"
})

submitBtn.addEventListener("click",function(){
  if(input.value.trim()==="") return

  var div=document.createElement("div")
  div.classList.add("comment")
  
  div.innerHTML=`
              <strong>Hemant</strong> Guest <br>
            ${input.value.trim()} <br>
            <span class="reply">Reply</span>
        `;
        commentSection.appendChild(div)
        submitBtn.style.opacity="0.3"
        input.value=""

        cancelBtn.addEventListener("click",function(){
          input.value="";
        })

        var reply=document.querySelector(".reply");
        reply.addEventListener("click",function(){
          var replyBox= document.createElement("textarea");
          replyBox.placeholder="Write your reply"
          replyBox.style.width="90%"

          var replyBtn=document.createElement("button")
          replyBtn.innerText="Submit reply"
          replyBtn.style.marginLeft="5px"
          replyBtn.style.padding="0.2vw 0.3vw"
          replyBtn.style.backgroundColor="blue"
          replyBtn.style.color="white"
          replyBtn.style.border="none"
          replyBtn.style.borderRadius="2px"

          div.appendChild(replyBox)
          div.appendChild(replyBtn)

          replyBtn.addEventListener("click",function(){
            if(replyBox.value.trim() !==""){
              var replySubmit=document.createElement("div")
              replySubmit.classList.add("comment");
              replySubmit.style.marginLeft="10px"
              replySubmit.innerHTML=`<strong>hemant</strong> (Reply) <br> ${replyBox.value.trim()}`

              div.appendChild(replySubmit);
              replyBtn.remove();
              replyBox.remove();
            }
          })

         
         


        })
})

document.addEventListener("click", function(event) {
  let element = event.target;
  let inspector = document.getElementById("inspector");

  document.getElementById("elementName").innerText = element.tagName.toLowerCase();
  document.getElementById("posX").innerText = element.getBoundingClientRect().left.toFixed(2);
  document.getElementById("posY").innerText = element.getBoundingClientRect().top.toFixed(2);
  document.getElementById("width").innerText = element.offsetWidth;
  document.getElementById("height").innerText = element.offsetHeight;

  let bgColor = window.getComputedStyle(element).backgroundColor;
  document.getElementById("bgColor").innerText = bgColor;

  let opacity = window.getComputedStyle(element).opacity;
  document.getElementById("opacity").innerText = opacity;

  let cssText = "";
  let computedStyles = window.getComputedStyle(element);
  let properties = ["top", "left", "width", "height", "background", "opacity"];

  properties.forEach(prop => {
      cssText += `${prop}: ${computedStyles.getPropertyValue(prop)};\n`;
  });

  document.getElementById("cssProperties").innerText = cssText;

  inspector.style.display = "block";
});

function copyCSS() {
  let cssText = document.getElementById("cssProperties").innerText;
  navigator.clipboard.writeText(cssText).then(() => {
      alert("CSS Copied!");
  });
}

let part2=document.querySelector(".part2");
part2.addEventListener("click",function(event){
  event.stopPropagation();
})




let ii1 = document.querySelector(".logo #i1");
let ii2 = document.querySelector(".logo #i2");
let ii3 = document.querySelector(".logo #i3");
let logo=document.querySelector(".logo");

let commentFeature = document.querySelector(".commentFeature");
let code = document.querySelector(".code");
let designLogo = document.querySelector(".desingLogo"); 

function showSection(section) {
  commentFeature.style.display = "none";
  code.style.display = "none";
  designLogo.style.display = "none";
  

  section.style.display = "block"; 
}

ii1.addEventListener("click", function () {
  showSection(commentFeature);
});

ii2.addEventListener("click", function () {
  showSection(code);
  

});

ii3.addEventListener("click", function () {
  showSection(designLogo);
});

showSection(commentFeature);


ii2.addEventListener("click",function(){
  logo.style.right="0"
  logo.style.position="absolute"
})
