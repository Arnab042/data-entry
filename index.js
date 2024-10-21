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
        else if(myname == 'debarghya' || myname == 'Debarghya' || myname== 'DEBARGHYA' ){
            document.getElementById('myh1').textContent = "Your are Debarghya Welcome!!"
            document.getElementById('yourdata').textContent = "NAME - Debarghya Mukherjee  , AGE : 23 Years , Address : Sahid khudiram"
            document.getElementById('image2').src = 'deb.png';
        }
        else{
            document.getElementById('myh1').textContent = "you are not anyone!"
        }
    }
    else if (!myname){
        document.getElementById('myh1').textContent = 'please enter your name first';
    }
    

}

