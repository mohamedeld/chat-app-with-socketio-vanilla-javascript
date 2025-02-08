

const joinNs = (element, data) => {
  const nsEndpoint = element.getAttribute("ns");
  console.log("object", nsEndpoint);
  const clikedNs = data?.find(item => item?.endpoint === nsEndpoint);
  const rooms = clikedNs?.rooms;
  const roomList = document.querySelector(".room-list");
  roomList.innerHTML = ""
  rooms?.forEach(item => {
    roomList.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${item?.roomTitle}</li>`
  })
  localStorage.setItem("lastNs",nsEndpoint)
}