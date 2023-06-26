import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacterCreatorComponent } from './pages/character-creator/character-creator.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RaceSelectorComponent } from './components/race-selector/race-selector.component';
import { SummaryTextBoxComponent } from './components/summary-text-box/summary-text-box.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { CharacterTraitsSelectorComponent } from './components/character-traits-selector/character-traits-selector.component';
import { SelectNameComponent } from './components/select-name/select-name.component';
import { JobSelectorComponent } from './components/job-selector/job-selector.component';
import { TextBoxComponent } from './components/text-box/text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterCreatorComponent,
    SignUpComponent,
    SignInComponent,
    RaceSelectorComponent,
    SummaryTextBoxComponent,
    ImageDisplayComponent,
    CharacterTraitsSelectorComponent,
    SelectNameComponent,
    JobSelectorComponent,
    TextBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('71017879283-4mr0e4ogpcqn8elbqo1tcdrt5c9n5129.apps.googleusercontent.com')
            }
          ]
        } as SocialAuthServiceConfig
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
