let people = require('../people.json')

let getPeople = (req, res) => {
    if(req.query) {
        let queryPeople = people.filter( elem => {
            
        })
    }
    res.status(200).send(people)
}

module.exports = {
    getPeople
}