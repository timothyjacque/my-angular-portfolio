import { MessageService } from './../services/message.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('f') form: any;

  constructor(private messageService: MessageService) {
  }


  onSubmit(message) {
    this.messageService.create(message);
    this.form.reset();

    // document.querySelector('.alert').style.display = 'block';

    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // }, 5000);

  }

  ngOnInit() {
  }


}
