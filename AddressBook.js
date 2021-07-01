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


function updateContact(){
    const firstname = prompt('Enter FirstName ');
    let status = false;
    addressBookArr.forEach(contact => {
        if(contact.firstName == firstname){
            status = true;
            console.log('Enter 1 to update FirstName ');
            console.log('Enter 2 to update LastName ');
            console.log('Enter 3 to update City ');
            console.log('Enter 4 to update State ');
            console.log('Enter 5 to update Zip ');
            console.log('Enter 6 to update Phone No ');
            console.log('Enter 7 to update Email ');
            const choice = Number(prompt('Enter Choice '));
            switch(choice){
                case 1:
                    const newFirstName = prompt('Enter new First Name ');
                    contact.firstName = newFirstName;
                    break;
                case 2:
                    const newLastName = prompt('Enter new Last Name ');
                    contact.lastName = newLastName;
                    break;
                case 3:
                    const newCity = String(prompt('Enter New City '));
                    contact.city = newCity;
                    break;
                case 4:
                    const newState = prompt('Enter New State ');
                    contact.state = newState;
                    break;
                case 5:
                    const newZip = prompt('Enter New PinCode ');
                    contact.zip = newZip;
                    break;
                case 6:
                    const newPhoneNo = prompt('Enter New mobile No ');
                    contact.phoneNumber = newPhoneNo;
                    break;
                case 7:
                    const newEmail = prompt('Enter new Email ');
                    contact.email = newEmail;
                    break;
                default:
                    console.log("Wrong Choice");
                    break;
                }
            }
        });
        if(status == false){
            console.log("Contact Not Found");
        }
}

function deleteContact(){
    let status = false;
    const userInput = prompt('Enter FirstName ');
    addressBookArr.forEach(addressbook => {
        if(addressbook.firstName == userInput){
            let index = addressBookArr.indexOf(addressbook);
            addressBookArr.splice(index,1);
            status = true;
            console.log("Contact Deleted Successfully");
        }
    });
    if(status == false){
        console.log("Contact Not Found");
    }
}

function count(currentCount){
    return currentCount += 1;
}
function getCount(){
   console.log(addressBookArr.reduce(count, 0));
}

function getPersonInCity(){
    const city = prompt('Enter city ');
    console.log(addressBookArr.filter(contact => contact.city == city));
}

function getPersonInState(){
    const state = prompt('Enter State ');
    console.log(addressBookArr.filter(contact => contact.state == state));
}

function getCountByCity(){
    const city = prompt('Enter city ');
    console.log(addressBookArr.filter(contact => contact.city == city).reduce(count,0));
}

function getCountByState(){
    const state = prompt('Enter State ');
    console.log(addressBookArr.filter(contact => contact.state == state).reduce(count,0));
}

let options;
do{
    console.log("Enter 1 to add Contact ");
    console.log("Enter 2 to Print AddressBook ");
    console.log("Enter 3 to update contc");
    console.log("Enter 4 to delete contact");
    console.log("Enter 5 to get number of contacts");
    console.log("Enter 6 to see contacts in particular city");
    console.log("Enter 7 to see contacts in particular state");
    console.log("Enter 8 to get number of contacts in particular city");
    console.log("Enter 9 to get number of contacts in particular state");
    console.log("Enter 13 to exit");
    options = Number(prompt('Enter option '));
    switch(options){
        case 1:
            addContact();
            break;
        case 2:
            printAddressBook();
            break;
        case 3:
            updateContact();
            break;
        case 4:
            deleteContact();
            break;
        case 5:
            getCount();
            break;
        case 6:
            getPersonInCity();
            break;
        case 7:
            getPersonInState();
            break;
        case 8:
            getCountByCity();
            break;
        case 9:
            getCountByState();
            break;
        default:
            break; 
    }
}while(options != 13)