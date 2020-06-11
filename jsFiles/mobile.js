//var check=document.getElementById('checkout')
//console.log(check)
//check.addEventListener('click' , getData)

//function getData(event)
//{
//event.preventDefault();
//alert('Transaction is not successful')
//}




var btn0=document.getElementById('join4')
btn0.addEventListener('click', getData);
//var div1= document.getElementById('container1')
function getData()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/mobile.json";
    
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

            for(var i in users)
            {
                output+='<ul>'+
                
                '<li>ShopName:'+users[i].ShopName+'</li>'+
                '<li>MobileNo:'+users[i].MobileNo+'</li>'+
                '<li>email:'+users[i].email+'</li>'+
                '<li>ratings:'+users[i].ratings+'</li>'+
                '<li>Location:'+users[i].Location+'</li>'+
                '</ul>';

            }
            document.getElementById('container4').innerHTML=output;
            
        }
    }
    xhr.send();

    }