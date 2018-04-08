const { setWorldConstructor } = require( 'cucumber' )

class WorldOfSearch {

    constructor() {
        this.accounts = {}
    }

    addAccount(name) {
        this.accounts[name] = 0
    }

    deposit(name, amount) {
        this.accounts[name] += amount
    }

    addInterest(name, interest) {
        var interestToAdd = this.accounts[name] * (interest / 100)
        this.deposit(name, Math.round(interestToAdd))
    }
}

setWorldConstructor(WorldOfSearch);
