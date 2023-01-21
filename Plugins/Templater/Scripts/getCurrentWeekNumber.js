Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(), 0, 1);
    const msIn24Hours = 86400000;
	//return Math.round((((this - onejan) / 86400000)) / 7);
    return Math.round((((this - onejan)+msIn24Hours) / msIn24Hours)/7);
}

function getCurrentWeekNumber() {
    const weekNr = new Date().getWeek();
    return weekNr;
}

module.exports = getCurrentWeekNumber;