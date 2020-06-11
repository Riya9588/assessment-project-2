var btn9=document.getElementById('join9')
btn9.addEventListener('click', getDataServ);
function getDataServ()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/life.json";
    
    xhr.open('GET', url,true);
   
    xhr.onload=function()
    {
        if(this.status==200)
        {
           
            var users=JSON.parse(this.responseText);
            console.log(users);
            var output='';
            for(var i in users)
            {
                output+='<ul>'+
                
                '<li>ShopName:'+users[i].ShopName+'</li>'+
                '<li>MobileNo:'+users[i].MobileNo+'</li>'+
                '<li>Location:'+users[i].Location+'</li>'+
                '</ul>';

            }
            document.getElementById('container9').innerHTML=output;
           
        }
    }
    xhr.send();

    }