
var btn2=document.getElementById('join3')
btn2.addEventListener('click', getData);
function getData()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/car.json";
    
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
                
                '<li>ShowRoom:'+users[i].ShowRoom+'</li>'+
                '<li>MobileNo:'+users[i].MobileNo+'</li>'+
                '<li>email:'+users[i].email+'</li>'+
                '<li>ratings:'+users[i].ratings+'</li>'+
                '<li>Location:'+users[i].Location+'</li>'+
                '</ul>';

            }
            document.getElementById('container3').innerHTML=output;
            
        }
    }
    xhr.send();

    }