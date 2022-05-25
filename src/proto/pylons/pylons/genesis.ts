import { RedeemInfo } from "./redeem_info";
import { PaymentInfo } from "./payment_info";
import { UserMap } from "./accounts";
import { Trade } from "./trade";
import { Params } from "./params";
import { GoogleInAppPurchaseOrder } from "./google_iap_order";
import { Execution } from "./execution";
import { Item } from "./item";
import { Recipe } from "./recipe";
import { Cookbook } from "./cookbook";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial } from "@osmonauts/helpers";

/** GenesisState defines the pylons module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  redeemInfoList: RedeemInfo[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  paymentInfoList: PaymentInfo[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  accountList: UserMap[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  tradeList: Trade[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  tradeCount: Long;

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  entityCount: Long;

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  params: Params;

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  googleInAppPurchaseOrderList: GoogleInAppPurchaseOrder[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  googleIAPOrderCount: Long;

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  executionList: Execution[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  executionCount: Long;

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  pendingExecutionList: Execution[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  pendingExecutionCount: Long;

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  itemList: Item[];

  /** this line is used by starport scaffolding # genesis/proto/stateField */
  recipeList: Recipe[];

  /**
   * this line is used by starport scaffolding # genesis/proto/stateField
   * this line is used by starport scaffolding # ibc/genesis/proto
   */
  cookbookList: Cookbook[];
}

function createBaseGenesisState(): GenesisState {
  return {
    redeemInfoList: [],
    paymentInfoList: [],
    accountList: [],
    tradeList: [],
    tradeCount: Long.UZERO,
    entityCount: Long.UZERO,
    params: undefined,
    googleInAppPurchaseOrderList: [],
    googleIAPOrderCount: Long.UZERO,
    executionList: [],
    executionCount: Long.UZERO,
    pendingExecutionList: [],
    pendingExecutionCount: Long.UZERO,
    itemList: [],
    recipeList: [],
    cookbookList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redeemInfoList) {
      RedeemInfo.encode(v!, writer.uint32(130).fork()).ldelim();
    }

    for (const v of message.paymentInfoList) {
      PaymentInfo.encode(v!, writer.uint32(122).fork()).ldelim();
    }

    for (const v of message.accountList) {
      UserMap.encode(v!, writer.uint32(114).fork()).ldelim();
    }

    for (const v of message.tradeList) {
      Trade.encode(v!, writer.uint32(106).fork()).ldelim();
    }

    if (!message.tradeCount.isZero()) {
      writer.uint32(96).uint64(message.tradeCount);
    }

    if (!message.entityCount.isZero()) {
      writer.uint32(88).uint64(message.entityCount);
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.googleInAppPurchaseOrderList) {
      GoogleInAppPurchaseOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (!message.googleIAPOrderCount.isZero()) {
      writer.uint32(72).uint64(message.googleIAPOrderCount);
    }

    for (const v of message.executionList) {
      Execution.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.executionCount.isZero()) {
      writer.uint32(48).uint64(message.executionCount);
    }

    for (const v of message.pendingExecutionList) {
      Execution.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.pendingExecutionCount.isZero()) {
      writer.uint32(32).uint64(message.pendingExecutionCount);
    }

    for (const v of message.itemList) {
      Item.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.recipeList) {
      Recipe.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.cookbookList) {
      Cookbook.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 16:
          message.redeemInfoList.push(RedeemInfo.decode(reader, reader.uint32()));
          break;

        case 15:
          message.paymentInfoList.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        case 14:
          message.accountList.push(UserMap.decode(reader, reader.uint32()));
          break;

        case 13:
          message.tradeList.push(Trade.decode(reader, reader.uint32()));
          break;

        case 12:
          message.tradeCount = (reader.uint64() as Long);
          break;

        case 11:
          message.entityCount = (reader.uint64() as Long);
          break;

        case 10:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 8:
          message.googleInAppPurchaseOrderList.push(GoogleInAppPurchaseOrder.decode(reader, reader.uint32()));
          break;

        case 9:
          message.googleIAPOrderCount = (reader.uint64() as Long);
          break;

        case 7:
          message.executionList.push(Execution.decode(reader, reader.uint32()));
          break;

        case 6:
          message.executionCount = (reader.uint64() as Long);
          break;

        case 5:
          message.pendingExecutionList.push(Execution.decode(reader, reader.uint32()));
          break;

        case 4:
          message.pendingExecutionCount = (reader.uint64() as Long);
          break;

        case 3:
          message.itemList.push(Item.decode(reader, reader.uint32()));
          break;

        case 2:
          message.recipeList.push(Recipe.decode(reader, reader.uint32()));
          break;

        case 1:
          message.cookbookList.push(Cookbook.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      redeemInfoList: Array.isArray(object?.redeemInfoList) ? object.redeemInfoList.map((e: any) => RedeemInfo.fromJSON(e)) : [],
      paymentInfoList: Array.isArray(object?.paymentInfoList) ? object.paymentInfoList.map((e: any) => PaymentInfo.fromJSON(e)) : [],
      accountList: Array.isArray(object?.accountList) ? object.accountList.map((e: any) => UserMap.fromJSON(e)) : [],
      tradeList: Array.isArray(object?.tradeList) ? object.tradeList.map((e: any) => Trade.fromJSON(e)) : [],
      tradeCount: isSet(object.tradeCount) ? Long.fromString(object.tradeCount) : Long.UZERO,
      entityCount: isSet(object.entityCount) ? Long.fromString(object.entityCount) : Long.UZERO,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      googleInAppPurchaseOrderList: Array.isArray(object?.googleInAppPurchaseOrderList) ? object.googleInAppPurchaseOrderList.map((e: any) => GoogleInAppPurchaseOrder.fromJSON(e)) : [],
      googleIAPOrderCount: isSet(object.googleIAPOrderCount) ? Long.fromString(object.googleIAPOrderCount) : Long.UZERO,
      executionList: Array.isArray(object?.executionList) ? object.executionList.map((e: any) => Execution.fromJSON(e)) : [],
      executionCount: isSet(object.executionCount) ? Long.fromString(object.executionCount) : Long.UZERO,
      pendingExecutionList: Array.isArray(object?.pendingExecutionList) ? object.pendingExecutionList.map((e: any) => Execution.fromJSON(e)) : [],
      pendingExecutionCount: isSet(object.pendingExecutionCount) ? Long.fromString(object.pendingExecutionCount) : Long.UZERO,
      itemList: Array.isArray(object?.itemList) ? object.itemList.map((e: any) => Item.fromJSON(e)) : [],
      recipeList: Array.isArray(object?.recipeList) ? object.recipeList.map((e: any) => Recipe.fromJSON(e)) : [],
      cookbookList: Array.isArray(object?.cookbookList) ? object.cookbookList.map((e: any) => Cookbook.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.redeemInfoList) {
      obj.redeemInfoList = message.redeemInfoList.map(e => e ? RedeemInfo.toJSON(e) : undefined);
    } else {
      obj.redeemInfoList = [];
    }

    if (message.paymentInfoList) {
      obj.paymentInfoList = message.paymentInfoList.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.paymentInfoList = [];
    }

    if (message.accountList) {
      obj.accountList = message.accountList.map(e => e ? UserMap.toJSON(e) : undefined);
    } else {
      obj.accountList = [];
    }

    if (message.tradeList) {
      obj.tradeList = message.tradeList.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.tradeList = [];
    }

    message.tradeCount !== undefined && (obj.tradeCount = (message.tradeCount || Long.UZERO).toString());
    message.entityCount !== undefined && (obj.entityCount = (message.entityCount || Long.UZERO).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.googleInAppPurchaseOrderList) {
      obj.googleInAppPurchaseOrderList = message.googleInAppPurchaseOrderList.map(e => e ? GoogleInAppPurchaseOrder.toJSON(e) : undefined);
    } else {
      obj.googleInAppPurchaseOrderList = [];
    }

    message.googleIAPOrderCount !== undefined && (obj.googleIAPOrderCount = (message.googleIAPOrderCount || Long.UZERO).toString());

    if (message.executionList) {
      obj.executionList = message.executionList.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.executionList = [];
    }

    message.executionCount !== undefined && (obj.executionCount = (message.executionCount || Long.UZERO).toString());

    if (message.pendingExecutionList) {
      obj.pendingExecutionList = message.pendingExecutionList.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.pendingExecutionList = [];
    }

    message.pendingExecutionCount !== undefined && (obj.pendingExecutionCount = (message.pendingExecutionCount || Long.UZERO).toString());

    if (message.itemList) {
      obj.itemList = message.itemList.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.itemList = [];
    }

    if (message.recipeList) {
      obj.recipeList = message.recipeList.map(e => e ? Recipe.toJSON(e) : undefined);
    } else {
      obj.recipeList = [];
    }

    if (message.cookbookList) {
      obj.cookbookList = message.cookbookList.map(e => e ? Cookbook.toJSON(e) : undefined);
    } else {
      obj.cookbookList = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.redeemInfoList = object.redeemInfoList?.map(e => RedeemInfo.fromPartial(e)) || [];
    message.paymentInfoList = object.paymentInfoList?.map(e => PaymentInfo.fromPartial(e)) || [];
    message.accountList = object.accountList?.map(e => UserMap.fromPartial(e)) || [];
    message.tradeList = object.tradeList?.map(e => Trade.fromPartial(e)) || [];
    message.tradeCount = object.tradeCount !== undefined && object.tradeCount !== null ? Long.fromValue(object.tradeCount) : Long.UZERO;
    message.entityCount = object.entityCount !== undefined && object.entityCount !== null ? Long.fromValue(object.entityCount) : Long.UZERO;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.googleInAppPurchaseOrderList = object.googleInAppPurchaseOrderList?.map(e => GoogleInAppPurchaseOrder.fromPartial(e)) || [];
    message.googleIAPOrderCount = object.googleIAPOrderCount !== undefined && object.googleIAPOrderCount !== null ? Long.fromValue(object.googleIAPOrderCount) : Long.UZERO;
    message.executionList = object.executionList?.map(e => Execution.fromPartial(e)) || [];
    message.executionCount = object.executionCount !== undefined && object.executionCount !== null ? Long.fromValue(object.executionCount) : Long.UZERO;
    message.pendingExecutionList = object.pendingExecutionList?.map(e => Execution.fromPartial(e)) || [];
    message.pendingExecutionCount = object.pendingExecutionCount !== undefined && object.pendingExecutionCount !== null ? Long.fromValue(object.pendingExecutionCount) : Long.UZERO;
    message.itemList = object.itemList?.map(e => Item.fromPartial(e)) || [];
    message.recipeList = object.recipeList?.map(e => Recipe.fromPartial(e)) || [];
    message.cookbookList = object.cookbookList?.map(e => Cookbook.fromPartial(e)) || [];
    return message;
  }

};