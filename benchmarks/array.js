
suite('array', function () {
  set('iterations', 2000000);

  var arr = [1, 2, 3, 4, 5, 6];

  bench('array slice: prototype', function () {
    var args = Array.prototype.slice.call(arr, 1);
  });

  bench('array slice: loop', function () {
    var l = arr.length
      , args = new Array(l - 1);
    for (var i = 1; i < l; i++) args[i - 1] = arr[i];
  });
});
