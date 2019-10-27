import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";

export class BasicNoOperationMessage extends PacketMessage {

    public analyze(packet: Packet): void {
        
        console.log(this);
    }
}