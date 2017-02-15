var canvashack = {
    checkRows: function() {
        console.log('checking for rows');
        if ($('tr.date').length <= 1) {
            window.setTimeOut(checkRows, 10);
        } else {
            this.reverseSyllabus();
        }
    },

    reverseSyllabus: function() {
        var rows = $('tr.date');
        rows.parent().append(rows.get().reverse());
    }
};
