import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {

  }

  // constructor() {
  //   // Reference messages collection
  //   const messagesRef = firebase.database().ref('messages');

  //   // Listen for form submit
  //   document.getElementById('contactForm').addEventListener('submit', submitForm);

  //   // Submit form
  //   function submitForm(e) {
  //     e.preventDefault();

  //     // Get values
  //     const name = getInputVal('name');
  //     const company = getInputVal('company');
  //     const email = getInputVal('email');
  //     const phone = getInputVal('phone');
  //     const message = getInputVal('message');

  //     // Save message
  //     saveMessage(name, company, email, phone, message);

  //     // Show alert
  //     document.querySelector('.alert').style.display = 'block';

  //     // Hide alert after 3 seconds
  //     setTimeout(function(){
  //       document.querySelector('.alert').style.display = 'none';
  //     }, 3000);

  //     // Clear form
  //     document.getElementById('contactForm').reset();
  //   }

  //   // Function to get get form values
  //   function getInputVal(id) {
  //     return document.getElementById(id).value;
  //   }

  //   // Save message to firebase
  //   function saveMessage(name, company, email, phone, message) {
  //     const newMessageRef = messagesRef.push();
  //     newMessageRef.set({
  //       name: name,
  //       company: company,
  //       email: email,
  //       phone: phone,
  //       message: message
  //     });
  //   }
  // }

  ngOnInit() {
  }




}
