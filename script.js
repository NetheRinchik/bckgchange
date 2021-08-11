function changeColor() {
        let color;
        let r;
        let g;
        let b;
        r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256)),
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        document.body.style.backgroundColor = `${color}`;
}