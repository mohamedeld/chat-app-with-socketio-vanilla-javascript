// const userName = prompt("What is your name?")
// const userPassword = prompt("What is your password?");

const userName = "mohamed";
const userPassword = "first";

 
const socket = io("http://localhost:3000");

socket.on("connect",()=>{
  console.log("connected successfully");
  socket.emit("clientIsConnect","client is connected")
})

socket.on("welcomeToChatRoom",()=>{
  console.log("welcoem to chat room");
})

socket.on("nsList", (data) => {
  const lastNs = localStorage.getItem("lastNs")
  const nsContainer = document.querySelector(".namespaces");
  nsContainer.innerHTML = "";
  data?.forEach(item=>{
    nsContainer.innerHTML += `<div class="namespace" ns="${item?.endpoint}">
      <img src="${item?.image}" alt="${item?.ns}"/>
    </div>`
  })

  

  Array.from(document.getElementsByClassName("namespace"))?.forEach(element=>{
    element?.addEventListener('click',e=>joinNs(element,data))
  })
  joinNs(document.getElementsByClassName("namespace")[0],data)

})
