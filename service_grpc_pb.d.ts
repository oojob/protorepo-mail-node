// GENERATED CODE -- DO NOT EDIT!

// package: mail
// file: services/mail/service.proto

import * as services_mail_service_pb from "./service_pb";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as grpc from "grpc";

interface IMailServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendMail: grpc.MethodDefinition<services_mail_service_pb.SendMailReq, services_mail_service_pb.SendMailRes>;
  check: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<github_com_oojob_protobuf_health_pb.HealthCheckRequest, github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const MailServiceService: IMailServiceService;

export class MailServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendMail(argument: services_mail_service_pb.SendMailReq, callback: grpc.requestCallback<services_mail_service_pb.SendMailRes>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.SendMailReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.SendMailRes>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.SendMailReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.SendMailRes>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<github_com_oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: github_com_oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<github_com_oojob_protobuf_health_pb.HealthCheckResponse>;
}
