import { DoubleKeyValue, LongKeyValue, StringKeyValue } from "./item";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface ItemRecord {
  ID: string;
  doubles: DoubleKeyValue[];
  longs: LongKeyValue[];
  strings: StringKeyValue[];
}
export interface Execution {
  creator: string;
  ID: string;
  recipeID: string;
  cookbookID: string;
  recipeVersion: string;
  nodeVersion: Long;
  blockHeight: Long;
  itemInputs: ItemRecord[];
  coinInputs: Coin[];
  coinOutputs: Coin[];
  itemOutputIDs: string[];
  itemModifyOutputIDs: string[];
}

function createBaseItemRecord(): ItemRecord {
  return {
    ID: "",
    doubles: [],
    longs: [],
    strings: []
  };
}

export const ItemRecord = {
  encode(message: ItemRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    for (const v of message.doubles) {
      DoubleKeyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongKeyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringKeyValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.doubles.push(DoubleKeyValue.decode(reader, reader.uint32()));
          break;

        case 3:
          message.longs.push(LongKeyValue.decode(reader, reader.uint32()));
          break;

        case 4:
          message.strings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemRecord {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleKeyValue.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongKeyValue.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringKeyValue.fromJSON(e)) : []
    };
  },

  toJSON(message: ItemRecord): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);

    if (message.doubles) {
      obj.doubles = message.doubles.map(e => e ? DoubleKeyValue.toJSON(e) : undefined);
    } else {
      obj.doubles = [];
    }

    if (message.longs) {
      obj.longs = message.longs.map(e => e ? LongKeyValue.toJSON(e) : undefined);
    } else {
      obj.longs = [];
    }

    if (message.strings) {
      obj.strings = message.strings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.strings = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ItemRecord>, I>>(object: I): ItemRecord {
    const message = createBaseItemRecord();
    message.ID = object.ID ?? "";
    message.doubles = object.doubles?.map(e => DoubleKeyValue.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongKeyValue.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringKeyValue.fromPartial(e)) || [];
    return message;
  }

};

function createBaseExecution(): Execution {
  return {
    creator: "",
    ID: "",
    recipeID: "",
    cookbookID: "",
    recipeVersion: "",
    nodeVersion: Long.UZERO,
    blockHeight: Long.ZERO,
    itemInputs: [],
    coinInputs: [],
    coinOutputs: [],
    itemOutputIDs: [],
    itemModifyOutputIDs: []
  };
}

export const Execution = {
  encode(message: Execution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    if (message.recipeID !== "") {
      writer.uint32(26).string(message.recipeID);
    }

    if (message.cookbookID !== "") {
      writer.uint32(34).string(message.cookbookID);
    }

    if (message.recipeVersion !== "") {
      writer.uint32(42).string(message.recipeVersion);
    }

    if (!message.nodeVersion.isZero()) {
      writer.uint32(48).uint64(message.nodeVersion);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(56).int64(message.blockHeight);
    }

    for (const v of message.itemInputs) {
      ItemRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.coinInputs) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.itemOutputIDs) {
      writer.uint32(90).string(v!);
    }

    for (const v of message.itemModifyOutputIDs) {
      writer.uint32(98).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Execution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecution();

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
          message.recipeID = reader.string();
          break;

        case 4:
          message.cookbookID = reader.string();
          break;

        case 5:
          message.recipeVersion = reader.string();
          break;

        case 6:
          message.nodeVersion = (reader.uint64() as Long);
          break;

        case 7:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 8:
          message.itemInputs.push(ItemRecord.decode(reader, reader.uint32()));
          break;

        case 9:
          message.coinInputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 10:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 11:
          message.itemOutputIDs.push(reader.string());
          break;

        case 12:
          message.itemModifyOutputIDs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Execution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      recipeID: isSet(object.recipeID) ? String(object.recipeID) : "",
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      recipeVersion: isSet(object.recipeVersion) ? String(object.recipeVersion) : "",
      nodeVersion: isSet(object.nodeVersion) ? Long.fromString(object.nodeVersion) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.ZERO,
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemRecord.fromJSON(e)) : [],
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => Coin.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      itemOutputIDs: Array.isArray(object?.itemOutputIDs) ? object.itemOutputIDs.map((e: any) => String(e)) : [],
      itemModifyOutputIDs: Array.isArray(object?.itemModifyOutputIDs) ? object.itemModifyOutputIDs.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Execution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    message.recipeID !== undefined && (obj.recipeID = message.recipeID);
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.recipeVersion !== undefined && (obj.recipeVersion = message.recipeVersion);
    message.nodeVersion !== undefined && (obj.nodeVersion = (message.nodeVersion || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemRecord.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.itemOutputIDs) {
      obj.itemOutputIDs = message.itemOutputIDs.map(e => e);
    } else {
      obj.itemOutputIDs = [];
    }

    if (message.itemModifyOutputIDs) {
      obj.itemModifyOutputIDs = message.itemModifyOutputIDs.map(e => e);
    } else {
      obj.itemModifyOutputIDs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Execution>, I>>(object: I): Execution {
    const message = createBaseExecution();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.recipeID = object.recipeID ?? "";
    message.cookbookID = object.cookbookID ?? "";
    message.recipeVersion = object.recipeVersion ?? "";
    message.nodeVersion = object.nodeVersion !== undefined && object.nodeVersion !== null ? Long.fromValue(object.nodeVersion) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.itemInputs = object.itemInputs?.map(e => ItemRecord.fromPartial(e)) || [];
    message.coinInputs = object.coinInputs?.map(e => Coin.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.itemOutputIDs = object.itemOutputIDs?.map(e => e) || [];
    message.itemModifyOutputIDs = object.itemModifyOutputIDs?.map(e => e) || [];
    return message;
  }

};