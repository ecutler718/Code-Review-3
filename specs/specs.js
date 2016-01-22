describe ('counting', function() {
  it ("counts by 1's ultil it reaches the user input value", function() {
    expect(counting("20")).to.equal("1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16,17,ping,19,pong");
  });
});
describe ('counting', function() {
  it ("replaces values divisible by 15 with pingpong", function() {
    expect(counting("15")).to.equal([1, 2, 'ping', 4, 'pong', 'ping', 7, 8, 'ping', 'pong', 11, 'ping', 13, 14, 'pingpong']);
  });
});
describe ('counting', function() {
  it ("replaces values divisible by 5 with pong", function() {
    expect(counting("5")).to.equal([1, 2, 'ping', 4, 'pong' ]);
  });
});describe ('counting', function() {
  it ("replaces values divisible by 3 with ping", function() {
    expect(counting("3")).to.equal([1, 2, 'ping']);
  });
});
