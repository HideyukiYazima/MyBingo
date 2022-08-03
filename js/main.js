'use strict';

{
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      //source[i] = i + 1;
      // 1 ... 15 を作るための配列
      // source[i] = i + 1;
      // 16 ... 30 を作るための配列
      // source[i] = i + 1 + 15;
      // 31 ... 45 を作るための配列
      // source[i] = i + 1 + 15 + 15; // つまり列が増えるごとに15ずつ+していけば良い

      // 別表現では以下も可能
      // source[i] = i + 1 + 15 * 0; // 1...15
      // source[i] = i + 1 + 15 * 1; // 16...30
      // source[i] = i + 1 + 15 * 2; // 31...45
      
      // 以下でまとめるのが一番良いかも
      source[i] = i + 1 + 15 * col;
    }
  
  /*
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // 1～15までを指定する場合は以下の通り省略も可能
  const source = [];
  for (let i = 0; i < 15; i++) {
    source[i] = i + 1;
  }
  */

  // 以下のどちらを使っても良い
  // Math.floor(Math.random() * (14 +1))
  // Math.floor(Math.random() * source.length) // <-15以上の数字になっても対応可能

  /*
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
  */

    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    
    return column;

  }

  function createColumns() {
    const columns = [];
    // columns[0] = createColumn(0);
    // columns[1] = createColumn(1);
    // columns[2] = createColumn(2);
    // columns[3] = createColumn(3);
    // columns[4] = createColumn(4);
    for (let i = 0; i < 5; i++) { // ループ処理を行うことで上記の0～4の配列を省略できる
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE'; // columns[2] に入っている配列の 2 番目 の要素に 'FREE' を代入する
    return columns;
  }
  
  // console.table(columns); // 確認用のコンソールテーブル

  // ここまでが列ごとの配列を作っている処理


  // 配列の行と列を反転させる

/*
  function createBingo(columns) {
    const bingo = [];
    // 行の数だけループさせる
    for (let row = 0; row < 5; row++) { // 5行目まで
      bingo[row] = [];
      for (let col = 0; col < 5; col++) {
        bingo[row][col] = columns[col][row];
      }
    }
    return bingo;
    // console.table(bingo); // 確認用のコンソールテーブル
  }
  */
  // ここまでが行と列の配列を反転させている処理
/*
  function renderBingo(bingo) {
    for (let row = 0; row < 5; row++) { // このループ処理で５行分作成できる
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = bingo[row][col]
        tr.appendChild(td);
      }
    document.querySelector('tbody').appendChild(tr);
    }
  }
*/

// 反転処理は描画処理の配列で行うことも可能↓
  function renderBingo(columns) { // bingoではなくcolumnsを使用
    for (let row = 0; row < 5; row++) { // このループ処理で５行分作成できる
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row]; // bingoではなくcolumnsを使用し、rowとcolの位置を反転
        tr.appendChild(td);
      }
    document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns(); // 列ごとの配列を作る

  /*  反転処理を省略したため以下は使用しない
  const bingo = createBingo(columns); // 配列を反転させる
  renderBingo(bingo); // ビンゴシートを描画する
  */

  renderBingo(columns);
  // ここまでがページに反映させている処理
}