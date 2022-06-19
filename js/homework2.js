let toastBtnDOM = document.querySelector('#liveToastBtn');
let listDOM = document.querySelector('#list');
let taskDOM = document.querySelector('#task');
let listItems = document.getElementsByTagName('li');


for (let i = 0; i < listItems.length; ++i) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    listItems[i].append(closeButton);
    listItems[i].onclick = check;
}

toastBtnDOM.addEventListener('click', newElement);

function removeButton() {
    this.parentElement.remove();
}

function check() {
    this.classList.toggle("checked");
}

function newElement() {
    if (taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        let liDOM = document.createElement('li');
        listDOM.appendChild(liDOM);
        liDOM.innerHTML = taskDOM.value;
        taskDOM.value = "";

        liDOM.onclick = check;
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
    }
}
