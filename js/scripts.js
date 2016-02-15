var pingPong = function(original) {
  if ((original % 3 === 0) && (original % 5 != 0)) {
    return "ping";
  }
  if ((original % 5 === 0) && (original % 3 != 0)) {
    return "pong";
  }
}
