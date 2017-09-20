var btn = document.getElementById('btn');
var obj = document.getElementById('myarticle');
var total_height =  obj.scrollHeight;
    btn.onclick = function(){
        obj.style.height = total_height + 'px';
        btn.style.display = 'none';
    }

