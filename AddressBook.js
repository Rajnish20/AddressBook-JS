console.log("Welcome To Address Book");
class AddressBook {
    firstName;
    lastName;
    city;
    state;
    zip;
    phoneNumber;
    email;
  
    constructor(firstName, lastName, city, state, zip, phoneNumber, email) {  
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    }
  
    
    get firstName(){return this._firstname;}
    /**
     * @param {string} firstname
     */
    set firstName(firstname){
        let fnRegex=RegExp("^[A-Z]{1}[a-z]{2,}");
        if(fnRegex.test(firstname)){
            this._firstname=firstname;
        }else{
            throw 'Invalid firstname';
        }
    }
  
    get lastName() {
        return this._lastName;
    }
    /**
     * @param {string} lastName
     */
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = this.lastName;
        else throw 'Last Name is Incorrect !';
    }
  
    get city() {
        return this._city;
    }
    /**
     * @param {string} city
     */
    set city(city) {
        let cityRegex = RegExp('[A-Za-z]{4,}$');
        if(cityRegex.test(city))
        this._city = city;
        else throw 'City is Incorrect !';
    }
  
    get state() {
        return this._state;
    }
    /**
     * @param {string} state
     */
    set state(state) {
        let stateRegex = RegExp('[A-Za-z]{4,}$');
        if(stateRegex.test(state))
        this._state = state;
        else throw 'State is Incorrect !';
    }
  
    get zip() {
        return this._zip;
    }
    /**
     * @param {string} zip
     */
    set pinCode(zip) {
        let zipRegex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else throw 'zip is Incorrect !';
    }
  
    get phoneNumber() {
        return this._phoneNumber;
    }
    /**
     * @param {string} phoneNumber
     */
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = this.phoneNumber;
        else throw 'Phone Number is Incorrect !';
    }
  
    get email() {
        return this._email;
    }
    /**
     * @param {string} email
     */
    set email(email) {
        let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if(emailRegex.test(email))
        this._email = this.email;
        else throw 'Email is Incorrect !';
    }
  
    toString() {
        return " \nFirstName : " +this.firstName+ "\nLastName : " +this.lastName + 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}

let addressBookArr = new Array();
let addressbook = new AddressBook("Shalini","Sharma","New Delhi","Delhi","110041","91 7828388091","shalini.01@gmail.com");
addressBookArr.push(addressbook);
const prompt = require('prompt-sync')();

function addContact(){
    const firstname = prompt('Enter FirstName ');
    let existinguser = addressBookArr.filter(contact => contact.firstName == firstname);
    if(existinguser.length != 0){
        console.log("Contact Already Exist");  
        return; 
    }
    const lastname = prompt('Enter LastName ');
    const city = prompt('Enter City ');
    const state = prompt('Enter State ');
    const zip = prompt('Enter Zip ');
    const phoneNumber = prompt('Enter Mobile No ');
    const email = prompt('Enter Email ');
    let contact = new AddressBook(firstname,lastname,city,state,zip,phoneNumber,email);
    addressBookArr.push(contact);
}

let options;
do{
    console.log("Enter 1 to add Contact ");
    console.log("Enter 2 to Print AddressBook ");
    console.log("Enter 13 to exit");
    options = Number(prompt('Enter option '));
    switch(options){
        case 1:
            addContact();
            break;
        case 2:
            printAddressBook();
            break;
        default:
            break; 
    }
}while(options != 13)