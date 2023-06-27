


export default class View {
  constructor(game, el) {
    this.game=game;
    this.el=el;
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard(3,3);
    // debugger

  }
  
  setupBoard(rows , cols) {

    const grid = document.createElement('ul');
    grid.classList.add('grid')



    for(let row = 0 ; row < rows ; row++){
      for(let col=0; col < cols; col++){
        const cell = document.createElement('li')
        cell.classList.add('cell')
        cell.dataset.row = row
        cell.dataset.col = col
        grid.appendChild(cell)
      }
    }
    this.el.appendChild(grid)
    // this.handleClick("click",playMove)
    grid.addEventListener("click",this.handleClick)

  }
  
  handleClick(e) {
    e.preventDefault()
    let cell = e.target;
    // debugger
    this.makeMove(cell)

    
  }

  makeMove(square) {
    let row= square.dataset.row
    let col= square.dataset.col
    let pos=[row,col]
    // debugger
    this.game.playMove(pos)
    square.innerText=this.game.currentPlayer;
  }
  
  handleGameOver() {
  }
}





