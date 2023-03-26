const {BST} = require('./bts');
const bst = new BST();


Test();

function Test() {
    let arr = [];
    arr.push("ahihihihihihihi");
    bst.insert("ahihihihihihihi");
    for (let i = 0; i < 1000; i++) {
        let str = "";
        for (let j = 0; j < 42; j++) {
            str += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
        }
        arr.push(str);
        bst.insert(str);
    }
    const start2 = Date.now();
    arr.sort();
    const end2 = Date.now();
    const duration2 = end2 - start2;
    console.log(`Thời gian thực thi [sort]: ${duration2}ms -> [${a}]`);

    arr.push()


    const start = Date.now();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "ahihihihihihihi") {
        }
    }
    const end = Date.now();
    const duration = end - start;
    console.log(`Thời gian thực thi [for]: ${duration}ms`);

    const start1 = Date.now();
    var a = binarySearch(arr, "ahihihihihihihi");
    const end1 = Date.now();
    const duration1 = end1 - start1;
    console.log(`Thời gian thực thi [binarySearch]: ${duration1}ms -> [${a}]`);

    
    const start3 = Date.now();
    console.log(bst.search("ahihihihihihihi"));
    const end3 = Date.now();
    const duration3 = end3 - start3;
    console.log(`Thời gian thực thi [binarySearch tree]: ${duration3}ms`);

    bst.delete("ahihihihihihihi");
    const start4 = Date.now();
    console.log(bst.search("ahihihihihihihi"));
    const end4 = Date.now();
    const duration4 = end4 - start4;
    console.log(`Thời gian thực thi sau khi delete [binarySearch tree]: ${duration4}ms`);

}


function binarySearch(arr, target) {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Không tìm thấy
}
 


// for (let i = 0; i < 1000000; i++) {
//     let str = "";
//     for (let j = 0; j < 42; j++) {
//         str += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
//     }
//     bst.insert(str);
// }

// const start1 = Date.now();
// console.log(bst.search("kdjfirwusnvzktcvxyaqmblopg"));
// const end1 = Date.now();
// const duration1 = end1 - start1;
// console.log(`Thời gian thực thi [binarySearch tree]: ${duration1}ms`);
