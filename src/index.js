document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  let form = document.querySelector("form")
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    manageTodo(e.target.new_task_description.value)
    form.reset()
  })
});


function manageTodo (todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')

  li.textContent = `${todo} `
  btn.textContent = "X"

  li.appendChild(btn)

  document.querySelector('#tasks').appendChild(li)  
  btn.addEventListener('click', manageDelete)
}

function manageDelete(e){
  e.target.parentNode.remove()
}

