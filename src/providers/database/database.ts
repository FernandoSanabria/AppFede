import { BehaviorSubject, Subject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class DatabaseProvider {
  private ideas = new BehaviorSubject([]);
  arrayObject: Array<Object> = [];

  constructor(private storage: Storage) { }

  public save(key: string, value: Object) {
    let o = {
      idea: value,
      time: new Date().getTime()
    };
    this.storage.set(key, o);
    this.update()
  }
  private update() {
    this.storage.keys().then((v: string[]) => {

      v.forEach((o) => {
        this.storage.get(o).then((data) => {
          console.log(data.idea);
        })
      })

    })
  }
  public getDBIdeas(): Observable<Array<Object>[]> {

    return this.ideas.asObservable();

  }
}
