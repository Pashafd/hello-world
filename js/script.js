"use strict";

window.addEventListener("DOMContentLoaded", () =>{

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParrent = document.querySelector('.tabheader__items');


        function hideTabContent () {
            tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
            });

            tabs.forEach(item => {
               item.classList.remove('tabheader__item_active');
            });
        }

       function showTabContent (i = 0) {
           tabsContent[i].classList.add('show', 'fade');
           tabsContent[i].classList.remove('hide');
           tabs[i].classList.add('tabheader__item_active');

       }
      
       hideTabContent();
       showTabContent();
      
tabsParrent.addEventListener('click', (event) =>{
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                 hideTabContent();
                showTabContent(i);  
               
            }
        });
    }

});
 
// Timer

const deadLine = '2020-12-31';


function getTimeRemaing (endtime) {
    const t = Date.parse (endtime) - Date.parse (new Date()),
          days = Math.floor (t / (1000 * 60 * 60 * 24)),
          minutes = Math.floor ((t / (1000 * 60) % 60)),
          hours = Math.floor ((t / (1000 * 60 * 60)) % 24),
          seconds = Math.floor ((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'minutes': minutes,
            'hours': hours,
            'second': seconds
        };

}


function getZero (num) {
    if (num >= 0  && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
} 


function setClock (selector, endtime) {
    const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

     updateClock();

    function updateClock() {
        const t = getTimeRemaing(endtime);

        days.innerHTML = getZero (t.days);
        hours.innerHTML = getZero (t.hours);
        minutes.innerHTML = getZero (t.minutes);
        seconds.innerHTML = getZero (t.second);
        

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
     }
}


setClock('.timer', deadLine);

});





































//document.addEventListener('DOMContentLoaded', () => {

// let   tabs = document.querySelectorAll('.tabheader__item'),
//       tabsContent = document.querySelectorAll('.tabcontent'),
//       tabsParrent = document.querySelector('.tabheader__items');


//                     function hideTabContent() {
//                                     tabsContent.forEach(item => {
//                                             item.classList.add('hide');
//                                             item.classList.remove('show');
//                                     });

//                                 tabs.forEach(item => {
//                                     item.classList.remove('tabheader__item_active');
//                     });
//                     }

//                     function showTabContent(i = 0) {
//                                         tabsContent[i].classList.add('show', 'fade');
//                                         tabsContent[i].classList.remove('hide');
//                                         tabs[i].classList.add('tabheader__item_active');
//                     }
                                    
//            hideTabContent();
//            showTabContent();
//            tabsParrent.addEventListener('click', (event) => {
//                   const target = event.target;
//             if(target && target.classList.contains('tabheader__item')) {
//                 tabs.forEach((item, i) => {
//                     if (target == item) {
//                          hideTabContent();
//                          showTabContent(i);
//                     }
//                 });
//             }
//         });       

