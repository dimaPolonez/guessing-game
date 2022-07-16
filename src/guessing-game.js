class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNum = min;
        this.maxNum = max;
    }

    guess() {
        this.result = Math.ceil(this.minNum + (this.maxNum - this.minNum) / 2);
        return this.result;
    }

    lower() {
        this.maxNum = this.result;
    }

    greater() {
        this.minNum = this.result;
    }
}

module.exports = GuessingGame;