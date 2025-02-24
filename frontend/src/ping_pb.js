// source: ping.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

import * as jspb from 'google-protobuf';

export const proto = {};
proto.ping = {};

export class PingRequest extends jspb.Message {
  constructor(opt_data) {
    super();
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  static toObject(includeInstance, msg) {
    const obj = {
      message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  }

  static deserializeBinary(bytes) {
    const reader = new jspb.BinaryReader(bytes);
    const msg = new PingRequest();
    return PingRequest.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      const field = reader.getFieldNumber();
      switch (field) {
        case 1:
          const value = reader.readString();
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }

  serializeBinary() {
    const writer = new jspb.BinaryWriter();
    PingRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  static serializeBinaryToWriter(message, writer) {
    const f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  }

  getMessage() {
    return jspb.Message.getFieldWithDefault(this, 1, "");
  }

  setMessage(value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  }
}

export class PingResponse extends jspb.Message {
  constructor(opt_data) {
    super();
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
  }

  static toObject(includeInstance, msg) {
    const obj = {
      message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  }

  static deserializeBinary(bytes) {
    const reader = new jspb.BinaryReader(bytes);
    const msg = new PingResponse();
    return PingResponse.deserializeBinaryFromReader(msg, reader);
  }

  static deserializeBinaryFromReader(msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      const field = reader.getFieldNumber();
      switch (field) {
        case 1:
          const value = reader.readString();
          msg.setMessage(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  }

  serializeBinary() {
    const writer = new jspb.BinaryWriter();
    PingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  static serializeBinaryToWriter(message, writer) {
    const f = message.getMessage();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
  }

  getMessage() {
    return jspb.Message.getFieldWithDefault(this, 1, "");
  }

  setMessage(value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  }
}

proto.ping.PingRequest = PingRequest;
proto.ping.PingResponse = PingResponse;
