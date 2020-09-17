var JSONObject = {
                   'firstName' : 'uma', 
                   'lastName': 'Jagrav',
                    'grade': "2",
                    'isAdmin': "true"
                }

console.log(JSONObject)

var person = {firstName:'Swathi', lastName:'Jagrav'}

console.log(JSON.stringify(person))

var person2 = JSON.stringify(person);

console.log(person2.firstName)

console.log(JSON.stringify({x:5, y:6}))

var obj = JSON.stringify({x:5, y:6});

console.log(JSON.stringify({x:5, y:6},null, ' ')) // dispay your JSON stringified oject with line breaks

JSON.parse(obj)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true