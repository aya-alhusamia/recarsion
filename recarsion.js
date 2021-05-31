 
let numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]
// let newArray = numbers
//   .map(arr =>arr.reduce((sum, item) => sum +=item, 0));

// console.log(newArray); that is not recarsion

const sum=(num)=>{
  let count=0
    num.map((n)=>{
        if(+n){
            count+=n
        }
        else{
            count+=sum(n)
        }
    }
    )
    return count
}
console.log(sum(numbers))