// heart count function
let count = 0

document.getElementById("card-heart-btn-1").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-2").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-3").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-4").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-5").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-6").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-7").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-8").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})

document.getElementById("card-heart-btn-9").addEventListener("click", function () {
    count++
    document.getElementById("heart").textContent = count
})



// copy count function


let copyCount = 0
document.getElementById("copy-btn-1").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-1").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-2").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-2").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-3").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-3").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-4").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-4").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-5").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-5").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-6").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-6").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-7").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-7").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-8").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-8").textContent
    navigator.clipboard.writeText(text)
}) 


document.getElementById("copy-btn-9").addEventListener("click", function () {
    alert("Text copied!!!")
    copyCount++
    document.getElementById("copy").textContent = copyCount
    const text = document.getElementById("copy-text-9").textContent
    navigator.clipboard.writeText(text)
}) 



//  call btn function


const coinContainer = document.getElementById("coin")
document.getElementById("call-btn-1").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Nationnal Emergency!!!    and calling number is ''999'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


document.getElementById("call-btn-2").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Police!!!    and calling number is ''999'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})
document.getElementById("call-btn-3").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Fire Service!!!    and calling number is ''999'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


document.getElementById("call-btn-4").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Ambulance!!!    and calling number is ''1994-999999'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


document.getElementById("call-btn-5").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Women & Child Helpline!!!    and calling number is ''109'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


document.getElementById("call-btn-6").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Anti-Corruption!!!    and calling number is ''106'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


document.getElementById("call-btn-7").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Electricity Outage!!!    and calling number is ''16216'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


document.getElementById("call-btn-8").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Brac!!!    and calling number is ''16445'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})
document.getElementById("call-btn-9").addEventListener("click", function () {
    let current = parseInt(coinContainer.textContent)

    console.log("click")
    if (current >= 20) {
        alert("Calling Bnagladesh Railway!!!    and calling number is ''163'")
    }
    if (current >= 20) {
        coinContainer.textContent = current - 20
    }
    else {
        alert("Insufficient coins")
        return
    }
})


