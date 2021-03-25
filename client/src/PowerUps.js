/**
 * Represents a PowerUp.
 */
class PowerUp {
    /**
    * Constructor of PowerUp object.
    * @constructs
    * @param {int} id - The id of the player.
    */
    constructor(row,col,type){
        this.row = row;
        this.col = col;
        this.type = type;
        this.radius = grid * 0.3;
    }

    /**
    * Increase number of bombs the player can place by 1.
    * @param {int} id - The id of the player aquiring the power up.
    */
    increaseNumOfBombs(owner){
        owner.increaseNumBombs();
    }

    /**
    * Increase radius of bombs droped by the player by 1.
    * @param {int} id - The id of the player aquiring the power up.
    */
    enlargeBomb(owner){
        owner.enlargeBombSize();
    }
    /**
    * Add shield to player allowing 1 extra collision with explosion before dying.
    * @param {int} id - The id of the player aquiring the power up.
    */
    shield(owner){
        owner.shieldUp();
    }
    usePowerUp(owner){
        if (this.type == 0){ owner.increaseNumBombs(); }
        else if (this.type == 1){ owner.enlargeBombSize(); }
        else if (this.type == 2){ owner.shieldUp(); }
    }

    checkCell(row,col){
        if (this.row == row && this.col == col){
            return true;
        }
        return false;
    }

    render(){
        const x = (this.col + 0.5) * grid;
        const y = (this.row + 0.5) * grid;
  
        context.save();
        if (this.type == 0){ context.fillStyle = 'blue'; }
        else if (this.type == 1){ context.fillStyle = 'purple'; }
        else if (this.type == 2){ context.fillStyle = 'yellow'; }
        context.beginPath();
        context.arc(x, y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }

}