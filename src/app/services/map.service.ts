import { Injectable, ElementRef } from "@angular/core";

import { LocalStorage } from "@ngx-pwa/local-storage";
import { BehaviorSubject } from "rxjs";
import * as L from "leaflet";

export interface AppOverlay extends L.ImageOverlay {
  name: string;
  description?: string;
  url: string;
}

@Injectable({
  providedIn: "root"
})
export class MapService {
  private mapReference: L.Map;
  public overlays: BehaviorSubject<AppOverlay[]> = new BehaviorSubject([]);

  constructor() {}

  setupMap(map: ElementRef) {
    this.mapReference = L.map(map.nativeElement).setView([40.75, -74.0], 13);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoicmFpZGVuZnJlZW1hbiIsImEiOiJjaWZkcXZ1eTgwMGQ4dG5seWF2dzliZmhpIn0.BqZRSI9qyOANkq11vk0pGw"
      }
    ).addTo(this.mapReference);
  }

  addImageOverlay(name: string, url: string) {
    this.addImageOverlayAtBounds(name, url, this.mapReference.getBounds());
  }
  addImageOverlayAtBounds(name: string, url: string, bounds: L.LatLngBounds) {
    if (!this.mapReference) {
      throw new Error("Map not initialized in MapService");
    }
    const currentOverlays = this.overlays.value;
    // make sure that the map's container hasn't changed
    this.mapReference.invalidateSize(false);
    const addedOverlay: AppOverlay = Object.assign(
      L.imageOverlay(url, bounds as any),
      {
        name: name,
        url: url
      }
    );
    addedOverlay.addTo(this.mapReference);
    this.overlays.next([...currentOverlays, addedOverlay]);
  }

  removeImageOverlay(overlay: L.ImageOverlay) {
    if (!this.mapReference) {
      throw new Error("Map not initialized in MapService");
    }
    const currentOverlays = this.overlays.value;
    this.mapReference.removeLayer(overlay);
    this.overlays.next(currentOverlays.filter(x => x !== overlay));
  }
  removeImageOverlayByIndex(index: number) {
    if (!this.mapReference) {
      throw new Error("Map not initialized in MapService");
    }
    const currentOverlays = this.overlays.value;
    const overlayToRemove = currentOverlays[index];
    if (!overlayToRemove) {
      return;
    } else {
      this.mapReference.removeLayer(overlayToRemove);
      this.overlays.next(currentOverlays.filter((_, idx) => idx !== index));
    }
  }

  setBounds(bounds: L.LatLngBounds) {
    if (!this.mapReference) {
      throw new Error("Map not initialized in MapService");
    }
    this.mapReference.invalidateSize(false);
    this.mapReference.flyToBounds(bounds);
  }
}
