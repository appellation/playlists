import Song from '../Song';
import { IFetchable } from './IFetchable';

export interface IService {
  search: boolean;
  fetch(fetchable: IFetchable): Promise<Song[]>;
  fetchable(content: string): IFetchable;
}