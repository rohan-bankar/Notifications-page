const unreadNotification = document.querySelectorAll(".unread");
console.log(unreadNotification);
const readAllNotification = document.querySelector(".read-link");
var notificationCount = 3;
var count = document.querySelector(".notification-count");
count.innerHTML = `${notificationCount}`

readAllNotification.onclick = ()=>{
    for(let i=0;i < unreadNotification.length;i++){
        unreadNotification[i].classList.add("readed");
        unreadNotification[i].style.backgroundColor = "white";
        document.querySelector(".star").remove();
        notificationCount = 0;
        count.innerHTML = notificationCount;
    }
};