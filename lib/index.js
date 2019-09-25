var projectNameGenerator = require('project-name-generator');
var startup =  require('@rstacruz/startup-name-generator')

/**
 * Returns a random name (cerner_2^5_2019)
 */
function generate() {

    var scope = projectNameGenerator({ words: 32 }).raw
    var name = startup(scope);
    var first = name[Math.floor(Math.random() * name.length)];
    var second = name[Math.floor(Math.random() * name.length)];

    return first + " " + second

}
module.exports = generate
