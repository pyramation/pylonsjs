import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface GoogleInAppPurchaseOrder {
  creator: string;
  productID: string;
  purchaseToken: string;
  receiptDataBase64: string;
  signature: string;
}

function createBaseGoogleInAppPurchaseOrder(): GoogleInAppPurchaseOrder {
  return {
    creator: "",
    productID: "",
    purchaseToken: "",
    receiptDataBase64: "",
    signature: ""
  };
}

export const GoogleInAppPurchaseOrder = {
  encode(message: GoogleInAppPurchaseOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleInAppPurchaseOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleInAppPurchaseOrder();

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

  fromJSON(object: any): GoogleInAppPurchaseOrder {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      productID: isSet(object.productID) ? String(object.productID) : "",
      purchaseToken: isSet(object.purchaseToken) ? String(object.purchaseToken) : "",
      receiptDataBase64: isSet(object.receiptDataBase64) ? String(object.receiptDataBase64) : "",
      signature: isSet(object.signature) ? String(object.signature) : ""
    };
  },

  toJSON(message: GoogleInAppPurchaseOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.productID !== undefined && (obj.productID = message.productID);
    message.purchaseToken !== undefined && (obj.purchaseToken = message.purchaseToken);
    message.receiptDataBase64 !== undefined && (obj.receiptDataBase64 = message.receiptDataBase64);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GoogleInAppPurchaseOrder>, I>>(object: I): GoogleInAppPurchaseOrder {
    const message = createBaseGoogleInAppPurchaseOrder();
    message.creator = object.creator ?? "";
    message.productID = object.productID ?? "";
    message.purchaseToken = object.purchaseToken ?? "";
    message.receiptDataBase64 = object.receiptDataBase64 ?? "";
    message.signature = object.signature ?? "";
    return message;
  }

};