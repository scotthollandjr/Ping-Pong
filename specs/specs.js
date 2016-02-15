describe('pingPong', function() {
  it('returns numbers divisible by 3 as ping', function() {
    expect(pingPong(3)).to.equal("ping")
  });
  it('returns numbers divisible by 5 as pong', function() {
    expect(pingPong(5)).to.equal("pong")
  });
});

// return number divisible by 3 as ping
// return number divisible by 5 as pong
// return number divisible by 15 as ping pong
// all other numbers returned as number
