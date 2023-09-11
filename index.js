
var cam = document.getElementById("camera");

navigator.mediaDevices.getUserMedia({video:true})
.then(stream =>cam.srcObject = stream)
.catch(err =>console.log(err))