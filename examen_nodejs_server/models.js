class Meteo {

    #id;
    #type;
    #value;
    #date;
    #time;

    constructor(id, type, value, date, time) {
        this.#id = id;
        this.#type = type;
        this.#value = value;
        this.#date = date;
        this.#time = time;
    }

    toJSON() {
        return {
            formId: this.#id,
            "formType": this.#type,
            "formValue": this.#value,
            "formDate": this.#date,
            "formTime": this.#time
        };
    }


    getFormValue() {
        return this.#value;
    }

    getFormType() {
        return this.#type;
    }


}


module.exports = Meteo;