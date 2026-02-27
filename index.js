
/*START OF EMAIL PART*/



let First=document.getElementById("FirstName");
let Last=document.getElementById("LastName");
let Email=document.getElementById("Email");
let Message=document.getElementById("Message");
let LikeBefore=document.querySelector(".LikeBefore");


emailjs.init({
    publicKey: "JkeST0HAGsnbuzM5u",
});

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function sendMail(){
    if(First.value!="" && Last.value!="" && Email.value!="" && Message.value!=""){
    
        var params = {
            FirstName :  capitalizeFirstLetter(First.value.trim()),
            LastName : capitalizeFirstLetter(Last.value.trim()),
            Email : Email.value,
            Message : Message.value,
        }
    
        var serviceId="service_70rsc46";
        var templateId="template_vr84iz8";
    
        emailjs.send(serviceId,templateId,params)
        .then(res => {
                LikeBefore.style.zIndex="1";

                if(LikeBefore.style.zIndex=="1"){
                    setTimeout(()=>{
                        LikeBefore.style.zIndex="-9999";
                    },3000);
                }
            }

        )
        .catch();
    
        params={
            FirstName : document.getElementById("FirstName").value="",
            LastName : document.getElementById("LastName").value="",
            Email : document.getElementById("Email").value="",
            Message : document.getElementById("Message").value="",
        }
    }
    else{
        window.alert("Please put all your details first");
    }
}



/*END OF EMAIL PART*/






/*START OF RESPONSIVE MENU*/


let MenuBtn=document.getElementById("MenuBtn");
let NavigationSide=document.querySelector(".NavigationSide");
let CloseBtn=document.getElementById("CloseBtn");


MenuBtn.addEventListener('click',function(){
    NavigationSide.style.transform="translateX(0rem)";
})
CloseBtn.addEventListener("click",function(){
    NavigationSide.style.transform="translateX(1500rem)";
})


let NavsBtn=document.querySelectorAll("#NavsBtn")


    NavsBtn.forEach(element => {
        element.addEventListener("click",function(){
            if(NavigationSide.style.transform==="translateX(1500rem)"){
                NavigationSide.style.transform="translateX(0rem)";
            }
            else{
                NavigationSide.style.transform="translateX(1500rem)";
            }
        })
    })



/*END OF RESPONSIVE MENU*/





