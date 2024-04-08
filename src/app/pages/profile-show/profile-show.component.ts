import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  trigger,
  keyframes,
  animate,
  transition,
  state,
} from '@angular/animations';
import * as kf from './keyframes';
import { UserData } from '../../model/userdata.model';
import data from '../../../assets/userdata.json';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile-show',
  templateUrl: './profile-show.component.html',
  styleUrls: ['./profile-show.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft))),
    ]),
  ],
})
export class ProfileShowComponent implements OnInit, OnDestroy {
  userDataList: any;
  isVerified: boolean = false;

  public users: UserData[] = data;
  public index = 0;

  animationState: any;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userService.getData().subscribe((res) => {
      this.startAnimation(res);
      this.userDataList = res;
    });
  }

  cardAnimation(value: any) {
    if (value === 'swipeleft') {
      this.startAnimation(value);
      this.toastr.success('Interested', 'Success');
    } else {
      this.startAnimation(value);
      this.toastr.error('Not Interested', 'Error');
    }
  }

  startAnimation(state: any) {
    if (!this.animationState) {
      this.animationState = state;
    }
    if (state === 'swipeleft') {
      this.toastr.success('Interested', 'Success');
    } else if (state === 'swiperight') {
      this.toastr.error('Not Interested', 'Error');
    }
  }

  resetAnimationState(state: any) {
    this.animationState = '';
    this.index++;
  }

  ngOnDestroy() {
    this.userDataList.unsubscribe();
  }
}
