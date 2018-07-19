import { Injectable } from "@angular/core";

import { LocalStorage } from "@ngx-pwa/local-storage";
import { Observable } from "../../node_modules/rxjs";
import * as L from "leaflet";

@Injectable({
  providedIn: "root"
})
export class ImageStorageService {
  constructor(protected localStorage: LocalStorage) {}

  storeImage(file) {
    this.localStorage.setItem("myimage", file).subscribe(() => {});
    // this.localStorage.setItem()
  }

  getImage(): Observable<any> {
    return this.localStorage.getItem<any>("myimage");
  }

  private gg;
  setup(x) {
    this.gg = x;
  }

  doit(url) {
    debugger
    L.imageOverlay(url, this.gg.getBounds()).addTo(
      this.gg
    );
  }
}
