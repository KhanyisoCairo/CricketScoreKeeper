module.exports = function CricketScoreKeeper() {
    var score = 0;
    var wickets = 0;

    var scoreList = ["-", 1, 2, 3, 4, 5, 6, "w"];
    var newScoreList = [];

    function addingScore() {
        for (let i = 0; i < scoreList.length; i++) {
            score += scoreList[i];
            var score = scoreList[Math.floor(Math.random() * scoreList.length)];

            if (scoreList == "w") {
                scoreList.push(score);
            } else if (scoreList === 6) {
                score--;
            }
        }scoreList.push(newScoreList);
        
    }
    function extract(over) {
        for (let i = 0; i < over.length; i++) {
            const ball = over[i];

            if (ball == '-') {
                score = score + 0;
            }
            else if (ball == "1") {
                score += 1;
            }
            else if (ball == "2") {
                score += 2;
            }
            else if (ball == "3") {
                score += 3;
            }
            else if (ball == "4") {
                score += 4;
            }
            else if (ball == "6") {
                score += 6;
            }

            else if (ball == "w") {
                wicket += 1;
            }
        }
    }
    function getRemainingWickets() {
        console.log(10 - wickets);
        return 10 - wickets;
    }

    function checkWickets() {

        if (wickets >= 10) {

            return false
        }
        else {
            return true
        }
    }

    function startGame(overs) {
        for (let i = 0; i < overs; i++) {
            let over = overs[i].length;
            if (checkWickets()) {
                extract(over);
            }
        }
        getScore();
        getRemainingWickets();
    }

    function getOver() {
        return newScoreList;
    }

    function setScore(over) {
        score = over;
    }

    function getScore() {
        console.log(score);
        return score;
    }

    function setOver(setOver) {
        over = setOver;
    }

    function getOver() {
        return over;
    }
    function TotalScore(total) {
        return total.reduce(function (scoreList, newScoreList) {
            return scoreList + newScoreList
        });
    }

    function Wickect() {
        let scoreList = {
            score: getScore(),
            over: getOver(),
            wicket: TotalScore()

        };
        scoreList.push(newScoreList)

    }

    function keepingTrackOfScore(gettingScoore) {
        over = Number(gettingScoore.over);
    }

    function TotalWicket() {
        return {
            score,
            over,
            wicket
        }
    }
   
    return {
        setScore,
        getScore,
        setOver,
        getOver,
        TotalScore,
        Wickect,
        TotalWicket,
        addingScore,
        keepingTrackOfScore,
        extract,
        checkWickets,
        startGame,
        getRemainingWickets



    }
}