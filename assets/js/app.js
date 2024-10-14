document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu')
    const close = document.querySelector('.close');
    const navUl = document.querySelector('.nav');

    menu.addEventListener('click', function() {
        navUl.classList.add('show');
        menu.style.display = 'none'
        close.style.display = 'block'
    });
    
    close.addEventListener('click', function() {
        navUl.classList.remove('show');
        close.style.display = 'none'
        menu.style.display = 'block'
    });
});
date.innerHTML = new Date().getFullYear();
let randomArray = [
    'Thank you for the tracks', 'Gotten the logs and they are perfect. Thanks', 'The SMTP wasn\'t all that stable but it\'s worth it', 'First time trying I hope the views stays on my TikTok', 'Please can you send me the full documentation of the SQR400 I purchased',
    'Thanks the software is great. I love it but why does it need strong internet connection to get more cool operation.', 'Please why did it take long for the CC to stampigate', 'Great track 2 dump', 'I will still come purchase more logs. You guys are Great',
    'Cool logs and very active', 'Thank you for getting my Facebook account back after all this year\'s if being hacked', 'fast, adequate and accurate account sorting this software really rocks', 'More Asia CCV please I need more. Your CCV are dope #fighting',
    'Clone my company database please.', 'I paid already and sent my payment proofs please check', 'Great software and easy to use but make provision for using the software offline, sometimes one might be out of data (internet connection)and needs to make ugent transaction which is not possible because of limited internet access',
    'Your dumps are cracking on my end. Why ?', 'Best dumps ever. Coming back for more', 'Thanks you for this', 'Thanks I got your mail', 'I just made my deposit', 'Thank you I received the followers', 'Now I know how dj Khalid gets more YouTube views', 'My followers are growing yes thank you',
    'Sorry I posted my review more than once. I am so excited to get this URL', 'Cool software to use it is very reliable , some fake online website that shows different kind videos and then they\'ve given you rubbish log. Thanks so much for the software the charges is token compared to it\'s quality.'
 ];

 let randomElement = randomArray[Math.floor(Math.random() * randomArray.length)];
 let randomElementb = randomArray[Math.floor(Math.random() * randomArray.length)];
 let randomElementc = randomArray[Math.floor(Math.random() * randomArray.length)];
if(document.getElementById("feedbacka")){
    document.getElementById("feedbacka").innerHTML = randomElement;
    document.getElementById("feedbackb").innerHTML = randomElementb;
    document.getElementById("feedbackc").innerHTML = randomElementc;
}

 function review(e) {
    e.preventDefault();
    let msg = document.querySelector("#msg").value;
    if (!msg.trim()) {
       swal("Error", "Please enter a review", "error");
       msg = "";
       return;
    }
    randomArray.push(msg);
    msg = "";
    swal("Good job!", "Your review has been submitted successfully.", "success");
 }
const form = document.querySelector("#form");
form.addEventListener("submit", review);

 const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
 });


 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));


 addEventListener('load', ()=>{
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        content.style.display = 'block';
    }, 1000);
})