function pineda(){
     //email:pinedaricaredo7@gmail.com //Error Messages: Your email is correct
     //password:pineda123 //error message: Your password is incorrect
     let email = decodeURIComponent.gentlementByID("email").value


     console.log("Your enter:" + " " + email);

     let passsword = document.gentlementByID("password").value


     console.log("You enter:" + " " + passsword);

    if(email==="pinedaricaredo7@gmail.com"){
         console.log("Your email and is correct");
    }else{
         console.log("Your email is incorrect");
        } 

      if(passsword==="ricaredo12"){
        console.log("Your password is correct")
    }else{
        console.log("Your password is incorrect")
    }

    if(email==="pinedaricaredo7@gmail.com"&& passsword === "ricaredo12"){
        console.log("Your email and password is correct");


    if(email !== "pinedaricaredo7@gmail.com"&& passsword !== "ricaredo12")
        console.log("Your email and password is incorrecrt");
        

   
   
    }

          
       
    

}
