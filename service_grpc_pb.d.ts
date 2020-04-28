// GENERATED CODE -- DO NOT EDIT!

// package: mail
// file: services/mail/service.proto

import * as services_mail_service_pb from "../../services/mail/service_pb";
import * as oojob_protobuf_health_pb from "../../oojob/protobuf/health_pb";
import * as grpc from "grpc";

interface IMailServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sendMail: grpc.MethodDefinition<services_mail_service_pb.MailReq, services_mail_service_pb.MailRes>;
  check: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const MailServiceService: IMailServiceService;

export class MailServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sendMail(argument: services_mail_service_pb.MailReq, callback: grpc.requestCallback<services_mail_service_pb.MailRes>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.MailReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.MailRes>): grpc.ClientUnaryCall;
  sendMail(argument: services_mail_service_pb.MailReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_mail_service_pb.MailRes>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
}
