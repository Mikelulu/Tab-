/**
 * Created by Mike on 2016/12/8.
 */
// $(function () {
//
//
// });


// ==值比较   === 类型比较
function $(id) {
    return typeof id === 'string'?document.getElementById(id) : id;
}

window.onload = function () {
    // 拿到所有的li标签(标题) 和 li对应的内容div
    var titles = $('Tab-header').getElementsByTagName('li');
    var divs = $('Tab-content').getElementsByTagName('div');

    //判断
    if (titles.length != divs.length) return;

    for (var i=0; i<titles.length; i++){
        var li = titles[i];
        li.id = i;//给他们一个id

        li.onmouseover = function () {
            //先让所有的都不选中
            for (var j=0;j<titles.length; j++){
                titles[j].className = '';
                divs[j].style.display = 'none';
            }
            //再让当前的选中
            this.className = 'selected';
            divs[this.id].style.display = 'block';
        }
    }
}
