
var btn7=document.getElementById('join7')
btn7.addEventListener('click', getDatar);
//var div1= document.getElementById('container1')
function getDatar()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/tutor.json";
    
    xhr.open('GET', url,true);
    //xhr.setRequestHeader('X-RapidAPI-Key' , 'ce6b38195emsh9cf32280ebeebe9p1d4542jsn956de73feaad');
    xhr.onload=function()
    {
        if(this.status==200)
        {
           // document.getElementById('container1').innerHTML=this.responseText;
            var users=JSON.parse(this.responseText);
            console.log(users);
            var output='';

        
        //{
          //  let obj=users[i];
            //let a=Object.keys(obj)[0];
            for(var i in users)
            {
                output+='<ul>'+
                
                '<li>ShowRoom:'+users[i].ShowRoom+'</li>'+
                '<li>MobileNo:'+users[i].MobileNo+'</li>'+
                '<li>email:'+users[i].email+'</li>'+
                '<li>ratings:'+users[i].ratings+'</li>'+
                '<li>Location:'+users[i].Location+'</li>'+
                '</ul>';

            }
            document.getElementById('container7').innerHTML=output;
            
        }
    }
    xhr.send();

    }