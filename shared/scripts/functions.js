function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function monthNumber(month) {
    let conversion = [ "janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
    let m = month.toLowerCase();
    return conversion.indexOf(m) + 1;
}
