function BinarySearch(arr, key){
    var low = 0;
    var high = arr.length;
    while(low < high){
        var mid = Math.floor((low + high) / 2);
        if(key > arr[mid]){
            low = mid + 1;
        } else if(key < arr[mid]){
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}