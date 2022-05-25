import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface RedeemInfo {
  ID: string;
  processorName: string;
  address: string;
  amount: string;
  signature: string;
}
export interface CreatePaymentAccount {
  address: string;
  token: string;
  signature: string;
}

function createBaseRedeemInfo(): RedeemInfo {
  return {
    ID: "",
    processorName: "",
    address: "",
    amount: "",
    signature: ""
  };
}

export const RedeemInfo = {
  encode(message: RedeemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    if (message.processorName !== "") {
      writer.uint32(18).string(message.processorName);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedeemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedeemInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.processorName = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.signature = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RedeemInfo {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      processorName: isSet(object.processorName) ? String(object.processorName) : "",
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: RedeemInfo): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.processorName !== undefined && (obj.processorName = message.processorName);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedeemInfo>, I>>(object: I): RedeemInfo {
    const message = createBaseRedeemInfo();
    message.ID = object.ID ?? "";
    message.processorName = object.processorName ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseCreatePaymentAccount(): CreatePaymentAccount {
  return {
    address: "",
    token: "",
    signature: ""
  };
}

export const CreatePaymentAccount = {
  encode(message: CreatePaymentAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }

    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePaymentAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePaymentAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.token = reader.string();
          break;

        case 3:
          message.signature = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreatePaymentAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      token: isSet(object.token) ? String(object.token) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: CreatePaymentAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.token !== undefined && (obj.token = message.token);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePaymentAccount>, I>>(object: I): CreatePaymentAccount {
    const message = createBaseCreatePaymentAccount();
    message.address = object.address ?? "";
    message.token = object.token ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};