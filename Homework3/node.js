function MakeMultiFilter(originalArray){
    return function(fun, callback){
        var currentArray = [];
        for ( var i = 0; originalArray.length;i++){
            var val = originalArray[i];
            if(fun(val))  {

            }
        }
        if(callback){
            callback.callback(originalArray,currentArray);
        }
        return currentArray;
    }
}


var arrayFilterer1 = MakeMultiFilter([1,2,3]);

arrayFilterer1(function (elem) {
    return elem !== 2; // check if element is not equal to 2
    }, function (currentArray) {
    // 'this' within the callback function should refer to originalArray which is [1, 2, 3]
    console.log(this); // prints [1, 2, 3]
    console.log(currentArray); // prints [1, 3]
});

// Call arrayFilterer1 (without a callback function) to filter out all the
// elements not equal to 3.
// arrayFilterer1(function (elem) {f
//     return elem !== 3; // check if element is not equal to 3
// });

// // // Calling arrayFilterer1 with no filterCriteria should return the currentArray.
// var currentArray = arrayFilterer1();
// console.log('currentArray', currentArray); // prints [1] since we filtered out 2 and 3

// // // Since arrayFilterer returns itself, calls can be chained
// function filterTwos(elem) { return elem !== 2; }
// function filterThrees(elem) { return elem !== 3; }
// var arrayFilterer2 = MakeMultiFilter([1, 2, 3]);
// var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
// console.log('currentArray2', currentArray2); // prints [1] since we filtered out 2 and 3

// // // Multiple active filters at the same time
// var arrayFilterer3 = MakeMultiFilter([1, 2, 3]);
// var arrayFilterer4 = MakeMultiFilter([4, 5, 6]);
// console.log(arrayFilterer3(filterTwos)()); // prints [1, 3]
// console.log(arrayFilterer4(filterThrees)()); // prints [4, 5, 6]


// var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
// var dateTemplate = new TemplateProcessor(template);

// var dictionary = {month: 'July', day: '1', year: '2016'};
// var str = dateTemplate.fillIn(dictionary);

// assert(str === 'My favorite month is July but not the day 1 or the year 2016');

// //Case: property doesn't exist in dictionary
// var dictionary2 = {day: '1', year: '2016'};

// var str = dateTemplate.fillIn(dictionary2);

// assert(str === 'My favorite month is but not the day 1 or the year 2016');

