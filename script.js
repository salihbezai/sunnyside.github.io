const icon_menu = document.getElementById('icon_mobile');
const icon_menu_class = document.querySelector('.rotate_icon');
const mobile_menu = document.querySelector('.mobile-items');

const show_menu = ()=>{
    icon_menu_class.style.transform='rotate(90deg)'
    mobile_menu.style.display='flex'
}

const hide_menu = ()=>{
    icon_menu_class.style.transform='rotate(0deg)'
    mobile_menu.style.display='none'
}

// icon menu and menu items
icon_menu.addEventListener('click',()=>{
    if(getComputedStyle(icon_menu_class).transform !=='matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)'){
      show_menu()
    }else{
        hide_menu()
    }
    
})

// check the window width 
const check_window_width = ()=>{
    if(window.innerWidth >= 1021){
        hide_menu()
    }
}

window.addEventListener('resize', check_window_width)
