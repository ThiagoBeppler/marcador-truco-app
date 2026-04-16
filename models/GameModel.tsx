export class GameModel{

    player1: string;
    player2: string;
    score1: number;
    score2: number;
    sets1: number;
    sets2: number;
    finished: boolean;
    winner: string;

    
    constructor(){

        this.player1 = "Nós";
        this.player2 = "Patos";
        this.score1 = 0;
        this.score2 = 0;
        this.sets1 = 0;
        this.sets2 = 0;
        this.finished = false;
        this.winner = "";
    }

}