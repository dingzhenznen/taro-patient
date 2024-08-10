function out(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

out(100).then((value) => {
  console.log(value);
});