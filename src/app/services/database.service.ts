import { Injectable } from '@angular/core';
import { Dexie } from 'dexie';

export class DatabaseService {
  private readonly db = new Dexie('fileDB');
  constructor() {
    this.db.version(1).stores({ images: '++id,name,filepath,file' });
  }
}
