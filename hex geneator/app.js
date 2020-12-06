//Allah is Almighty
let hex=["a","b","c","d","e","f",0,1,2,3,4,5,6,7,8,9]
let color=document.getElementById('color')
let p=document.getElementById("details")
console.log(Math.floor(Math.random()*16));
let handle=0;
// console.log(ran);
let take;
function set(){
  if(handle==0){
      handle=1
  take = setInterval(()=>{
        gen()
    },100)
}
}
function gen(){
var z="#";
for(var i=0;i<6;i++){
    let ran=Math.floor(Math.random()*16)
    // console.log(ran); 
    
    z=z+hex[ran]
}
color.style.backgroundColor=z
p.innerText=z

}

function gen2(){
    var z="#";
    for(var i=0;i<6;i++){
        let ran=Math.floor(Math.random()*16)
        // console.log(ran); 
        
        z=z+hex[ran]
    }
    color.style.backgroundColor=z
    p.innerText=z
    // if(handle==1){
    //    
    // }
    handle=0
       clearInterval(take)
    
    }

