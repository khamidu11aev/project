document.querySelector('.menu-btn').addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('menu_btn_active');
})