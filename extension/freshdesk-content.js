// Add to manifest to use.
// "content_scripts": [
//     {
//         "matches": ["https://*.freshdesk.com/*"],
//         "js": ["freshdesk-content.js"]
//     }
// ]

// window.onload = (event) => {
//     var intervalRef = setInterval(function(){
//         const classList = document.getElementsByClassName("info-details-content");
//         if(classList.length === 0 || classList.length > 1)
//         {
//             return;
//         }
//         var email = classList[0].textContent.trim()
//         alert(email)
//         clearInterval(intervalRef)
//     }, 1000)
// };
