import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { addUser } from '../store/action/user.actions';
import { UserState } from '../store/reducer/user.reducer';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
})
export class CreateuserComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean;

  constructor(
    private store: Store<UserState>,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient // private modalService: NgbModal,
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9\s]*$/),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      monthlyBudget: [
        '',
        [Validators.pattern(/^[0-9]*$/), Validators.required],
      ],
    });
    console.log('kasjhdfbghjdksdsj');
  }

  createUser(newUser) {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    const user = new User();
    user.Email = newUser.email;
    user.PhoneNumber = newUser.phoneNumber;
    user.LastName = newUser.lastname;
    user.FirstName = newUser.firstname;
    user.MonthlyBudget = newUser.monthlyBudget;

    this.store.dispatch(addUser(user));

    this.userForm.reset();

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'User saved',
      showConfirmButton: true,
      timer: 7000,
      timerProgressBar: true,
    });
    this.submitted = false;
  }

  omit_special_char(event) {
    var k;
    k = event.charCode; //         k = event.keyCode;  (Both can be used)
    return (
      (k > 64 && k < 91) ||
      (k > 96 && k < 123) ||
      k == 8 ||
      k == 32 ||
      (k >= 48 && k <= 57)
    );
  }
}
