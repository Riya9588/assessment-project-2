var btn5=document.getElementById('join5')
btn5.addEventListener('click',getDataS );
//var div1= document.getElementById('container1')
function getDataS()
{
    var xhr=new XMLHttpRequest();
    var url = "../jsonFiles/electr.json";
    
    xhr.open('GET', url,true);
    //xhr.setRequestHeader('X-RapidAPI-Key' , 'ce6b38195emsh9cf32280ebeebe9p1d4542jsn956de73feaad');
    xhr.onload=function()
    {
        if(this.status==200)
        {
           // document.getElementById('container1').innerHTML=this.responseText;
            var user=JSON.parse(this.responseText);
            console.log(user);
            var output='';

        
        //{
          //  let obj=users[i];
            //let a=Object.keys(obj)[0];
            for(var i in user)
            {
                output+='<ul>'+
                
                '<li>ShopName:'+user[i].ShopName+'</li>'+
                '<li>MobileNo:'+user[i].MobileNo+'</li>'+
                '<li>Location:'+user[i].Location+'</li>'+
                '</ul>';

            }
            document.getElementById('container5').innerHTML=output;
            //var options= JSON.parse(this.responseText);
            //console.log(output);
        
            //var output='';
           //document.getElementById('container1')=JSON.stringify(options);
            //div1.innerHTML=output;
        //image=document.createElement('img');
        //image.src=output[0].image;
        //console.log(image);
        //var div1=document.getElementById('container1');
        //div1.appendChild(image);
        }
    }
    xhr.send();

    }