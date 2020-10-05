"use strict"
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
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
        if(!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(clock => this.checkClock(clock)), 60000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(clock => console.log(clock.id, clock.time));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

// let alarmTimer = new AlarmClock();
// alarmTimer.addClock( '18:11', () => console.log('18:11'), 2);
// alarmTimer.addClock( '18:15', () => console.log('18:15'), 1);
// alarmTimer.addClock( '18:21', () => console.log('1'), 1);
// alarmTimer.addClock( '18:21', () => console.log('2'), 3);
// alarmTimer.addClock( '18:21', () => console.log('3'), 4);
// alarmTimer.addClock( '18:21', () => console.log('4'), 5);
// alarmTimer.removeClock(5);
// alarmTimer.start();
