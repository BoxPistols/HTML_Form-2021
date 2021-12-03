const x = document.getElementById('input-base');
const s = document.getElementById('select-base');
const c = document.getElementById('check-base');
const r = document.getElementById('radio-base');
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
      // elems[i].checked === true;
      arr.push(elems[i].value);
      // console.log(elems[i].value);
    }
  }
  // === Radio ===
  const arrR = [];
  const elemsR = document.getElementsByName('radioBase');
  for (let i = 0; i < elemsR.length; i++) {
    if (elemsR[i].checked) {
      // elemsR[i].checked === true;
      console.log(elemsR[i].value);
      arrR.push(elemsR[i].value);
    }
  }
  /* === Input / Selectの値はそのまま取得表示 === */
  if (x.value !== '') {
    v.innerHTML = x.value + ' ' + s.value + ' ' + arr + ' ' + arrR;
  } else {
    alert('何か書いて');
  }
};
