import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
  {
    name: 'Ionic 3 Camera',
    description: 'This rep shows the usage of the Camera functionality with Ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: 'This rep shows the usage of the SMS functionality with Ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Geolocation',
    description: 'This rep shows the usage of the Geolocation functionality with Ionic 3',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Vibration',
    description: 'This rep shows the usage of the Vibration functionality with Ionic 3',
    owner: USER_LIST[1]
  }
];

export const REPOSITORY_LIST = repositoryList;
