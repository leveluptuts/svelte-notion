module.exports = (on) => {
  on('file:preprocessor', require('@bahmutov/cy-rollup')())
}
