// callback defined "inline"
setTimeout(function () {
    console.log("5 seconds later.")
}, 5000)

// callback as a seperately defined function
var callback = function() {
    console.log("5 seconds later.")
}
setTimeout(callback, 5000)
