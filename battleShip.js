/// Battle Ship Chalenge


/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
 function getHitProbability(R, C, G) {
  // Write your code here
  let battleship = 0;
  let totalGrid = R * C;
  for(let r = 0; r <= R-1; r++){
    for(let c = 0; c <= C-1; c++){
      if(G[r][c] == 1){
        battleship += 1
      }else{
        battleship += 0
      }     
    }
  }
  
  const value = battleship / totalGrid;
  return value;
}