import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AppService} from './services';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {FindCity} from './models/find-city';
import {ResultFind} from './models/result-find';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public searchCity: FormControl;
  public cities: FindCity[];

  constructor(private appService: AppService) {
    this.searchCity = new FormControl(null, Validators.compose([
      Validators.pattern('^[а-яА-ЯёЁa-zA-Z\-]+$'),
    ]));
    this.searchCity.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(query => query.length > 2),
        switchMap(query => this.appService.find(query))
      ).subscribe( result => {
        this.cities = result.list;
    });
  }

  displayFn(city: FindCity): string {
    return city ? `${city.name}, ${city.sys.country}` : null;
  }


  // getTestApi(): void {
  //   this.appService.test().subscribe(result => {
  //     this.result = JSON.stringify(result);
  //   });
  // }
}
