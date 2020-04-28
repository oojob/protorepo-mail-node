// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 28 2020
//
// Mail entity related messages.
// This file is resposible for all operation related to mail entity.
//
// @authors nirajgeorgian@oojob.io (Niraj Kishore)
//
// Copyright (c) 2020 - oojob
'use strict';
var grpc = require('grpc');
var services_mail_service_pb = require('../../services/mail/service_pb.js');
var oojob_protobuf_health_pb = require('../../oojob/protobuf/health_pb.js');

function serialize_github_com_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_github_com_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_MailReq(arg) {
  if (!(arg instanceof services_mail_service_pb.MailReq)) {
    throw new Error('Expected argument of type mail.MailReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_MailReq(buffer_arg) {
  return services_mail_service_pb.MailReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_MailRes(arg) {
  if (!(arg instanceof services_mail_service_pb.MailRes)) {
    throw new Error('Expected argument of type mail.MailRes');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_MailRes(buffer_arg) {
  return services_mail_service_pb.MailRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var MailServiceService = exports.MailServiceService = {
  sendMail: {
    path: '/mail.MailService/SendMail',
    requestStream: false,
    responseStream: false,
    requestType: services_mail_service_pb.MailReq,
    responseType: services_mail_service_pb.MailRes,
    requestSerialize: serialize_mail_MailReq,
    requestDeserialize: deserialize_mail_MailReq,
    responseSerialize: serialize_mail_MailRes,
    responseDeserialize: deserialize_mail_MailRes,
  },
  check: {
    path: '/mail.MailService/Check',
    requestStream: false,
    responseStream: false,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
  watch: {
    path: '/mail.MailService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_github_com_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_github_com_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_HealthCheckResponse,
  },
};

exports.MailServiceClient = grpc.makeGenericClientConstructor(MailServiceService);
