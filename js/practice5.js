// try-catch

let items;

try {
    items.forEach(item => {
        console.log(item);
    });   
} catch (error) {
    console.log("Error: ", error);
}

function valid() {
    try {
        if (document.querySelector('#birthDate').value == "") {
            throw "doğum tarihini boş geçemezsiniz!";
        }
    } catch(err) {
        alert(err);
    }
}

// fetch api

fetch("/data/settings.json")
.then(
    response => {
        return response.json();
    }
).then(
    responseJson => {
        console.log(responseJson);
    }
)