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
var services_mail_service_pb = require('./service_pb.js');
var github_com_oojob_protobuf_health_pb = require('@oojob/oojob-protobuf/health_pb.js');
var github_com_oojob_protobuf_metadata_pb = require('@oojob/oojob-protobuf/metadata_pb.js');
var github_com_oojob_protobuf_system_pb = require('@oojob/oojob-protobuf/system_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_github_com_oojob_protobuf_DefaultResponse(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_system_pb.DefaultResponse)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.DefaultResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_DefaultResponse(buffer_arg) {
  return github_com_oojob_protobuf_system_pb.DefaultResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_github_com_oojob_protobuf_Id(arg) {
  if (!(arg instanceof github_com_oojob_protobuf_system_pb.Id)) {
    throw new Error('Expected argument of type github.com.oojob.protobuf.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_github_com_oojob_protobuf_Id(buffer_arg) {
  return github_com_oojob_protobuf_system_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_Mail(arg) {
  if (!(arg instanceof services_mail_service_pb.Mail)) {
    throw new Error('Expected argument of type mail.Mail');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_Mail(buffer_arg) {
  return services_mail_service_pb.Mail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_MailNotifications(arg) {
  if (!(arg instanceof services_mail_service_pb.MailNotifications)) {
    throw new Error('Expected argument of type mail.MailNotifications');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_MailNotifications(buffer_arg) {
  return services_mail_service_pb.MailNotifications.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_mail_SendMessageReq(arg) {
  if (!(arg instanceof services_mail_service_pb.SendMessageReq)) {
    throw new Error('Expected argument of type mail.SendMessageReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_SendMessageReq(buffer_arg) {
  return services_mail_service_pb.SendMessageReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_UserMailBox(arg) {
  if (!(arg instanceof services_mail_service_pb.UserMailBox)) {
    throw new Error('Expected argument of type mail.UserMailBox');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_UserMailBox(buffer_arg) {
  return services_mail_service_pb.UserMailBox.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mail_UserMessageBox(arg) {
  if (!(arg instanceof services_mail_service_pb.UserMessageBox)) {
    throw new Error('Expected argument of type mail.UserMessageBox');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mail_UserMessageBox(buffer_arg) {
  return services_mail_service_pb.UserMessageBox.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// MailService responsible for mail microservice operation.
// more info can be found at : https://oojob/service-mail
// project: oojob
// how does this mail service work as a full microservice
// 1: we need to create base mail templates and attach variable to it.
// 2: send mail based on template or directly based upon context
//  - sending as company recruiter
//  - sending as applicant
//  - sending as formal mail exchange text
// any other service need to send any mail's based on it's requirement
var MailServiceService = exports.MailServiceService = {
  // / read mail request
  readMail: {
    path: '/mail.MailService/ReadMail',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: services_mail_service_pb.Mail,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_mail_Mail,
    responseDeserialize: deserialize_mail_Mail,
  },
  // / Used to send mail to any based on any mail template
  sendMail: {
    path: '/mail.MailService/SendMail',
    requestStream: false,
    responseStream: false,
    requestType: services_mail_service_pb.SendMailReq,
    responseType: github_com_oojob_protobuf_system_pb.DefaultResponse,
    requestSerialize: serialize_mail_SendMailReq,
    requestDeserialize: deserialize_mail_SendMailReq,
    responseSerialize: serialize_github_com_oojob_protobuf_DefaultResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_DefaultResponse,
  },
  // / send message
  sendMessage: {
    path: '/mail.MailService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: services_mail_service_pb.SendMessageReq,
    responseType: github_com_oojob_protobuf_system_pb.DefaultResponse,
    requestSerialize: serialize_mail_SendMessageReq,
    requestDeserialize: deserialize_mail_SendMessageReq,
    responseSerialize: serialize_github_com_oojob_protobuf_DefaultResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_DefaultResponse,
  },
  // / Used for accessing message notification settings
  getMailNotification: {
    path: '/mail.MailService/GetMailNotification',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: services_mail_service_pb.MailNotifications,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_mail_MailNotifications,
    responseDeserialize: deserialize_mail_MailNotifications,
  },
  // / Get MailBox
  getMailBox: {
    path: '/mail.MailService/GetMailBox',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: services_mail_service_pb.UserMailBox,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_mail_UserMailBox,
    responseDeserialize: deserialize_mail_UserMailBox,
  },
  // / Get MessageBox
  getMessageBox: {
    path: '/mail.MailService/GetMessageBox',
    requestStream: false,
    responseStream: false,
    requestType: github_com_oojob_protobuf_system_pb.Id,
    responseType: services_mail_service_pb.UserMessageBox,
    requestSerialize: serialize_github_com_oojob_protobuf_Id,
    requestDeserialize: deserialize_github_com_oojob_protobuf_Id,
    responseSerialize: serialize_mail_UserMessageBox,
    responseDeserialize: deserialize_mail_UserMessageBox,
  },
  // / Used for accessing message notification settings
  setMailNotification: {
    path: '/mail.MailService/SetMailNotification',
    requestStream: false,
    responseStream: false,
    requestType: services_mail_service_pb.MailNotifications,
    responseType: github_com_oojob_protobuf_system_pb.DefaultResponse,
    requestSerialize: serialize_mail_MailNotifications,
    requestDeserialize: deserialize_mail_MailNotifications,
    responseSerialize: serialize_github_com_oojob_protobuf_DefaultResponse,
    responseDeserialize: deserialize_github_com_oojob_protobuf_DefaultResponse,
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
