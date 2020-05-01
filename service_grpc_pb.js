// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 28 2020
//
// Mail entity related messages.
// This file is resposible for all operation related to mail entity.
//
// @author nirajgeorgian@oojob.io (Niraj Kishore)
// @author dibyarupajena@gmail.com (Dibyarupa Jena)
//
// Copyright (c) 2020 - oojob
'use strict';
var grpc = require('grpc');
var services_mail_service_pb = require('../../services/mail/service_pb.js');
var github_com_oojob_protobuf_health_pb = require('../../github.com/oojob/protobuf/health_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var github_com_oojob_protobuf_metadata_pb = require('../../github.com/oojob/protobuf/metadata_pb.js');
var github_com_oojob_protobuf_system_pb = require('../../github.com/oojob/protobuf/system_pb.js');

function serialize_github_com_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return github_com_oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_SendMailReq(arg) {
  if (!(arg instanceof services_mail_service_pb.SendMailReq)) {
    throw new Error('Expected argument of type mail.SendMailReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_SendMailReq(buffer_arg) {
  return services_mail_service_pb.SendMailReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_SendMailRes(arg) {
  if (!(arg instanceof services_mail_service_pb.SendMailRes)) {
    throw new Error('Expected argument of type mail.SendMailRes');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_SendMailRes(buffer_arg) {
  return services_mail_service_pb.SendMailRes.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// MailService responsible for mail microservice operation.
// more info can be found at : https://github.com/oojob/service-mail
// project: github.com/oojob
// how does this mail service work as a full microservice
// 1: we need to create base mail templates and attach variable to it.
// 2: send mail based on template or directly based upon context
//  - sending as company recruiter
//  - sending as applicant
//  - sending as formal mail exchange text
// any other service need to send any mail's based on it's requirement
var MailServiceService = exports.MailServiceService = {
  // / Used to send mail to any based on any mail template
  sendMail: {
    path: '/mail.MailService/SendMail',
    requestStream: false,
    responseStream: false,
    requestType: services_mail_service_pb.SendMailReq,
    responseType: services_mail_service_pb.SendMailRes,
    requestSerialize: serialize_mail_SendMailReq,
    requestDeserialize: deserialize_mail_SendMailReq,
    responseSerialize: serialize_mail_SendMailRes,
    responseDeserialize: deserialize_mail_SendMailRes,
  },
  // / Used to check health status of the running microservice
  check: {
    path: '/mail.MailService/Check',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
  // / Used to check health status of the running microservice as stream
  watch: {
    path: '/mail.MailService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: github_com_oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: github_com_oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
};

exports.MailServiceClient = grpc.makeGenericClientConstructor(MailServiceService);
