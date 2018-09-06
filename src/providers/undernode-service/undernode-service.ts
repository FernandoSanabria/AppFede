import { Injectable } from "@angular/core";
import socket from "socket.io-client";
import { sprintf } from "sprintf-js";
import { Observable } from 'rxjs';


@Injectable()
export class UndernodeServiceProvider {

  result: Array<Object> = [];

  constructor() { }
  public fetchEvents(): Promise<any> {
    let io = socket("http://localhost:3002", { forceNew: true });
    var promise = new Promise((ok, fail) => {
      io.on('events', (data: any) => {
        console.log('parsing events...')
        let w = [];
        if (typeof data.value != 'undefined') {
          let o = data.value;
          o.forEach(event => {
            let obj: any = {};
            obj.title = event.title;
            obj.desc = event.desc;
            obj.short =
              event.desc.length > 200
                ? sprintf("%s...", event.desc.substr(0, 200))
                : event.desc;
            obj.src = event.imgs[0];
            obj.where = event.where;
            obj.date = event.date;
            obj.address = event.address;
            obj.slides = event.imgs;
            w.push(obj);
          });
          ok(w)
        } else {
          let obj: any = {};
          obj.error = "Error";
          w.push(obj)

          fail(w);
        }


      })
    })

    io.emit('get-events');

    return promise.then((w) => {
      this.result = new Array(w);
      return this.result
    }).catch((w) => {
      this.result = new Array(w);
      return this.result
    })
  }
  public getEvents(): any {
    return this.fetchEvents();
  }
}

