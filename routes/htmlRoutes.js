const path = require("path");

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendfile(path.join(__dirname, "../public/index.html"))
    })

    app.get('/exercise', (req, res) => {
        res.sendfile(path.join(__dirtname, "../public/exercise.html"))
    })

    app.get('/stats', (req,res) => {
        res.sendfile(path.join(_dirname, "../public/stats.html"))
    })

}