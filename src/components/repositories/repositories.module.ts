import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Repositories } from './repositories';

@NgModule({
  declarations: [
    Repositories,
  ],
  imports: [
    IonicPageModule.forChild(Repositories),
  ],
  exports: [
    Repositories
  ]
})
export class RepositoriesModule {}
