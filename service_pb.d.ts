// package: mail
// file: services/mail/service.proto

import * as jspb from "google-protobuf";
import * as oojob_github_com_protobuf_health_pb from "../../oojob/github.com/protobuf/health_pb";

export class MailReq extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailReq.AsObject;
  static toObject(includeInstance: boolean, msg: MailReq): MailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailReq;
  static deserializeBinaryFromReader(message: MailReq, reader: jspb.BinaryReader): MailReq;
}

export namespace MailReq {
  export type AsObject = {
    from: string,
    to: string,
    subject: string,
    message: string,
    template: string,
  }
}

export class MailRes extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailRes.AsObject;
  static toObject(includeInstance: boolean, msg: MailRes): MailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailRes;
  static deserializeBinaryFromReader(message: MailRes, reader: jspb.BinaryReader): MailRes;
}

export namespace MailRes {
  export type AsObject = {
    status: boolean,
  }
}

