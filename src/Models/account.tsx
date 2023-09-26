import { Deep } from './deep';

export class Account {
  constructor(
    public id: number,
    public guid: string,
    public name: string,
    public identifier: string,
    public posts: Array<Deep> = []
  ) { }
}
