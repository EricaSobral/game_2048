document.addEventListener('DOMContentLoaded', () =>{
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')

const width= 4
let squares = []

// criando o quadro do jogo
function createBoard(){
    for( let i=0; i< width*width; i++){
        square = document.createElement('div')
        square.innerHTML = ""
        gridDisplay.appendChild(square)
        squares.push(square)
    } 
    generate()
    generate()
}

createBoard()

// Gerando número randomicamente 
function generate(){
   let randomNumber = Math.floor(Math.random() * squares.length)
   if(squares [randomNumber].innerHTML == ''){
       squares [randomNumber].innerHTML = 2
   }else generate()
}
})

//movendo para a direita
function movieRight(){
    for (let i=0; i< 16; i++){
        if(i % 4 === 0){
            let totalOne = square[i].innerHTML
            let totalTwo = square[i+1].innerHTML
            let totalThree = square[i+2].innerHTML
            let totalFour = square[i+3].innerHTML
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            
            console.log(row)

            let filteredRow = row.filter(num => num)
            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
            let newRow = zeros.concat(filteredRow)
            
            squares[i].innerHTML  -= newRow[0]
            squares[i+1].innerHTML  -= newRow[1]
            squares[i+2].innerHTML  -= newRow[2]
            squares[i+3].innerHTML  -= newRow[3]    
        }

    }
}

movieRight()