var Emblem = {
    init: function(el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        var colorChar = 0;
        var parentN = element;
        var spaceLetter = " ";
        var length = 40;
        var perDeg = (360/length);
        for (var i = 0; i < text.length; i++) {
            var letter = text[i];
            if (letter == spaceLetter) {
                parentN = element
            } else if (letter != spaceLetter && parentN == element) {
                parentN = document.createElement('span');
                parentN.setAttribute("class", "parentChar");
                element.appendChild(parentN);
            }
            var span = document.createElement('span');
            span.setAttribute("id", "char"+i);
            var node = document.createTextNode(letter);
            var r = perDeg*(i)+280;
            var x = (Math.PI/length).toFixed(0) * (i);
            var y = (Math.PI/length).toFixed(0) * (i);
            span.appendChild(node);
            span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            parentN.appendChild(span);

            if (i >= length/2) {
                r = perDeg*(length/2)+280;
                x = (Math.PI/length).toFixed(0) * (length/2);
                y = (Math.PI/length).toFixed(0) * (length/2);
            }

            span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
            span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        }
        if (colorChar) {
            var sibs = colorChar.siblings();
            for (var s = 0; s < sibs.length; s++) {
                sibs[s].style.color = "yellow";
            }
        }
    }
};
