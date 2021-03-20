import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateuserComponent } from './createuser/createuser.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from './store/reducer/user.reducer';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [CreateuserComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(userFeatureKey, reducer),
    UserRoutingModule,
  ],
  exports: [CreateuserComponent],
})
export class UserModule {}
