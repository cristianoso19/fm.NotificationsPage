function countNotifications(){
let notificationCounter = document.getElementsByClassName('bg-verylightgb').length;
document.getElementById('notifications-counter').innerHTML = notificationCounter;
}

countNotifications();
let notificationCard1 = document.getElementById("notification-card-1");
let notificationCard2 = document.getElementById("notification-card-2");
let notificationCard3 = document.getElementById("notification-card-3");
let notifications = [notificationCard1,notificationCard2,notificationCard3]

let markAllAsRead = document.getElementById('mark-all-as-read'); 
markAllAsRead.addEventListener('click', ()=>{
    if (document.getElementsByClassName('bg-verylightgb').length != 0){
        notifications.forEach((notification)=>{
        notification.classList.remove('bg-verylightgb'); 
        document.getElementById('notification-ping').remove();
        });
        countNotifications();
        markAllAsRead.classList.remove('cursor-pointer', 'hover:text-blue');
    }else{
        console.log("0 notifications");
    }

})