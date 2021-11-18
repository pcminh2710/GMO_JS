const infoList = []
//Xử lý add 
function add() {
    const date = new Date()
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var validate = document.querySelector('.validate')
    if (name !== "" && phone !== "" && email !== "") {
        var item = {
            id: `${date.getHours()}${date.getMinutes()}${date.getMilliseconds()}`,
            name: name,
            phone: phone,
            email: email,
        }
        validate.innerHTML = ""
        infoList.push(item)
        render();
        clear();
    } else {
        validate.innerHTML = " Vui Lòng nhập đầy đủ các trường này"
    }
}
function clear() {
   var clClear = document.querySelectorAll(".clear");
   for(var i = 0; i < clClear.length; i++)
    {
       clClear[i].value ="" ;
    }
}
// Xử lý check all
const checkAllElement = document.querySelector('.checkAll')
checkAllElement.onclick = function (e) {
    const cb = document.querySelectorAll('.checkBoxItem');
    cb.forEach(item => {
    if (e.target.checked === true) {
            item.checked = true
        } else {
            item.checked = false
        }
        });
   
}
// delete action
function deleteItem(id) {
    const dltI = document.querySelectorAll('.deleteItem');
    dltI.forEach(() => {
        infoList.map((item, index) => {
            if (Number(item.id) === id) {
                infoList.splice(index, 1)
            }
        })
        render()
    })
}
// delete 
function remove() {
    checkAllElement.checked = false
    const cb = document.querySelectorAll('.checkBoxItem');
    cb.forEach((item) => {
        if (item.checked === true) {
            const indexOfElement = item.parentElement.parentElement.dataset.index
            infoList.map((item, index) => {
                if (Number(item.id) === Number(indexOfElement)) {
                    infoList.splice(index, 1)
                }
            })
            render()
        }
    })
}
function render() {
    const list = infoList.map((item) => {
        return ` <tr data-index="${item.id}">
        <th class="checkbox">
            <input type="checkbox" class="checkBoxItem" name="" value="">
        </th>
        <th class="name" > 
            <input type="text" name="name" readonly ondblclick="dblclick(this)" onblur="handleBlur(this)" value="${item.name}">
        </th>
        <th class="phone"> 
            <input type="number" name="phone" readonly ondblclick="dblclick(this)" onblur="handleBlur(this)" value="${item.phone}">
        </th>
        <th class="email"> 
            <input type="text" name="email" readonly ondblclick="dblclick(this)" onblur="handleBlur(this)" value="${item.email}">
        </th>
        <th class="action"> 
            <button class = "deleteItem" onclick ="deleteItem(${item.id})" > delete</button> 
        </th> 
    </tr>`
    }).join("")
    document.getElementById('render').innerHTML = list;
}

function dblclick(e) {
    e.readOnly = false
}

function handleBlur(e) {
    e.readOnly = true;
    const id = e.parentElement.parentElement.dataset.index
    infoList.forEach(item => {
        if (Number(item.id) === Number(id)) {
            item[e.name] = e.value
        }
    })
}
