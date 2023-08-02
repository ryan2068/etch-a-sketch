container = document.querySelector('.container')
boxgen = document.querySelector('#myButton').onclick = function(){
    let userRequestedCount = document.querySelector("#myText").value;
    if (userRequestedCount > 100) {
        alert("please choose a smaller number than 100")
        return
    }

    randColor = () => {
        randNum1 = Math.floor(Math.random() * 256)
        randNum2 = Math.floor(Math.random() * 256)
        randNum3 = Math.floor(Math.random() * 256)
        return 'rgb(' + randNum1 + ',' + randNum2 + ',' + randNum3 + ')';
        
    }
    
    
  


    for (let i = 0; i <= userRequestedCount * userRequestedCount; i++) {
        divGrid = document.createElement('div')
        divGrid.classList.add('grid-element')
        divGrid.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = randColor()
        })
        container.append(divGrid) 
        
    }
}









