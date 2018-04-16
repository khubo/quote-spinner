# Quote Spinner
---
Terminal spinner with a twist. show quotes instead of normal boring spinners

 ## API
 
 ``` js
 // require the spinner into Spinner
 
 let quotes = ['May the force be with you']
 const spinner = new Spinner(quotes)
 spinner.start() // spinner starts
 setTimeout(() => {
    spinner.stop() // call it to end the spinner
 }, 5000) 
 ```


 optionally you can set the time each frame says while initlizing the spinner as follows

 `const spinner = new Spinner(quotes, 80)`

 