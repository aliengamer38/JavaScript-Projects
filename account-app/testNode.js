const timer = setTimeout(() => {    
    clearTimeout(timer)
    console.log("This will not be executed!")
}, 1500)