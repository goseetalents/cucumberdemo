const { setWorldConstructor } = require( 'cucumber' )

class BankWorld {

    constructor() {
        this.accounts = {}
    }
    
}

setWorldConstructor(BankWorld);
