let input = document.querySelector("#task");
let list = document.querySelector("#list");

function newElement() {
    //input kontrol
    if (!input.value || input.value.replace(/^\s+|\s+$/g, "").length == 0) {
        $('.error').toast('show')
        input.value = ""
        return;
    }

    //li tag'i ve içeriği oluşturma
    const li = document.createElement("li");
    li.id = "liveToast"
    li.textContent = input.value
    //span tag'i oluşturma
    const span = document.createElement("span")
    span.className = "close"
    span.innerHTML = "&#10006"
    //tag elementleri append yapma
    list.append(li)
    li.append(span)
    //eğer çarpıya tıklandıysa bulunduğu li tag'i silme
    span.addEventListener("click", () => {
        li.remove()
    })
    //checked durumu kontrol etme
    li.addEventListener("click", () => {
        console.log(li.classList)
        if (li.classList == "") {
            li.classList.add("checked")
        } else {
            li.classList.remove("checked")
        }
    })
    //input içeriğini boşaltma
    input.value = ""
}
//ekranın herhangi bir yerine butona tıklandığında input'a focus olma ve eğer enter'a tıklanırsa newElemen() metot'unu çalıştırma
document.addEventListener("keydown", (e) => {
    input.focus()
    e.keyCode == 13 && newElement();
})