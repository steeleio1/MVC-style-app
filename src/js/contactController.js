import $ from "jquery";
import _ from 'lodash';
import {Person} from "./person";


class ContactController {

	constructor (form, contactsBox, addressBook) {
		this.theForm        = form;
		this.theContactsBox = contactsBox;
		this.theAddressBook = addressBook;
	}



	addContact (firstname,lastname,telephone,city,state,photo) {
		let person = new Person(firstname,lastname,telephone,city,state, photo);
		let contactHTML = this.contactTemplate(person);
		$(".allTheContactsBox").append(contactHTML);

	    // let id   = _.random(100, 999);
	
	    // this.addressBook.person.push(contacts);
	  }



	formSubmit () {
	    this.theForm.on('submit', (event) => {
	      event.preventDefault();
	      // console.log('hey')
	      let firstname = this.theForm.find(".firstname1").val();
	      let lastname = this.theForm.find(".lastname1").val();
	      let tele = this.theForm.find(".telephone1").val();
	      let city = this.theForm.find(".city1").val();
	      let state = this.theForm.find(".state1").val();
	      console.log(this); // a ContactsController instance

	      $.ajax({
			url:"https://randomuser.me/api/?results=12",
		    dataType: 'json'
		  }).then((data) => {
		  	// console.log(this); // ??? Window? jQuery prototype?
		  	let photo = data.results[0].picture.large;
		    this.addContact(firstname,lastname,tele,city,state,photo);
		  });


          // console.log(firstname)

	    });
	  }

	 contactTemplate (anycontact) {
	  	return ` 
          <div class="contactsBox">
            <div class= "pic2">
              <img src="${anycontact.photo}" width="100%" height=100%>
            </div> 
              <div class="contactsWrapper">
                <span class="firstname2">${anycontact.first}</span>
                <span class="lastname2">${anycontact.last}</span>
                <span class="telephone2">${anycontact.tel}</span>
                <span class="city2">${anycontact.city}</span>
                <span class="state2">${anycontact.state}</span>
                <button name="button" class="submit2">Delete</button>
              </div>
          </div>
	  	`

	  }


	 // addTask (objective, due) {
  //   let id   = _.random(100, 999);
  //   let task = new Task(id, objective, due);
  //   let taskHTML = this.taskTemplate(task);
    
  //   this.list.tasks.push(task);
    
  //   this.container.append(taskHTML);

  // }

};

 // <img src="${data.picture.large}" width="100%" height=100%>

export { ContactController };