import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";

export class GameFightTurnFinishMessage extends PacketMessage {

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet, packet.dataLen);

        console.log(this);
    }
}