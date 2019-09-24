import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

//Service
import { GetCountriesService} from './services/get-countries.service'

import { AppComponent } from './app.component';
import { SearchCountryComponent } from './components/search-country/search-country.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { BlankNamePipe } from './pipes/blank-name.pipe';
import { GetFirstLetterPipe } from './pipes/get-first-letter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchCountryComponent,
    MyFilterPipe,
    BlankNamePipe,
    GetFirstLetterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GetCountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
