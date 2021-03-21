const nezbold = {
  bold(msg) {
    return "\033[1m" + msg + "\033[0m";
  },
  logBold(msg) {
    console.log(this.bold(msg));
  }
}

module.exports = { nezbold }