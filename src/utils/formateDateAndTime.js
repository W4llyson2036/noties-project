export class FormatTime {
    constructor() {
        this.date = new Date();
    }

    time() {
        let currentTime = `${this.hours()}:${this.minutes()}:${this.seconds()}`;
        return currentTime;
    }

    hours() {
        let currentHour = this.date.getHours();
        currentHour = currentHour < 10 ? `0${currentHour}` : currentHour;   
        return currentHour;
    }

    minutes() {
        let currentMinutes = this.date.getMinutes();
        currentMinutes = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;   
        return currentMinutes;
    }

    seconds() {
        let currentSeconds = this.date.getSeconds();
        currentSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;   
        return currentSeconds;
    }
}

export class FormatDate {
    constructor() {
        this.date = new Date();
    }

    getFormattedDate() {
        let currentDate = `${this.year()}-${this.month()}-${this.day()}`;
        return currentDate;        
    }

    day() {
        let currentDay = this.date.getDate();
        currentDay = currentDay < 10 ? `0${currentDay}` : currentDay;
        return currentDay;
    }

    month() {
        let currentMonth = this.date.getMonth() + 1;
        currentMonth = currentMonth < 10 ? `0${currentMonth}`: currentMonth 
        return currentMonth;
    }

    year() {
        let currentYear = this.date.getFullYear();
        return currentYear;
    }
}