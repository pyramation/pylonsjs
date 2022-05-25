import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { PaymentInfo } from "./payment_info";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBurnDebtToken {
  creator: string;
  redeemInfo: RedeemInfo;
}
export interface MsgBurnDebtTokenResponse {}
export interface MsgUpdateAccount {
  creator: string;
  username: string;
}
export interface MsgUpdateAccountResponse {}
export interface MsgCreateAccount {
  creator: string;
  username: string;
}
export interface MsgCreateAccountResponse {}
export interface MsgFulfillTrade {
  creator: string;
  ID: Long;
  coinInputsIndex: Long;
  items: ItemRef[];
  paymentInfos: PaymentInfo[];
}
export interface MsgFulfillTradeResponse {}
export interface MsgCreateTrade {
  creator: string;
  coinInputs: CoinInput[];
  itemInputs: ItemInput[];
  coinOutputs: Coin[];
  itemOutputs: ItemRef[];
  extraInfo: string;
}
export interface MsgCreateTradeResponse {
  ID: Long;
}
export interface MsgCancelTrade {
  creator: string;
  ID: Long;
}
export interface MsgCancelTradeResponse {}
export interface MsgCompleteExecutionEarly {
  creator: string;
  ID: string;
}
export interface MsgCompleteExecutionEarlyResponse {
  ID: string;
}
export interface MsgTransferCookbook {
  creator: string;
  ID: string;
  recipient: string;
}
export interface MsgTransferCookbookResponse {}
export interface MsgGoogleInAppPurchaseGetCoins {
  creator: string;
  productID: string;
  purchaseToken: string;
  receiptDataBase64: string;
  signature: string;
}
export interface MsgGoogleInAppPurchaseGetCoinsResponse {}
export interface MsgSendItems {
  creator: string;
  receiver: string;
  items: ItemRef[];
}
export interface MsgSendItemsResponse {}
export interface MsgExecuteRecipe {
  creator: string;
  cookbookID: string;
  recipeID: string;
  coinInputsIndex: Long;
  itemIDs: string[];
  paymentInfos: PaymentInfo[];
}
export interface MsgExecuteRecipeResponse {
  ID: string;
}
export interface MsgSetItemString {
  creator: string;
  cookbookID: string;
  ID: string;
  field: string;
  value: string;
}
export interface MsgSetItemStringResponse {}
export interface MsgCreateRecipe {
  creator: string;
  cookbookID: string;
  ID: string;
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
export interface MsgCreateRecipeResponse {}
export interface MsgUpdateRecipe {
  creator: string;
  cookbookID: string;
  ID: string;
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
export interface MsgUpdateRecipeResponse {}
export interface MsgCreateCookbook {
  creator: string;
  ID: string;
  name: string;
  description: string;
  developer: string;
  version: string;
  supportEmail: string;
  enabled: boolean;
}
export interface MsgCreateCookbookResponse {}
export interface MsgUpdateCookbook {
  creator: string;
  ID: string;
  name: string;
  description: string;
  developer: string;
  version: string;
  supportEmail: string;
  enabled: boolean;
}
export interface MsgUpdateCookbookResponse {}

function createBaseMsgBurnDebtToken(): MsgBurnDebtToken {
  return {
    creator: "",
    redeemInfo: undefined
  };
}

export const MsgBurnDebtToken = {
  encode(message: MsgBurnDebtToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.redeemInfo !== undefined) {
      RedeemInfo.encode(message.redeemInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDebtToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.redeemInfo = RedeemInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBurnDebtToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      redeemInfo: isSet(object.redeemInfo) ? RedeemInfo.fromJSON(object.redeemInfo) : undefined
    };
  },

  toJSON(message: MsgBurnDebtToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.redeemInfo !== undefined && (obj.redeemInfo = message.redeemInfo ? RedeemInfo.toJSON(message.redeemInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnDebtToken>, I>>(object: I): MsgBurnDebtToken {
    const message = createBaseMsgBurnDebtToken();
    message.creator = object.creator ?? "";
    message.redeemInfo = object.redeemInfo !== undefined && object.redeemInfo !== null ? RedeemInfo.fromPartial(object.redeemInfo) : undefined;
    return message;
  }

};

function createBaseMsgBurnDebtTokenResponse(): MsgBurnDebtTokenResponse {
  return {};
}

export const MsgBurnDebtTokenResponse = {
  encode(_: MsgBurnDebtTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnDebtTokenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgBurnDebtTokenResponse {
    return {};
  },

  toJSON(_: MsgBurnDebtTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnDebtTokenResponse>, I>>(_: I): MsgBurnDebtTokenResponse {
    const message = createBaseMsgBurnDebtTokenResponse();
    return message;
  }

};

function createBaseMsgUpdateAccount(): MsgUpdateAccount {
  return {
    creator: "",
    username: ""
  };
}

export const MsgUpdateAccount = {
  encode(message: MsgUpdateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.username = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: MsgUpdateAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAccount>, I>>(object: I): MsgUpdateAccount {
    const message = createBaseMsgUpdateAccount();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseMsgUpdateAccountResponse(): MsgUpdateAccountResponse {
  return {};
}

export const MsgUpdateAccountResponse = {
  encode(_: MsgUpdateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateAccountResponse {
    return {};
  },

  toJSON(_: MsgUpdateAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAccountResponse>, I>>(_: I): MsgUpdateAccountResponse {
    const message = createBaseMsgUpdateAccountResponse();
    return message;
  }

};

function createBaseMsgCreateAccount(): MsgCreateAccount {
  return {
    creator: "",
    username: ""
  };
}

export const MsgCreateAccount = {
  encode(message: MsgCreateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.username = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: MsgCreateAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAccount>, I>>(object: I): MsgCreateAccount {
    const message = createBaseMsgCreateAccount();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseMsgCreateAccountResponse(): MsgCreateAccountResponse {
  return {};
}

export const MsgCreateAccountResponse = {
  encode(_: MsgCreateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateAccountResponse {
    return {};
  },

  toJSON(_: MsgCreateAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAccountResponse>, I>>(_: I): MsgCreateAccountResponse {
    const message = createBaseMsgCreateAccountResponse();
    return message;
  }

};

function createBaseMsgFulfillTrade(): MsgFulfillTrade {
  return {
    creator: "",
    ID: Long.UZERO,
    coinInputsIndex: Long.UZERO,
    items: [],
    paymentInfos: []
  };
}

export const MsgFulfillTrade = {
  encode(message: MsgFulfillTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }

    if (!message.coinInputsIndex.isZero()) {
      writer.uint32(24).uint64(message.coinInputsIndex);
    }

    for (const v of message.items) {
      ItemRef.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.paymentInfos) {
      PaymentInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFulfillTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.ID = (reader.uint64() as Long);
          break;

        case 3:
          message.coinInputsIndex = (reader.uint64() as Long);
          break;

        case 4:
          message.items.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 5:
          message.paymentInfos.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgFulfillTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO,
      coinInputsIndex: isSet(object.coinInputsIndex) ? Long.fromString(object.coinInputsIndex) : Long.UZERO,
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ItemRef.fromJSON(e)) : [],
      paymentInfos: Array.isArray(object?.paymentInfos) ? object.paymentInfos.map((e: any) => PaymentInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgFulfillTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    message.coinInputsIndex !== undefined && (obj.coinInputsIndex = (message.coinInputsIndex || Long.UZERO).toString());

    if (message.items) {
      obj.items = message.items.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    if (message.paymentInfos) {
      obj.paymentInfos = message.paymentInfos.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfos = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFulfillTrade>, I>>(object: I): MsgFulfillTrade {
    const message = createBaseMsgFulfillTrade();
    message.creator = object.creator ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.coinInputsIndex = object.coinInputsIndex !== undefined && object.coinInputsIndex !== null ? Long.fromValue(object.coinInputsIndex) : Long.UZERO;
    message.items = object.items?.map(e => ItemRef.fromPartial(e)) || [];
    message.paymentInfos = object.paymentInfos?.map(e => PaymentInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgFulfillTradeResponse(): MsgFulfillTradeResponse {
  return {};
}

export const MsgFulfillTradeResponse = {
  encode(_: MsgFulfillTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFulfillTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgFulfillTradeResponse {
    return {};
  },

  toJSON(_: MsgFulfillTradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFulfillTradeResponse>, I>>(_: I): MsgFulfillTradeResponse {
    const message = createBaseMsgFulfillTradeResponse();
    return message;
  }

};

function createBaseMsgCreateTrade(): MsgCreateTrade {
  return {
    creator: "",
    coinInputs: [],
    itemInputs: [],
    coinOutputs: [],
    itemOutputs: [],
    extraInfo: ""
  };
}

export const MsgCreateTrade = {
  encode(message: MsgCreateTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    for (const v of message.coinInputs) {
      CoinInput.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.itemInputs) {
      ItemInput.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.itemOutputs) {
      ItemRef.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (message.extraInfo !== "") {
      writer.uint32(50).string(message.extraInfo);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.coinInputs.push(CoinInput.decode(reader, reader.uint32()));
          break;

        case 3:
          message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
          break;

        case 4:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.itemOutputs.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 6:
          message.extraInfo = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => CoinInput.fromJSON(e)) : [],
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemInput.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      itemOutputs: Array.isArray(object?.itemOutputs) ? object.itemOutputs.map((e: any) => ItemRef.fromJSON(e)) : [],
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : ""
    };
  },

  toJSON(message: MsgCreateTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);

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

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.itemOutputs) {
      obj.itemOutputs = message.itemOutputs.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.itemOutputs = [];
    }

    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTrade>, I>>(object: I): MsgCreateTrade {
    const message = createBaseMsgCreateTrade();
    message.creator = object.creator ?? "";
    message.coinInputs = object.coinInputs?.map(e => CoinInput.fromPartial(e)) || [];
    message.itemInputs = object.itemInputs?.map(e => ItemInput.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.itemOutputs = object.itemOutputs?.map(e => ItemRef.fromPartial(e)) || [];
    message.extraInfo = object.extraInfo ?? "";
    return message;
  }

};

function createBaseMsgCreateTradeResponse(): MsgCreateTradeResponse {
  return {
    ID: Long.UZERO
  };
}

export const MsgCreateTradeResponse = {
  encode(message: MsgCreateTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateTradeResponse {
    return {
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateTradeResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTradeResponse>, I>>(object: I): MsgCreateTradeResponse {
    const message = createBaseMsgCreateTradeResponse();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelTrade(): MsgCancelTrade {
  return {
    creator: "",
    ID: Long.UZERO
  };
}

export const MsgCancelTrade = {
  encode(message: MsgCancelTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.ID = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO
    };
  },

  toJSON(message: MsgCancelTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTrade>, I>>(object: I): MsgCancelTrade {
    const message = createBaseMsgCancelTrade();
    message.creator = object.creator ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCancelTradeResponse(): MsgCancelTradeResponse {
  return {};
}

export const MsgCancelTradeResponse = {
  encode(_: MsgCancelTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCancelTradeResponse {
    return {};
  },

  toJSON(_: MsgCancelTradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTradeResponse>, I>>(_: I): MsgCancelTradeResponse {
    const message = createBaseMsgCancelTradeResponse();
    return message;
  }

};

function createBaseMsgCompleteExecutionEarly(): MsgCompleteExecutionEarly {
  return {
    creator: "",
    ID: ""
  };
}

export const MsgCompleteExecutionEarly = {
  encode(message: MsgCompleteExecutionEarly, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarly {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteExecutionEarly();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.ID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCompleteExecutionEarly {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: MsgCompleteExecutionEarly): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteExecutionEarly>, I>>(object: I): MsgCompleteExecutionEarly {
    const message = createBaseMsgCompleteExecutionEarly();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseMsgCompleteExecutionEarlyResponse(): MsgCompleteExecutionEarlyResponse {
  return {
    ID: ""
  };
}

export const MsgCompleteExecutionEarlyResponse = {
  encode(message: MsgCompleteExecutionEarlyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarlyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteExecutionEarlyResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCompleteExecutionEarlyResponse {
    return {
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: MsgCompleteExecutionEarlyResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteExecutionEarlyResponse>, I>>(object: I): MsgCompleteExecutionEarlyResponse {
    const message = createBaseMsgCompleteExecutionEarlyResponse();
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseMsgTransferCookbook(): MsgTransferCookbook {
  return {
    creator: "",
    ID: "",
    recipient: ""
  };
}

export const MsgTransferCookbook = {
  encode(message: MsgTransferCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCookbook();

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
          message.recipient = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgTransferCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : ""
    };
  },

  toJSON(message: MsgTransferCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferCookbook>, I>>(object: I): MsgTransferCookbook {
    const message = createBaseMsgTransferCookbook();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  }

};

function createBaseMsgTransferCookbookResponse(): MsgTransferCookbookResponse {
  return {};
}

export const MsgTransferCookbookResponse = {
  encode(_: MsgTransferCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgTransferCookbookResponse {
    return {};
  },

  toJSON(_: MsgTransferCookbookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferCookbookResponse>, I>>(_: I): MsgTransferCookbookResponse {
    const message = createBaseMsgTransferCookbookResponse();
    return message;
  }

};

function createBaseMsgGoogleInAppPurchaseGetCoins(): MsgGoogleInAppPurchaseGetCoins {
  return {
    creator: "",
    productID: "",
    purchaseToken: "",
    receiptDataBase64: "",
    signature: ""
  };
}

export const MsgGoogleInAppPurchaseGetCoins = {
  encode(message: MsgGoogleInAppPurchaseGetCoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.productID !== "") {
      writer.uint32(18).string(message.productID);
    }

    if (message.purchaseToken !== "") {
      writer.uint32(26).string(message.purchaseToken);
    }

    if (message.receiptDataBase64 !== "") {
      writer.uint32(34).string(message.receiptDataBase64);
    }

    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGoogleInAppPurchaseGetCoins();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.productID = reader.string();
          break;

        case 3:
          message.purchaseToken = reader.string();
          break;

        case 4:
          message.receiptDataBase64 = reader.string();
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

  fromJSON(object: any): MsgGoogleInAppPurchaseGetCoins {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      productID: isSet(object.productID) ? String(object.productID) : "",
      purchaseToken: isSet(object.purchaseToken) ? String(object.purchaseToken) : "",
      receiptDataBase64: isSet(object.receiptDataBase64) ? String(object.receiptDataBase64) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: MsgGoogleInAppPurchaseGetCoins): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productID !== undefined && (obj.productID = message.productID);
    message.purchaseToken !== undefined && (obj.purchaseToken = message.purchaseToken);
    message.receiptDataBase64 !== undefined && (obj.receiptDataBase64 = message.receiptDataBase64);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGoogleInAppPurchaseGetCoins>, I>>(object: I): MsgGoogleInAppPurchaseGetCoins {
    const message = createBaseMsgGoogleInAppPurchaseGetCoins();
    message.creator = object.creator ?? "";
    message.productID = object.productID ?? "";
    message.purchaseToken = object.purchaseToken ?? "";
    message.receiptDataBase64 = object.receiptDataBase64 ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseMsgGoogleInAppPurchaseGetCoinsResponse(): MsgGoogleInAppPurchaseGetCoinsResponse {
  return {};
}

export const MsgGoogleInAppPurchaseGetCoinsResponse = {
  encode(_: MsgGoogleInAppPurchaseGetCoinsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoinsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGoogleInAppPurchaseGetCoinsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgGoogleInAppPurchaseGetCoinsResponse {
    return {};
  },

  toJSON(_: MsgGoogleInAppPurchaseGetCoinsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGoogleInAppPurchaseGetCoinsResponse>, I>>(_: I): MsgGoogleInAppPurchaseGetCoinsResponse {
    const message = createBaseMsgGoogleInAppPurchaseGetCoinsResponse();
    return message;
  }

};

function createBaseMsgSendItems(): MsgSendItems {
  return {
    creator: "",
    receiver: "",
    items: []
  };
}

export const MsgSendItems = {
  encode(message: MsgSendItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    for (const v of message.items) {
      ItemRef.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItems {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendItems();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.items.push(ItemRef.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSendItems {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ItemRef.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSendItems): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);

    if (message.items) {
      obj.items = message.items.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendItems>, I>>(object: I): MsgSendItems {
    const message = createBaseMsgSendItems();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.items = object.items?.map(e => ItemRef.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSendItemsResponse(): MsgSendItemsResponse {
  return {};
}

export const MsgSendItemsResponse = {
  encode(_: MsgSendItemsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendItemsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSendItemsResponse {
    return {};
  },

  toJSON(_: MsgSendItemsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendItemsResponse>, I>>(_: I): MsgSendItemsResponse {
    const message = createBaseMsgSendItemsResponse();
    return message;
  }

};

function createBaseMsgExecuteRecipe(): MsgExecuteRecipe {
  return {
    creator: "",
    cookbookID: "",
    recipeID: "",
    coinInputsIndex: Long.UZERO,
    itemIDs: [],
    paymentInfos: []
  };
}

export const MsgExecuteRecipe = {
  encode(message: MsgExecuteRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookID !== "") {
      writer.uint32(18).string(message.cookbookID);
    }

    if (message.recipeID !== "") {
      writer.uint32(26).string(message.recipeID);
    }

    if (!message.coinInputsIndex.isZero()) {
      writer.uint32(32).uint64(message.coinInputsIndex);
    }

    for (const v of message.itemIDs) {
      writer.uint32(42).string(v!);
    }

    for (const v of message.paymentInfos) {
      PaymentInfo.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookID = reader.string();
          break;

        case 3:
          message.recipeID = reader.string();
          break;

        case 4:
          message.coinInputsIndex = (reader.uint64() as Long);
          break;

        case 5:
          message.itemIDs.push(reader.string());
          break;

        case 6:
          message.paymentInfos.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      recipeID: isSet(object.recipeID) ? String(object.recipeID) : "",
      coinInputsIndex: isSet(object.coinInputsIndex) ? Long.fromString(object.coinInputsIndex) : Long.UZERO,
      itemIDs: Array.isArray(object?.itemIDs) ? object.itemIDs.map((e: any) => String(e)) : [],
      paymentInfos: Array.isArray(object?.paymentInfos) ? object.paymentInfos.map((e: any) => PaymentInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgExecuteRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.recipeID !== undefined && (obj.recipeID = message.recipeID);
    message.coinInputsIndex !== undefined && (obj.coinInputsIndex = (message.coinInputsIndex || Long.UZERO).toString());

    if (message.itemIDs) {
      obj.itemIDs = message.itemIDs.map(e => e);
    } else {
      obj.itemIDs = [];
    }

    if (message.paymentInfos) {
      obj.paymentInfos = message.paymentInfos.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfos = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteRecipe>, I>>(object: I): MsgExecuteRecipe {
    const message = createBaseMsgExecuteRecipe();
    message.creator = object.creator ?? "";
    message.cookbookID = object.cookbookID ?? "";
    message.recipeID = object.recipeID ?? "";
    message.coinInputsIndex = object.coinInputsIndex !== undefined && object.coinInputsIndex !== null ? Long.fromValue(object.coinInputsIndex) : Long.UZERO;
    message.itemIDs = object.itemIDs?.map(e => e) || [];
    message.paymentInfos = object.paymentInfos?.map(e => PaymentInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgExecuteRecipeResponse(): MsgExecuteRecipeResponse {
  return {
    ID: ""
  };
}

export const MsgExecuteRecipeResponse = {
  encode(message: MsgExecuteRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgExecuteRecipeResponse {
    return {
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: MsgExecuteRecipeResponse): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteRecipeResponse>, I>>(object: I): MsgExecuteRecipeResponse {
    const message = createBaseMsgExecuteRecipeResponse();
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseMsgSetItemString(): MsgSetItemString {
  return {
    creator: "",
    cookbookID: "",
    ID: "",
    field: "",
    value: ""
  };
}

export const MsgSetItemString = {
  encode(message: MsgSetItemString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookID !== "") {
      writer.uint32(18).string(message.cookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(34).string(message.ID);
    }

    if (message.field !== "") {
      writer.uint32(42).string(message.field);
    }

    if (message.value !== "") {
      writer.uint32(50).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetItemString();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookID = reader.string();
          break;

        case 4:
          message.ID = reader.string();
          break;

        case 5:
          message.field = reader.string();
          break;

        case 6:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetItemString {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      field: isSet(object.field) ? String(object.field) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: MsgSetItemString): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
    message.field !== undefined && (obj.field = message.field);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetItemString>, I>>(object: I): MsgSetItemString {
    const message = createBaseMsgSetItemString();
    message.creator = object.creator ?? "";
    message.cookbookID = object.cookbookID ?? "";
    message.ID = object.ID ?? "";
    message.field = object.field ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseMsgSetItemStringResponse(): MsgSetItemStringResponse {
  return {};
}

export const MsgSetItemStringResponse = {
  encode(_: MsgSetItemStringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemStringResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetItemStringResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSetItemStringResponse {
    return {};
  },

  toJSON(_: MsgSetItemStringResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetItemStringResponse>, I>>(_: I): MsgSetItemStringResponse {
    const message = createBaseMsgSetItemStringResponse();
    return message;
  }

};

function createBaseMsgCreateRecipe(): MsgCreateRecipe {
  return {
    creator: "",
    cookbookID: "",
    ID: "",
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

export const MsgCreateRecipe = {
  encode(message: MsgCreateRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookID !== "") {
      writer.uint32(18).string(message.cookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookID = reader.string();
          break;

        case 3:
          message.ID = reader.string();
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

  fromJSON(object: any): MsgCreateRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
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

  toJSON(message: MsgCreateRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateRecipe>, I>>(object: I): MsgCreateRecipe {
    const message = createBaseMsgCreateRecipe();
    message.creator = object.creator ?? "";
    message.cookbookID = object.cookbookID ?? "";
    message.ID = object.ID ?? "";
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

function createBaseMsgCreateRecipeResponse(): MsgCreateRecipeResponse {
  return {};
}

export const MsgCreateRecipeResponse = {
  encode(_: MsgCreateRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateRecipeResponse {
    return {};
  },

  toJSON(_: MsgCreateRecipeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateRecipeResponse>, I>>(_: I): MsgCreateRecipeResponse {
    const message = createBaseMsgCreateRecipeResponse();
    return message;
  }

};

function createBaseMsgUpdateRecipe(): MsgUpdateRecipe {
  return {
    creator: "",
    cookbookID: "",
    ID: "",
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

export const MsgUpdateRecipe = {
  encode(message: MsgUpdateRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.cookbookID !== "") {
      writer.uint32(18).string(message.cookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cookbookID = reader.string();
          break;

        case 3:
          message.ID = reader.string();
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

  fromJSON(object: any): MsgUpdateRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      cookbookID: isSet(object.cookbookID) ? String(object.cookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
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

  toJSON(message: MsgUpdateRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.cookbookID !== undefined && (obj.cookbookID = message.cookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRecipe>, I>>(object: I): MsgUpdateRecipe {
    const message = createBaseMsgUpdateRecipe();
    message.creator = object.creator ?? "";
    message.cookbookID = object.cookbookID ?? "";
    message.ID = object.ID ?? "";
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

function createBaseMsgUpdateRecipeResponse(): MsgUpdateRecipeResponse {
  return {};
}

export const MsgUpdateRecipeResponse = {
  encode(_: MsgUpdateRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateRecipeResponse {
    return {};
  },

  toJSON(_: MsgUpdateRecipeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateRecipeResponse>, I>>(_: I): MsgUpdateRecipeResponse {
    const message = createBaseMsgUpdateRecipeResponse();
    return message;
  }

};

function createBaseMsgCreateCookbook(): MsgCreateCookbook {
  return {
    creator: "",
    ID: "",
    name: "",
    description: "",
    developer: "",
    version: "",
    supportEmail: "",
    enabled: false
  };
}

export const MsgCreateCookbook = {
  encode(message: MsgCreateCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.developer !== "") {
      writer.uint32(42).string(message.developer);
    }

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    if (message.supportEmail !== "") {
      writer.uint32(58).string(message.supportEmail);
    }

    if (message.enabled === true) {
      writer.uint32(64).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCookbook();

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
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.developer = reader.string();
          break;

        case 6:
          message.version = reader.string();
          break;

        case 7:
          message.supportEmail = reader.string();
          break;

        case 8:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      developer: isSet(object.developer) ? String(object.developer) : "",
      version: isSet(object.version) ? String(object.version) : "",
      supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message: MsgCreateCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.developer !== undefined && (obj.developer = message.developer);
    message.version !== undefined && (obj.version = message.version);
    message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCookbook>, I>>(object: I): MsgCreateCookbook {
    const message = createBaseMsgCreateCookbook();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.developer = object.developer ?? "";
    message.version = object.version ?? "";
    message.supportEmail = object.supportEmail ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }

};

function createBaseMsgCreateCookbookResponse(): MsgCreateCookbookResponse {
  return {};
}

export const MsgCreateCookbookResponse = {
  encode(_: MsgCreateCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreateCookbookResponse {
    return {};
  },

  toJSON(_: MsgCreateCookbookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCookbookResponse>, I>>(_: I): MsgCreateCookbookResponse {
    const message = createBaseMsgCreateCookbookResponse();
    return message;
  }

};

function createBaseMsgUpdateCookbook(): MsgUpdateCookbook {
  return {
    creator: "",
    ID: "",
    name: "",
    description: "",
    developer: "",
    version: "",
    supportEmail: "",
    enabled: false
  };
}

export const MsgUpdateCookbook = {
  encode(message: MsgUpdateCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }

    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }

    if (message.developer !== "") {
      writer.uint32(42).string(message.developer);
    }

    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }

    if (message.supportEmail !== "") {
      writer.uint32(58).string(message.supportEmail);
    }

    if (message.enabled === true) {
      writer.uint32(64).bool(message.enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCookbook();

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
          message.name = reader.string();
          break;

        case 4:
          message.description = reader.string();
          break;

        case 5:
          message.developer = reader.string();
          break;

        case 6:
          message.version = reader.string();
          break;

        case 7:
          message.supportEmail = reader.string();
          break;

        case 8:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      developer: isSet(object.developer) ? String(object.developer) : "",
      version: isSet(object.version) ? String(object.version) : "",
      supportEmail: isSet(object.supportEmail) ? String(object.supportEmail) : "",
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
    };
  },

  toJSON(message: MsgUpdateCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.developer !== undefined && (obj.developer = message.developer);
    message.version !== undefined && (obj.version = message.version);
    message.supportEmail !== undefined && (obj.supportEmail = message.supportEmail);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCookbook>, I>>(object: I): MsgUpdateCookbook {
    const message = createBaseMsgUpdateCookbook();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.developer = object.developer ?? "";
    message.version = object.version ?? "";
    message.supportEmail = object.supportEmail ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  }

};

function createBaseMsgUpdateCookbookResponse(): MsgUpdateCookbookResponse {
  return {};
}

export const MsgUpdateCookbookResponse = {
  encode(_: MsgUpdateCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateCookbookResponse {
    return {};
  },

  toJSON(_: MsgUpdateCookbookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCookbookResponse>, I>>(_: I): MsgUpdateCookbookResponse {
    const message = createBaseMsgUpdateCookbookResponse();
    return message;
  }

};