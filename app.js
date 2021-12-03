const x = document.getElementById('input-base');
const s = document.getElementById('select-base');
const c = document.getElementById('check-base');
const v = document.querySelector('.view');

/* ===== View Result Value ===== */
const show = () => {
  // === CheckBox ===
  const arr = [];
  const elems = document.getElementsByName('checkBase');
  // チェックボックスを全部見に行く
  for (let i = 0; i < elems.length; i++) {
    // console.log(elems[i].checked); / console.log(elems[i].value);
    // チェックの入っているフォームの値だけ配列で取り出す
    if (elems[i].checked) {
      elems[i].checked === true;
      arr.push(elems[i].value);
      console.log(elems[i].value);
    }
  }
  /* === Input / Selectの値はそのまま取得表示 === */
  if (x.value !== '') {
    v.innerHTML = x.value + ', ' + s.value + ', ' + arr;
  } else {
    alert('何か書いて');
  }
};
