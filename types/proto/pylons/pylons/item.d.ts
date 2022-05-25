import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
export declare const DoubleKeyValue: {
    encode(message: DoubleKeyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleKeyValue;
    fromJSON(object: any): DoubleKeyValue;
    toJSON(message: DoubleKeyValue): unknown;
    fromPartial<I extends {
        Key?: string;
        Value?: string;
    } & {
        Key?: string;
        Value?: string;
    } & Record<Exclude<keyof I, keyof DoubleKeyValue>, never>>(object: I): DoubleKeyValue;
};
export declare const LongKeyValue: {
    encode(message: LongKeyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongKeyValue;
    fromJSON(object: any): LongKeyValue;
    toJSON(message: LongKeyValue): unknown;
    fromPartial<I extends {
        Key?: string;
        Value?: any;
    } & {
        Key?: string;
        Value?: any;
    } & Record<Exclude<keyof I, keyof LongKeyValue>, never>>(object: I): LongKeyValue;
};
export declare const StringKeyValue: {
    encode(message: StringKeyValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringKeyValue;
    fromJSON(object: any): StringKeyValue;
    toJSON(message: StringKeyValue): unknown;
    fromPartial<I extends {
        Key?: string;
        Value?: string;
    } & {
        Key?: string;
        Value?: string;
    } & Record<Exclude<keyof I, keyof StringKeyValue>, never>>(object: I): StringKeyValue;
};
export declare const Item: {
    encode(message: Item, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Item;
    fromJSON(object: any): Item;
    toJSON(message: Item): unknown;
    fromPartial<I extends {
        owner?: string;
        cookbookID?: string;
        ID?: string;
        nodeVersion?: any;
        doubles?: {
            Key?: string;
            Value?: string;
        }[];
        longs?: {
            Key?: string;
            Value?: any;
        }[];
        strings?: {
            Key?: string;
            Value?: string;
        }[];
        mutableStrings?: {
            Key?: string;
            Value?: string;
        }[];
        tradeable?: boolean;
        lastUpdate?: any;
        transferFee?: {
            denom?: string;
            amount?: string;
        }[];
        tradePercentage?: string;
    } & {
        owner?: string;
        cookbookID?: string;
        ID?: string;
        nodeVersion?: any;
        doubles?: {
            Key?: string;
            Value?: string;
        }[] & ({
            Key?: string;
            Value?: string;
        } & {
            Key?: string;
            Value?: string;
        } & Record<Exclude<keyof I["doubles"][number], keyof DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["doubles"], keyof {
            Key?: string;
            Value?: string;
        }[]>, never>;
        longs?: {
            Key?: string;
            Value?: any;
        }[] & ({
            Key?: string;
            Value?: any;
        } & {
            Key?: string;
            Value?: any;
        } & Record<Exclude<keyof I["longs"][number], keyof LongKeyValue>, never>)[] & Record<Exclude<keyof I["longs"], keyof {
            Key?: string;
            Value?: any;
        }[]>, never>;
        strings?: {
            Key?: string;
            Value?: string;
        }[] & ({
            Key?: string;
            Value?: string;
        } & {
            Key?: string;
            Value?: string;
        } & Record<Exclude<keyof I["strings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["strings"], keyof {
            Key?: string;
            Value?: string;
        }[]>, never>;
        mutableStrings?: {
            Key?: string;
            Value?: string;
        }[] & ({
            Key?: string;
            Value?: string;
        } & {
            Key?: string;
            Value?: string;
        } & Record<Exclude<keyof I["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["mutableStrings"], keyof {
            Key?: string;
            Value?: string;
        }[]>, never>;
        tradeable?: boolean;
        lastUpdate?: any;
        transferFee?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["transferFee"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        tradePercentage?: string;
    } & Record<Exclude<keyof I, keyof Item>, never>>(object: I): Item;
};
