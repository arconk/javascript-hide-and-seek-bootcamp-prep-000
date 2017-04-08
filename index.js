function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rLists = document.querySelectorAll('.ranked-list li');

  for(let i = 0; i<rLists.length; i++){
    rLists[i].innerHTML = (parseInt(rLists[i].innerHTML)+n).toString();
  }
}

function deepestChild(){
  var deepSearch = document.querySelectorAll('div#grand-node');
  return deepSearch[deepSearch.length-1];
}
