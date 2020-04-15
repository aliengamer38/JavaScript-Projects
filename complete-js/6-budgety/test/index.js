let controller = (function () {
    let testing = function () {
        console.log(num);
    }
    // testing();
    console.log("initializing");    
    let num = 10;
    
    return {
        test: function () {
            testing();
        }
    }
})();
controller.test();