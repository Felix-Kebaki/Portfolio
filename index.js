
/*START OF EMAIL PART*/



// let First=document.getElementById("FirstName");
// let Last=document.getElementById("LastName");
// let Email=document.getElementById("Email");
// let Message=document.getElementById("Message");
// let LikeBefore=document.querySelector(".LikeBefore");

// function sendMail(){
//     if(First.value!="" && Last.value!="" && Email.value!="" && Message.value!=""){
//         (function(){
//             emailjs.init("JkeST0HAGsnbuzM5u");
//         })();
    
//         var params = {
//             FirstName :  First.value,
//             LastName : Last.value,
//             Email : Email.value,
//             Message : Message.value,
//         }
    
//         var serviceId="service_vfzczjf";
//         var templateId="template_gesy2yu";
    
//         emailjs.send(serviceId,templateId,params)
//         .then(res => {
//                 LikeBefore.style.zIndex="1";

//                 if(LikeBefore.style.zIndex=="1"){
//                     setTimeout(()=>{
//                         LikeBefore.style.zIndex="-9999";
//                     },3000);
//                 }
//             }

//         )
//         .catch();
    
//         params={
//             FirstName : document.getElementById("FirstName").value="",
//             LastName : document.getElementById("LastName").value="",
//             Email : document.getElementById("Email").value="",
//             Message : document.getElementById("Message").value="",
//         }
//     }
//     else{
//         window.alert("Please put all your details first");
//     }
// }





// Get elements
let First = document.getElementById("FirstName");
let Last = document.getElementById("LastName");
let Email = document.getElementById("Email");
let Message = document.getElementById("Message");
let LikeBefore = document.querySelector(".LikeBefore");

// ✅ Initialize EmailJS (v4 style)
window.onload = function () {
    emailjs.init({
        publicKey: "fWj6sGTmzVaMoqup2",
    });
};

function sendMail() {

    // Validate inputs
    if (First.value && Last.value && Email.value && Message.value) {

        let params = {
            FirstName: First.value,
            LastName: Last.value,
            Email: Email.value,
            Message: Message.value,
        };

        // Send email
        emailjs.send("service_70rsc46", "template_vr84iz8", params)
            .then(function (response) {

                console.log("SUCCESS!", response);

                // Show success message
                LikeBefore.style.zIndex = "1";

                setTimeout(() => {
                    LikeBefore.style.zIndex = "-9999";
                }, 3000);

                // Clear inputs
                First.value = "";
                Last.value = "";
                Email.value = "";
                Message.value = "";

            })
            .catch(function (error) {

                console.log("FAILED...", error);
                alert("Failed to send message. Check console.");

            });

    } else {
        alert("Please put all your details first");
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





