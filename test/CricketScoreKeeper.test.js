describe('CricketScoreKeeper function', function () {

    it("should return the total over and wickect", function () {
        let over = CricketScoreKeeperl();
        over.setWarningLevel(2.55)


        assert.deepEqual(over.getWarningLevel(), 2.55);
    })
});