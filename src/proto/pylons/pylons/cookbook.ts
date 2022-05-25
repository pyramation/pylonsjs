import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface Cookbook {
  creator: string;
  ID: string;
  nodeVersion: Long;
  name: string;
  description: string;
  developer: string;
  version: string;
  supportEmail: string;
  enabled: boolean;
}

function createBaseCookbook(): Cookbook {
  return {
    creator: "",
    ID: "",
    nodeVersion: Long.UZERO,
    name: "",
    description: "",
    developer: "",
    version: "",
    supportEmail: "",
    enabled: false
  };
}

export const Cookbook = {
  encode(message: Cookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    if (!message.nodeVersion.isZero()) {
      writer.uint32(24).uint64(message.nodeVersion);
    }

    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    if (message.developer !== "") {
      writer.uint32(50).string(message.developer);
    }

    if (message.version !== "") {
      writer.uint32(58).string(message.version);
    }

    if (message.supportEmail !== "") {
      writer.uint32(66).string(message.supportEmail);
    }

    if (message.enabled === true) {
      writer.uint32(72).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCookbook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.ID = reader.string();
          break;

        case 3:
          message.nodeVersion = (reader.uint64() as Long);
          break;

        case 4:
          message.name = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        case 6:
          message.developer = reader.string();
          break;

        case 7:
          message.version = reader.string();
          break;

        case 8:
          message.supportEmail = reader.string();
          break;

        case 9:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Cookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      nodeVersion: isSet(object.nodeVersion) ? Long.fromString(object.nodeVersion) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      developer: isSet(object.developer) ? String(object.developer) : "",
      version: isSet(object.version) ? String(object.version) : "",
      supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message: Cookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    message.nodeVersion !== undefined && (obj.nodeVersion = (message.nodeVersion || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.developer !== undefined && (obj.developer = message.developer);
    message.version !== undefined && (obj.version = message.version);
    message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Cookbook>, I>>(object: I): Cookbook {
    const message = createBaseCookbook();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.nodeVersion = object.nodeVersion !== undefined && object.nodeVersion !== null ? Long.fromValue(object.nodeVersion) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.developer = object.developer ?? "";
    message.version = object.version ?? "";
    message.supportEmail = object.supportEmail ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }

};