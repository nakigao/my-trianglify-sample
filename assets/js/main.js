function createPngFile(width, height, colorPattern) {
    return getPng(width, height, 30 + (Math.random() * 100), colorPattern[9]);
}

function createPngFiles(width, height, colorPattern) {
    var pngFiles = [];
    for (var i = 3; i < 10; i++) {
        pngFiles.push(getPng(width, height, 30 + (Math.random() * 100), colorPattern[i]));
    }
    return pngFiles;
}

function getBaseTrianglifyPattern(width, height, cell_size, x_colors) {
    return Trianglify({
        height: height,
        width: width,
        cell_size: cell_size,
        variance: Math.random(),
        seed: null,
        x_colors: x_colors,
        y_colors: 'match_x',
        color_space: 'lab',
        color_function: null,
        stroke_width: 1.51,
        points: null,
    });
}

function getPng(width, height, cell_size, x_colors) {
    var pattern = getBaseTrianglifyPattern(width, height, cell_size, x_colors);
    var png = document.createElement('img');
    png.src = pattern.png();
    return png;
}

function getCanvas(width, height, cell_size, x_colors) {
    var pattern = getBaseTrianglifyPattern(width, height, cell_size, x_colors);
    return pattern.canvas();
}

function setImages() {

    // colorbrewer.YlGn
    // colorbrewer.YlGnBu
    // colorbrewer.GnBu
    // colorbrewer.BuGn
    // colorbrewer.PuBuGn
    // colorbrewer.PuBu
    // colorbrewer.BuPu
    // colorbrewer.RdPu
    // colorbrewer.PuRd
    // colorbrewer.OrRd
    // colorbrewer.YlOrRd
    // colorbrewer.YlOrBr
    // colorbrewer.Purples
    // colorbrewer.Blues
    // colorbrewer.Greens
    // colorbrewer.Oranges
    // colorbrewer.Reds
    // colorbrewer.Greys
    // colorbrewer.PuOr
    // colorbrewer.BrBG
    // colorbrewer.PRGn
    // colorbrewer.PiYG
    // colorbrewer.RdBu
    // colorbrewer.RdGy
    // colorbrewer.RdYlBu
    // colorbrewer.Spectral
    // colorbrewer.RdYlGn
    // colorbrewer.Accent
    // colorbrewer.Dark2
    // colorbrewer.Paired
    // colorbrewer.Pastel1
    // colorbrewer.Pastel2
    // colorbrewer.Set1
    // colorbrewer.Set2
    // colorbrewer.Set3

    var images = [];
    var baseLength = 128;
    var scaleX = 1.618;
    var scaleY = 1.0;

    // PURPLE
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuBuGn));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.BuPu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdPu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuRd));
    images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.Purples));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuOr));

    // BLUE
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.YlGnBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.GnBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.BuGn));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuBuGn));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.BuPu));
    images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.Blues));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdYlBu));

    // GREEN
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.YlGn));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.YlGnBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.GnBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.BuGn));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuBuGn));
    images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.Greens));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PRGn));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdYlGn));

    // ORANGE
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.OrRd));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.YlOrRd));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.YlOrBr));
    images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.Oranges));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuOr));

    // RED
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdPu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.PuRd));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.OrRd));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.YlOrRd));
    images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.Reds));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdGy));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdYlBu));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdYlGn));

    // GRAY
    images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.Greys));
    // images.push(createPngFile(baseLength * scaleX, baseLength * scaleY, colorbrewer.RdGy));

    for (var i = 0; i < images.length; i++) {
        document.body.appendChild(images[i].cloneNode(true));
    }
}

setImages();
setImages();
setImages();
setImages();
setImages();