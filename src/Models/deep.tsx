import { Account } from './account';

export class Deep {
  id?: number;
  guid?: string = crypto.randomUUID();
  accountGuid: string = null!;
  date: Date = new Date(new Date().toUTCString());
  text?: string;
  account?: Account;

  /**
   *
   */
  constructor(init?: Partial<Deep>) {
    Object.assign(this, init);
  }
}
