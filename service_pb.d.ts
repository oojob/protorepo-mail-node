// package: mail
// file: services/mail/service.proto

import * as jspb from "google-protobuf";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as github_com_oojob_protobuf_metadata_pb from "@oojob/oojob-protobuf/metadata_pb";
import * as github_com_oojob_protobuf_system_pb from "@oojob/oojob-protobuf/system_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class MailTemplate extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  clearAttributesList(): void;
  getAttributesList(): Array<MailTemplate.Attributes>;
  setAttributesList(value: Array<MailTemplate.Attributes>): void;
  addAttributes(value?: MailTemplate.Attributes, index?: number): MailTemplate.Attributes;

  getPrimaryColor(): string;
  setPrimaryColor(value: string): void;

  getSecondaryColor(): string;
  setSecondaryColor(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: MailTemplate): MailTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailTemplate;
  static deserializeBinaryFromReader(message: MailTemplate, reader: jspb.BinaryReader): MailTemplate;
}

export namespace MailTemplate {
  export type AsObject = {
    id: string,
    attributesList: Array<MailTemplate.Attributes.AsObject>,
    primaryColor: string,
    secondaryColor: string,
    logo: string,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }

  export class Attributes extends jspb.Message {
    getValuesMap(): jspb.Map<string, string>;
    clearValuesMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attributes.AsObject;
    static toObject(includeInstance: boolean, msg: Attributes): Attributes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attributes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attributes;
    static deserializeBinaryFromReader(message: Attributes, reader: jspb.BinaryReader): Attributes;
  }

  export namespace Attributes {
    export type AsObject = {
      valuesMap: Array<[string, string]>,
    }
  }
}

export class MailNotifications extends jspb.Message {
  getDailyDigest(): boolean;
  setDailyDigest(value: boolean): void;

  getNewDirectMessage(): boolean;
  setNewDirectMessage(value: boolean): void;

  getNewMention(): boolean;
  setNewMention(value: boolean): void;

  getNewMessageInThreads(): boolean;
  setNewMessageInThreads(value: boolean): void;

  getNewThreadCreated(): boolean;
  setNewThreadCreated(value: boolean): void;

  getWeeklyDigest(): boolean;
  setWeeklyDigest(value: boolean): void;

  getNewEventCreated(): boolean;
  setNewEventCreated(value: boolean): void;

  getNewInterview(): boolean;
  setNewInterview(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MailNotifications.AsObject;
  static toObject(includeInstance: boolean, msg: MailNotifications): MailNotifications.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MailNotifications, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MailNotifications;
  static deserializeBinaryFromReader(message: MailNotifications, reader: jspb.BinaryReader): MailNotifications;
}

export namespace MailNotifications {
  export type AsObject = {
    dailyDigest: boolean,
    newDirectMessage: boolean,
    newMention: boolean,
    newMessageInThreads: boolean,
    newThreadCreated: boolean,
    weeklyDigest: boolean,
    newEventCreated: boolean,
    newInterview: boolean,
  }
}

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasAttachments(): boolean;
  clearAttachments(): void;
  getAttachments(): github_com_oojob_protobuf_system_pb.Attachment | undefined;
  setAttachments(value?: github_com_oojob_protobuf_system_pb.Attachment): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasReadAt(): boolean;
  clearReadAt(): void;
  getReadAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReadAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    message: string,
    attachments?: github_com_oojob_protobuf_system_pb.Attachment.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    readAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UserMailBox extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getSubject(): string;
  setSubject(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  getTemplate(): string;
  setTemplate(value: string): void;

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
    id: string,
    from: string,
    to: string,
    subject: string,
    messagesList: Array<Message.AsObject>,
    template: string,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class UserMessageBox extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): github_com_oojob_protobuf_metadata_pb.Metadata | undefined;
  setMetadata(value?: github_com_oojob_protobuf_metadata_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMessageBox.AsObject;
  static toObject(includeInstance: boolean, msg: UserMessageBox): UserMessageBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMessageBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMessageBox;
  static deserializeBinaryFromReader(message: UserMessageBox, reader: jspb.BinaryReader): UserMessageBox;
}

export namespace UserMessageBox {
  export type AsObject = {
    id: string,
    to: string,
    messagesList: Array<Message.AsObject>,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class Mail extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  hasNotifications(): boolean;
  clearNotifications(): void;
  getNotifications(): MailNotifications | undefined;
  setNotifications(value?: MailNotifications): void;

  clearMailTemplatesList(): void;
  getMailTemplatesList(): Array<MailTemplate>;
  setMailTemplatesList(value: Array<MailTemplate>): void;
  addMailTemplates(value?: MailTemplate, index?: number): MailTemplate;

  clearMessagesList(): void;
  getMessagesList(): Array<UserMessageBox>;
  setMessagesList(value: Array<UserMessageBox>): void;
  addMessages(value?: UserMessageBox, index?: number): UserMessageBox;

  clearMailsList(): void;
  getMailsList(): Array<UserMailBox>;
  setMailsList(value: Array<UserMailBox>): void;
  addMails(value?: UserMailBox, index?: number): UserMailBox;

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
    id: string,
    userId: string,
    notifications?: MailNotifications.AsObject,
    mailTemplatesList: Array<MailTemplate.AsObject>,
    messagesList: Array<UserMessageBox.AsObject>,
    mailsList: Array<UserMailBox.AsObject>,
    metadata?: github_com_oojob_protobuf_metadata_pb.Metadata.AsObject,
  }
}

export class SendMailReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

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

  clearVariablesList(): void;
  getVariablesList(): Array<SendMailReq.Variables>;
  setVariablesList(value: Array<SendMailReq.Variables>): void;
  addVariables(value?: SendMailReq.Variables, index?: number): SendMailReq.Variables;

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
    userId: string,
    from: string,
    to: string,
    subject: string,
    message: string,
    attachmentsList: Array<github_com_oojob_protobuf_system_pb.Attachment.AsObject>,
    variablesList: Array<SendMailReq.Variables.AsObject>,
    template: string,
  }

  export class Variables extends jspb.Message {
    getValuesMap(): jspb.Map<string, string>;
    clearValuesMap(): void;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Variables.AsObject;
    static toObject(includeInstance: boolean, msg: Variables): Variables.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Variables, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Variables;
    static deserializeBinaryFromReader(message: Variables, reader: jspb.BinaryReader): Variables;
  }

  export namespace Variables {
    export type AsObject = {
      valuesMap: Array<[string, string]>,
    }
  }
}

export class SendBulkMailReq extends jspb.Message {
  clearMailRequestsList(): void;
  getMailRequestsList(): Array<SendMailReq>;
  setMailRequestsList(value: Array<SendMailReq>): void;
  addMailRequests(value?: SendMailReq, index?: number): SendMailReq;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBulkMailReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendBulkMailReq): SendBulkMailReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendBulkMailReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBulkMailReq;
  static deserializeBinaryFromReader(message: SendBulkMailReq, reader: jspb.BinaryReader): SendBulkMailReq;
}

export namespace SendBulkMailReq {
  export type AsObject = {
    mailRequestsList: Array<SendMailReq.AsObject>,
  }
}

export class SendMessageReq extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getFrom(): string;
  setFrom(value: string): void;

  getTo(): string;
  setTo(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageReq.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageReq): SendMessageReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendMessageReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageReq;
  static deserializeBinaryFromReader(message: SendMessageReq, reader: jspb.BinaryReader): SendMessageReq;
}

export namespace SendMessageReq {
  export type AsObject = {
    userId: string,
    from: string,
    to: string,
    message: string,
  }
}

