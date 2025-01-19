
var cardcontainer = document.getElementById("cardcontainer")
var cardname = document.getElementById('cardname')
var addtaskpopup=document.getElementById('addtaskpopup')
var parent = document.getElementById('parent')
var addItemPopup = document.getElementById('addItemPopup')
var notask = document.getElementById('notask')
var singlecard = document.getElementById('singleCard')

var trip_container = document.getElementById('trip_container')


function showAddTask(){
    addtaskpopup.classList.remove('hide')  
    parent.classList.add('blur')  
}

function hideAddTask(){
    addtaskpopup.classList.add('hide')  
    parent.classList.remove('blur') 
}


function addCard() {
    notask.classList.add('hide')
    hideAddTask()
    let card = document.createElement('div')
    let cardHeading=document.createElement('h3')
    let line = document.createElement("hr")
    let item_list = document.createElement('div')
    let itemList=document.createElement('div')
    let addItem=document.createElement('button')
    let deletebutton=document.createElement('button')

    cardcontainer.appendChild(card)
    card.appendChild(cardHeading)
    card.appendChild(line)
    card.appendChild(itemList)
    card.appendChild(item_list)  
    card.appendChild(addItem)
    card.appendChild(deletebutton)
    
    cardHeading.innerText= cardname.value 
    cardname.value = "" 
    card.classList.add('card')
    addItem.innerText = "Add"
    deletebutton.innerText = "delete"
    item_list.classList.add('item_list')

    deletebutton.addEventListener('click', () => {
        card.remove()
        if(cardcontainer.innerText === '')
            notask.classList.remove('hide')
    })



    addItem.addEventListener('click', () => {
        addItemPopup.classList.remove('hide')
        parent.classList.add('blur')

        let itemPopupheading = document.createElement('h3')
        let itemName = document.createElement('input')
        let addbutton = document.createElement('button')
        let closebutton = document.createElement('button')

        addItemPopup.appendChild(itemPopupheading)
        addItemPopup.appendChild(itemName)
        addItemPopup.appendChild(addbutton)
        addItemPopup.appendChild(closebutton)

        itemPopupheading.innerText = "Add task"
        addbutton.innerText = "Add"
        closebutton.innerText = "Close"

        itemPopupheading.classList.add('task_h')
        itemName.classList.add('input_text')
        addbutton.classList.add('button')
        closebutton.classList.add('button2')

        addbutton.addEventListener('click', () => {
            addItemPopup.classList.add('hide')
            parent.classList.remove('blur')
            

            let item = document.createElement('div')
            let itemtext = document.createElement('span')
            let markdone = document.createElement('button')


            item.appendChild(itemtext)
            item.appendChild(markdone)
            itemtext.innerText = itemName.value
            markdone.innerText = "Mark done"
            item_list.appendChild(item)
            addItemPopup.innerText = ""
            
            markdone.addEventListener('click', () => {
                markdone.classList.add('hide')
                itemtext.classList.add('item_text')
            })
        })

        closebutton.addEventListener('click', () => {
            addItemPopup.classList.add('hide')
            parent.classList.remove('blur')
            addItemPopup.innerText = ""
        })
    })

    cardHeading.addEventListener('click', () => {
        singlecard.classList.remove('hide')
        cardcontainer.classList.add('hide')
        let copycard = card.cloneNode(true)
        singlecard.appendChild(copycard)
        trip_container.firstElementChild.classList.remove('hide')
    })
}




function back() {
    trip_container.firstElementChild.classList.add('hide')
    singlecard.classList.add('hide')
    cardcontainer.classList.remove('hide')
    // singlecard.innerText = ''
}




