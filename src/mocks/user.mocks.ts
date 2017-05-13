import { User } from '../models/user.interface';
const userList: User[] = [
  {
    name: 'PaulHalliday',
    company: 'PWH',
    location: 'Durham, NC',
    bio: 'I make videos on my favorite tech. Go Angular!',
    avatar_url: 'http://i.imgur.com/jav62p6.jpg',
    email: 'paul@paul.com'
  },
  {
    name: 'MarniDuffy',
    company: 'Statum Health',
    location: 'Auburn, NY',
    bio: 'I live on a farm and write code!',
    avatar_url: 'http://i.imgur.com/TxWcihb.png',
    email: 'marni@statumhealth.com'
  }
]

export const USER_LIST = userList;
