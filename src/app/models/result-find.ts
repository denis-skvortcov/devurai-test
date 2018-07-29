import {FindCity} from './find-city';

export class ResultFind {
  public readonly count: number;
  public readonly code: string;
  public readonly message: string;
  public readonly list: FindCity[];

  constructor(props: {
    count: number;
    code: string;
    message: string;
    list: FindCity[];
  }) {
    this.count = props.count;
    this.code = props.code;
    this.message = props.message;
    this.list = props.list.map(item => new FindCity(item));
  }
}
