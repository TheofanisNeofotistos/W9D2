

import Game from "../ttt_node/game"
import View from "./ttt-view"



document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let game = new Game()
  let container = document.querySelector(".ttt")
  let view= new View(game,container)

});