const axios = require('axios')

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
const getEntity = () => {
  let entity = {
    id: `Entity${randomInteger(1, 20)}`,
  }
  for (let i = 0, n = 20; i < n; i++) entity[`Param${i + 1}`] = randomInteger(-10000, +10000) / 10000
  return entity
}

setInterval(() => {
  axios.post('http://localhost:3000/update', getEntity()).catch(console.log)
}, 100)
