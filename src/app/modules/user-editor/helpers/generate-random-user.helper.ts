import { IUser } from '@shared/interfaces';
import { firstNames } from '../constants/first-names-constant';
import { lastNames } from '../constants/last-names-constant';
import { domains } from '../constants/domains';

export const generateRandomUser = (): IUser => {
  const id = Math.floor(Math.random() * 99) + 1;
  const gender = Math.random() > 0.5 ? 'men' : 'women';
  const firstName = firstNames[gender][Math.floor(Math.random() * firstNames[gender].length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${firstName} ${lastName}`;
  const domain = domains[Math.floor(Math.random() * domains.length)];
  const email =
    `${firstName}.${lastName}${Math.floor(Math.random() * 999)}@${domain}`.toLowerCase();

  return {
    id: 0,
    name,
    email,
    avatar: `https://randomuser.me/api/portraits/${gender}/${id}.jpg`,
  };
};
