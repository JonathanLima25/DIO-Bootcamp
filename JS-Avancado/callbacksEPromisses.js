//promisses
const doSomethingPromisse = new Promise((resolved, reject) =>{
    setTimeout(function() {
        resolved('First data');
    }, 1000)
});

const doOtherthingPromisse = new doSomethingPromisse((resolved, reject) => {
    setTimeout(function() {
        resolved('Second data');
    }, 1000);
})

// callbacks
function doSomething(callback){
    setTimeout(function() {
        callback('First data');
    }, 1000);
} 

function doOtherthing(callback){
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

function doAll() {
    doSomething(function(data) {
        var processedData = data.split('');

        doOtherthing(function(data2) {
            var processedData2 = data2.split('');

                setTimeout(function(){
                    console.log(processedData, processedData2)
                }, 1000);
            });
        });
}


doAll();