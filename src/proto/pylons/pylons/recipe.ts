import { Coin } from "../../cosmos/base/v1beta1/coin";
import { StringKeyValue } from "./item";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";

/** DoubleInputParam describes the bounds on an item input/output parameter of type float64 */
export interface DoubleInputParam {
  key: string;

  /** The minimum legal value of this parameter. */
  minValue: string;

  /** The maximum legal value of this parameter. */
  maxValue: string;
}

/** LongInputParam describes the bounds on an item input/output parameter of type int64 */
export interface LongInputParam {
  key: string;

  /** The minimum legal value of this parameter. */
  minValue: Long;

  /** The maximum legal value of this parameter. */
  maxValue: Long;
}

/** StringInputParam describes the bounds on an item input/output parameter of type string */
export interface StringInputParam {
  key: string;

  /** The value of the parameter */
  value: string;
}

/** ItemInput is a struct for describing an input item */
export interface ItemInput {
  ID: string;
  doubles: DoubleInputParam[];
  longs: LongInputParam[];
  strings: StringInputParam[];
}

/** DoubleWeightRange describes weight range that produce double value */
export interface DoubleWeightRange {
  lower: string;
  upper: string;
  weight: Long;
}

/** DoubleParam describes the bounds on an item input/output parameter of type float64 */
export interface DoubleParam {
  key: string;
  weightRanges: DoubleWeightRange[];

  /** When program is not empty, weightRanges is ignored */
  program: string;
}

/** IntWeightRange describes weight range that produce int value */
export interface IntWeightRange {
  lower: Long;
  upper: Long;
  weight: Long;
}

/** LongParam describes the bounds on an item input/output parameter of type int64 */
export interface LongParam {
  key: string;
  weightRanges: IntWeightRange[];

  /** When program is not empty, weightRanges is ignored */
  program: string;
}

/** StringParam describes an item input/output parameter of type string */
export interface StringParam {
  key: string;
  value: string;

  /** When program is not empty, value is ignored */
  program: string;
}

/** CoinOutput models the continuum of valid outcomes for coin generation in recipes */
export interface CoinOutput {
  ID: string;
  coin: Coin;
  program: string;
}

/** ItemOutput models the continuum of valid outcomes for item generation in recipes */
export interface ItemOutput {
  ID: string;
  doubles: DoubleParam[];
  longs: LongParam[];
  strings: StringParam[];

  /** defines a list of mutable strings whose value can be customized by the user */
  mutableStrings: StringKeyValue[];
  transferFee: Coin[];

  /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
  tradePercentage: string;

  /** quantity defines the maximum amount of these items that can be created. A 0 value indicates an infinite supply */
  quantity: Long;
  amountMinted: Long;
  tradeable: boolean;
}

/** ItemModifyOutput describes what is modified from item input */
export interface ItemModifyOutput {
  ID: string;
  itemInputRef: string;
  doubles: DoubleParam[];
  longs: LongParam[];
  strings: StringParam[];

  /** defines a list of mutable strings whose value can be customized by the user */
  mutableStrings: StringKeyValue[];
  transferFee: Coin[];

  /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
  tradePercentage: string;

  /** quantity defines the maximum amount of these items that can be created. A 0 value indicates an infinite supply */
  quantity: Long;
  amountMinted: Long;
  tradeable: boolean;
}

/** EntriesList is a struct to keep list of items and coins */
export interface EntriesList {
  coinOutputs: CoinOutput[];
  itemOutputs: ItemOutput[];
  itemModifyOutputs: ItemModifyOutput[];
}

/** WeightedOutputs is to make structs which is using weight to be based on */
export interface WeightedOutputs {
  entryIDs: string[];
  weight: Long;
}
export interface CoinInput {
  coins: Coin[];
}
export interface Recipe {
  cookbookID: string;
  ID: string;
  nodeVersion: Long;
  name: string;
  description: string;
  version: string;
  coinInputs: CoinInput[];
  itemInputs: ItemInput[];
  entries: EntriesList;
  outputs: WeightedOutputs[];
  blockInterval: Long;
  costPerBlock: Coin;
  enabled: boolean;
  extraInfo: string;
}

function createBaseDoubleInputParam(): DoubleInputParam {
  return {
    key: "",
    minValue: "",
    maxValue: ""
  };
}

export const DoubleInputParam = {
  encode(message: DoubleInputParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.minValue !== "") {
      writer.uint32(18).string(message.minValue);
    }

    if (message.maxValue !== "") {
      writer.uint32(26).string(message.maxValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleInputParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleInputParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.minValue = reader.string();
          break;

        case 3:
          message.maxValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DoubleInputParam {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      minValue: isSet(object.minValue) ? String(object.minValue) : "",
      maxValue: isSet(object.maxValue) ? String(object.maxValue) : ""
    };
  },

  toJSON(message: DoubleInputParam): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.minValue !== undefined && (obj.minValue = message.minValue);
    message.maxValue !== undefined && (obj.maxValue = message.maxValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleInputParam>, I>>(object: I): DoubleInputParam {
    const message = createBaseDoubleInputParam();
    message.key = object.key ?? "";
    message.minValue = object.minValue ?? "";
    message.maxValue = object.maxValue ?? "";
    return message;
  }

};

function createBaseLongInputParam(): LongInputParam {
  return {
    key: "",
    minValue: Long.ZERO,
    maxValue: Long.ZERO
  };
}

export const LongInputParam = {
  encode(message: LongInputParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.minValue.isZero()) {
      writer.uint32(16).int64(message.minValue);
    }

    if (!message.maxValue.isZero()) {
      writer.uint32(24).int64(message.maxValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LongInputParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongInputParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.minValue = (reader.int64() as Long);
          break;

        case 3:
          message.maxValue = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LongInputParam {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      minValue: isSet(object.minValue) ? Long.fromString(object.minValue) : Long.ZERO,
      maxValue: isSet(object.maxValue) ? Long.fromString(object.maxValue) : Long.ZERO
    };
  },

  toJSON(message: LongInputParam): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.minValue !== undefined && (obj.minValue = (message.minValue || Long.ZERO).toString());
    message.maxValue !== undefined && (obj.maxValue = (message.maxValue || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LongInputParam>, I>>(object: I): LongInputParam {
    const message = createBaseLongInputParam();
    message.key = object.key ?? "";
    message.minValue = object.minValue !== undefined && object.minValue !== null ? Long.fromValue(object.minValue) : Long.ZERO;
    message.maxValue = object.maxValue !== undefined && object.maxValue !== null ? Long.fromValue(object.maxValue) : Long.ZERO;
    return message;
  }

};

function createBaseStringInputParam(): StringInputParam {
  return {
    key: "",
    value: ""
  };
}

export const StringInputParam = {
  encode(message: StringInputParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringInputParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringInputParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringInputParam {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: StringInputParam): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringInputParam>, I>>(object: I): StringInputParam {
    const message = createBaseStringInputParam();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseItemInput(): ItemInput {
  return {
    ID: "",
    doubles: [],
    longs: [],
    strings: []
  };
}

export const ItemInput = {
  encode(message: ItemInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    for (const v of message.doubles) {
      DoubleInputParam.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongInputParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringInputParam.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.doubles.push(DoubleInputParam.decode(reader, reader.uint32()));
          break;

        case 3:
          message.longs.push(LongInputParam.decode(reader, reader.uint32()));
          break;

        case 4:
          message.strings.push(StringInputParam.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemInput {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleInputParam.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongInputParam.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringInputParam.fromJSON(e)) : []
    };
  },

  toJSON(message: ItemInput): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);

    if (message.doubles) {
      obj.doubles = message.doubles.map(e => e ? DoubleInputParam.toJSON(e) : undefined);
    } else {
      obj.doubles = [];
    }

    if (message.longs) {
      obj.longs = message.longs.map(e => e ? LongInputParam.toJSON(e) : undefined);
    } else {
      obj.longs = [];
    }

    if (message.strings) {
      obj.strings = message.strings.map(e => e ? StringInputParam.toJSON(e) : undefined);
    } else {
      obj.strings = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ItemInput>, I>>(object: I): ItemInput {
    const message = createBaseItemInput();
    message.ID = object.ID ?? "";
    message.doubles = object.doubles?.map(e => DoubleInputParam.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongInputParam.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringInputParam.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDoubleWeightRange(): DoubleWeightRange {
  return {
    lower: "",
    upper: "",
    weight: Long.UZERO
  };
}

export const DoubleWeightRange = {
  encode(message: DoubleWeightRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lower !== "") {
      writer.uint32(10).string(message.lower);
    }

    if (message.upper !== "") {
      writer.uint32(18).string(message.upper);
    }

    if (!message.weight.isZero()) {
      writer.uint32(24).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleWeightRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleWeightRange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lower = reader.string();
          break;

        case 2:
          message.upper = reader.string();
          break;

        case 3:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DoubleWeightRange {
    return {
      lower: isSet(object.lower) ? String(object.lower) : "",
      upper: isSet(object.upper) ? String(object.upper) : "",
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: DoubleWeightRange): unknown {
    const obj: any = {};
    message.lower !== undefined && (obj.lower = message.lower);
    message.upper !== undefined && (obj.upper = message.upper);
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleWeightRange>, I>>(object: I): DoubleWeightRange {
    const message = createBaseDoubleWeightRange();
    message.lower = object.lower ?? "";
    message.upper = object.upper ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseDoubleParam(): DoubleParam {
  return {
    key: "",
    weightRanges: [],
    program: ""
  };
}

export const DoubleParam = {
  encode(message: DoubleParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    for (const v of message.weightRanges) {
      DoubleWeightRange.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.program !== "") {
      writer.uint32(26).string(message.program);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.weightRanges.push(DoubleWeightRange.decode(reader, reader.uint32()));
          break;

        case 3:
          message.program = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DoubleParam {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      weightRanges: Array.isArray(object?.weightRanges) ? object.weightRanges.map((e: any) => DoubleWeightRange.fromJSON(e)) : [],
      program: isSet(object.program) ? String(object.program) : ""
    };
  },

  toJSON(message: DoubleParam): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);

    if (message.weightRanges) {
      obj.weightRanges = message.weightRanges.map(e => e ? DoubleWeightRange.toJSON(e) : undefined);
    } else {
      obj.weightRanges = [];
    }

    message.program !== undefined && (obj.program = message.program);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DoubleParam>, I>>(object: I): DoubleParam {
    const message = createBaseDoubleParam();
    message.key = object.key ?? "";
    message.weightRanges = object.weightRanges?.map(e => DoubleWeightRange.fromPartial(e)) || [];
    message.program = object.program ?? "";
    return message;
  }

};

function createBaseIntWeightRange(): IntWeightRange {
  return {
    lower: Long.ZERO,
    upper: Long.ZERO,
    weight: Long.UZERO
  };
}

export const IntWeightRange = {
  encode(message: IntWeightRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lower.isZero()) {
      writer.uint32(8).int64(message.lower);
    }

    if (!message.upper.isZero()) {
      writer.uint32(16).int64(message.upper);
    }

    if (!message.weight.isZero()) {
      writer.uint32(24).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntWeightRange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntWeightRange();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lower = (reader.int64() as Long);
          break;

        case 2:
          message.upper = (reader.int64() as Long);
          break;

        case 3:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IntWeightRange {
    return {
      lower: isSet(object.lower) ? Long.fromString(object.lower) : Long.ZERO,
      upper: isSet(object.upper) ? Long.fromString(object.upper) : Long.ZERO,
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: IntWeightRange): unknown {
    const obj: any = {};
    message.lower !== undefined && (obj.lower = (message.lower || Long.ZERO).toString());
    message.upper !== undefined && (obj.upper = (message.upper || Long.ZERO).toString());
    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IntWeightRange>, I>>(object: I): IntWeightRange {
    const message = createBaseIntWeightRange();
    message.lower = object.lower !== undefined && object.lower !== null ? Long.fromValue(object.lower) : Long.ZERO;
    message.upper = object.upper !== undefined && object.upper !== null ? Long.fromValue(object.upper) : Long.ZERO;
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseLongParam(): LongParam {
  return {
    key: "",
    weightRanges: [],
    program: ""
  };
}

export const LongParam = {
  encode(message: LongParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    for (const v of message.weightRanges) {
      IntWeightRange.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.program !== "") {
      writer.uint32(26).string(message.program);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LongParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.weightRanges.push(IntWeightRange.decode(reader, reader.uint32()));
          break;

        case 3:
          message.program = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LongParam {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      weightRanges: Array.isArray(object?.weightRanges) ? object.weightRanges.map((e: any) => IntWeightRange.fromJSON(e)) : [],
      program: isSet(object.program) ? String(object.program) : ""
    };
  },

  toJSON(message: LongParam): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);

    if (message.weightRanges) {
      obj.weightRanges = message.weightRanges.map(e => e ? IntWeightRange.toJSON(e) : undefined);
    } else {
      obj.weightRanges = [];
    }

    message.program !== undefined && (obj.program = message.program);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LongParam>, I>>(object: I): LongParam {
    const message = createBaseLongParam();
    message.key = object.key ?? "";
    message.weightRanges = object.weightRanges?.map(e => IntWeightRange.fromPartial(e)) || [];
    message.program = object.program ?? "";
    return message;
  }

};

function createBaseStringParam(): StringParam {
  return {
    key: "",
    value: "",
    program: ""
  };
}

export const StringParam = {
  encode(message: StringParam, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    if (message.program !== "") {
      writer.uint32(26).string(message.program);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringParam {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringParam();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        case 3:
          message.program = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringParam {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
      program: isSet(object.program) ? String(object.program) : ""
    };
  },

  toJSON(message: StringParam): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    message.program !== undefined && (obj.program = message.program);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StringParam>, I>>(object: I): StringParam {
    const message = createBaseStringParam();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    message.program = object.program ?? "";
    return message;
  }

};

function createBaseCoinOutput(): CoinOutput {
  return {
    ID: "",
    coin: undefined,
    program: ""
  };
}

export const CoinOutput = {
  encode(message: CoinOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }

    if (message.program !== "") {
      writer.uint32(26).string(message.program);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinOutput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.program = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CoinOutput {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      program: isSet(object.program) ? String(object.program) : ""
    };
  },

  toJSON(message: CoinOutput): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.program !== undefined && (obj.program = message.program);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoinOutput>, I>>(object: I): CoinOutput {
    const message = createBaseCoinOutput();
    message.ID = object.ID ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.program = object.program ?? "";
    return message;
  }

};

function createBaseItemOutput(): ItemOutput {
  return {
    ID: "",
    doubles: [],
    longs: [],
    strings: [],
    mutableStrings: [],
    transferFee: [],
    tradePercentage: "",
    quantity: Long.UZERO,
    amountMinted: Long.UZERO,
    tradeable: false
  };
}

export const ItemOutput = {
  encode(message: ItemOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    for (const v of message.doubles) {
      DoubleParam.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringParam.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.mutableStrings) {
      StringKeyValue.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.transferFee) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.tradePercentage !== "") {
      writer.uint32(58).string(message.tradePercentage);
    }

    if (!message.quantity.isZero()) {
      writer.uint32(64).uint64(message.quantity);
    }

    if (!message.amountMinted.isZero()) {
      writer.uint32(72).uint64(message.amountMinted);
    }

    if (message.tradeable === true) {
      writer.uint32(80).bool(message.tradeable);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemOutput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.doubles.push(DoubleParam.decode(reader, reader.uint32()));
          break;

        case 3:
          message.longs.push(LongParam.decode(reader, reader.uint32()));
          break;

        case 4:
          message.strings.push(StringParam.decode(reader, reader.uint32()));
          break;

        case 5:
          message.mutableStrings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        case 6:
          message.transferFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.tradePercentage = reader.string();
          break;

        case 8:
          message.quantity = (reader.uint64() as Long);
          break;

        case 9:
          message.amountMinted = (reader.uint64() as Long);
          break;

        case 10:
          message.tradeable = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemOutput {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleParam.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongParam.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringParam.fromJSON(e)) : [],
      mutableStrings: Array.isArray(object?.mutableStrings) ? object.mutableStrings.map((e: any) => StringKeyValue.fromJSON(e)) : [],
      transferFee: Array.isArray(object?.transferFee) ? object.transferFee.map((e: any) => Coin.fromJSON(e)) : [],
      tradePercentage: isSet(object.tradePercentage) ? String(object.tradePercentage) : "",
      quantity: isSet(object.quantity) ? Long.fromString(object.quantity) : Long.UZERO,
      amountMinted: isSet(object.amountMinted) ? Long.fromString(object.amountMinted) : Long.UZERO,
      tradeable: isSet(object.tradeable) ? Boolean(object.tradeable) : false
    };
  },

  toJSON(message: ItemOutput): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);

    if (message.doubles) {
      obj.doubles = message.doubles.map(e => e ? DoubleParam.toJSON(e) : undefined);
    } else {
      obj.doubles = [];
    }

    if (message.longs) {
      obj.longs = message.longs.map(e => e ? LongParam.toJSON(e) : undefined);
    } else {
      obj.longs = [];
    }

    if (message.strings) {
      obj.strings = message.strings.map(e => e ? StringParam.toJSON(e) : undefined);
    } else {
      obj.strings = [];
    }

    if (message.mutableStrings) {
      obj.mutableStrings = message.mutableStrings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.mutableStrings = [];
    }

    if (message.transferFee) {
      obj.transferFee = message.transferFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.transferFee = [];
    }

    message.tradePercentage !== undefined && (obj.tradePercentage = message.tradePercentage);
    message.quantity !== undefined && (obj.quantity = (message.quantity || Long.UZERO).toString());
    message.amountMinted !== undefined && (obj.amountMinted = (message.amountMinted || Long.UZERO).toString());
    message.tradeable !== undefined && (obj.tradeable = message.tradeable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ItemOutput>, I>>(object: I): ItemOutput {
    const message = createBaseItemOutput();
    message.ID = object.ID ?? "";
    message.doubles = object.doubles?.map(e => DoubleParam.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongParam.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringParam.fromPartial(e)) || [];
    message.mutableStrings = object.mutableStrings?.map(e => StringKeyValue.fromPartial(e)) || [];
    message.transferFee = object.transferFee?.map(e => Coin.fromPartial(e)) || [];
    message.tradePercentage = object.tradePercentage ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? Long.fromValue(object.quantity) : Long.UZERO;
    message.amountMinted = object.amountMinted !== undefined && object.amountMinted !== null ? Long.fromValue(object.amountMinted) : Long.UZERO;
    message.tradeable = object.tradeable ?? false;
    return message;
  }

};

function createBaseItemModifyOutput(): ItemModifyOutput {
  return {
    ID: "",
    itemInputRef: "",
    doubles: [],
    longs: [],
    strings: [],
    mutableStrings: [],
    transferFee: [],
    tradePercentage: "",
    quantity: Long.UZERO,
    amountMinted: Long.UZERO,
    tradeable: false
  };
}

export const ItemModifyOutput = {
  encode(message: ItemModifyOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    if (message.itemInputRef !== "") {
      writer.uint32(18).string(message.itemInputRef);
    }

    for (const v of message.doubles) {
      DoubleParam.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongParam.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringParam.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.mutableStrings) {
      StringKeyValue.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.transferFee) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.tradePercentage !== "") {
      writer.uint32(66).string(message.tradePercentage);
    }

    if (!message.quantity.isZero()) {
      writer.uint32(72).uint64(message.quantity);
    }

    if (!message.amountMinted.isZero()) {
      writer.uint32(80).uint64(message.amountMinted);
    }

    if (message.tradeable === true) {
      writer.uint32(88).bool(message.tradeable);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemModifyOutput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemModifyOutput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        case 2:
          message.itemInputRef = reader.string();
          break;

        case 3:
          message.doubles.push(DoubleParam.decode(reader, reader.uint32()));
          break;

        case 4:
          message.longs.push(LongParam.decode(reader, reader.uint32()));
          break;

        case 5:
          message.strings.push(StringParam.decode(reader, reader.uint32()));
          break;

        case 6:
          message.mutableStrings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        case 7:
          message.transferFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.tradePercentage = reader.string();
          break;

        case 9:
          message.quantity = (reader.uint64() as Long);
          break;

        case 10:
          message.amountMinted = (reader.uint64() as Long);
          break;

        case 11:
          message.tradeable = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemModifyOutput {
    return {
      ID: isSet(object.ID) ? String(object.ID) : "",
      itemInputRef: isSet(object.itemInputRef) ? String(object.itemInputRef) : "",
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleParam.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongParam.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringParam.fromJSON(e)) : [],
      mutableStrings: Array.isArray(object?.mutableStrings) ? object.mutableStrings.map((e: any) => StringKeyValue.fromJSON(e)) : [],
      transferFee: Array.isArray(object?.transferFee) ? object.transferFee.map((e: any) => Coin.fromJSON(e)) : [],
      tradePercentage: isSet(object.tradePercentage) ? String(object.tradePercentage) : "",
      quantity: isSet(object.quantity) ? Long.fromString(object.quantity) : Long.UZERO,
      amountMinted: isSet(object.amountMinted) ? Long.fromString(object.amountMinted) : Long.UZERO,
      tradeable: isSet(object.tradeable) ? Boolean(object.tradeable) : false
    };
  },

  toJSON(message: ItemModifyOutput): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    message.itemInputRef !== undefined && (obj.itemInputRef = message.itemInputRef);

    if (message.doubles) {
      obj.doubles = message.doubles.map(e => e ? DoubleParam.toJSON(e) : undefined);
    } else {
      obj.doubles = [];
    }

    if (message.longs) {
      obj.longs = message.longs.map(e => e ? LongParam.toJSON(e) : undefined);
    } else {
      obj.longs = [];
    }

    if (message.strings) {
      obj.strings = message.strings.map(e => e ? StringParam.toJSON(e) : undefined);
    } else {
      obj.strings = [];
    }

    if (message.mutableStrings) {
      obj.mutableStrings = message.mutableStrings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.mutableStrings = [];
    }

    if (message.transferFee) {
      obj.transferFee = message.transferFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.transferFee = [];
    }

    message.tradePercentage !== undefined && (obj.tradePercentage = message.tradePercentage);
    message.quantity !== undefined && (obj.quantity = (message.quantity || Long.UZERO).toString());
    message.amountMinted !== undefined && (obj.amountMinted = (message.amountMinted || Long.UZERO).toString());
    message.tradeable !== undefined && (obj.tradeable = message.tradeable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ItemModifyOutput>, I>>(object: I): ItemModifyOutput {
    const message = createBaseItemModifyOutput();
    message.ID = object.ID ?? "";
    message.itemInputRef = object.itemInputRef ?? "";
    message.doubles = object.doubles?.map(e => DoubleParam.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongParam.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringParam.fromPartial(e)) || [];
    message.mutableStrings = object.mutableStrings?.map(e => StringKeyValue.fromPartial(e)) || [];
    message.transferFee = object.transferFee?.map(e => Coin.fromPartial(e)) || [];
    message.tradePercentage = object.tradePercentage ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? Long.fromValue(object.quantity) : Long.UZERO;
    message.amountMinted = object.amountMinted !== undefined && object.amountMinted !== null ? Long.fromValue(object.amountMinted) : Long.UZERO;
    message.tradeable = object.tradeable ?? false;
    return message;
  }

};

function createBaseEntriesList(): EntriesList {
  return {
    coinOutputs: [],
    itemOutputs: [],
    itemModifyOutputs: []
  };
}

export const EntriesList = {
  encode(message: EntriesList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coinOutputs) {
      CoinOutput.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.itemOutputs) {
      ItemOutput.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.itemModifyOutputs) {
      ItemModifyOutput.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntriesList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntriesList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coinOutputs.push(CoinOutput.decode(reader, reader.uint32()));
          break;

        case 2:
          message.itemOutputs.push(ItemOutput.decode(reader, reader.uint32()));
          break;

        case 3:
          message.itemModifyOutputs.push(ItemModifyOutput.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EntriesList {
    return {
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => CoinOutput.fromJSON(e)) : [],
      itemOutputs: Array.isArray(object?.itemOutputs) ? object.itemOutputs.map((e: any) => ItemOutput.fromJSON(e)) : [],
      itemModifyOutputs: Array.isArray(object?.itemModifyOutputs) ? object.itemModifyOutputs.map((e: any) => ItemModifyOutput.fromJSON(e)) : []
    };
  },

  toJSON(message: EntriesList): unknown {
    const obj: any = {};

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? CoinOutput.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.itemOutputs) {
      obj.itemOutputs = message.itemOutputs.map(e => e ? ItemOutput.toJSON(e) : undefined);
    } else {
      obj.itemOutputs = [];
    }

    if (message.itemModifyOutputs) {
      obj.itemModifyOutputs = message.itemModifyOutputs.map(e => e ? ItemModifyOutput.toJSON(e) : undefined);
    } else {
      obj.itemModifyOutputs = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntriesList>, I>>(object: I): EntriesList {
    const message = createBaseEntriesList();
    message.coinOutputs = object.coinOutputs?.map(e => CoinOutput.fromPartial(e)) || [];
    message.itemOutputs = object.itemOutputs?.map(e => ItemOutput.fromPartial(e)) || [];
    message.itemModifyOutputs = object.itemModifyOutputs?.map(e => ItemModifyOutput.fromPartial(e)) || [];
    return message;
  }

};

function createBaseWeightedOutputs(): WeightedOutputs {
  return {
    entryIDs: [],
    weight: Long.UZERO
  };
}

export const WeightedOutputs = {
  encode(message: WeightedOutputs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entryIDs) {
      writer.uint32(10).string(v!);
    }

    if (!message.weight.isZero()) {
      writer.uint32(16).uint64(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WeightedOutputs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedOutputs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entryIDs.push(reader.string());
          break;

        case 2:
          message.weight = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WeightedOutputs {
    return {
      entryIDs: Array.isArray(object?.entryIDs) ? object.entryIDs.map((e: any) => String(e)) : [],
      weight: isSet(object.weight) ? Long.fromString(object.weight) : Long.UZERO
    };
  },

  toJSON(message: WeightedOutputs): unknown {
    const obj: any = {};

    if (message.entryIDs) {
      obj.entryIDs = message.entryIDs.map(e => e);
    } else {
      obj.entryIDs = [];
    }

    message.weight !== undefined && (obj.weight = (message.weight || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeightedOutputs>, I>>(object: I): WeightedOutputs {
    const message = createBaseWeightedOutputs();
    message.entryIDs = object.entryIDs?.map(e => e) || [];
    message.weight = object.weight !== undefined && object.weight !== null ? Long.fromValue(object.weight) : Long.UZERO;
    return message;
  }

};

function createBaseCoinInput(): CoinInput {
  return {
    coins: []
  };
}

export const CoinInput = {
  encode(message: CoinInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinInput {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinInput();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CoinInput {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: CoinInput): unknown {
    const obj: any = {};

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoinInput>, I>>(object: I): CoinInput {
    const message = createBaseCoinInput();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRecipe(): Recipe {
  return {
    cookbookID: "",
    ID: "",
    nodeVersion: Long.UZERO,
    name: "",
    description: "",
    version: "",
    coinInputs: [],
    itemInputs: [],
    entries: undefined,
    outputs: [],
    blockInterval: Long.ZERO,
    costPerBlock: undefined,
    enabled: false,
    extraInfo: ""
  };
}

export const Recipe = {
  encode(message: Recipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookID !== "") {
      writer.uint32(10).string(message.cookbookID);
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

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    for (const v of message.coinInputs) {
      CoinInput.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.itemInputs) {
      ItemInput.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.entries !== undefined) {
      EntriesList.encode(message.entries, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.outputs) {
      WeightedOutputs.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    if (!message.blockInterval.isZero()) {
      writer.uint32(88).int64(message.blockInterval);
    }

    if (message.costPerBlock !== undefined) {
      Coin.encode(message.costPerBlock, writer.uint32(98).fork()).ldelim();
    }

    if (message.enabled === true) {
      writer.uint32(104).bool(message.enabled);
    }

    if (message.extraInfo !== "") {
      writer.uint32(114).string(message.extraInfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Recipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookID = reader.string();
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
          message.version = reader.string();
          break;

        case 7:
          message.coinInputs.push(CoinInput.decode(reader, reader.uint32()));
          break;

        case 8:
          message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
          break;

        case 9:
          message.entries = EntriesList.decode(reader, reader.uint32());
          break;

        case 10:
          message.outputs.push(WeightedOutputs.decode(reader, reader.uint32()));
          break;

        case 11:
          message.blockInterval = (reader.int64() as Long);
          break;

        case 12:
          message.costPerBlock = Coin.decode(reader, reader.uint32());
          break;

        case 13:
          message.enabled = reader.bool();
          break;

        case 14:
          message.extraInfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Recipe {
    return {
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      nodeVersion: isSet(object.nodeVersion) ? Long.fromString(object.nodeVersion) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      version: isSet(object.version) ? String(object.version) : "",
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => CoinInput.fromJSON(e)) : [],
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemInput.fromJSON(e)) : [],
      entries: isSet(object.entries) ? EntriesList.fromJSON(object.entries) : undefined,
      outputs: Array.isArray(object?.outputs) ? object.outputs.map((e: any) => WeightedOutputs.fromJSON(e)) : [],
      blockInterval: isSet(object.blockInterval) ? Long.fromString(object.blockInterval) : Long.ZERO,
      costPerBlock: isSet(object.costPerBlock) ? Coin.fromJSON(object.costPerBlock) : undefined,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : ""
    };
  },

  toJSON(message: Recipe): unknown {
    const obj: any = {};
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
    message.nodeVersion !== undefined && (obj.nodeVersion = (message.nodeVersion || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.version !== undefined && (obj.version = message.version);

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? CoinInput.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemInput.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    message.entries !== undefined && (obj.entries = message.entries ? EntriesList.toJSON(message.entries) : undefined);

    if (message.outputs) {
      obj.outputs = message.outputs.map(e => e ? WeightedOutputs.toJSON(e) : undefined);
    } else {
      obj.outputs = [];
    }

    message.blockInterval !== undefined && (obj.blockInterval = (message.blockInterval || Long.ZERO).toString());
    message.costPerBlock !== undefined && (obj.costPerBlock = message.costPerBlock ? Coin.toJSON(message.costPerBlock) : undefined);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Recipe>, I>>(object: I): Recipe {
    const message = createBaseRecipe();
    message.cookbookID = object.cookbookID ?? "";
    message.ID = object.ID ?? "";
    message.nodeVersion = object.nodeVersion !== undefined && object.nodeVersion !== null ? Long.fromValue(object.nodeVersion) : Long.UZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.version = object.version ?? "";
    message.coinInputs = object.coinInputs?.map(e => CoinInput.fromPartial(e)) || [];
    message.itemInputs = object.itemInputs?.map(e => ItemInput.fromPartial(e)) || [];
    message.entries = object.entries !== undefined && object.entries !== null ? EntriesList.fromPartial(object.entries) : undefined;
    message.outputs = object.outputs?.map(e => WeightedOutputs.fromPartial(e)) || [];
    message.blockInterval = object.blockInterval !== undefined && object.blockInterval !== null ? Long.fromValue(object.blockInterval) : Long.ZERO;
    message.costPerBlock = object.costPerBlock !== undefined && object.costPerBlock !== null ? Coin.fromPartial(object.costPerBlock) : undefined;
    message.enabled = object.enabled ?? false;
    message.extraInfo = object.extraInfo ?? "";
    return message;
  }

};