let hamburger=document.querySelector('.hamburger');
let NavItems=document.querySelector('.for-hamburger');
let leftmovebtn=document.querySelector('.left-button');
let rightmovebtn=document.querySelector('.right-button');
let Rleftmovebtn=document.querySelector('.Rleft-button');
let Rrightmovebtn=document.querySelector('.Rright-button');

let homeField=document.querySelector('#htab');
let dishesField=document.querySelector('#dtab');
let reviewsField=document.querySelector('#rtab');
let aboutusField=document.querySelector('#atab');
let contactusField=document.querySelector('#ctab');
function home(){
    NavItems.style.display="none";
    homeField.classList.add("active-field");
    dishesField.classList.remove("active-field");
    reviewsField.classList.remove("active-field");
    aboutusField.classList.remove("active-field");
    contactusField.classList.remove("active-field");
    rightmovebtn.style.display="none";
    leftmovebtn.style.display="none";
}
function dishes(){
    NavItems.style.display="none";
    homeField.classList.remove("active-field");
    dishesField.classList.add("active-field");
    reviewsField.classList.remove("active-field");
    aboutusField.classList.remove("active-field");
    contactusField.classList.remove("active-field");
}
function reviews(){
    NavItems.style.display="none";
    homeField.classList.remove("active-field");
    dishesField.classList.remove("active-field");
    reviewsField.classList.add("active-field");
    aboutusField.classList.remove("active-field");
    contactusField.classList.remove("active-field");
}
function aboutus(){
    NavItems.style.display="none";
    rightmovebtn.style.display="none";
    leftmovebtn.style.display="none";
    homeField.classList.remove("active-field");
    dishesField.classList.remove("active-field");
    reviewsField.classList.remove("active-field");
    aboutusField.classList.add("active-field");
    contactusField.classList.remove("active-field");
}
function contactus(){
    NavItems.style.display="none";
    rightmovebtn.style.display="none";
    leftmovebtn.style.display="none";
    homeField.classList.remove("active-field");
    dishesField.classList.remove("active-field");
    reviewsField.classList.remove("active-field");
    aboutusField.classList.remove("active-field");
    contactusField.classList.add("active-field");
}


hamburger.addEventListener('click',()=>{
     if(getComputedStyle(NavItems).display=="none"){
         NavItems.style.display="flex";
     }
    else if(getComputedStyle(NavItems).display=="flex"){
        NavItems.style.display="none";
    }
})


// for dishes
let tsdr1=document.querySelector('.tsd-r1');
let tsdr2=document.querySelector('.tsd-r2');
let tsdr3=document.querySelector('.tsd-r3');
let tsdr4=document.querySelector('.tsd-r4');
// for reviews
let reviewsr1=document.querySelector('.reviews-r1');
let reviewsr2=document.querySelector('.reviews-r2');
let reviewsr3=document.querySelector('.reviews-r3');


function LeftRightBtnD(){
    leftmovebtn.style.display="flex";
    rightmovebtn.style.display="flex";
}
function LeftRightBtnH(){
    leftmovebtn.style.display="none";
    rightmovebtn.style.display="none";
}
function RLeftRightBtnD(){
    Rleftmovebtn.style.display="flex";
    Rrightmovebtn.style.display="flex";
}
function RLeftRightBtnH(){
    Rleftmovebtn.style.display="none";
    Rrightmovebtn.style.display="none";
}



if(screen.width>=576 || screen.width<=450 ){
// for dishes page
rightmovebtn.addEventListener('click',()=>{

    if(getComputedStyle(tsdr1).display=="flex"){
        tsdr2.style.display="flex";
        tsdr1.style.display="none"
    }
   else if(getComputedStyle(tsdr2).display=="flex"){
       tsdr3.style.display="flex";
       tsdr2.style.display="none"
   }
   else  if(getComputedStyle(tsdr3).display=="flex"){
       tsdr4.style.display="flex";
       tsdr3.style.display="none"
   }
   else if(getComputedStyle(tsdr4).display=="flex"){
       tsdr1.style.display="flex";
       tsdr4.style.display="none"
   }
})

leftmovebtn.addEventListener('click',()=>{

   if(getComputedStyle(tsdr1).display=="flex"){
       tsdr4.style.display="flex";
       tsdr1.style.display="none"
   }
  else if(getComputedStyle(tsdr2).display=="flex"){
      tsdr1.style.display="flex";
      tsdr2.style.display="none"
  }
  else  if(getComputedStyle(tsdr3).display=="flex"){
      tsdr2.style.display="flex";
      tsdr3.style.display="none"
  }
  else if(getComputedStyle(tsdr4).display=="flex"){
      tsdr3.style.display="flex";
      tsdr4.style.display="none"
  }
})



// for reviews page
Rrightmovebtn.addEventListener('click',()=>{
    console.log("right clicked");
    if(getComputedStyle(reviewsr1).display=="flex"){
        reviewsr2.style.display="flex";
        reviewsr1.style.display="none"
    }
   else if(getComputedStyle(reviewsr2).display=="flex"){
       reviewsr3.style.display="flex";
       reviewsr2.style.display="none"
   }
   else  if(getComputedStyle(reviewsr3).display=="flex"){
       reviewsr1.style.display="flex";
       reviewsr3.style.display="none"
   }
})


// for reviews page
Rleftmovebtn.addEventListener('click',()=>{
    console.log("left clicked");
    if(getComputedStyle(reviewsr1).display=="flex"){
        reviewsr3.style.display="flex";
        reviewsr1.style.display="none"
    }
   else if(getComputedStyle(reviewsr2).display=="flex"){
       reviewsr1.style.display="flex";
       reviewsr2.style.display="none"
   }
   else  if(getComputedStyle(reviewsr3).display=="flex"){
       reviewsr2.style.display="flex";
       reviewsr3.style.display="none"
   }
})
}


let dish1=document.querySelector('.dish1');
let dish2=document.querySelector('.dish2');
let dish3=document.querySelector('.dish3');
let dish4=document.querySelector('.dish4');
let dish5=document.querySelector('.dish5');
let dish6=document.querySelector('.dish6');
let dish7=document.querySelector('.dish7');
let dish8=document.querySelector('.dish8');
let dish9=document.querySelector('.dish9');
let dish10=document.querySelector('.dish10');
let dish11=document.querySelector('.dish11');
let dish12=document.querySelector('.dish12');

let review1=document.querySelector('.review1');
let review2=document.querySelector('.review2');
let review3=document.querySelector('.review3');
let review4=document.querySelector('.review4');
let review5=document.querySelector('.review5');
let review6=document.querySelector('.review6');
let review7=document.querySelector('.review7');
let review8=document.querySelector('.review8');
let review9=document.querySelector('.review9');

if(screen.width<576 && screen.width>450){
rightmovebtn.addEventListener('click',()=>{
        if(getComputedStyle(dish1).display=="block"){
            dish1.style.display="none";
            dish2.style.display="block";
        }
        else if(getComputedStyle(dish2).display=="block"){
            dish2.style.display="none";
            dish3.style.display="block";
        }
        else if(getComputedStyle(dish3).display=="block"){
            dish3.style.display="none";
            dish4.style.display="block";
            tsdr1.style.display="none";
            tsdr2.style.display="flex";
        }
        else if(getComputedStyle(dish4).display=="block"){
            dish4.style.display="none";
            dish5.style.display="block";
        }
        else if(getComputedStyle(dish5).display=="block"){
            dish5.style.display="none";
            dish6.style.display="block";
        }
        else if(getComputedStyle(dish6).display=="block"){
            dish6.style.display="none";
            dish7.style.display="block";
            tsdr2.style.display="none";
            tsdr3.style.display="flex";
        }
        else if(getComputedStyle(dish7).display=="block"){
            dish7.style.display="none";
            dish8.style.display="block";
        }
        else if(getComputedStyle(dish8).display=="block"){
            dish8.style.display="none";
            dish9.style.display="block";
        }
        else if(getComputedStyle(dish9).display=="block"){
            dish9.style.display="none";
            dish10.style.display="block";
            tsdr3.style.display="none";
            tsdr4.style.display="flex";
        }
        else if(getComputedStyle(dish10).display=="block"){
            dish10.style.display="none";
            dish11.style.display="block";
        }
        else if(getComputedStyle(dish11).display=="block"){
            dish11.style.display="none";
            dish12.style.display="block";
        }
        else if(getComputedStyle(dish12).display=="block"){
            dish12.style.display="none";
            dish1.style.display="block";
            tsdr1.style.display="flex";
        }
})

leftmovebtn.addEventListener('click',()=>{
    if(getComputedStyle(dish1).display=="block"){
        tsdr4.style.display="flex";
        tsdr1.style.display="none";
        tsdr3.style.display="none";
        tsdr2.style.display="none";
        dish1.style.display="none";
        dish12.style.display="block";
    }
    else if(getComputedStyle(dish2).display=="block"){
        dish2.style.display="none";
        dish1.style.display="block";
    }
    else if(getComputedStyle(dish3).display=="block"){
        dish3.style.display="none";
        dish2.style.display="block";
    }
    else if(getComputedStyle(dish4).display=="block"){
        tsdr1.style.display="flex";
        tsdr2.style.display="none";
        dish4.style.display="none";
        dish3.style.display="block";
    }
    else if(getComputedStyle(dish5).display=="block"){
        dish5.style.display="none";
        dish4.style.display="block";
    }
    else if(getComputedStyle(dish6).display=="block"){
        dish6.style.display="none";
        dish5.style.display="block";

    }
    else if(getComputedStyle(dish7).display=="block"){
        tsdr3.style.display="none";
        tsdr2.style.display="flex";
        dish7.style.display="none";
        dish6.style.display="block";
    }
    else if(getComputedStyle(dish8).display=="block"){
        dish8.style.display="none";
        dish7.style.display="block";
    }
    else if(getComputedStyle(dish9).display=="block"){
        dish9.style.display="none";
        dish8.style.display="block";
    }
    else if(getComputedStyle(dish10).display=="block"){
        tsdr3.style.display="flex";
        tsdr4.style.display="none";
        dish10.style.display="none";
        dish9.style.display="block";
    }
    else if(getComputedStyle(dish11).display=="block"){
        dish11.style.display="none";
        dish10.style.display="block";
    }
    else if(getComputedStyle(dish12).display=="block"){
        dish12.style.display="none";
        dish11.style.display="block";
    }
})

Rleftmovebtn.addEventListener('click',()=>{
    if(getComputedStyle(review1).display=="block"){
        reviewsr1.style.display="none";
        reviewsr3.style.display="flex";
        reviewsr2.style.display="none";
        review1.style.display="none";
        review9.style.display="block";
    }
    else if(getComputedStyle(review2).display=="block"){
        review2.style.display="none";
        review1.style.display="block";
    }
    else if(getComputedStyle(review3).display=="block"){
        review3.style.display="none";
        review2.style.display="block";
    }
    else if(getComputedStyle(review4).display=="block"){
        reviewsr1.style.display="flex";
        reviewsr2.style.display="none";
        review4.style.display="none";
        review3.style.display="block";
    }
    else if(getComputedStyle(review5).display=="block"){
        review5.style.display="none";
        review4.style.display="block";
    }
    else if(getComputedStyle(review6).display=="block"){
        review6.style.display="none";
        review5.style.display="block";

    }
    else if(getComputedStyle(review7).display=="block"){
        reviewsr3.style.display="none";
        reviewsr2.style.display="flex";
        review7.style.display="none";
        review6.style.display="block";
    }
    else if(getComputedStyle(review8).display=="block"){
        review8.style.display="none";
        review7.style.display="block";
    }
    else if(getComputedStyle(review9).display=="block"){
        review9.style.display="none";
        review8.style.display="block";
    }
})

Rrightmovebtn.addEventListener('click',()=>{
    if(getComputedStyle(review1).display=="block"){
        review1.style.display="none";
        review2.style.display="block";
    }
    else if(getComputedStyle(review2).display=="block"){
        review2.style.display="none";
        review3.style.display="block";
    }
    else if(getComputedStyle(review3).display=="block"){
        review3.style.display="none";
        review4.style.display="block";
        reviewsr1.style.display="none";
        reviewsr2.style.display="flex";
    }
    else if(getComputedStyle(review4).display=="block"){
        review4.style.display="none";
        review5.style.display="block";
    }
    else if(getComputedStyle(review5).display=="block"){
        review5.style.display="none";
        review6.style.display="block";
    }
    else if(getComputedStyle(review6).display=="block"){
        review6.style.display="none";
        review7.style.display="block";
        reviewsr2.style.display="none";
        reviewsr3.style.display="flex";
    }
    else if(getComputedStyle(review7).display=="block"){
        review7.style.display="none";
        review8.style.display="block";
    }
    else if(getComputedStyle(review8).display=="block"){
        review8.style.display="none";
        review9.style.display="block";
    }
    else if(getComputedStyle(review9).display=="block"){
        review9.style.display="none";
        review1.style.display="block";
        reviewsr3.style.display="none";
        reviewsr1.style.display="flex";
    }
})

}
