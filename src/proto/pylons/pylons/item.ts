import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";

/** DoubleKeyValue describes double key/value set */
export interface DoubleKeyValue {
  Key: string;
  Value: string;
}

/** LongKeyValue describes long key/value set */
export interface LongKeyValue {
  Key: string;
  Value: Long;
}

/** StringKeyValue describes string key/value set */
export interface StringKeyValue {
  Key: string;
  Value: string;
}
export interface Item {
  owner: string;
  cookbookID: string;
  ID: string;
  nodeVersion: Long;
  doubles: DoubleKeyValue[];
  longs: LongKeyValue[];
  strings: StringKeyValue[];
  mutableStrings: StringKeyValue[];
  tradeable: boolean;
  lastUpdate: Long;
  transferFee: Coin[];

  /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
  tradePercentage: string;
}

function createBaseDoubleKeyValue(): DoubleKeyValue {
  return {
    Key: "",
    Value: ""
  };
}

export const DoubleKeyValue = {
  encode(message: DoubleKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key !== "") {
      writer.uint32(10).string(message.Key);
    }

    if (message.Value !== "") {
      writer.uint32(18).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleKeyValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleKeyValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Key = reader.string();
          break;

        case 2:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DoubleKeyValue {
    return {
      Key: isSet(object.Key) ? String(object.Key) : "",
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: DoubleKeyValue): unknown {
    const obj: any = {};
    message.Key !== undefined && (obj.Key = message.Key);
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleKeyValue>, I>>(object: I): DoubleKeyValue {
    const message = createBaseDoubleKeyValue();
    message.Key = object.Key ?? "";
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseLongKeyValue(): LongKeyValue {
  return {
    Key: "",
    Value: Long.ZERO
  };
}

export const LongKeyValue = {
  encode(message: LongKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key !== "") {
      writer.uint32(10).string(message.Key);
    }

    if (!message.Value.isZero()) {
      writer.uint32(16).int64(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LongKeyValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongKeyValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Key = reader.string();
          break;

        case 2:
          message.Value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LongKeyValue {
    return {
      Key: isSet(object.Key) ? String(object.Key) : "",
      Value: isSet(object.Value) ? Long.fromString(object.Value) : Long.ZERO
    };
  },

  toJSON(message: LongKeyValue): unknown {
    const obj: any = {};
    message.Key !== undefined && (obj.Key = message.Key);
    message.Value !== undefined && (obj.Value = (message.Value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LongKeyValue>, I>>(object: I): LongKeyValue {
    const message = createBaseLongKeyValue();
    message.Key = object.Key ?? "";
    message.Value = object.Value !== undefined && object.Value !== null ? Long.fromValue(object.Value) : Long.ZERO;
    return message;
  }

};

function createBaseStringKeyValue(): StringKeyValue {
  return {
    Key: "",
    Value: ""
  };
}

export const StringKeyValue = {
  encode(message: StringKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Key !== "") {
      writer.uint32(10).string(message.Key);
    }

    if (message.Value !== "") {
      writer.uint32(18).string(message.Value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringKeyValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringKeyValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Key = reader.string();
          break;

        case 2:
          message.Value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringKeyValue {
    return {
      Key: isSet(object.Key) ? String(object.Key) : "",
      Value: isSet(object.Value) ? String(object.Value) : ""
    };
  },

  toJSON(message: StringKeyValue): unknown {
    const obj: any = {};
    message.Key !== undefined && (obj.Key = message.Key);
    message.Value !== undefined && (obj.Value = message.Value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringKeyValue>, I>>(object: I): StringKeyValue {
    const message = createBaseStringKeyValue();
    message.Key = object.Key ?? "";
    message.Value = object.Value ?? "";
    return message;
  }

};

function createBaseItem(): Item {
  return {
    owner: "",
    cookbookID: "",
    ID: "",
    nodeVersion: Long.UZERO,
    doubles: [],
    longs: [],
    strings: [],
    mutableStrings: [],
    tradeable: false,
    lastUpdate: Long.ZERO,
    transferFee: [],
    tradePercentage: ""
  };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.cookbookID !== "") {
      writer.uint32(18).string(message.cookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
    }

    if (!message.nodeVersion.isZero()) {
      writer.uint32(32).uint64(message.nodeVersion);
    }

    for (const v of message.doubles) {
      DoubleKeyValue.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongKeyValue.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringKeyValue.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.mutableStrings) {
      StringKeyValue.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.tradeable === true) {
      writer.uint32(72).bool(message.tradeable);
    }

    if (!message.lastUpdate.isZero()) {
      writer.uint32(80).int64(message.lastUpdate);
    }

    for (const v of message.transferFee) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    if (message.tradePercentage !== "") {
      writer.uint32(98).string(message.tradePercentage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.cookbookID = reader.string();
          break;

        case 3:
          message.ID = reader.string();
          break;

        case 4:
          message.nodeVersion = (reader.uint64() as Long);
          break;

        case 5:
          message.doubles.push(DoubleKeyValue.decode(reader, reader.uint32()));
          break;

        case 6:
          message.longs.push(LongKeyValue.decode(reader, reader.uint32()));
          break;

        case 7:
          message.strings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        case 8:
          message.mutableStrings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        case 9:
          message.tradeable = reader.bool();
          break;

        case 10:
          message.lastUpdate = (reader.int64() as Long);
          break;

        case 11:
          message.transferFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 12:
          message.tradePercentage = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Item {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      nodeVersion: isSet(object.nodeVersion) ? Long.fromString(object.nodeVersion) : Long.UZERO,
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleKeyValue.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongKeyValue.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringKeyValue.fromJSON(e)) : [],
      mutableStrings: Array.isArray(object?.mutableStrings) ? object.mutableStrings.map((e: any) => StringKeyValue.fromJSON(e)) : [],
      tradeable: isSet(object.tradeable) ? Boolean(object.tradeable) : false,
      lastUpdate: isSet(object.lastUpdate) ? Long.fromString(object.lastUpdate) : Long.ZERO,
      transferFee: Array.isArray(object?.transferFee) ? object.transferFee.map((e: any) => Coin.fromJSON(e)) : [],
      tradePercentage: isSet(object.tradePercentage) ? String(object.tradePercentage) : ""
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
    message.nodeVersion !== undefined && (obj.nodeVersion = (message.nodeVersion || Long.UZERO).toString());

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

    if (message.mutableStrings) {
      obj.mutableStrings = message.mutableStrings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.mutableStrings = [];
    }

    message.tradeable !== undefined && (obj.tradeable = message.tradeable);
    message.lastUpdate !== undefined && (obj.lastUpdate = (message.lastUpdate || Long.ZERO).toString());

    if (message.transferFee) {
      obj.transferFee = message.transferFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.transferFee = [];
    }

    message.tradePercentage !== undefined && (obj.tradePercentage = message.tradePercentage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Item>, I>>(object: I): Item {
    const message = createBaseItem();
    message.owner = object.owner ?? "";
    message.cookbookID = object.cookbookID ?? "";
    message.ID = object.ID ?? "";
    message.nodeVersion = object.nodeVersion !== undefined && object.nodeVersion !== null ? Long.fromValue(object.nodeVersion) : Long.UZERO;
    message.doubles = object.doubles?.map(e => DoubleKeyValue.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongKeyValue.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringKeyValue.fromPartial(e)) || [];
    message.mutableStrings = object.mutableStrings?.map(e => StringKeyValue.fromPartial(e)) || [];
    message.tradeable = object.tradeable ?? false;
    message.lastUpdate = object.lastUpdate !== undefined && object.lastUpdate !== null ? Long.fromValue(object.lastUpdate) : Long.ZERO;
    message.transferFee = object.transferFee?.map(e => Coin.fromPartial(e)) || [];
    message.tradePercentage = object.tradePercentage ?? "";
    return message;
  }

};