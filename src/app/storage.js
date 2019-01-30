export class Storage {
    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'Monterrey';
        this.defaultCountry = 'mx';
    }

    //Method to get data from LS
    getDataLS() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('country') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('country');
        }

        return {
            city:this.city,
            countryCode: this.countryCode
        }
    }

    //Method to save the data in local storage
    saveDataLS(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', countryCode);
    }
}