import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    private socket!: WebSocket;
    public messages$ = new Subject<any>();
    private WEBSOCKET_URL = environment.WEBSOCKET_URL;

    connect(clientId: string): void {
        try {
            console.log("srrrrrrrrrrrr", this.WEBSOCKET_URL)
            this.socket = new WebSocket(`${this.WEBSOCKET_URL}${clientId}`);

            this.socket.onopen = () => {
                console.log("WebSocket connected");
            };

            this.socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log("Received from server:", data);
                this.messages$.next(data);
            };

            this.socket.onclose = () => {
                console.log("WebSocket closed");
            };
        } catch (error) {
            console.log("ERROR:", error)
        }
    }

    disconnect(): void {
        if (this.socket) {
            this.socket.close();
            console.log("WebSocket closed manually");
        }
    }
    send(message: string) {
        this.socket.send(message);
    }
}
