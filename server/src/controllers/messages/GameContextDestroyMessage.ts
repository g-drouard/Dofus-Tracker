
import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameContextDestroyMessage extends PacketMessage {

    public analyze(packet: Packet): void {
        console.log(this);
    }
}