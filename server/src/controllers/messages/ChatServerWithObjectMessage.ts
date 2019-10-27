import { PacketMessage } from "../PacketMessage";
import { Packet } from "../../models/packets/Packet";
import { BufferHelper } from "../../helpers/BufferHelper";
import { ChannelEnum } from "../../../../enums/ChannelEnum";
import { ObjectItemProtocol } from "../protocols/ObjectItemProtocol";

export class ChatServerWithObjectMessage extends PacketMessage {

    public channel: ChannelEnum;
    public content: string;
    public timestamp: number;
    public fingerPrint: string;
    public senderId: number;
    public senderName: string;
    public senderAccountId: number;
    public objects: ObjectItemProtocol[];

    public analyze(packet: Packet): void {

        BufferHelper.slice(packet,packet.dataLen);

        /*this.channel = BufferHelper.getNumber(packet, 1);

        this.content = BufferHelper.getText(packet);

        this.timestamp = BufferHelper.getNumber(packet, 4);

        this.fingerPrint = BufferHelper.getText(packet);

        this.senderId = BufferHelper.getId8(packet);

        this.senderName = BufferHelper.getText(packet);

        this.senderAccountId = BufferHelper.getNumber(packet, 4);*/
        
        console.log(this);
    }
}