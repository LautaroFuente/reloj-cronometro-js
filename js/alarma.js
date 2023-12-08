const $footer = document.getElementById('footer'); 
const $display = document.getElementById('display')
const $nav = document.getElementById('nav')
const mode = document.getElementById('color-mode')


mode.addEventListener('click', function(){
    if($display.classList.contains('white-mode')){
        $display.classList.remove('white-mode');
    }else{
        $display.classList.add('white-mode');
    }

    if($footer.classList.contains('white-mode')){
        $footer.classList.remove('white-mode');
    }else{
        $footer.classList.add('white-mode');
    }

    if($nav.classList.contains('white-mode')){
        $nav.classList.remove('white-mode');
    }else{
        $nav.classList.add('white-mode');
    }
});