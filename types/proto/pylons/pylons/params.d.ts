import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
export declare const GoogleInAppPurchasePackage: {
    encode(message: GoogleInAppPurchasePackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleInAppPurchasePackage;
    fromJSON(object: any): GoogleInAppPurchasePackage;
    toJSON(message: GoogleInAppPurchasePackage): unknown;
    fromPartial<I extends {
        packageName?: string;
        productID?: string;
        amount?: string;
    } & {
        packageName?: string;
        productID?: string;
        amount?: string;
    } & Record<Exclude<keyof I, keyof GoogleInAppPurchasePackage>, never>>(object: I): GoogleInAppPurchasePackage;
};
export declare const CoinIssuer: {
    encode(message: CoinIssuer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinIssuer;
    fromJSON(object: any): CoinIssuer;
    toJSON(message: CoinIssuer): unknown;
    fromPartial<I extends {
        coinDenom?: string;
        packages?: {
            packageName?: string;
            productID?: string;
            amount?: string;
        }[];
        googleInAppPurchasePubKey?: string;
        entityName?: string;
    } & {
        coinDenom?: string;
        packages?: {
            packageName?: string;
            productID?: string;
            amount?: string;
        }[] & ({
            packageName?: string;
            productID?: string;
            amount?: string;
        } & {
            packageName?: string;
            productID?: string;
            amount?: string;
        } & Record<Exclude<keyof I["packages"][number], keyof GoogleInAppPurchasePackage>, never>)[] & Record<Exclude<keyof I["packages"], keyof {
            packageName?: string;
            productID?: string;
            amount?: string;
        }[]>, never>;
        googleInAppPurchasePubKey?: string;
        entityName?: string;
    } & Record<Exclude<keyof I, keyof CoinIssuer>, never>>(object: I): CoinIssuer;
};
export declare const PaymentProcessor: {
    encode(message: PaymentProcessor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentProcessor;
    fromJSON(object: any): PaymentProcessor;
    toJSON(message: PaymentProcessor): unknown;
    fromPartial<I extends {
        CoinDenom?: string;
        pubKey?: string;
        processorPercentage?: string;
        validatorsPercentage?: string;
        name?: string;
    } & {
        CoinDenom?: string;
        pubKey?: string;
        processorPercentage?: string;
        validatorsPercentage?: string;
        name?: string;
    } & Record<Exclude<keyof I, keyof PaymentProcessor>, never>>(object: I): PaymentProcessor;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        coinIssuers?: {
            coinDenom?: string;
            packages?: {
                packageName?: string;
                productID?: string;
                amount?: string;
            }[];
            googleInAppPurchasePubKey?: string;
            entityName?: string;
        }[];
        paymentProcessors?: {
            CoinDenom?: string;
            pubKey?: string;
            processorPercentage?: string;
            validatorsPercentage?: string;
            name?: string;
        }[];
        recipeFeePercentage?: string;
        itemTransferFeePercentage?: string;
        updateItemStringFee?: {
            denom?: string;
            amount?: string;
        };
        minTransferFee?: string;
        maxTransferFee?: string;
        updateUsernameFee?: {
            denom?: string;
            amount?: string;
        };
        distrEpochIdentifier?: string;
        engineVersion?: any;
    } & {
        coinIssuers?: {
            coinDenom?: string;
            packages?: {
                packageName?: string;
                productID?: string;
                amount?: string;
            }[];
            googleInAppPurchasePubKey?: string;
            entityName?: string;
        }[] & ({
            coinDenom?: string;
            packages?: {
                packageName?: string;
                productID?: string;
                amount?: string;
            }[];
            googleInAppPurchasePubKey?: string;
            entityName?: string;
        } & {
            coinDenom?: string;
            packages?: {
                packageName?: string;
                productID?: string;
                amount?: string;
            }[] & ({
                packageName?: string;
                productID?: string;
                amount?: string;
            } & {
                packageName?: string;
                productID?: string;
                amount?: string;
            } & Record<Exclude<keyof I["coinIssuers"][number]["packages"][number], keyof GoogleInAppPurchasePackage>, never>)[] & Record<Exclude<keyof I["coinIssuers"][number]["packages"], keyof {
                packageName?: string;
                productID?: string;
                amount?: string;
            }[]>, never>;
            googleInAppPurchasePubKey?: string;
            entityName?: string;
        } & Record<Exclude<keyof I["coinIssuers"][number], keyof CoinIssuer>, never>)[] & Record<Exclude<keyof I["coinIssuers"], keyof {
            coinDenom?: string;
            packages?: {
                packageName?: string;
                productID?: string;
                amount?: string;
            }[];
            googleInAppPurchasePubKey?: string;
            entityName?: string;
        }[]>, never>;
        paymentProcessors?: {
            CoinDenom?: string;
            pubKey?: string;
            processorPercentage?: string;
            validatorsPercentage?: string;
            name?: string;
        }[] & ({
            CoinDenom?: string;
            pubKey?: string;
            processorPercentage?: string;
            validatorsPercentage?: string;
            name?: string;
        } & {
            CoinDenom?: string;
            pubKey?: string;
            processorPercentage?: string;
            validatorsPercentage?: string;
            name?: string;
        } & Record<Exclude<keyof I["paymentProcessors"][number], keyof PaymentProcessor>, never>)[] & Record<Exclude<keyof I["paymentProcessors"], keyof {
            CoinDenom?: string;
            pubKey?: string;
            processorPercentage?: string;
            validatorsPercentage?: string;
            name?: string;
        }[]>, never>;
        recipeFeePercentage?: string;
        itemTransferFeePercentage?: string;
        updateItemStringFee?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["updateItemStringFee"], keyof Coin>, never>;
        minTransferFee?: string;
        maxTransferFee?: string;
        updateUsernameFee?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["updateUsernameFee"], keyof Coin>, never>;
        distrEpochIdentifier?: string;
        engineVersion?: any;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
