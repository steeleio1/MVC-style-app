import $ from "jquery";

import { AddressBook } from "./addressBook";
import { Person } from "./person";

import { ContactController } from "./contactController";



 
let importForm        = $(".formEntry");
let contactsContainer = $(".contactsBox");
let addressBook = new AddressBook();



let app = new ContactController(importForm,addressBook,contactsContainer);

app.formSubmit();