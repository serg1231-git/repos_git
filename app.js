function forEachObject(object,fn){
    var newArray=[];
    for(var key in object){
        newArray.push(fn(key,object[key]));
    }
    return newArray;
}
var menu = {
    width: 300,
    height: 200,
    title: "Menu"
  };
  const array_all=forEachObject(menu,(item)=> {
    return item+':'+menu[item];
});
