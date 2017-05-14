import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results-page',
  templateUrl: 'profile-search-results-page.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubService, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.github.getUserInformation(this.username).subscribe((data: User) => this.user = data);
    this.github.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data)
    // this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    // this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
    console.log(this.username);
  }

}
