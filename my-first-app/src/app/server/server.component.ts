import { Component } from '@angular/core'
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector:'app-server', // this is element style selector
    // selector: '.app-server' css class type selector now can be used with a tag as it's class.
    // selector: ['.app-server'] css attribute type selector now can be used with a tag as it's attribute.
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
    // styles:
    // [
    // `p {
    //         color: blue;
    // }`
    // ]
})

export class ServerComponent{

    serverId = 11;
    serverStatus = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}