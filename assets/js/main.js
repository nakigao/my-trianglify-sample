$(function() {
    var colorTable = [];
    colorTable[1] = colorbrewer.YlGn[9];
    colorTable[2] = colorbrewer.YlGnBu[9];
    colorTable[3] = colorbrewer.GnBu[9];
    colorTable[4] = colorbrewer.BuGn[9];
    colorTable[5] = colorbrewer.PuBuGn[9];
    colorTable[6] = colorbrewer.PuBu[9];
    colorTable[7] = colorbrewer.BuPu[9];
    colorTable[8] = colorbrewer.RdPu[9];
    colorTable[9] = colorbrewer.PuRd[9];
    colorTable[10] = colorbrewer.OrRd[9];
    colorTable[11] = colorbrewer.YlOrRd[9];
    colorTable[12] = colorbrewer.YlOrBr[9];
    colorTable[13] = colorbrewer.Purples[9];
    colorTable[14] = colorbrewer.Blues[9];
    colorTable[15] = colorbrewer.Greens[9];
    colorTable[16] = colorbrewer.Oranges[9];
    colorTable[17] = colorbrewer.Reds[9];
    colorTable[18] = colorbrewer.Greys[9];
    colorTable[19] = colorbrewer.PuOr[11];
    colorTable[20] = colorbrewer.BrBG[11];
    colorTable[21] = colorbrewer.PRGn[11];
    colorTable[22] = colorbrewer.PiYG[11];
    colorTable[23] = colorbrewer.RdBu[11];
    colorTable[24] = colorbrewer.RdGy[11];
    colorTable[25] = colorbrewer.RdYlBu[11];
    colorTable[26] = colorbrewer.Spectral[11];
    colorTable[27] = colorbrewer.RdYlGn[11];
    colorTable[28] = colorbrewer.Accent[8];
    colorTable[29] = colorbrewer.Dark2[8];
    colorTable[30] = colorbrewer.Paired[12];
    colorTable[31] = colorbrewer.Pastel1[9];
    colorTable[32] = colorbrewer.Pastel2[8];
    colorTable[33] = colorbrewer.Set1[9];
    colorTable[34] = colorbrewer.Set2[8];
    colorTable[35] = colorbrewer.Set3[12];

    function createPngFile(width, height, colorId) {
        return getPng(width, height, 30 + (Math.random() * 100), colorTable[colorId]);
    }

    function getBaseTrianglifyPattern(width, height, cell_size, x_colors) {
        return new Trianglify({
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

    function TrianglifyViewModel() {
        var self = this;
        self.colors = [
            {text: 'YlGn', value: '1'},
            {text: 'YlGnBu', value: '2'},
            {text: 'GnBu', value: '3'},
            {text: 'BuGn', value: '4'},
            {text: 'PuBuGn', value: '5'},
            {text: 'PuBu', value: '6'},
            {text: 'BuPu', value: '7'},
            {text: 'RdPu', value: '8'},
            {text: 'PuRd', value: '9'},
            {text: 'OrRd', value: '10'},
            {text: 'YlOrRd', value: '11'},
            {text: 'YlOrBr', value: '12'},
            {text: 'Purples', value: '13'},
            {text: 'Blues', value: '14'},
            {text: 'Greens', value: '15'},
            {text: 'Oranges', value: '16'},
            {text: 'Reds', value: '17'},
            {text: 'Greys', value: '18'},
            {text: 'PuOr', value: '19'},
            {text: 'BrBG', value: '20'},
            {text: 'PRGn', value: '21'},
            {text: 'PiYG', value: '22'},
            {text: 'RdBu', value: '23'},
            {text: 'RdGy', value: '24'},
            {text: 'RdYlBu', value: '25'},
            {text: 'Spectral', value: '26'},
            {text: 'RdYlGn', value: '27'},
            {text: 'Accent', value: '28'},
            {text: 'Dark2', value: '29'},
            {text: 'Paired', value: '30'},
            {text: 'Pastel1', value: '31'},
            {text: 'Pastel2', value: '32'},
            {text: 'Set1', value: '33'},
            {text: 'Set2', value: '34'},
            {text: 'Set3', value: '35'},
        ];
        self.generate = function() {
            var width = this.width();
            var height = this.height();
            var colorId = this.selectedColor();
            var $target = $('#trianglify-canvas');
            $target.html('');
            for (var i = 0; i < 5; i++) {
                $target.append(createPngFile(width, height, colorId));
            }
        };
        self.width = ko.observable(256);
        self.height = ko.observable(256);
        self.selectedColor = ko.observable(15);
        ko.computed(function() {
            self.generate();
            return true;
        }, this);
        self.regenerate = function() {
            self.generate();
        };
    }

    ko.applyBindings(new TrianglifyViewModel());

});