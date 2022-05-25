import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Trade } from "./trade";
import { RedeemInfo } from "./redeem_info";
import { PaymentInfo } from "./payment_info";
import { Username, AccountAddr } from "./accounts";
import { Item } from "./item";
import { GoogleInAppPurchaseOrder } from "./google_iap_order";
import { Execution } from "./execution";
import { Recipe } from "./recipe";
import { Cookbook } from "./cookbook";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryListTradesByCreatorRequest {
  creator: string;
  pagination: PageRequest;
}
export interface QueryListTradesByCreatorResponse {
  Trades: Trade[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}

/** this line is used by starport scaffolding # 3 */
export interface QueryGetRedeemInfoRequest {
  ID: string;
}
export interface QueryGetRedeemInfoResponse {
  RedeemInfo: RedeemInfo;
}
export interface QueryAllRedeemInfoRequest {
  pagination: PageRequest;
}
export interface QueryAllRedeemInfoResponse {
  RedeemInfo: RedeemInfo[];
  pagination: PageResponse;
}
export interface QueryGetPaymentInfoRequest {
  purchaseID: string;
}
export interface QueryGetPaymentInfoResponse {
  PaymentInfo: PaymentInfo;
}
export interface QueryAllPaymentInfoRequest {
  pagination: PageRequest;
}
export interface QueryAllPaymentInfoResponse {
  PaymentInfo: PaymentInfo[];
  pagination: PageResponse;
}
export interface QueryGetUsernameByAddressRequest {
  address: string;
}
export interface QueryGetAddressByUsernameRequest {
  username: string;
}
export interface QueryGetUsernameByAddressResponse {
  username: Username;
}
export interface QueryGetAddressByUsernameResponse {
  address: AccountAddr;
}
export interface QueryGetTradeRequest {
  ID: Long;
}
export interface QueryGetTradeResponse {
  Trade: Trade;
}
export interface QueryListItemByOwnerRequest {
  owner: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryListItemByOwnerResponse {
  Items: Item[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryGetGoogleInAppPurchaseOrderRequest {
  PurchaseToken: string;
}
export interface QueryGetGoogleInAppPurchaseOrderResponse {
  Order: GoogleInAppPurchaseOrder;
}
export interface QueryListExecutionsByItemRequest {
  CookbookID: string;
  ItemID: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryListExecutionsByItemResponse {
  CompletedExecutions: Execution[];
  PendingExecutions: Execution[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryListExecutionsByRecipeRequest {
  CookbookID: string;
  RecipeID: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryListExecutionsByRecipeResponse {
  CompletedExecutions: Execution[];
  PendingExecutions: Execution[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryGetExecutionRequest {
  ID: string;
}
export interface QueryGetExecutionResponse {
  Execution: Execution;
  Completed: boolean;
}
export interface QueryListRecipesByCookbookRequest {
  CookbookID: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryListRecipesByCookbookResponse {
  Recipes: Recipe[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryGetItemRequest {
  CookbookID: string;
  ID: string;
}
export interface QueryGetItemResponse {
  Item: Item;
}
export interface QueryGetRecipeRequest {
  CookbookID: string;
  ID: string;
}
export interface QueryGetRecipeResponse {
  Recipe: Recipe;
}
export interface QueryListCookbooksByCreatorRequest {
  creator: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryListCookbooksByCreatorResponse {
  Cookbooks: Cookbook[];

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryGetCookbookRequest {
  ID: string;
}
export interface QueryGetCookbookResponse {
  Cookbook: Cookbook;
}

function createBaseQueryListTradesByCreatorRequest(): QueryListTradesByCreatorRequest {
  return {
    creator: "",
    pagination: undefined
  };
}

export const QueryListTradesByCreatorRequest = {
  encode(message: QueryListTradesByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListTradesByCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListTradesByCreatorRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListTradesByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListTradesByCreatorRequest>, I>>(object: I): QueryListTradesByCreatorRequest {
    const message = createBaseQueryListTradesByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListTradesByCreatorResponse(): QueryListTradesByCreatorResponse {
  return {
    Trades: [],
    pagination: undefined
  };
}

export const QueryListTradesByCreatorResponse = {
  encode(message: QueryListTradesByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListTradesByCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Trades.push(Trade.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListTradesByCreatorResponse {
    return {
      Trades: Array.isArray(object?.Trades) ? object.Trades.map((e: any) => Trade.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListTradesByCreatorResponse): unknown {
    const obj: any = {};

    if (message.Trades) {
      obj.Trades = message.Trades.map(e => e ? Trade.toJSON(e) : undefined);
    } else {
      obj.Trades = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListTradesByCreatorResponse>, I>>(object: I): QueryListTradesByCreatorResponse {
    const message = createBaseQueryListTradesByCreatorResponse();
    message.Trades = object.Trades?.map(e => Trade.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetRedeemInfoRequest(): QueryGetRedeemInfoRequest {
  return {
    ID: ""
  };
}

export const QueryGetRedeemInfoRequest = {
  encode(message: QueryGetRedeemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRedeemInfoRequest();

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

  fromJSON(object: any): QueryGetRedeemInfoRequest {
    return {
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: QueryGetRedeemInfoRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRedeemInfoRequest>, I>>(object: I): QueryGetRedeemInfoRequest {
    const message = createBaseQueryGetRedeemInfoRequest();
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseQueryGetRedeemInfoResponse(): QueryGetRedeemInfoResponse {
  return {
    RedeemInfo: undefined
  };
}

export const QueryGetRedeemInfoResponse = {
  encode(message: QueryGetRedeemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.RedeemInfo !== undefined) {
      RedeemInfo.encode(message.RedeemInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRedeemInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RedeemInfo = RedeemInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRedeemInfoResponse {
    return {
      RedeemInfo: isSet(object.RedeemInfo) ? RedeemInfo.fromJSON(object.RedeemInfo) : undefined
    };
  },

  toJSON(message: QueryGetRedeemInfoResponse): unknown {
    const obj: any = {};
    message.RedeemInfo !== undefined && (obj.RedeemInfo = message.RedeemInfo ? RedeemInfo.toJSON(message.RedeemInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRedeemInfoResponse>, I>>(object: I): QueryGetRedeemInfoResponse {
    const message = createBaseQueryGetRedeemInfoResponse();
    message.RedeemInfo = object.RedeemInfo !== undefined && object.RedeemInfo !== null ? RedeemInfo.fromPartial(object.RedeemInfo) : undefined;
    return message;
  }

};

function createBaseQueryAllRedeemInfoRequest(): QueryAllRedeemInfoRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllRedeemInfoRequest = {
  encode(message: QueryAllRedeemInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRedeemInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllRedeemInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllRedeemInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRedeemInfoRequest>, I>>(object: I): QueryAllRedeemInfoRequest {
    const message = createBaseQueryAllRedeemInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllRedeemInfoResponse(): QueryAllRedeemInfoResponse {
  return {
    RedeemInfo: [],
    pagination: undefined
  };
}

export const QueryAllRedeemInfoResponse = {
  encode(message: QueryAllRedeemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.RedeemInfo) {
      RedeemInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRedeemInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.RedeemInfo.push(RedeemInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllRedeemInfoResponse {
    return {
      RedeemInfo: Array.isArray(object?.RedeemInfo) ? object.RedeemInfo.map((e: any) => RedeemInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllRedeemInfoResponse): unknown {
    const obj: any = {};

    if (message.RedeemInfo) {
      obj.RedeemInfo = message.RedeemInfo.map(e => e ? RedeemInfo.toJSON(e) : undefined);
    } else {
      obj.RedeemInfo = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRedeemInfoResponse>, I>>(object: I): QueryAllRedeemInfoResponse {
    const message = createBaseQueryAllRedeemInfoResponse();
    message.RedeemInfo = object.RedeemInfo?.map(e => RedeemInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetPaymentInfoRequest(): QueryGetPaymentInfoRequest {
  return {
    purchaseID: ""
  };
}

export const QueryGetPaymentInfoRequest = {
  encode(message: QueryGetPaymentInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.purchaseID !== "") {
      writer.uint32(10).string(message.purchaseID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.purchaseID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentInfoRequest {
    return {
      purchaseID: isSet(object.purchaseID) ? String(object.purchaseID) : ""
    };
  },

  toJSON(message: QueryGetPaymentInfoRequest): unknown {
    const obj: any = {};
    message.purchaseID !== undefined && (obj.purchaseID = message.purchaseID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentInfoRequest>, I>>(object: I): QueryGetPaymentInfoRequest {
    const message = createBaseQueryGetPaymentInfoRequest();
    message.purchaseID = object.purchaseID ?? "";
    return message;
  }

};

function createBaseQueryGetPaymentInfoResponse(): QueryGetPaymentInfoResponse {
  return {
    PaymentInfo: undefined
  };
}

export const QueryGetPaymentInfoResponse = {
  encode(message: QueryGetPaymentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PaymentInfo !== undefined) {
      PaymentInfo.encode(message.PaymentInfo, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPaymentInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PaymentInfo = PaymentInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetPaymentInfoResponse {
    return {
      PaymentInfo: isSet(object.PaymentInfo) ? PaymentInfo.fromJSON(object.PaymentInfo) : undefined
    };
  },

  toJSON(message: QueryGetPaymentInfoResponse): unknown {
    const obj: any = {};
    message.PaymentInfo !== undefined && (obj.PaymentInfo = message.PaymentInfo ? PaymentInfo.toJSON(message.PaymentInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetPaymentInfoResponse>, I>>(object: I): QueryGetPaymentInfoResponse {
    const message = createBaseQueryGetPaymentInfoResponse();
    message.PaymentInfo = object.PaymentInfo !== undefined && object.PaymentInfo !== null ? PaymentInfo.fromPartial(object.PaymentInfo) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentInfoRequest(): QueryAllPaymentInfoRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllPaymentInfoRequest = {
  encode(message: QueryAllPaymentInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentInfoRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPaymentInfoRequest>, I>>(object: I): QueryAllPaymentInfoRequest {
    const message = createBaseQueryAllPaymentInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllPaymentInfoResponse(): QueryAllPaymentInfoResponse {
  return {
    PaymentInfo: [],
    pagination: undefined
  };
}

export const QueryAllPaymentInfoResponse = {
  encode(message: QueryAllPaymentInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.PaymentInfo) {
      PaymentInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPaymentInfoResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PaymentInfo.push(PaymentInfo.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllPaymentInfoResponse {
    return {
      PaymentInfo: Array.isArray(object?.PaymentInfo) ? object.PaymentInfo.map((e: any) => PaymentInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllPaymentInfoResponse): unknown {
    const obj: any = {};

    if (message.PaymentInfo) {
      obj.PaymentInfo = message.PaymentInfo.map(e => e ? PaymentInfo.toJSON(e) : undefined);
    } else {
      obj.PaymentInfo = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllPaymentInfoResponse>, I>>(object: I): QueryAllPaymentInfoResponse {
    const message = createBaseQueryAllPaymentInfoResponse();
    message.PaymentInfo = object.PaymentInfo?.map(e => PaymentInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetUsernameByAddressRequest(): QueryGetUsernameByAddressRequest {
  return {
    address: ""
  };
}

export const QueryGetUsernameByAddressRequest = {
  encode(message: QueryGetUsernameByAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsernameByAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUsernameByAddressRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryGetUsernameByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUsernameByAddressRequest>, I>>(object: I): QueryGetUsernameByAddressRequest {
    const message = createBaseQueryGetUsernameByAddressRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryGetAddressByUsernameRequest(): QueryGetAddressByUsernameRequest {
  return {
    username: ""
  };
}

export const QueryGetAddressByUsernameRequest = {
  encode(message: QueryGetAddressByUsernameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressByUsernameRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.username = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAddressByUsernameRequest {
    return {
      username: isSet(object.username) ? String(object.username) : ""
    };
  },

  toJSON(message: QueryGetAddressByUsernameRequest): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAddressByUsernameRequest>, I>>(object: I): QueryGetAddressByUsernameRequest {
    const message = createBaseQueryGetAddressByUsernameRequest();
    message.username = object.username ?? "";
    return message;
  }

};

function createBaseQueryGetUsernameByAddressResponse(): QueryGetUsernameByAddressResponse {
  return {
    username: undefined
  };
}

export const QueryGetUsernameByAddressResponse = {
  encode(message: QueryGetUsernameByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.username !== undefined) {
      Username.encode(message.username, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUsernameByAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.username = Username.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUsernameByAddressResponse {
    return {
      username: isSet(object.username) ? Username.fromJSON(object.username) : undefined
    };
  },

  toJSON(message: QueryGetUsernameByAddressResponse): unknown {
    const obj: any = {};
    message.username !== undefined && (obj.username = message.username ? Username.toJSON(message.username) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetUsernameByAddressResponse>, I>>(object: I): QueryGetUsernameByAddressResponse {
    const message = createBaseQueryGetUsernameByAddressResponse();
    message.username = object.username !== undefined && object.username !== null ? Username.fromPartial(object.username) : undefined;
    return message;
  }

};

function createBaseQueryGetAddressByUsernameResponse(): QueryGetAddressByUsernameResponse {
  return {
    address: undefined
  };
}

export const QueryGetAddressByUsernameResponse = {
  encode(message: QueryGetAddressByUsernameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      AccountAddr.encode(message.address, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAddressByUsernameResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = AccountAddr.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetAddressByUsernameResponse {
    return {
      address: isSet(object.address) ? AccountAddr.fromJSON(object.address) : undefined
    };
  },

  toJSON(message: QueryGetAddressByUsernameResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address ? AccountAddr.toJSON(message.address) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAddressByUsernameResponse>, I>>(object: I): QueryGetAddressByUsernameResponse {
    const message = createBaseQueryGetAddressByUsernameResponse();
    message.address = object.address !== undefined && object.address !== null ? AccountAddr.fromPartial(object.address) : undefined;
    return message;
  }

};

function createBaseQueryGetTradeRequest(): QueryGetTradeRequest {
  return {
    ID: Long.UZERO
  };
}

export const QueryGetTradeRequest = {
  encode(message: QueryGetTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.ID.isZero()) {
      writer.uint32(8).uint64(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeRequest();

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

  fromJSON(object: any): QueryGetTradeRequest {
    return {
      ID: isSet(object.ID) ? Long.fromString(object.ID) : Long.UZERO
    };
  },

  toJSON(message: QueryGetTradeRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = (message.ID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTradeRequest>, I>>(object: I): QueryGetTradeRequest {
    const message = createBaseQueryGetTradeRequest();
    message.ID = object.ID !== undefined && object.ID !== null ? Long.fromValue(object.ID) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetTradeResponse(): QueryGetTradeResponse {
  return {
    Trade: undefined
  };
}

export const QueryGetTradeResponse = {
  encode(message: QueryGetTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Trade !== undefined) {
      Trade.encode(message.Trade, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Trade = Trade.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetTradeResponse {
    return {
      Trade: isSet(object.Trade) ? Trade.fromJSON(object.Trade) : undefined
    };
  },

  toJSON(message: QueryGetTradeResponse): unknown {
    const obj: any = {};
    message.Trade !== undefined && (obj.Trade = message.Trade ? Trade.toJSON(message.Trade) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTradeResponse>, I>>(object: I): QueryGetTradeResponse {
    const message = createBaseQueryGetTradeResponse();
    message.Trade = object.Trade !== undefined && object.Trade !== null ? Trade.fromPartial(object.Trade) : undefined;
    return message;
  }

};

function createBaseQueryListItemByOwnerRequest(): QueryListItemByOwnerRequest {
  return {
    owner: "",
    pagination: undefined
  };
}

export const QueryListItemByOwnerRequest = {
  encode(message: QueryListItemByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListItemByOwnerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListItemByOwnerRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListItemByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListItemByOwnerRequest>, I>>(object: I): QueryListItemByOwnerRequest {
    const message = createBaseQueryListItemByOwnerRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListItemByOwnerResponse(): QueryListItemByOwnerResponse {
  return {
    Items: [],
    pagination: undefined
  };
}

export const QueryListItemByOwnerResponse = {
  encode(message: QueryListItemByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListItemByOwnerResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Items.push(Item.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListItemByOwnerResponse {
    return {
      Items: Array.isArray(object?.Items) ? object.Items.map((e: any) => Item.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListItemByOwnerResponse): unknown {
    const obj: any = {};

    if (message.Items) {
      obj.Items = message.Items.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.Items = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListItemByOwnerResponse>, I>>(object: I): QueryListItemByOwnerResponse {
    const message = createBaseQueryListItemByOwnerResponse();
    message.Items = object.Items?.map(e => Item.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetGoogleInAppPurchaseOrderRequest(): QueryGetGoogleInAppPurchaseOrderRequest {
  return {
    PurchaseToken: ""
  };
}

export const QueryGetGoogleInAppPurchaseOrderRequest = {
  encode(message: QueryGetGoogleInAppPurchaseOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.PurchaseToken !== "") {
      writer.uint32(10).string(message.PurchaseToken);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGoogleInAppPurchaseOrderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.PurchaseToken = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderRequest {
    return {
      PurchaseToken: isSet(object.PurchaseToken) ? String(object.PurchaseToken) : ""
    };
  },

  toJSON(message: QueryGetGoogleInAppPurchaseOrderRequest): unknown {
    const obj: any = {};
    message.PurchaseToken !== undefined && (obj.PurchaseToken = message.PurchaseToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGoogleInAppPurchaseOrderRequest>, I>>(object: I): QueryGetGoogleInAppPurchaseOrderRequest {
    const message = createBaseQueryGetGoogleInAppPurchaseOrderRequest();
    message.PurchaseToken = object.PurchaseToken ?? "";
    return message;
  }

};

function createBaseQueryGetGoogleInAppPurchaseOrderResponse(): QueryGetGoogleInAppPurchaseOrderResponse {
  return {
    Order: undefined
  };
}

export const QueryGetGoogleInAppPurchaseOrderResponse = {
  encode(message: QueryGetGoogleInAppPurchaseOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Order !== undefined) {
      GoogleInAppPurchaseOrder.encode(message.Order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGoogleInAppPurchaseOrderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Order = GoogleInAppPurchaseOrder.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderResponse {
    return {
      Order: isSet(object.Order) ? GoogleInAppPurchaseOrder.fromJSON(object.Order) : undefined
    };
  },

  toJSON(message: QueryGetGoogleInAppPurchaseOrderResponse): unknown {
    const obj: any = {};
    message.Order !== undefined && (obj.Order = message.Order ? GoogleInAppPurchaseOrder.toJSON(message.Order) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGoogleInAppPurchaseOrderResponse>, I>>(object: I): QueryGetGoogleInAppPurchaseOrderResponse {
    const message = createBaseQueryGetGoogleInAppPurchaseOrderResponse();
    message.Order = object.Order !== undefined && object.Order !== null ? GoogleInAppPurchaseOrder.fromPartial(object.Order) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByItemRequest(): QueryListExecutionsByItemRequest {
  return {
    CookbookID: "",
    ItemID: "",
    pagination: undefined
  };
}

export const QueryListExecutionsByItemRequest = {
  encode(message: QueryListExecutionsByItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CookbookID !== "") {
      writer.uint32(10).string(message.CookbookID);
    }

    if (message.ItemID !== "") {
      writer.uint32(18).string(message.ItemID);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByItemRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string();
          break;

        case 2:
          message.ItemID = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByItemRequest {
    return {
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      ItemID: isSet(object.ItemID) ? String(object.ItemID) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByItemRequest): unknown {
    const obj: any = {};
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.ItemID !== undefined && (obj.ItemID = message.ItemID);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListExecutionsByItemRequest>, I>>(object: I): QueryListExecutionsByItemRequest {
    const message = createBaseQueryListExecutionsByItemRequest();
    message.CookbookID = object.CookbookID ?? "";
    message.ItemID = object.ItemID ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByItemResponse(): QueryListExecutionsByItemResponse {
  return {
    CompletedExecutions: [],
    PendingExecutions: [],
    pagination: undefined
  };
}

export const QueryListExecutionsByItemResponse = {
  encode(message: QueryListExecutionsByItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.CompletedExecutions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.PendingExecutions) {
      Execution.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByItemResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CompletedExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 2:
          message.PendingExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByItemResponse {
    return {
      CompletedExecutions: Array.isArray(object?.CompletedExecutions) ? object.CompletedExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      PendingExecutions: Array.isArray(object?.PendingExecutions) ? object.PendingExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByItemResponse): unknown {
    const obj: any = {};

    if (message.CompletedExecutions) {
      obj.CompletedExecutions = message.CompletedExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.CompletedExecutions = [];
    }

    if (message.PendingExecutions) {
      obj.PendingExecutions = message.PendingExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.PendingExecutions = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListExecutionsByItemResponse>, I>>(object: I): QueryListExecutionsByItemResponse {
    const message = createBaseQueryListExecutionsByItemResponse();
    message.CompletedExecutions = object.CompletedExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.PendingExecutions = object.PendingExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByRecipeRequest(): QueryListExecutionsByRecipeRequest {
  return {
    CookbookID: "",
    RecipeID: "",
    pagination: undefined
  };
}

export const QueryListExecutionsByRecipeRequest = {
  encode(message: QueryListExecutionsByRecipeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CookbookID !== "") {
      writer.uint32(10).string(message.CookbookID);
    }

    if (message.RecipeID !== "") {
      writer.uint32(18).string(message.RecipeID);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByRecipeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string();
          break;

        case 2:
          message.RecipeID = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByRecipeRequest {
    return {
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      RecipeID: isSet(object.RecipeID) ? String(object.RecipeID) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByRecipeRequest): unknown {
    const obj: any = {};
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.RecipeID !== undefined && (obj.RecipeID = message.RecipeID);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListExecutionsByRecipeRequest>, I>>(object: I): QueryListExecutionsByRecipeRequest {
    const message = createBaseQueryListExecutionsByRecipeRequest();
    message.CookbookID = object.CookbookID ?? "";
    message.RecipeID = object.RecipeID ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListExecutionsByRecipeResponse(): QueryListExecutionsByRecipeResponse {
  return {
    CompletedExecutions: [],
    PendingExecutions: [],
    pagination: undefined
  };
}

export const QueryListExecutionsByRecipeResponse = {
  encode(message: QueryListExecutionsByRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.CompletedExecutions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.PendingExecutions) {
      Execution.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListExecutionsByRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CompletedExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 2:
          message.PendingExecutions.push(Execution.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListExecutionsByRecipeResponse {
    return {
      CompletedExecutions: Array.isArray(object?.CompletedExecutions) ? object.CompletedExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      PendingExecutions: Array.isArray(object?.PendingExecutions) ? object.PendingExecutions.map((e: any) => Execution.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListExecutionsByRecipeResponse): unknown {
    const obj: any = {};

    if (message.CompletedExecutions) {
      obj.CompletedExecutions = message.CompletedExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.CompletedExecutions = [];
    }

    if (message.PendingExecutions) {
      obj.PendingExecutions = message.PendingExecutions.map(e => e ? Execution.toJSON(e) : undefined);
    } else {
      obj.PendingExecutions = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListExecutionsByRecipeResponse>, I>>(object: I): QueryListExecutionsByRecipeResponse {
    const message = createBaseQueryListExecutionsByRecipeResponse();
    message.CompletedExecutions = object.CompletedExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.PendingExecutions = object.PendingExecutions?.map(e => Execution.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetExecutionRequest(): QueryGetExecutionRequest {
  return {
    ID: ""
  };
}

export const QueryGetExecutionRequest = {
  encode(message: QueryGetExecutionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutionRequest();

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

  fromJSON(object: any): QueryGetExecutionRequest {
    return {
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: QueryGetExecutionRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExecutionRequest>, I>>(object: I): QueryGetExecutionRequest {
    const message = createBaseQueryGetExecutionRequest();
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseQueryGetExecutionResponse(): QueryGetExecutionResponse {
  return {
    Execution: undefined,
    Completed: false
  };
}

export const QueryGetExecutionResponse = {
  encode(message: QueryGetExecutionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Execution !== undefined) {
      Execution.encode(message.Execution, writer.uint32(10).fork()).ldelim();
    }

    if (message.Completed === true) {
      writer.uint32(16).bool(message.Completed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetExecutionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Execution = Execution.decode(reader, reader.uint32());
          break;

        case 2:
          message.Completed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetExecutionResponse {
    return {
      Execution: isSet(object.Execution) ? Execution.fromJSON(object.Execution) : undefined,
      Completed: isSet(object.Completed) ? Boolean(object.Completed) : false
    };
  },

  toJSON(message: QueryGetExecutionResponse): unknown {
    const obj: any = {};
    message.Execution !== undefined && (obj.Execution = message.Execution ? Execution.toJSON(message.Execution) : undefined);
    message.Completed !== undefined && (obj.Completed = message.Completed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExecutionResponse>, I>>(object: I): QueryGetExecutionResponse {
    const message = createBaseQueryGetExecutionResponse();
    message.Execution = object.Execution !== undefined && object.Execution !== null ? Execution.fromPartial(object.Execution) : undefined;
    message.Completed = object.Completed ?? false;
    return message;
  }

};

function createBaseQueryListRecipesByCookbookRequest(): QueryListRecipesByCookbookRequest {
  return {
    CookbookID: "",
    pagination: undefined
  };
}

export const QueryListRecipesByCookbookRequest = {
  encode(message: QueryListRecipesByCookbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CookbookID !== "") {
      writer.uint32(10).string(message.CookbookID);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRecipesByCookbookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListRecipesByCookbookRequest {
    return {
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListRecipesByCookbookRequest): unknown {
    const obj: any = {};
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListRecipesByCookbookRequest>, I>>(object: I): QueryListRecipesByCookbookRequest {
    const message = createBaseQueryListRecipesByCookbookRequest();
    message.CookbookID = object.CookbookID ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListRecipesByCookbookResponse(): QueryListRecipesByCookbookResponse {
  return {
    Recipes: [],
    pagination: undefined
  };
}

export const QueryListRecipesByCookbookResponse = {
  encode(message: QueryListRecipesByCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Recipes) {
      Recipe.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListRecipesByCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Recipes.push(Recipe.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListRecipesByCookbookResponse {
    return {
      Recipes: Array.isArray(object?.Recipes) ? object.Recipes.map((e: any) => Recipe.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListRecipesByCookbookResponse): unknown {
    const obj: any = {};

    if (message.Recipes) {
      obj.Recipes = message.Recipes.map(e => e ? Recipe.toJSON(e) : undefined);
    } else {
      obj.Recipes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListRecipesByCookbookResponse>, I>>(object: I): QueryListRecipesByCookbookResponse {
    const message = createBaseQueryListRecipesByCookbookResponse();
    message.Recipes = object.Recipes?.map(e => Recipe.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetItemRequest(): QueryGetItemRequest {
  return {
    CookbookID: "",
    ID: ""
  };
}

export const QueryGetItemRequest = {
  encode(message: QueryGetItemRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CookbookID !== "") {
      writer.uint32(10).string(message.CookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(26).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
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

  fromJSON(object: any): QueryGetItemRequest {
    return {
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {};
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetItemRequest>, I>>(object: I): QueryGetItemRequest {
    const message = createBaseQueryGetItemRequest();
    message.CookbookID = object.CookbookID ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseQueryGetItemResponse(): QueryGetItemResponse {
  return {
    Item: undefined
  };
}

export const QueryGetItemResponse = {
  encode(message: QueryGetItemResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Item !== undefined) {
      Item.encode(message.Item, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetItemResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Item = Item.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetItemResponse {
    return {
      Item: isSet(object.Item) ? Item.fromJSON(object.Item) : undefined
    };
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {};
    message.Item !== undefined && (obj.Item = message.Item ? Item.toJSON(message.Item) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetItemResponse>, I>>(object: I): QueryGetItemResponse {
    const message = createBaseQueryGetItemResponse();
    message.Item = object.Item !== undefined && object.Item !== null ? Item.fromPartial(object.Item) : undefined;
    return message;
  }

};

function createBaseQueryGetRecipeRequest(): QueryGetRecipeRequest {
  return {
    CookbookID: "",
    ID: ""
  };
}

export const QueryGetRecipeRequest = {
  encode(message: QueryGetRecipeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CookbookID !== "") {
      writer.uint32(10).string(message.CookbookID);
    }

    if (message.ID !== "") {
      writer.uint32(18).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRecipeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string();
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

  fromJSON(object: any): QueryGetRecipeRequest {
    return {
      CookbookID: isSet(object.CookbookID) ? String(object.CookbookID) : "",
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: QueryGetRecipeRequest): unknown {
    const obj: any = {};
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID);
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRecipeRequest>, I>>(object: I): QueryGetRecipeRequest {
    const message = createBaseQueryGetRecipeRequest();
    message.CookbookID = object.CookbookID ?? "";
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseQueryGetRecipeResponse(): QueryGetRecipeResponse {
  return {
    Recipe: undefined
  };
}

export const QueryGetRecipeResponse = {
  encode(message: QueryGetRecipeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Recipe !== undefined) {
      Recipe.encode(message.Recipe, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRecipeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Recipe = Recipe.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRecipeResponse {
    return {
      Recipe: isSet(object.Recipe) ? Recipe.fromJSON(object.Recipe) : undefined
    };
  },

  toJSON(message: QueryGetRecipeResponse): unknown {
    const obj: any = {};
    message.Recipe !== undefined && (obj.Recipe = message.Recipe ? Recipe.toJSON(message.Recipe) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRecipeResponse>, I>>(object: I): QueryGetRecipeResponse {
    const message = createBaseQueryGetRecipeResponse();
    message.Recipe = object.Recipe !== undefined && object.Recipe !== null ? Recipe.fromPartial(object.Recipe) : undefined;
    return message;
  }

};

function createBaseQueryListCookbooksByCreatorRequest(): QueryListCookbooksByCreatorRequest {
  return {
    creator: "",
    pagination: undefined
  };
}

export const QueryListCookbooksByCreatorRequest = {
  encode(message: QueryListCookbooksByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCookbooksByCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListCookbooksByCreatorRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListCookbooksByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListCookbooksByCreatorRequest>, I>>(object: I): QueryListCookbooksByCreatorRequest {
    const message = createBaseQueryListCookbooksByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryListCookbooksByCreatorResponse(): QueryListCookbooksByCreatorResponse {
  return {
    Cookbooks: [],
    pagination: undefined
  };
}

export const QueryListCookbooksByCreatorResponse = {
  encode(message: QueryListCookbooksByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Cookbooks) {
      Cookbook.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryListCookbooksByCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Cookbooks.push(Cookbook.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryListCookbooksByCreatorResponse {
    return {
      Cookbooks: Array.isArray(object?.Cookbooks) ? object.Cookbooks.map((e: any) => Cookbook.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryListCookbooksByCreatorResponse): unknown {
    const obj: any = {};

    if (message.Cookbooks) {
      obj.Cookbooks = message.Cookbooks.map(e => e ? Cookbook.toJSON(e) : undefined);
    } else {
      obj.Cookbooks = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryListCookbooksByCreatorResponse>, I>>(object: I): QueryListCookbooksByCreatorResponse {
    const message = createBaseQueryListCookbooksByCreatorResponse();
    message.Cookbooks = object.Cookbooks?.map(e => Cookbook.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetCookbookRequest(): QueryGetCookbookRequest {
  return {
    ID: ""
  };
}

export const QueryGetCookbookRequest = {
  encode(message: QueryGetCookbookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCookbookRequest();

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

  fromJSON(object: any): QueryGetCookbookRequest {
    return {
      ID: isSet(object.ID) ? String(object.ID) : ""
    };
  },

  toJSON(message: QueryGetCookbookRequest): unknown {
    const obj: any = {};
    message.ID !== undefined && (obj.ID = message.ID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCookbookRequest>, I>>(object: I): QueryGetCookbookRequest {
    const message = createBaseQueryGetCookbookRequest();
    message.ID = object.ID ?? "";
    return message;
  }

};

function createBaseQueryGetCookbookResponse(): QueryGetCookbookResponse {
  return {
    Cookbook: undefined
  };
}

export const QueryGetCookbookResponse = {
  encode(message: QueryGetCookbookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Cookbook !== undefined) {
      Cookbook.encode(message.Cookbook, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCookbookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Cookbook = Cookbook.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetCookbookResponse {
    return {
      Cookbook: isSet(object.Cookbook) ? Cookbook.fromJSON(object.Cookbook) : undefined
    };
  },

  toJSON(message: QueryGetCookbookResponse): unknown {
    const obj: any = {};
    message.Cookbook !== undefined && (obj.Cookbook = message.Cookbook ? Cookbook.toJSON(message.Cookbook) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCookbookResponse>, I>>(object: I): QueryGetCookbookResponse {
    const message = createBaseQueryGetCookbookResponse();
    message.Cookbook = object.Cookbook !== undefined && object.Cookbook !== null ? Cookbook.fromPartial(object.Cookbook) : undefined;
    return message;
  }

};