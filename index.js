const barWrapper = document.getElementById("barWrapper");
const removeClassId = document.getElementById("remove");
const sidebar = document.getElementById("sidebar");
const BubbleSort = document.getElementById("BubbleSort");
const SelectionSort = document.getElementById("SelectionSort");
const Quicksort = document.getElementById("QuickSort");
const InsertionSort= document.getElementById("InsertionSort")
const SortingAlgorithm = document.getElementById("SortingAlgorithm");

console.log("insertion sort is ", InsertionSort);
console.log("Quick sort is ", Quicksort);
console.log("selection sort is ", SelectionSort);
console.log("bubble sort is ", BubbleSort);

InsertionSort.style.display= "none";
Quicksort.style.display= "none";
SelectionSort.style.display= "none";
BubbleSort.style.display= "none";
var arr = [];
var sizeOfArray = 50;
const call = (event) => {
    console.log("call ", event)
}
var bool = 0;
const openSideBar = () =>{
    bool = 1- bool;
    {bool == 1 ? sidebar.style.display="block" : sidebar.style.display="none"}
        
}
const ClearArray = () =>{

    BubbleSort.style.display= "none";
    InsertionSort.style.display= "none";
    Quicksort.style.display= "none";
    SelectionSort.style.display= "none";
    SortingAlgorithm.style.display="block";

    const bar = document.getElementsByClassName("bar");
    // console.log("length is ", barWrapper);
    var count=0;
    var i= barWrapper.children.length-1;
    while(i>= 0){
        // bar[i].remove();
        console.log("data is ",barWrapper.children[i]);
        barWrapper.removeChild(barWrapper.children[i]);
        count++;
        i--;
    }
    
}

// ==================== || CALCULATE THE SIZE OF THE ARRA || ====================

const ArrayRangeCalculate = (size) => {
    console.log("size is ", size);
    sizeOfArray = size*2;
    
}

// ==================== || THIS FUNCTION GENRERATE A NEW ARRAY || =============================  

const GenerateArray = () => {

    BubbleSort.style.display= "none";
    InsertionSort.style.display= "none";
    Quicksort.style.display= "none";
    SelectionSort.style.display= "none";
    SortingAlgorithm.style.display="block";

    if(barWrapper.children.length == 0){
        for (var i = 0; i < sizeOfArray; i++) {

            // arr.push(Math.floor(Math.random() * 100));
            arr[i]  = Math.floor(Math.random() * 100);
    
            const bar = document.createElement("div");
            // console.log("bar is ", bar)
            bar.classList.add("bar");
            bar.style.height = arr[i] * 5 + "px";
            bar.style.background = "rgb(7, 7, 74)";
            //bar.innerHTML = arr[i];
            bar.style.width = window.screen.availWidth/sizeOfArray + "rem";
            bar.style.color = "white"
            bar.style.border = "1px solid white"
            barWrapper.appendChild(bar);
        }
    } 
   
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ==================== || BUBBLE SORT IMPLEMENTATION || ====================

const BUBBLE_SORT = async () => {
    // alert("calling done ");
    BubbleSort.style.display= "block";
    InsertionSort.style.display= "none";
    Quicksort.style.display= "none";
    SelectionSort.style.display= "none";
    SortingAlgorithm.style.display="none";
    sidebar.style.display="none"

    const bar = document.getElementsByClassName("bar");
    console.log("bar is ", bar);
    for (var i = 0; i < sizeOfArray; i++) {
        for (var j = 0; j < sizeOfArray - 1 - i; j++) {

            for (var k = 0; k < bar.length; k++) {
                bar[k].style.color = "white";
            }
            if (arr[j] > arr[j + 1]) {
                console.log("running")

                arr[j] = arr[j] ^ arr[j + 1];
                //bar[j].innerHTML = arr[j];
                // bar[j].style.background = "violet";
                bar[j].style.height = arr[j] * 5 + "px";

                arr[j + 1] = arr[j] ^ arr[j + 1];
                //bar[j + 1].innerHTML = arr[j + 1];
                // bar[j+1].style.background = "violet";
                bar[j + 1].style.height = arr[j + 1] * 5 + "px";

                arr[j] = arr[j] ^ arr[j + 1];
                //bar[j].innerHTML = arr[j];
                // bar[j].style.background = "violet";
                bar[j].style.height = arr[j] * 5 + "px";
            }
            await sleep(10)
            bar[sizeOfArray - 1 - i].style.background = "green";
        }
        await sleep(10)
    }
    bar[0].style.background = "green";
    // for(var i=0; i<bar.length; i++){
    //     bar[i].style.background = "green";
    // }   
}

// ==================== || INSERTION SORT IMPLEMENTATION || ====================

const INSERTION_SORT = async () => {
    // alert("insertion sort call ");
    BubbleSort.style.display= "none";
    InsertionSort.style.display= "block";
    Quicksort.style.display= "none";
    SelectionSort.style.display= "none";
    SortingAlgorithm.style.display="none";
    sidebar.style.display="none"

    const bar = document.getElementsByClassName("bar");
    console.log("bar is ", bar[0]);
    for (var i = 1; i < sizeOfArray; i++) {
        var temp = arr[i];
        bar[i].style.color = "white";
        bar[i].style.backgroundColor = "green";
       // bar[i].innerHTML = temp;
        var j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            bar[j + 1].style.height = arr[j + 1] * 5 + "px";
            //bar[j + 1].innerHTML = arr[j + 1];
            bar[j + 1].style.color = "white";
            bar[j + 1].style.backgroundColor = "green";
            j--;
            await sleep(10);
        }
        arr[j + 1] = temp;
        bar[j + 1].style.height = temp * 5 + "px";
        bar[j + 1].style.backgroundColor = "green";
        //bar[j + 1].innerHTML = arr[j + 1];
        await sleep(10);
    }
    for(var i=0; i<sizeOfArray; i++){
        console.log(arr[i]+ " ");
    }
}

// ==================== || SELECTION SORT IMPLEMENTATION || ====================

const SELECTION_SORT = async () => {
    BubbleSort.style.display= "none";
    InsertionSort.style.display= "none";
    Quicksort.style.display= "none";
    SelectionSort.style.display= "block";
    SortingAlgorithm.style.display="none";
    sidebar.style.display="none"

    const bar = document.getElementsByClassName("bar");
    for (var i = 0; i < sizeOfArray - 1; i++) {
        var min = i;
        // bar[min].style.background = "aqua";
        for (var j = i + 1; j < sizeOfArray; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            await sleep(10);
        }
        bar[min].style.background = "aqua";
        if (min != i) {
            arr[min] = arr[min] ^ arr[i];
            bar[min].style.height = arr[min] * 5 + "px";
            arr[i] = arr[min] ^ arr[i];
            bar[i].style.height = arr[i] * 5 + "px";
            arr[min] = arr[min] ^ arr[i];
            bar[min].style.height = arr[min] * 5 + "px";
            //console.log("arr[i] is ",arr[i]);
            //bar[i].innerHTML = arr[i];
        }
        await sleep(10);
        bar[i].style.background = "green";

    }
    bar[sizeOfArray-1].style.background = "green";
    for(var i=0; i<sizeOfArray; i++){
        console.log(arr[i]+ " ");
    }
}

// ==================== || QUICK SORT IMPLEMENTATION || ====================

const FindPosition = (arr, low, Ub) => {

    const bar = document.getElementsByClassName("bar");
    // console.log("bar is ", bar);

    var Pivot = arr[low];
    var start = low;
    var end = Ub;
    while (start < end) {
        while (arr[start] <= Pivot) {
            // await sleep(10);
            start++;
        }
        while (arr[end] > Pivot) {
            // await sleep(10);
            end--;
        }
        if (start <= end) {
            arr[start] = arr[start] ^ arr[end];
            arr[end] = arr[start] ^ arr[end];
            arr[start] = arr[start] ^ arr[end];
            // bar[start].innerHTML = arr[start];
            // bar[end].innerHTML = arr[end];
            bar[start].style.background = "green";
            bar[end].style.background = "green";
            bar[end].style.height = arr[end] * 5 + "px";
            bar[start].style.height = arr[start] * 5 + "px";
            bar[end].style.color = "white";
            bar[start].style.color = "white";
        }
    }
    var temp = arr[low];
    arr[low] = arr[end];
    arr[end] = temp;
    // bar[start].innerHTML = arr[start];
    // bar[end].innerHTML = arr[end];
    bar[end].style.background = "green";
    bar[low].style.background = "green";
    bar[end].style.height = arr[end] * 5 + "px";
    bar[low].style.height = arr[low] * 5 + "px";
    bar[low].style.color = "white";
    bar[end].style.color = "white";
    // await sleep(10);
    return end;
}


const QuickSort = async (arr, low, high) => {

    if (low < high) {
        var pos = FindPosition(arr, low, high);
        await sleep(1000);
        QuickSort(arr, low, pos - 1);
        await sleep(1000);
        QuickSort(arr, pos + 1, high);
        await sleep(100);
    }
}

const QUICK_SORT = () => {
    BubbleSort.style.display= "none";
    InsertionSort.style.display= "none";
    Quicksort.style.display= "block";
    SelectionSort.style.display= "none";
    SortingAlgorithm.style.display="none";
    sidebar.style.display="none"

    const bar = document.getElementsByClassName("bar");
    QuickSort(arr, 0, sizeOfArray - 1);
    
}


// ==================== || MERGE SORT IMPLEMENTATION || ====================
var tmp = [];
const MergeSort  = (input,  lb,  Ub) =>{
    var mid = (lb + Ub)/2;
    if(lb < Ub) {
        
        MergeSort(input, lb, mid);
        MergeSort(input, mid+1, Ub);
        
    }
    var i = 0, first = lb, last = mid + 1; 
    const length =Ub - lb + 1;
    // console.log("len" , length)
    var tmp = new Array(length);
   
    
    while (first <= mid && last <= Ub) { 
        tmp[i++] = arr[first] < arr[last] ? arr[first++] : arr[last++]; 
    } 
    while (first <= mid) { 
        tmp[i++] = arr[first++]; 
    } 
    while (last <= Ub) { 
        tmp[i++] = arr[last++]; 
    } 
    i = 0; 
    while (lb <= Ub) { 
        arr[lb++] = tmp[i++]; 
    }
    // console.log("length is ", tmp.length);
    // for(var i=0; i<tmp.length; i++){
    //     console.log("tempdat is ", tmp[i]);
    // }
}

const MERGE_SORT = () => {
    // alert("MERGE SORT");
   
    // for(var i=0; i<arr.length; i++){
    //     tmp.push(arr[i]);
    // }console.log("templengthi s ", tmp.length);
    MergeSort(arr,0, arr.length-1);
    console.log("after sorting array is ")
    for(var i=0; i<tmp.length; i++){
        console.log(tmp[i]+ " ");
    }
}