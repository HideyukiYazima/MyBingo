'use strict';

{
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // 1～15までを指定する場合は以下の通り省略も可能
  const source = [];
  for (let i = 0; i < 15; i++) {
    source[i] = i + 1;
  }
  
  // 以下のどちらを使っても良い
  // Math.floor(Math.random() * (14 +1))
  // Math.floor(Math.random() * source.length) // <-15以上の数字になっても対応可能

  const b = [];
  // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // 上記は以下のループを使うことで省略可能
  for (let i =0; i < 5; i++) {
    b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  }

  console.log(b);
}