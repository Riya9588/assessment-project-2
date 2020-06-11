var btn8=document.getElementById('join8')
btn8.addEventListener('click', getDataSer);

function getDataSer()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/gift.json";
    
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
            document.getElementById('container8').innerHTML=output;
            
        }
    }
    xhr.send();

    }