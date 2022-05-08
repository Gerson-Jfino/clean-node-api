module.exports = class UnAuthorizedError extends Error {
  constructor () {
    super('unauthorizd')
    this.name = 'UnAuthorizedError'
  }
}
