var canvashack = {
    checkRows: function() {
        if ($('tr.date').length <= 1) {
            window.setTimeout(this.checkRows, 10);
        } else {
            this.reverseSyllabus();
        }
    },

    reverseSyllabus: function() {
        var rows = $('tr.date');
        rows.parent().append(rows.get().reverse());
    }
};
