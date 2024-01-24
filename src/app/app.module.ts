import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { root } from 'rxjs/internal/util/root';
import { Camera } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Media } from '@awesome-cordova-plugins/media/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms'
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { AppLauncher } from '@ionic-native/app-launcher/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { DatePipe } from '@angular/common';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule,
  IonicStorageModule.forRoot(),
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
],
  providers: [
    StatusBar,
    SplashScreen,
    SplashScreen,
    Camera,
    Geolocation,
    NativeGeocoder,
    Network,
    SQLite,
    File,
    FileChooser,
    FilePath,
    HTTP,
    HttpClientModule,
    WebView,
    SQLitePorter,
    SQLite,
    Media,
    AppLauncher,
    Storage,
    HttpClient,
    AndroidPermissions,
    DatePipe,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
