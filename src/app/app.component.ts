import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { UserState } from './user/store/reducer/user.reducer';
import { selectUsers } from './user/store/selector/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test';

  users$: Observable<User[]>;

  constructor(private store: Store<UserState>) {
    this.users$ = this.store.pipe(select(selectUsers));
  }
}
