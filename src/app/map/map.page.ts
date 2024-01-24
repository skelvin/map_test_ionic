import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: GoogleMap;

  constructor(
    private platform: Platform
  ) {}

  async ngOnInit() {
      
  }

  async ionViewDidEnter() {
    await this.platform.ready();
    await this.loadMap();
  }

  async loadMap(){
    const options: GoogleMapOptions = {
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        zoom: true,
        mapToolbar: true
      }
    };

    this.map = GoogleMaps.create( 'map_canvas', options);

  }
}