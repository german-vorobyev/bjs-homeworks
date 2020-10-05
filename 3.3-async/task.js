"use strict"
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        let fil = this.alarmCollection.filter(obj => obj.id === id);
        if (fil.length > 0) {
            console.error('Будильник с таким id уже существует.');
            return;
        }
        this.alarmCollection.push( {
            time,
            callback,
            id
        });
    }
    removeClock(deleteId) {
        let fil = this.alarmCollection.filter(obj => obj.id !== deleteId);
        let succes = fil.length !== this.alarmCollection.length;
        this.alarmCollection = fil;
        return succes;
    }
    getCurrentFormattedTime() {
        let d = new Date();
        let datetext = d.toTimeString();
        datetext = datetext.split(' ')[0].split(':');
        return datetext[0] + ":" + datetext[1];
    }
    checkClock(call) {
        let today = this.getCurrentFormattedTime();
        if (call.time === today) {
            call.callback();
        }
    }
    start() {
        this.timerId = setInterval(() => this.alarmCollection.forEach(clock => checkClock(clock)), 60000);
    }
}