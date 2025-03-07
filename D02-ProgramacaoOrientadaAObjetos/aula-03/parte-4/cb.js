var json =
  '{"name": "John Doe", "age": "34","birth": "2017-11-30T12:00:00.000Z", "city": "Porto Alegre"}';

var obj = JSON.parse(json, (key, value) => {
  if (key === "birth") return new Date(value);
  if (key === "age") return parseInt(value)
  return value;
});

console.log(obj);
