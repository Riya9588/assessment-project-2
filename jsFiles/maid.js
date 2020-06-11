
var btn6=document.getElementById('join6')
btn6.addEventListener('click', getDataSe);
//var div1= document.getElementById('container1')
function getDataSe()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/maid.json";
    
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

      
            //let a=Object.keys(obj)[0];
            for(var i in users)
            {
                output+='<ul>'+
                
                '<li>MaidName:'+users[i].ShowRoom+'</li>'+
                '<li>MobileNo:'+users[i].MobileNo+'</li>'+
                
                '<li>Experience:'+users[i].Experience+'</li>'+
                '<li>Location:'+users[i].Location+'</li>'+
                '</ul>';

            }
            document.getElementById('container6').innerHTML=output;
            
        }
    }
    xhr.send();

    }