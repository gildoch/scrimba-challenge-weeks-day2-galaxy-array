const galaxy = document.getElementById('galaxy')
const starArray = new Array(150).fill('<ion-icon name="star-outline"></ion-icon>');
const starColor = ["#ea9b80","#B7DE95","#fd9231","#598DA6","#BD9AC2","#D9BB72","#58A958","#63a6ee","#f1d05b"];
function renderStar(){
    for(let i = 0 ; i < starArray.length; i++){ 
        if(i%2==0){
          const starSmall = document.createElement("div");
          starArray.fill('<ion-icon name="star-half-outline" size="large"></ion-icon>', i, i+1)
          starSmall.innerHTML = starArray[i]; 
          starSmall.style.color = starColor[Math.floor(Math.random() * starColor.length)];
          galaxy.appendChild(starSmall);
        }else {
          const starLarge = document.createElement("div"); 
          starLarge.innerHTML = starArray[i];
          starLarge.style.color = starColor[Math.floor(Math.random() * starColor.length)] 
          galaxy.appendChild(starLarge);  
        }                    
    }
}

renderStar();
