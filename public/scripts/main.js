import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button') 



//pegar todos os botões que existe com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
//adcionar a escuta
  button.addEventListener("click", handleClick)

})

const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick (event, false))
})


function handleClick(event, check =  true){
event.preventDefault()
  const text = check ? "Marca como lida" : "excluir "
  const slug = check ? "check" : "delete"
  const roomId = document.querySelector("#room-id").dataset.id
  const form = document.querySelector(".modal form")
  const questionId = event.target.dataset.id


  form.setAttribute("action", `question/${roomId}/${questionId}/:${slug}`)
  
  
  modalTitle.innerHTML= `${text} esta pergunta`
modalDescription.innerHTML= `tem certeza que deseja ${text.toLowerCase()} essa pergunta?` 
modalButton.innerHTML=`sim, ${text.toLowerCase()}`
check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
// abrir modal
  modal.open()

}





