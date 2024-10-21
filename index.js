let myname;
let result;


document.getElementById('B1').onclick = function(){
    myname = document.getElementById('user').value ;
    myname = String(myname);    
    console.log(myname);
    if(myname){
        document.getElementById('myh1').textContent = myname ;
        if(myname == 'arnab' || myname =='ARNAB' || myname == 'Arnab' ){
            document.getElementById('myh1').textContent = "oh Hi Arnab!!"
            document.getElementById('yourdata').textContent = "NAME - Arnab Mandal  , AGE : 23 Years , Address : Sonarpur"
            document.getElementById('image1').src = 'me.png';
        }
        else if(myname == 'Debarghya' || myname == 'debarghya' || myname== 'DEBARGHYA' ){
            document.getElementById('myh1').textContent = "Your are Debarghya Welcome!!"
            document.getElementById('yourdata').textContent = "NAME - Debarghya Mukherjee  , AGE : 23 Years , Address : Sahid khudiram"
            document.getElementById('image2').src = 'deb.png';
        }
        else if(myname == 'tanisha' || myname == 'Tanisha' || myname== 'TANISHA' ){
            document.getElementById('myh1').textContent = "Your are TANISHA Welcome!!"
            document.getElementById('yourdata').textContent = "NAME - Tanisha Dey  , AGE : 23 Years , Address : Sahid khudiram"
            document.getElementById('image3').src = 'tan.png';
        }
        else if(myname == 'Bidisha' || myname == 'BIDISHA' || myname== 'bidisha' ){
            document.getElementById('myh1').textContent = "Your are Tanisha !!"
            document.getElementById('yourdata').textContent = "NAME - Bidisha Mahanty  , AGE : 23 Years , Address : Purulia"
            document.getElementById('image3').src = 'bidisha.png';
        }
        else if(myname == 'pritha' || myname == 'Pritha' || myname== 'PRITHA' ){
            document.getElementById('myh1').textContent = "Your are PRITHA!!"
            document.getElementById('yourdata').textContent = "NAME - Pritha Dutta  , AGE : 23 Years , Address : DumDum"
            document.getElementById('image4').src = 'pritha.png';
        }


        else{
            document.getElementById('myh1').textContent = "you are not anyone!"
        }
    }
    else if (!myname){
        document.getElementById('myh1').textContent = 'please enter your name first';
    }
    

}

