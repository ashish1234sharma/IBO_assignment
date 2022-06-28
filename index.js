const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


1.
function getUniqueProductCount(A){
  let obj= {};
  for(let i=0;i<A.length;i++){
    if(A[i]["productName"] in obj){
      obj[A[i]["productName"]]++;
    }
    else{
      obj[A[i]["productName"]]= 1;
    }
  }
  return obj;
}

let productList= getUniqueProductCount(listOfProducts);
 console.log(productList);


// 2.
function getUniquePrducts(A){
  
  let newArr= [];
  for(let key in productList){
    var obj={"productName": key,
             "quantity": 0};
    for(let i=0;i<A.length;i++){
      if(key == A[i]["productName"]){
        obj["productName"]= key;
        obj["description"]= A[i]["description"];
        obj["quantity"]+= A[i]["quantity"];
      }
    }
    newArr.push(obj);
  }
  return newArr;
}
console.log(getUniquePrducts(listOfProducts));