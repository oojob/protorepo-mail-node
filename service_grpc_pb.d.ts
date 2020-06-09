// GENERATED CODE -- DO NOT EDIT!

// package: mail
// file: services/mail/service.proto

import * as services_mail_service_pb from "./service_pb";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as github_com_oojob_protobuf_system_pb from "@oojob/oojob-protobuf/system_pb";
import * as grpc from "grpc";

interface IMailServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendSystemMail: grpc.MethodDefinition<services_mail_service_pb.SendMailReq, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  sendBulkSystemMail: grpc.MethodDefinition<services_mail_service_pb.SendBulkMailReq, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  readMail: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Id, services_mail_service_pb.Mail>;
  sendMail: grpc.MethodDefinition<services_mail_service_pb.SendMailReq, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  sendMessage: grpc.MethodDefinition<services_mail_service_pb.SendMessageReq, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  getMailNotification: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Id, services_mail_service_pb.MailNotifications>;
  getMailBox: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Id, services_mail_service_pb.UserMailBox>;
  getMessageBox: grpc.MethodDefinition<github_com_oojob_protobuf_system_pb.Id, services_mail_service_pb.UserMessageBox>;
  setMailNotification: grpc.MethodDefinition<services_mail_service_pb.MailNotifications, github_com_oojob_protobuf_system_pb.DefaultResponse>;
  check: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const MailServiceService: IMailServiceService;

export class MailServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendSystemMail(argument: services_mail_service_pb.SendMailReq, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendSystemMail(argument: services_mail_service_pb.SendMailReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendSystemMail(argument: services_mail_service_pb.SendMailReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendBulkSystemMail(argument: services_mail_service_pb.SendBulkMailReq, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendBulkSystemMail(argument: services_mail_service_pb.SendBulkMailReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendBulkSystemMail(argument: services_mail_service_pb.SendBulkMailReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  readMail(argument: github_com_oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<services_mail_service_pb.Mail>): grpc.ClientUnaryCall;
  readMail(argument: github_com_oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.Mail>): grpc.ClientUnaryCall;
  readMail(argument: github_com_oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.Mail>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.SendMailReq, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.SendMailReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.SendMailReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: services_mail_service_pb.SendMessageReq, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: services_mail_service_pb.SendMessageReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  sendMessage(argument: services_mail_service_pb.SendMessageReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  getMailNotification(argument: github_com_oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<services_mail_service_pb.MailNotifications>): grpc.ClientUnaryCall;
  getMailNotification(argument: github_com_oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.MailNotifications>): grpc.ClientUnaryCall;
  getMailNotification(argument: github_com_oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.MailNotifications>): grpc.ClientUnaryCall;
  getMailBox(argument: github_com_oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<services_mail_service_pb.UserMailBox>): grpc.ClientUnaryCall;
  getMailBox(argument: github_com_oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.UserMailBox>): grpc.ClientUnaryCall;
  getMailBox(argument: github_com_oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.UserMailBox>): grpc.ClientUnaryCall;
  getMessageBox(argument: github_com_oojob_protobuf_system_pb.Id, callback: grpc.requestCallback<services_mail_service_pb.UserMessageBox>): grpc.ClientUnaryCall;
  getMessageBox(argument: github_com_oojob_protobuf_system_pb.Id, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.UserMessageBox>): grpc.ClientUnaryCall;
  getMessageBox(argument: github_com_oojob_protobuf_system_pb.Id, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.UserMessageBox>): grpc.ClientUnaryCall;
  setMailNotification(argument: services_mail_service_pb.MailNotifications, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  setMailNotification(argument: services_mail_service_pb.MailNotifications, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  setMailNotification(argument: services_mail_service_pb.MailNotifications, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_system_pb.DefaultResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}
