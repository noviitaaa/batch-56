function getData(event){
    event.preventDefault()
    let name=document.getElementById("nameInput").Value;
    let email=document.getElementById("emailInput").Value;
    let number=document.getElementById("numberInput").Value;
    let subject=document.getElementById("subjectInput").Value;
    let desc=document.getElementById("description").Value;

    
    
    let dataFormulir={name, email, number, subject, desc}
    console.log(dataFormulir)

    if (name==""){
        alert("diisi nama nya yaa")
        return
    }
    else if (email==""){
        alert("diisi email nya yaa")
        return
    }
    else if (number==""){
        alert("diisi number nya yaa")
        return
    }
    else if (subject==""){
        alert("diisi subject nya yaa")
        return
    }
    else if (desc==""){
        alert("diisi description nya yaa")
        return
    }

 let myEmail="novitaindahsari29091999@gmail.com"
 let sendemail=document.createElement("a")
 sendemailendemail.href='mailto:${myemail}?subject=${subject}&body=halo nama saya ${name},email saya adalah ${email},nomer saya adalah ${number},pesan saya adalah ${desc}'
    sendemail.click()

}

   