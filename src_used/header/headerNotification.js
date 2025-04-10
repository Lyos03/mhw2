const noti = document.querySelector(".header_bar_notifications_menu");
const notiContainer=document.querySelector("#header_bar_notifications_container");

function openNotifications(event){
    event.stopPropagation();

    disableHidden(noti);
}

function isClickInsideNoti(event){
    if(event.target!==event.currentTarget){
        closeNotifications();
    }
}

function closeNotifications(){
    enableHidden(noti);
}


notiContainer.addEventListener("click", openNotifications);

document.addEventListener("click",isClickInsideNoti);
