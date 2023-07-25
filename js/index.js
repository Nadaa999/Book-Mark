var siteName=document.getElementById('siteName')
var siteURL=document.getElementById('siteURL')

var siteArray=[]

if(localStorage.getItem('Website')!=null){
    siteArray=JSON.parse(localStorage.getItem('Website'))


    display()

}

function addBookmark(){
var validate=/^[A-Za-z0-9]{3,}/

validate.test(siteName.value)


var validate2= /^(www)\.[a-zA-Z]{3,}\.[a-z]{2,5}/

validate2.test(siteURL.value)

if( validate.test(siteName.value)==true && validate2.test(siteURL.value)==true
){



var siteOBJ={
    name:siteName.value,
    URL:siteURL.value,
}

siteArray.push(siteOBJ)
clearinput()
localStorage.setItem('Website',JSON.stringify(siteArray))


display()
}else {
   
window.alert('wrong data')

}




}

function display(){

    var box=``
for(var i=0 ;i<siteArray.length ; i++){

    box+=`
    <tr>
                <td>
               ${i}
                </td>
                <td>
                ${siteArray[i].name}
                </td>
                <td>
               <a href="https://${siteArray[i].URL}" target="blank" class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</a>
                </td>
                <td>
                    <button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can mx-2"></i>Delete</button>

                </td>
            </tr>`

        

}
document.getElementById('demo').innerHTML=box

}


function deleteItem(index){

    siteArray.splice(index,1) ;
    localStorage.setItem('Website',JSON.stringify(siteArray)) ;
    display()   

}


function clearinput(){
    siteName.value=''
    siteURL.value=''
}

