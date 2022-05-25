import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long } from "@osmonauts/helpers";
export interface GoogleInAppPurchasePackage {
  packageName: string;
  productID: string;
  amount: string;
}

/** CoinIssuer represents an entity or external blockchain */
export interface CoinIssuer {
  coinDenom: string;
  packages: GoogleInAppPurchasePackage[];
  googleInAppPurchasePubKey: string;
  entityName: string;
}
export interface PaymentProcessor {
  CoinDenom: string;

  /** pubKey is assumed to be ed25519 */
  pubKey: string;

  /** Represents the percentage retained by the payment processor when new coins are minted. In the range [0, 1), this amount is burned on-chain, actual fee is retained at the source. */
  processorPercentage: string;

  /** Represents the percentage distributed to stakers. In the range [0, 1). The sum with processingCut cannot exceed 1. */
  validatorsPercentage: string;
  name: string;
}

/** Params represent the parameters used by the pylons module */
export interface Params {
  coinIssuers: CoinIssuer[];
  paymentProcessors: PaymentProcessor[];
  recipeFeePercentage: string;
  itemTransferFeePercentage: string;
  updateItemStringFee: Coin;
  minTransferFee: string;
  maxTransferFee: string;
  updateUsernameFee: Coin;
  distrEpochIdentifier: string;
  engineVersion: Long;
}

function createBaseGoogleInAppPurchasePackage(): GoogleInAppPurchasePackage {
  return {
    packageName: "",
    productID: "",
    amount: ""
  };
}

export const GoogleInAppPurchasePackage = {
  encode(message: GoogleInAppPurchasePackage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packageName !== "") {
      writer.uint32(10).string(message.packageName);
    }

    if (message.productID !== "") {
      writer.uint32(18).string(message.productID);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GoogleInAppPurchasePackage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoogleInAppPurchasePackage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packageName = reader.string();
          break;

        case 2:
          message.productID = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GoogleInAppPurchasePackage {
    return {
      packageName: isSet(object.packageName) ? String(object.packageName) : "",
      productID: isSet(object.productID) ? String(object.productID) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: GoogleInAppPurchasePackage): unknown {
    const obj: any = {};
    message.packageName !== undefined && (obj.packageName = message.packageName);
    message.productID !== undefined && (obj.productID = message.productID);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GoogleInAppPurchasePackage>, I>>(object: I): GoogleInAppPurchasePackage {
    const message = createBaseGoogleInAppPurchasePackage();
    message.packageName = object.packageName ?? "";
    message.productID = object.productID ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseCoinIssuer(): CoinIssuer {
  return {
    coinDenom: "",
    packages: [],
    googleInAppPurchasePubKey: "",
    entityName: ""
  };
}

export const CoinIssuer = {
  encode(message: CoinIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinDenom !== "") {
      writer.uint32(10).string(message.coinDenom);
    }

    for (const v of message.packages) {
      GoogleInAppPurchasePackage.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.googleInAppPurchasePubKey !== "") {
      writer.uint32(26).string(message.googleInAppPurchasePubKey);
    }

    if (message.entityName !== "") {
      writer.uint32(34).string(message.entityName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinIssuer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coinDenom = reader.string();
          break;

        case 2:
          message.packages.push(GoogleInAppPurchasePackage.decode(reader, reader.uint32()));
          break;

        case 3:
          message.googleInAppPurchasePubKey = reader.string();
          break;

        case 4:
          message.entityName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CoinIssuer {
    return {
      coinDenom: isSet(object.coinDenom) ? String(object.coinDenom) : "",
      packages: Array.isArray(object?.packages) ? object.packages.map((e: any) => GoogleInAppPurchasePackage.fromJSON(e)) : [],
      googleInAppPurchasePubKey: isSet(object.googleInAppPurchasePubKey) ? String(object.googleInAppPurchasePubKey) : "",
      entityName: isSet(object.entityName) ? String(object.entityName) : ""
    };
  },

  toJSON(message: CoinIssuer): unknown {
    const obj: any = {};
    message.coinDenom !== undefined && (obj.coinDenom = message.coinDenom);

    if (message.packages) {
      obj.packages = message.packages.map(e => e ? GoogleInAppPurchasePackage.toJSON(e) : undefined);
    } else {
      obj.packages = [];
    }

    message.googleInAppPurchasePubKey !== undefined && (obj.googleInAppPurchasePubKey = message.googleInAppPurchasePubKey);
    message.entityName !== undefined && (obj.entityName = message.entityName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoinIssuer>, I>>(object: I): CoinIssuer {
    const message = createBaseCoinIssuer();
    message.coinDenom = object.coinDenom ?? "";
    message.packages = object.packages?.map(e => GoogleInAppPurchasePackage.fromPartial(e)) || [];
    message.googleInAppPurchasePubKey = object.googleInAppPurchasePubKey ?? "";
    message.entityName = object.entityName ?? "";
    return message;
  }

};

function createBasePaymentProcessor(): PaymentProcessor {
  return {
    CoinDenom: "",
    pubKey: "",
    processorPercentage: "",
    validatorsPercentage: "",
    name: ""
  };
}

export const PaymentProcessor = {
  encode(message: PaymentProcessor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CoinDenom !== "") {
      writer.uint32(10).string(message.CoinDenom);
    }

    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }

    if (message.processorPercentage !== "") {
      writer.uint32(26).string(message.processorPercentage);
    }

    if (message.validatorsPercentage !== "") {
      writer.uint32(34).string(message.validatorsPercentage);
    }

    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentProcessor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentProcessor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.CoinDenom = reader.string();
          break;

        case 2:
          message.pubKey = reader.string();
          break;

        case 3:
          message.processorPercentage = reader.string();
          break;

        case 4:
          message.validatorsPercentage = reader.string();
          break;

        case 5:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PaymentProcessor {
    return {
      CoinDenom: isSet(object.CoinDenom) ? String(object.CoinDenom) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
      processorPercentage: isSet(object.processorPercentage) ? String(object.processorPercentage) : "",
      validatorsPercentage: isSet(object.validatorsPercentage) ? String(object.validatorsPercentage) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: PaymentProcessor): unknown {
    const obj: any = {};
    message.CoinDenom !== undefined && (obj.CoinDenom = message.CoinDenom);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    message.processorPercentage !== undefined && (obj.processorPercentage = message.processorPercentage);
    message.validatorsPercentage !== undefined && (obj.validatorsPercentage = message.validatorsPercentage);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PaymentProcessor>, I>>(object: I): PaymentProcessor {
    const message = createBasePaymentProcessor();
    message.CoinDenom = object.CoinDenom ?? "";
    message.pubKey = object.pubKey ?? "";
    message.processorPercentage = object.processorPercentage ?? "";
    message.validatorsPercentage = object.validatorsPercentage ?? "";
    message.name = object.name ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    coinIssuers: [],
    paymentProcessors: [],
    recipeFeePercentage: "",
    itemTransferFeePercentage: "",
    updateItemStringFee: undefined,
    minTransferFee: "",
    maxTransferFee: "",
    updateUsernameFee: undefined,
    distrEpochIdentifier: "",
    engineVersion: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coinIssuers) {
      CoinIssuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.paymentProcessors) {
      PaymentProcessor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.recipeFeePercentage !== "") {
      writer.uint32(26).string(message.recipeFeePercentage);
    }

    if (message.itemTransferFeePercentage !== "") {
      writer.uint32(34).string(message.itemTransferFeePercentage);
    }

    if (message.updateItemStringFee !== undefined) {
      Coin.encode(message.updateItemStringFee, writer.uint32(42).fork()).ldelim();
    }

    if (message.minTransferFee !== "") {
      writer.uint32(50).string(message.minTransferFee);
    }

    if (message.maxTransferFee !== "") {
      writer.uint32(58).string(message.maxTransferFee);
    }

    if (message.updateUsernameFee !== undefined) {
      Coin.encode(message.updateUsernameFee, writer.uint32(66).fork()).ldelim();
    }

    if (message.distrEpochIdentifier !== "") {
      writer.uint32(74).string(message.distrEpochIdentifier);
    }

    if (!message.engineVersion.isZero()) {
      writer.uint32(80).uint64(message.engineVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coinIssuers.push(CoinIssuer.decode(reader, reader.uint32()));
          break;

        case 2:
          message.paymentProcessors.push(PaymentProcessor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.recipeFeePercentage = reader.string();
          break;

        case 4:
          message.itemTransferFeePercentage = reader.string();
          break;

        case 5:
          message.updateItemStringFee = Coin.decode(reader, reader.uint32());
          break;

        case 6:
          message.minTransferFee = reader.string();
          break;

        case 7:
          message.maxTransferFee = reader.string();
          break;

        case 8:
          message.updateUsernameFee = Coin.decode(reader, reader.uint32());
          break;

        case 9:
          message.distrEpochIdentifier = reader.string();
          break;

        case 10:
          message.engineVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      coinIssuers: Array.isArray(object?.coinIssuers) ? object.coinIssuers.map((e: any) => CoinIssuer.fromJSON(e)) : [],
      paymentProcessors: Array.isArray(object?.paymentProcessors) ? object.paymentProcessors.map((e: any) => PaymentProcessor.fromJSON(e)) : [],
      recipeFeePercentage: isSet(object.recipeFeePercentage) ? String(object.recipeFeePercentage) : "",
      itemTransferFeePercentage: isSet(object.itemTransferFeePercentage) ? String(object.itemTransferFeePercentage) : "",
      updateItemStringFee: isSet(object.updateItemStringFee) ? Coin.fromJSON(object.updateItemStringFee) : undefined,
      minTransferFee: isSet(object.minTransferFee) ? String(object.minTransferFee) : "",
      maxTransferFee: isSet(object.maxTransferFee) ? String(object.maxTransferFee) : "",
      updateUsernameFee: isSet(object.updateUsernameFee) ? Coin.fromJSON(object.updateUsernameFee) : undefined,
      distrEpochIdentifier: isSet(object.distrEpochIdentifier) ? String(object.distrEpochIdentifier) : "",
      engineVersion: isSet(object.engineVersion) ? Long.fromString(object.engineVersion) : Long.UZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.coinIssuers) {
      obj.coinIssuers = message.coinIssuers.map(e => e ? CoinIssuer.toJSON(e) : undefined);
    } else {
      obj.coinIssuers = [];
    }

    if (message.paymentProcessors) {
      obj.paymentProcessors = message.paymentProcessors.map(e => e ? PaymentProcessor.toJSON(e) : undefined);
    } else {
      obj.paymentProcessors = [];
    }

    message.recipeFeePercentage !== undefined && (obj.recipeFeePercentage = message.recipeFeePercentage);
    message.itemTransferFeePercentage !== undefined && (obj.itemTransferFeePercentage = message.itemTransferFeePercentage);
    message.updateItemStringFee !== undefined && (obj.updateItemStringFee = message.updateItemStringFee ? Coin.toJSON(message.updateItemStringFee) : undefined);
    message.minTransferFee !== undefined && (obj.minTransferFee = message.minTransferFee);
    message.maxTransferFee !== undefined && (obj.maxTransferFee = message.maxTransferFee);
    message.updateUsernameFee !== undefined && (obj.updateUsernameFee = message.updateUsernameFee ? Coin.toJSON(message.updateUsernameFee) : undefined);
    message.distrEpochIdentifier !== undefined && (obj.distrEpochIdentifier = message.distrEpochIdentifier);
    message.engineVersion !== undefined && (obj.engineVersion = (message.engineVersion || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.coinIssuers = object.coinIssuers?.map(e => CoinIssuer.fromPartial(e)) || [];
    message.paymentProcessors = object.paymentProcessors?.map(e => PaymentProcessor.fromPartial(e)) || [];
    message.recipeFeePercentage = object.recipeFeePercentage ?? "";
    message.itemTransferFeePercentage = object.itemTransferFeePercentage ?? "";
    message.updateItemStringFee = object.updateItemStringFee !== undefined && object.updateItemStringFee !== null ? Coin.fromPartial(object.updateItemStringFee) : undefined;
    message.minTransferFee = object.minTransferFee ?? "";
    message.maxTransferFee = object.maxTransferFee ?? "";
    message.updateUsernameFee = object.updateUsernameFee !== undefined && object.updateUsernameFee !== null ? Coin.fromPartial(object.updateUsernameFee) : undefined;
    message.distrEpochIdentifier = object.distrEpochIdentifier ?? "";
    message.engineVersion = object.engineVersion !== undefined && object.engineVersion !== null ? Long.fromValue(object.engineVersion) : Long.UZERO;
    return message;
  }

};