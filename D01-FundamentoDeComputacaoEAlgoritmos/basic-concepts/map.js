newMap = new Map();

newMap.set("name", "fernando");
newMap.set("age", 34);
newMap.set("height", 1.74);

for (let [key, value] of newMap) {
  console.log(key, value);
}

for (let key of newMap.keys()) {
  console.log(key);
}
