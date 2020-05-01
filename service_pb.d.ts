// package: mail
// file: services/mail/service.proto

import * as jspb from "google-protobuf";
import * as github_com_oojob_protobuf_health_pb from "../../github.com/oojob/protobuf/health_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as github_com_oojob_protobuf_metadata_pb from "../../github.com/oojob/protobuf/metadata_pb";
import * as github_com_oojob_protobuf_system_pb from "../../github.com/oojob/protobuf/system_pb";

export class Mail extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<github_com_oojob_protobuf_system_pb.Attachment>;
  setAttachmentsList(value: Array<github_com_oojob_protobuf_system_pb.Attachment>): void;
  addAttachments(value?: github_com_oojob_protobuf_system_pb.Attachment, index?: number): github_com_oojob_protobuf_system_pb.Attachment;

  hasVariable(): boolean;
  clearVariable(): void;
  getVariable(): google_protobuf_struct_pb.Struct | undefined;
  setVariable(value?: google_protobuf_struct_pb.Struct): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Mail.AsObject;
  static toObject(includeInstance: boolean, msg: Mail): Mail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Mail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Mail;
  static deserializeBinaryFromReader(message: Mail, reader: jspb.BinaryReader): Mail;
}

export namespace Mail {
  export type AsObject = {
    from: string,
    to: string,
    subject: string,
    message: string,
    attachmentsList: Array<github_com_oojob_protobuf_system_pb.Attachment.AsObject>,
    variable?: google_protobuf_struct_pb.Struct.AsObject,
    template: string,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class MailBox extends jspb.Message {
  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): github_com_oojob_protobuf_system_pb.Identifier | undefined;
  setIdentifier(value?: github_com_oojob_protobuf_system_pb.Identifier): void;

  getContext(): string;
  setContext(value: string): void;

  clearOwnerList(): void;
  getOwnerList(): Array<string>;
  setOwnerList(value: Array<string>): void;
  addOwner(value: string, index?: number): string;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailBox.AsObject;
  static toObject(includeInstance: boolean, msg: MailBox): MailBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailBox;
  static deserializeBinaryFromReader(message: MailBox, reader: jspb.BinaryReader): MailBox;
}

export namespace MailBox {
  export type AsObject = {
    identifier?: github_com_oojob_protobuf_system_pb.Identifier.AsObject,
    context: string,
    ownerList: Array<string>,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class UserMailBox extends jspb.Message {
  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): github_com_oojob_protobuf_system_pb.Identifier | undefined;
  setIdentifier(value?: github_com_oojob_protobuf_system_pb.Identifier): void;

  hasContacts(): boolean;
  clearContacts(): void;
  getContacts(): google_protobuf_struct_pb.Struct | undefined;
  setContacts(value?: google_protobuf_struct_pb.Struct): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMailBox.AsObject;
  static toObject(includeInstance: boolean, msg: UserMailBox): UserMailBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMailBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMailBox;
  static deserializeBinaryFromReader(message: UserMailBox, reader: jspb.BinaryReader): UserMailBox;
}

export namespace UserMailBox {
  export type AsObject = {
    identifier?: github_com_oojob_protobuf_system_pb.Identifier.AsObject,
    contacts?: google_protobuf_struct_pb.Struct.AsObject,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class SendMailReq extends jspb.Message {
  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearAttachmentsList(): void;
  getAttachmentsList(): Array<github_com_oojob_protobuf_system_pb.Attachment>;
  setAttachmentsList(value: Array<github_com_oojob_protobuf_system_pb.Attachment>): void;
  addAttachments(value?: github_com_oojob_protobuf_system_pb.Attachment, index?: number): github_com_oojob_protobuf_system_pb.Attachment;

  hasVariable(): boolean;
  clearVariable(): void;
  getVariable(): google_protobuf_struct_pb.Struct | undefined;
  setVariable(value?: google_protobuf_struct_pb.Struct): void;

  getTemplate(): string;
  setTemplate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendMailReq): SendMailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMailReq;
  static deserializeBinaryFromReader(message: SendMailReq, reader: jspb.BinaryReader): SendMailReq;
}

export namespace SendMailReq {
  export type AsObject = {
    from: string,
    to: string,
    subject: string,
    message: string,
    attachmentsList: Array<github_com_oojob_protobuf_system_pb.Attachment.AsObject>,
    variable?: google_protobuf_struct_pb.Struct.AsObject,
    template: string,
  }
}

export class SendMailRes extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMailRes.AsObject;
  static toObject(includeInstance: boolean, msg: SendMailRes): SendMailRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMailRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMailRes;
  static deserializeBinaryFromReader(message: SendMailRes, reader: jspb.BinaryReader): SendMailRes;
}

export namespace SendMailRes {
  export type AsObject = {
    status: boolean,
  }
}

