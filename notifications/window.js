var path = require('path');
var options = [
  {
    title: "Basic Notification",
    body: "Short message part"
  },
  {
    title: "Content-Image Notification",
    body: "Short message plus a custom content image",
    icon: path.join(__dirname, 'icon.png')
  }
]


function doNotify(evt) {
  var notification;
  if (evt.srcElement.id == "basic") {
    notification = new Notification(options[0].title, options[0]);
  }
  else if (evt.srcElement.id == "image") {
    notification = new Notification(options[1].title, options[1]);
  }

  notification.onclick = function(){
    console.log("Notification clicked");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("basic").addEventListener("click", doNotify);
  document.getElementById("image").addEventListener("click", doNotify);
})
