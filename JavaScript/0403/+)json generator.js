// json generator
// https://json-generator.com/
// json

let 회원정보 = [
{
    "_id": "642a621f5d4d6f500d0d3a09",
    "index": 0,
    "age": 23,
    "eyeColor": "green",
    "name": "Dunlap Mcconnell",
    "gender": "male",
    "company": "RECOGNIA"
},
{
    "_id": "642a621f41c0a89d98aeb671",
    "index": 1,
    "age": 30,
    "eyeColor": "brown",
    "name": "Lessie Mccarty",
    "gender": "female",
    "company": "DIGIFAD"
},
{
    "_id": "642a621f979706546ab756af",
    "index": 2,
    "age": 24,
    "eyeColor": "brown",
    "name": "Candice May",
    "gender": "female",
    "company": "SINGAVERA"
},
{
    "_id": "642a621fc3f9907479588473",
    "index": 3,
    "age": 34,
    "eyeColor": "brown",
    "name": "Castaneda Kirk",
    "gender": "male",
    "company": "ZENTILITY"
},
{
    "_id": "642a621f96bcaedb3e9c7729",
    "index": 4,
    "age": 35,
    "eyeColor": "blue",
    "name": "Kathrine Lynch",
    "gender": "female",
    "company": "MEDICROIX"
}
]

  회원정보[0];
  회원정보[0]['name']; // 'Dunlap Mcconnell'
  회원정보[1]['company']; // 'DIGIFAD'
  회원정보[3]['age']; // 34

  // 모르셔도 됩니다.
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
console.log(나이평균)