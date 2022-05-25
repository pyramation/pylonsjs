import { RedeemInfo } from "./redeem_info";
import { Cookbook } from "./cookbook";
import { Recipe } from "./recipe";
import { PaymentInfo } from "./payment_info";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Item, StringKeyValue } from "./item";
import { ItemRef } from "./trade";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface EventBurnDebtToken {
  redeemInfo: RedeemInfo;
}
export interface EventCreateAccount {
  address: string;
  username: string;
}
export interface EventUpdateAccount {
  address: string;
  username: string;
}
export interface EventCreateCookbook {
  creator: string;
  ID: string;
}

/** EventUpdateCookbook contains a record of the cookbook pre-update.  The updated fields can be found by the message emitted by MsgUpdateCookbook */
export interface EventUpdateCookbook {
  originalCookbook: Cookbook;
}
export interface EventTransferCookbook {
  sender: string;
  receiver: string;
  ID: string;
}
export interface EventCreateRecipe {
  creator: string;
  CookbookID: string;
  ID: string;
}

/** EventUpdateRecipe contains a record of the recipe pre-update.  The updated fields can be found by the message emitted by MsgUpdateRecipe */
export interface EventUpdateRecipe {
  originalRecipe: Recipe;
}

/** EventCreateExecution contains the creator and ID of a created execution. Execution IDs are of the form {count-targetBlockHeight} */
export interface EventCreateExecution {
  creator: string;
  ID: string;
  paymentInfos: PaymentInfo[];
}
export interface EventCompleteExecution {
  creator: string;
  ID: string;
  burnCoins: Coin[];
  payCoins: Coin[];
  transferCoins: Coin[];
  feeCoins: Coin[];
  coinOutputs: Coin[];
  mintItems: Item[];
  modifyItems: Item[];
}
export interface EventDropExecution {
  creator: string;
  ID: string;
}
export interface EventCompleteExecutionEarly {
  creator: string;
  ID: string;
}
export interface EventSendItems {
  sender: string;
  receiver: string;
  items: ItemRef[];
}
export interface EventSetItemString {
  creator: string;
  CookbookID: string;
  ID: string;
  originalMutableStrings: StringKeyValue[];
}
export interface EventCreateTrade {
  creator: string;
  ID: Long;
}
export interface EventCancelTrade {
  creator: string;
  ID: Long;
}
export interface EventFulfillTrade {
  ID: Long;
  creator: string;
  fulfiller: string;
  itemInputs: ItemRef[];
  coinInputs: Coin[];
  itemOutputs: ItemRef[];
  coinOutputs: Coin[];
  paymentInfos: PaymentInfo[];
}
export interface EventGooglePurchase {
  creator: string;
  productID: string;
  purchaseToken: string;
  receiptDataBase64: string;
  signature: string;
}
export interface EventStripePurchase {
  creator: string;
  ID: string;
}

function createBaseEventBurnDebtToken(): EventBurnDebtToken {
  return {
    redeemInfo: undefined
  };
}

export const EventBurnDebtToken = {
  encode(message: EventBurnDebtToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.redeemInfo !== undefined) {
      RedeemInfo.encode(message.redeemInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnDebtToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnDebtToken();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.redeemInfo = RedeemInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventBurnDebtToken {
    return {
      redeemInfo: isSet(object.redeemInfo) ? RedeemInfo.fromJSON(object.redeemInfo) : undefined
    };
  },

  toJSON(message: EventBurnDebtToken): unknown {
    const obj: any = {};
    message.redeemInfo !== undefined && (obj.redeemInfo = message.redeemInfo ? RedeemInfo.toJSON(message.redeemInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnDebtToken>, I>>(object: I): EventBurnDebtToken {
    const message = createBaseEventBurnDebtToken();
    message.redeemInfo = object.redeemInfo !== undefined && object.redeemInfo !== null ? RedeemInfo.fromPartial(object.redeemInfo) : undefined;
    return message;
  }

};

function createBaseEventCreateAccount(): EventCreateAccount {
  return {
    address: "",
    username: ""
  };
}

export const EventCreateAccount = {
  encode(message: EventCreateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): EventCreateAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: EventCreateAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateAccount>, I>>(object: I): EventCreateAccount {
    const message = createBaseEventCreateAccount();
    message.address = object.address ?? "";
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseEventUpdateAccount(): EventUpdateAccount {
  return {
    address: "",
    username: ""
  };
}

export const EventUpdateAccount = {
  encode(message: EventUpdateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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

  fromJSON(object: any): EventUpdateAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: EventUpdateAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateAccount>, I>>(object: I): EventUpdateAccount {
    const message = createBaseEventUpdateAccount();
    message.address = object.address ?? "";
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseEventCreateCookbook(): EventCreateCookbook {
  return {
    creator: "",
    ID: ""
  };
}

export const EventCreateCookbook = {
  encode(message: EventCreateCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCookbook();

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

  fromJSON(object: any): EventCreateCookbook {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: EventCreateCookbook): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateCookbook>, I>>(object: I): EventCreateCookbook {
    const message = createBaseEventCreateCookbook();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseEventUpdateCookbook(): EventUpdateCookbook {
  return {
    originalCookbook: undefined
  };
}

export const EventUpdateCookbook = {
  encode(message: EventUpdateCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalCookbook !== undefined) {
      Cookbook.encode(message.originalCookbook, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCookbook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.originalCookbook = Cookbook.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateCookbook {
    return {
      originalCookbook: isSet(object.originalCookbook) ? Cookbook.fromJSON(object.originalCookbook) : undefined
    };
  },

  toJSON(message: EventUpdateCookbook): unknown {
    const obj: any = {};
    message.originalCookbook !== undefined && (obj.originalCookbook = message.originalCookbook ? Cookbook.toJSON(message.originalCookbook) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCookbook>, I>>(object: I): EventUpdateCookbook {
    const message = createBaseEventUpdateCookbook();
    message.originalCookbook = object.originalCookbook !== undefined && object.originalCookbook !== null ? Cookbook.fromPartial(object.originalCookbook) : undefined;
    return message;
  }

};

function createBaseEventTransferCookbook(): EventTransferCookbook {
  return {
    sender: "",
    receiver: "",
    ID: ""
  };
}

export const EventTransferCookbook = {
  encode(message: EventTransferCookbook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferCookbook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventTransferCookbook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        case 3:
          message.ID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventTransferCookbook {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: EventTransferCookbook): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventTransferCookbook>, I>>(object: I): EventTransferCookbook {
    const message = createBaseEventTransferCookbook();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseEventCreateRecipe(): EventCreateRecipe {
  return {
    creator: "",
    CookbookID: "",
    ID: ""
  };
}

export const EventCreateRecipe = {
  encode(message: EventCreateRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.CookbookID !== "") {
      writer.uint32(18).string(message.CookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.CookbookID = reader.string();
          break;

        case 3:
          message.ID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateRecipe {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: EventCreateRecipe): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateRecipe>, I>>(object: I): EventCreateRecipe {
    const message = createBaseEventCreateRecipe();
    message.creator = object.creator ?? "";
    message.CookbookID = object.CookbookID ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseEventUpdateRecipe(): EventUpdateRecipe {
  return {
    originalRecipe: undefined
  };
}

export const EventUpdateRecipe = {
  encode(message: EventUpdateRecipe, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.originalRecipe !== undefined) {
      Recipe.encode(message.originalRecipe, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateRecipe {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateRecipe();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.originalRecipe = Recipe.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventUpdateRecipe {
    return {
      originalRecipe: isSet(object.originalRecipe) ? Recipe.fromJSON(object.originalRecipe) : undefined
    };
  },

  toJSON(message: EventUpdateRecipe): unknown {
    const obj: any = {};
    message.originalRecipe !== undefined && (obj.originalRecipe = message.originalRecipe ? Recipe.toJSON(message.originalRecipe) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateRecipe>, I>>(object: I): EventUpdateRecipe {
    const message = createBaseEventUpdateRecipe();
    message.originalRecipe = object.originalRecipe !== undefined && object.originalRecipe !== null ? Recipe.fromPartial(object.originalRecipe) : undefined;
    return message;
  }

};

function createBaseEventCreateExecution(): EventCreateExecution {
  return {
    creator: "",
    ID: "",
    paymentInfos: []
  };
}

export const EventCreateExecution = {
  encode(message: EventCreateExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    for (const v of message.paymentInfos) {
      PaymentInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateExecution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateExecution();

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
          message.paymentInfos.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCreateExecution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      paymentInfos: Array.isArray(object?.paymentInfos) ? object.paymentInfos.map((e: any) => PaymentInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: EventCreateExecution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);

    if (message.paymentInfos) {
      obj.paymentInfos = message.paymentInfos.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfos = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateExecution>, I>>(object: I): EventCreateExecution {
    const message = createBaseEventCreateExecution();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.paymentInfos = object.paymentInfos?.map(e => PaymentInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventCompleteExecution(): EventCompleteExecution {
  return {
    creator: "",
    ID: "",
    burnCoins: [],
    payCoins: [],
    transferCoins: [],
    feeCoins: [],
    coinOutputs: [],
    mintItems: [],
    modifyItems: []
  };
}

export const EventCompleteExecution = {
  encode(message: EventCompleteExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    for (const v of message.burnCoins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.payCoins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.transferCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.feeCoins) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.mintItems) {
      Item.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.modifyItems) {
      Item.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteExecution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompleteExecution();

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
          message.burnCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.payCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.transferCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.feeCoins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.mintItems.push(Item.decode(reader, reader.uint32()));
          break;

        case 9:
          message.modifyItems.push(Item.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventCompleteExecution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      burnCoins: Array.isArray(object?.burnCoins) ? object.burnCoins.map((e: any) => Coin.fromJSON(e)) : [],
      payCoins: Array.isArray(object?.payCoins) ? object.payCoins.map((e: any) => Coin.fromJSON(e)) : [],
      transferCoins: Array.isArray(object?.transferCoins) ? object.transferCoins.map((e: any) => Coin.fromJSON(e)) : [],
      feeCoins: Array.isArray(object?.feeCoins) ? object.feeCoins.map((e: any) => Coin.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      mintItems: Array.isArray(object?.mintItems) ? object.mintItems.map((e: any) => Item.fromJSON(e)) : [],
      modifyItems: Array.isArray(object?.modifyItems) ? object.modifyItems.map((e: any) => Item.fromJSON(e)) : []
    };
  },

  toJSON(message: EventCompleteExecution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);

    if (message.burnCoins) {
      obj.burnCoins = message.burnCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.burnCoins = [];
    }

    if (message.payCoins) {
      obj.payCoins = message.payCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.payCoins = [];
    }

    if (message.transferCoins) {
      obj.transferCoins = message.transferCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.transferCoins = [];
    }

    if (message.feeCoins) {
      obj.feeCoins = message.feeCoins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeCoins = [];
    }

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.mintItems) {
      obj.mintItems = message.mintItems.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.mintItems = [];
    }

    if (message.modifyItems) {
      obj.modifyItems = message.modifyItems.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.modifyItems = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCompleteExecution>, I>>(object: I): EventCompleteExecution {
    const message = createBaseEventCompleteExecution();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    message.burnCoins = object.burnCoins?.map(e => Coin.fromPartial(e)) || [];
    message.payCoins = object.payCoins?.map(e => Coin.fromPartial(e)) || [];
    message.transferCoins = object.transferCoins?.map(e => Coin.fromPartial(e)) || [];
    message.feeCoins = object.feeCoins?.map(e => Coin.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.mintItems = object.mintItems?.map(e => Item.fromPartial(e)) || [];
    message.modifyItems = object.modifyItems?.map(e => Item.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventDropExecution(): EventDropExecution {
  return {
    creator: "",
    ID: ""
  };
}

export const EventDropExecution = {
  encode(message: EventDropExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDropExecution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDropExecution();

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

  fromJSON(object: any): EventDropExecution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: EventDropExecution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDropExecution>, I>>(object: I): EventDropExecution {
    const message = createBaseEventDropExecution();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseEventCompleteExecutionEarly(): EventCompleteExecutionEarly {
  return {
    creator: "",
    ID: ""
  };
}

export const EventCompleteExecutionEarly = {
  encode(message: EventCompleteExecutionEarly, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteExecutionEarly {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCompleteExecutionEarly();

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

  fromJSON(object: any): EventCompleteExecutionEarly {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: EventCompleteExecutionEarly): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCompleteExecutionEarly>, I>>(object: I): EventCompleteExecutionEarly {
    const message = createBaseEventCompleteExecutionEarly();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseEventSendItems(): EventSendItems {
  return {
    sender: "",
    receiver: "",
    items: []
  };
}

export const EventSendItems = {
  encode(message: EventSendItems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    for (const v of message.items) {
      ItemRef.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSendItems {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendItems();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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

  fromJSON(object: any): EventSendItems {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      items: Array.isArray(object?.items) ? object.items.map((e: any) => ItemRef.fromJSON(e)) : []
    };
  },

  toJSON(message: EventSendItems): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);

    if (message.items) {
      obj.items = message.items.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSendItems>, I>>(object: I): EventSendItems {
    const message = createBaseEventSendItems();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.items = object.items?.map(e => ItemRef.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventSetItemString(): EventSetItemString {
  return {
    creator: "",
    CookbookID: "",
    ID: "",
    originalMutableStrings: []
  };
}

export const EventSetItemString = {
  encode(message: EventSetItemString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.CookbookID !== "") {
      writer.uint32(18).string(message.CookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
    }

    for (const v of message.originalMutableStrings) {
      StringKeyValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetItemString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetItemString();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.CookbookID = reader.string();
          break;

        case 3:
          message.ID = reader.string();
          break;

        case 4:
          message.originalMutableStrings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSetItemString {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : "",
      originalMutableStrings: Array.isArray(object?.originalMutableStrings) ? object.originalMutableStrings.map((e: any) => StringKeyValue.fromJSON(e)) : []
    };
  },

  toJSON(message: EventSetItemString): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.ID !== undefined && (obj.ID = message.ID);

    if (message.originalMutableStrings) {
      obj.originalMutableStrings = message.originalMutableStrings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.originalMutableStrings = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetItemString>, I>>(object: I): EventSetItemString {
    const message = createBaseEventSetItemString();
    message.creator = object.creator ?? "";
    message.CookbookID = object.CookbookID ?? "";
    message.ID = object.ID ?? "";
    message.originalMutableStrings = object.originalMutableStrings?.map(e => StringKeyValue.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventCreateTrade(): EventCreateTrade {
  return {
    creator: "",
    ID: Long.UZERO
  };
}

export const EventCreateTrade = {
  encode(message: EventCreateTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateTrade();

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

  fromJSON(object: any): EventCreateTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO
    };
  },

  toJSON(message: EventCreateTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateTrade>, I>>(object: I): EventCreateTrade {
    const message = createBaseEventCreateTrade();
    message.creator = object.creator ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }

};

function createBaseEventCancelTrade(): EventCancelTrade {
  return {
    creator: "",
    ID: Long.UZERO
  };
}

export const EventCancelTrade = {
  encode(message: EventCancelTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.ID.isZero()) {
      writer.uint32(16).uint64(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelTrade();

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

  fromJSON(object: any): EventCancelTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO
    };
  },

  toJSON(message: EventCancelTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelTrade>, I>>(object: I): EventCancelTrade {
    const message = createBaseEventCancelTrade();
    message.creator = object.creator ?? "";
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }

};

function createBaseEventFulfillTrade(): EventFulfillTrade {
  return {
    ID: Long.UZERO,
    creator: "",
    fulfiller: "",
    itemInputs: [],
    coinInputs: [],
    itemOutputs: [],
    coinOutputs: [],
    paymentInfos: []
  };
}

export const EventFulfillTrade = {
  encode(message: EventFulfillTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.fulfiller !== "") {
      writer.uint32(26).string(message.fulfiller);
    }

    for (const v of message.itemInputs) {
      ItemRef.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.coinInputs) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.itemOutputs) {
      ItemRef.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.paymentInfos) {
      PaymentInfo.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventFulfillTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventFulfillTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ID = (reader.uint64() as Long);
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.fulfiller = reader.string();
          break;

        case 4:
          message.itemInputs.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 5:
          message.coinInputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.itemOutputs.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 7:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.paymentInfos.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventFulfillTrade {
    return {
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO,
      creator: isSet(object.creator) ? String(object.creator) : "",
      fulfiller: isSet(object.fulfiller) ? String(object.fulfiller) : "",
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemRef.fromJSON(e)) : [],
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => Coin.fromJSON(e)) : [],
      itemOutputs: Array.isArray(object?.itemOutputs) ? object.itemOutputs.map((e: any) => ItemRef.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      paymentInfos: Array.isArray(object?.paymentInfos) ? object.paymentInfos.map((e: any) => PaymentInfo.fromJSON(e)) : []
    };
  },

  toJSON(message: EventFulfillTrade): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    message.creator !== undefined && (obj.creator = message.creator);
    message.fulfiller !== undefined && (obj.fulfiller = message.fulfiller);

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.itemOutputs) {
      obj.itemOutputs = message.itemOutputs.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.itemOutputs = [];
    }

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.paymentInfos) {
      obj.paymentInfos = message.paymentInfos.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfos = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventFulfillTrade>, I>>(object: I): EventFulfillTrade {
    const message = createBaseEventFulfillTrade();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    message.creator = object.creator ?? "";
    message.fulfiller = object.fulfiller ?? "";
    message.itemInputs = object.itemInputs?.map(e => ItemRef.fromPartial(e)) || [];
    message.coinInputs = object.coinInputs?.map(e => Coin.fromPartial(e)) || [];
    message.itemOutputs = object.itemOutputs?.map(e => ItemRef.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.paymentInfos = object.paymentInfos?.map(e => PaymentInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventGooglePurchase(): EventGooglePurchase {
  return {
    creator: "",
    productID: "",
    purchaseToken: "",
    receiptDataBase64: "",
    signature: ""
  };
}

export const EventGooglePurchase = {
  encode(message: EventGooglePurchase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventGooglePurchase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGooglePurchase();

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

  fromJSON(object: any): EventGooglePurchase {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      productID: isSet(object.productID) ? String(object.productID) : "",
      purchaseToken: isSet(object.purchaseToken) ? String(object.purchaseToken) : "",
      receiptDataBase64: isSet(object.receiptDataBase64) ? String(object.receiptDataBase64) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: EventGooglePurchase): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productID !== undefined && (obj.productID = message.productID);
    message.purchaseToken !== undefined && (obj.purchaseToken = message.purchaseToken);
    message.receiptDataBase64 !== undefined && (obj.receiptDataBase64 = message.receiptDataBase64);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventGooglePurchase>, I>>(object: I): EventGooglePurchase {
    const message = createBaseEventGooglePurchase();
    message.creator = object.creator ?? "";
    message.productID = object.productID ?? "";
    message.purchaseToken = object.purchaseToken ?? "";
    message.receiptDataBase64 = object.receiptDataBase64 ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};

function createBaseEventStripePurchase(): EventStripePurchase {
  return {
    creator: "",
    ID: ""
  };
}

export const EventStripePurchase = {
  encode(message: EventStripePurchase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStripePurchase {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStripePurchase();

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

  fromJSON(object: any): EventStripePurchase {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: EventStripePurchase): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStripePurchase>, I>>(object: I): EventStripePurchase {
    const message = createBaseEventStripePurchase();
    message.creator = object.creator ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};