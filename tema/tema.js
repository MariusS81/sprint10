const mysubmit = (event) => {
     alert('Un email a fost trimit catre mariusvilaescu@yahoo.com')
     event.preventDefault();
    
     console.log('submit');
    
     const el = new FormData(event.target);
     const el1 = Object.fromEntries(el.entries());

     console.log(el1);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
     console.log("DOMContentLoaded");
     const el2 = document.getElementById('myform');
     el2.addEventListener('submit', mysubmit);
     
});