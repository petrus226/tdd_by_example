describe('Sut', () => {
  it('does expensive stuff', () => {
    spyOn(ExpensiveStuff, 'do')

    Sut.do()

    expect(ExpensiveStuff.do).toHaveBeenCalled()
  })
})

class Sut {
  static do () {
    ExpensiveStuff.do()
  }
}

class ExpensiveStuff {
  static do() {
    const thirtySeconds = 30 * 1000
    sleep(thirtySeconds)
  }
}

function sleep(ms) {
  var start = new Date().getTime(), expire = start + ms;
  while (new Date().getTime() < expire) { }
  return;
}
