window.addEventListener("DOMContentLoaded", function () {
//בעת אירוע לחיצה קריאה לכפתורים הנמצאים באייצטיאמל
    document.getElementById("find-me").addEventListener("click", geoFindMe);
    var mapLink;
var shareData;

function geoFindMe(){
    const status = document.querySelector('#status');
     mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://maps.google.com/?q=${latitude},${longitude}`;
           mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
     document.getElementById("iframe").src=`https://maps.google.com/?output=embed&q=${latitude},${longitude}`;



     document.getElementById("iframe").classList.remove("d-none");

    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  




//שיתוף
document.getElementById("shareBtn").addEventListener('click', async () => {


 shareData = {
        title: 'MDN',
        text: 'my location',
        url:  mapLink.href
      }

    try {
      await navigator.share(shareData);
      resultPara.textContent = 'MDN shared successfully';
    } catch (err) {
      resultPara.textContent = `Error: ${err}`;
    }
  });
  

    
})
