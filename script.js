let btn=document.querySelector("#btn");
let rating_container=document.querySelector(".rating-container");

let rating_result=document.querySelector(".rating-result");
let container=document.querySelector(".container");
let thankyou_container=document.querySelector(".thankyou-container");


let ans
console.log(ans);
rating_container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("rating")){

        let rating=document.querySelectorAll(".rating");
        rating.forEach(item=>item.style.background="")
        e.target.style.background="hsl(217, 12%, 63%)";
         ans=e.target.innerText;
        rating_result.innerText=`You selected ${ans} out of 5`
    }
})


btn.addEventListener("click",()=>{
   if(ans){
    container.style.display="none";
    thankyou_container.style.display="flex";
   }else{
    alert("Rating Please " +"'😊'")
   }
   
})  

