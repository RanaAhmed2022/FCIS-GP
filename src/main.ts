import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
// import { Buffer } from 'buffer';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig
//   providers: [
//     ...appConfig.providers,
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     provideAuth(() => getAuth()),
//     provideRouter(routes),
//   ]
// }
)
  // .catch((err) => console.error(err));
