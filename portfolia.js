let MenuBtn= document.getElementById('MenuBtn')


MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classlist.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark ')
})



let typed = new Typed('.auto-input',{
    strings:['Python Programmer!','Graphic Designer','Font-End Developer!'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})