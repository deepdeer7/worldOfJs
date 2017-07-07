'use strict';

var Time = (function() {
    
    function normalizeDate (parameter) {
        if (parameter < 10) {
            parameter = `0${parameter}`;
        }

        return parameter;
    }

    class Time {
        constructor () {
            this.date = new Date();
            this.fullYear = normalizeDate(this.date.getFullYear());
            this.shortYear = normalizeDate(this.date.getFullYear() % 100);
            this.month = normalizeDate(this.date.getMonth() + 1);
            this.day = normalizeDate(this.date.getDate());
            this.hours = normalizeDate(this.date.getHours());
            this.minutes = normalizeDate(this.date.getMinutes());
            this.seconds = normalizeDate(this.date.getSeconds());
        }

        get uaCalendar () {
            return `${this.day}:${this.month}:${this.fullYear}`;
        }

        get euCalendar () {
            return `${this.month}/${this.day}/${this.shortYear}`;
        }

        get longTime () {
            return `${this.hours}:${this.minutes}:${this.seconds}`;
        }

        get shortTime () {
            return `${this.hours}:${this.minutes}`;
        }
    }

    return Time;

})();