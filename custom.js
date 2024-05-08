const Text = document.querySelector("#text");
const File = document.querySelector("#file");
const textBtn = document.querySelector("#textBtn");
const fileBtn = document.querySelector("#fileBtn");
const sizes = document.querySelector("#sizes");
const Generatebtn = document.querySelector("#Generatebtn");
const Downloadbtn = document.querySelector("#Downloadbtn");
const qrcode = document.querySelector("#qrcode");


let size = sizes.value

sizes.addEventListener('change',()=>{
   size = sizes.value; 
}) 




textBtn.addEventListener('click',()=>{
  qrcode.innerHTML = ''; 
  File.style = " display: none; "
  Text.style = " display: block; "
  fileBtn.style = "background-color: #fff; color:#000;"
  textBtn.style = "background-color: rgb(227, 227, 0); color: #2b2b2b;"


  
// text value Qr Code 

  Generatebtn.addEventListener('click',()=>{
    qrcode.innerHTML = ''; 
    if(Text.value.length > 0){

      QRCodeGeneratorText()
      

      sizes.addEventListener('change', e=>{
        qrcode.innerHTML = ''; 
        size = e.target.value;
        if(Text.value.length > 0){
          QRCodeGeneratorText()
          
        }
        else{
          alert('Enter The Text or URL to Generate your QR Code')
        }
      })  


    }
    else{
      alert('Enter The Text or URL to Generate your QR Code')
    }


  

  
})
function QRCodeGeneratorText(){
    qrcode.innerHTML = ''; 
    new QRCode("qrcode", {
      text: Text.value,
      width: size,
      height: size,
      colorLight : "#ffffff",
      colorDark : "#000000"
  }); 
}
})

fileBtn.addEventListener('click',()=>{
  qrcode.innerHTML = ''; 
  Text.style = " display: none; "
  File.style = " display: block; "
  textBtn.style = "background-color: #fff; color:#000;"
  fileBtn.style = "background-color: rgb(227, 227, 0); color: #2b2b2b;"






// file value Qr Code
Generatebtn.addEventListener('click',()=>{
    qrcode.innerHTML = ''; 
   if(File.value.length > 0){
    QRCodeGeneratorFile()  

    sizes.addEventListener('change', e=>{
      qrcode.innerHTML = ''; 

      size = e.target.value;
      if(File.value.length > 0){
        QRCodeGeneratorFile()
        
      }
      else{
        alert('Enter The Text or URL to Generate your QR Code')
      }
    })    
  }
  else{
    alert('Enter The Text or URL to Generate your QR Code')
  }


  

  
})




function QRCodeGeneratorFile(){
    qrcode.innerHTML =''; 
    new QRCode("qrcode", {
      text: File.value,
      width: size,
      height: size,
      colorLight : "#ffffff",
      colorDark : "#000000"
  }); 
}
 
})
 




Downloadbtn.addEventListener('click',()=>{

  let img = document.querySelector('#qrcode img')

  if (img != null){
    let img_atr = img.getAttribute('src');
    Downloadbtn.setAttribute('href', img_atr)
  }
  else{
    alert('QR Code Generate')
  }


})




