let num = 0
    if (columnTitle.length === 1) {
        return columnTitle.charCodeAt(0) - 64
    }
    for (let i in columnTitle) {
        // console.log(i, num, columnTitle.charCodeAt(i) - 64)
        if (i == 0) num = columnTitle.charCodeAt(i) - 64
        if (i > 0) num = (26 * num) + columnTitle.charCodeAt(i) - 64
    }
    return num