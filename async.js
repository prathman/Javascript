async function getData() {

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const task = await response.json()

const tasknew = task
// console.log(task);
return tasknew

}

const value = getData()

setTimeout(() => {console.log(value)},1000)




