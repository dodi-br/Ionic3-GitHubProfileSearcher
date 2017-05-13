import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github.service';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-results-page',
  templateUrl: 'profile-search-results-page.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;

  constructor(private github: GithubService, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
    console.log(this.username);
  }

}
