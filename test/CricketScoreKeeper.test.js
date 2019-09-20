let assert = require("assert");
let CricketScoreKeeper = require("../CricketScoreKeeper");



describe('CricketScoreKeeper function', function () {

    it("should return how many overs are left in a game ", function () {
        let game = CricketScoreKeeper();
        var overs = ["-1-1-w", "-2-2-4", "-2-1-1", "-2-2-2", "-6-1-w", "-6-w-4", "-w-4-1", "-1-w-6", "-w-w-w", "-4-6-6"]
        game.startGame(overs);
        assert.deepEqual(game.getRemainingWickets(overs),10);
      
    })
    it("should return the total score and wickect ", function () {
        let over = CricketScoreKeeper();
        over.addingScore([1, 2, "w"])
        over.addingScore(["w"])

        assert.deepEqual(over.addingScore([3, "w"]));
        assert.deepEqual(over.addingScore(["w"]));
    })
    it("should return the Score ", function () {
        let over = CricketScoreKeeper();
        over.setScore([20])

        assert.deepEqual(over.getScore(), [20]);

    })

    it("should return the total overs of the game", function () {
        let over = CricketScoreKeeper();
        over.setOver([9])

        assert.deepEqual(over.getOver(), [9]);
    })
});
describe('check wickets', function () {

    it("should return how many overs are left in a game ", function () {
        let game = CricketScoreKeeper();
        var overs = ["-1-1-w", "-2-2-4", "-2-1-1", "-2-2-2", "-6-1-w", "-6-w-4", "-w-4-1", "-1-w-6", "-w-w-w", "-4-6-6"]
        game.startGame(overs);
        assert.deepEqual(game.getRemainingWickets(overs),10);
      
    })
    it("should get the score in a over", function () {
        let game = CricketScoreKeeper();
        var overs = ["-1-1-w", "-2-2-4", "-2-1-1", "-2-2-2", "-6-1-w", "-6-w-4", "-w-4-1", "-1-w-6", "-w-w-w", "-4-6-6"]
        game.extract(2);
        assert.deepEqual(game.checkWickets("-1-1-w"),true);
      
    })
    it("should check how many wickets are left ", function () {
        let game = CricketScoreKeeper();
        var overs = ["-2-2-4", "-2-1-1", "-2-2-2", "-6-1-w", "-6-w-4", "-w-4-1", "-1-w-6", "-w-w-w", "-4-6-6"]
        game.checkWickets(9);
        assert.deepEqual(game.checkWickets(overs,9),true);
      
    })
    it("should get the score in an over ", function () {
        let game = CricketScoreKeeper();
        var overs = ["-1-1-w","-2-2-4", "-2-1-1", "-2-2-2", "-6-1-w", "-6-w-4", "-w-4-1", "-1-w-6", "-w-w-w", "-4-6-6"]
        game.extract("-4-6-6");
        assert.deepEqual(game.getScore(),16);
      
    })
    it("should get the remaining wickets in an over ", function () {
        let game = CricketScoreKeeper();
        var overs = ["-2-1-1", "-2-2-2", "-6-1-w", "-6-w-4", "-w-4-1", "-1-w-6", "-w-w-w", "-4-6-6"]
        game.getRemainingWickets(8);
        assert.deepEqual(game.checkWickets(overs),true);
      
    })
});