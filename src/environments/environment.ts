// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBeQHVncDgNBruAuOylPM5wrPGcBcQwJC4',
    authDomain: 'my-angular-portfolio.firebaseapp.com',
    databaseURL: 'https://my-angular-portfolio.firebaseio.com',
    projectId: 'my-angular-portfolio',
    storageBucket: 'my-angular-portfolio.appspot.com',
    messagingSenderId: '402039859122'
  }
};
