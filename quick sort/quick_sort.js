function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[0];
  
  const smaller = [];
  const greater = [];
  
  let index = 1;
  
  while(index < arr.length) {
    if(pivot > arr[index]) {
      smaller.push(arr[index]);
    } else {
      greater.push(arr[index]);
    }
    index++;
  }
  
  return [...quickSort(smaller), pivot, ...quickSort(greater)];
}

console.log(quickSort([2, 7, 3, 8, 10, 3, 5, 7, 0]));