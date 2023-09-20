const preloader=document.querySelector('preloader')
const body=document.querySelector('body')
console.log(preloader);
// preloader.style.display='none';
setTimeout(()=>{
    preloader.style.display='none';
    body.style.backgroundColor='#ffffff';
},3000)