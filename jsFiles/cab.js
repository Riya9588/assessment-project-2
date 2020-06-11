//var check=document.getElementById('checkout')
//console.log(check)
//check.addEventListener('click' , getData)

//function getData(event)
//{
//event.preventDefault();
//alert('Transaction is not successful')
//}




    var btn1=document.getElementById('join1')
    btn1.addEventListener('click', getDataFromServer);
    //var div1= document.getElementById('container1')
    function getDataFromServer()
    {
        var xhr=new XMLHttpRequest();
        var url = "../jsonFiles/cab.json";
        
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
                    
                    '<li>VehicleNo:'+users[i].VehicleNo+'</li>'+
                    '<li>MobileNo:'+users[i].MobileNo+'</li>'+
                    '<li>email:'+users[i].email+'</li>'+
                    '<li>ratings:'+users[i].ratings+'</li>'+
                    '<li>Location:'+users[i].Location+'</li>'+
                    '</ul>';
    
                }
                document.getElementById('container2').innerHTML=output;
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