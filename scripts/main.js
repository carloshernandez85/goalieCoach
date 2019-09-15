function revealSchedule() {
  document.getElementById("hiddenSchedule").style.display = "block";
}

function concealSchedule() {
  document.getElementById("concealSchedule").style.display = "none";
}

let click = false;
document.getElementById("handler").addEventListener("click", () => {
  if (click) {
    document.getElementById("handler").innerHTML =
      "Looks like I'm all booked up :(";
  } else {
    document.getElementById("handler").innerHTML = "My Schedule";
  }
  click = !click;
});

function footerAlert() {
  alert(
    "Sorry, right now we are all full.  We will make a new announcement at the next camp!"
  );
}

//Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 39.567921, lng: -104.998741 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


