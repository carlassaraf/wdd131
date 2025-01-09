const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", () => {

    if(input.value.trim() === "") {
        alert("Input cannot be empty");
        return input.focus();
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    const del = document.createElement("button");
    del.textContent = "❌";
    del.addEventListener("click", () => {
        li.remove();
    });

    li.append(del);
    list.append(li);

    input.value = "";
    input.focus();
});

