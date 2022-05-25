import { CoinInput, ItemInput } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface ItemRef {
    cookbookID: string;
    itemID: string;
}
export interface Trade {
    creator: string;
    ID: Long;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    coinOutputs: Coin[];
    itemOutputs: ItemRef[];
    extraInfo: string;
    receiver: string;
    tradedItemInputs: ItemRef[];
}
export declare const ItemRef: {
    encode(message: ItemRef, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemRef;
    fromJSON(object: any): ItemRef;
    toJSON(message: ItemRef): unknown;
    fromPartial<I extends {
        cookbookID?: string;
        itemID?: string;
    } & {
        cookbookID?: string;
        itemID?: string;
    } & Record<Exclude<keyof I, keyof ItemRef>, never>>(object: I): ItemRef;
};
export declare const Trade: {
    encode(message: Trade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: any;
        coinInputs?: {
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        itemInputs?: {
            ID?: string;
            doubles?: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }[];
            longs?: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }[];
            strings?: {
                key?: string;
                value?: string;
            }[];
        }[];
        coinOutputs?: {
            denom?: string;
            amount?: string;
        }[];
        itemOutputs?: {
            cookbookID?: string;
            itemID?: string;
        }[];
        extraInfo?: string;
        receiver?: string;
        tradedItemInputs?: {
            cookbookID?: string;
            itemID?: string;
        }[];
    } & {
        creator?: string;
        ID?: any;
        coinInputs?: {
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            coins?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["coinInputs"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coinInputs"][number]["coins"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["coinInputs"], keyof {
            coins?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        itemInputs?: {
            ID?: string;
            doubles?: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }[];
            longs?: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }[];
            strings?: {
                key?: string;
                value?: string;
            }[];
        }[] & ({
            ID?: string;
            doubles?: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }[];
            longs?: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }[];
            strings?: {
                key?: string;
                value?: string;
            }[];
        } & {
            ID?: string;
            doubles?: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }[] & ({
                key?: string;
                minValue?: string;
                maxValue?: string;
            } & {
                key?: string;
                minValue?: string;
                maxValue?: string;
            } & Record<Exclude<keyof I["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["doubles"], keyof {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }[]>, never>;
            longs?: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }[] & ({
                key?: string;
                minValue?: any;
                maxValue?: any;
            } & {
                key?: string;
                minValue?: any;
                maxValue?: any;
            } & Record<Exclude<keyof I["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["longs"], keyof {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }[]>, never>;
            strings?: {
                key?: string;
                value?: string;
            }[] & ({
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["strings"], keyof {
                key?: string;
                value?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["itemInputs"][number], keyof ItemInput>, never>)[] & Record<Exclude<keyof I["itemInputs"], keyof {
            ID?: string;
            doubles?: {
                key?: string;
                minValue?: string;
                maxValue?: string;
            }[];
            longs?: {
                key?: string;
                minValue?: any;
                maxValue?: any;
            }[];
            strings?: {
                key?: string;
                value?: string;
            }[];
        }[]>, never>;
        coinOutputs?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coinOutputs"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coinOutputs"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        itemOutputs?: {
            cookbookID?: string;
            itemID?: string;
        }[] & ({
            cookbookID?: string;
            itemID?: string;
        } & {
            cookbookID?: string;
            itemID?: string;
        } & Record<Exclude<keyof I["itemOutputs"][number], keyof ItemRef>, never>)[] & Record<Exclude<keyof I["itemOutputs"], keyof {
            cookbookID?: string;
            itemID?: string;
        }[]>, never>;
        extraInfo?: string;
        receiver?: string;
        tradedItemInputs?: {
            cookbookID?: string;
            itemID?: string;
        }[] & ({
            cookbookID?: string;
            itemID?: string;
        } & {
            cookbookID?: string;
            itemID?: string;
        } & Record<Exclude<keyof I["tradedItemInputs"][number], keyof ItemRef>, never>)[] & Record<Exclude<keyof I["tradedItemInputs"], keyof {
            cookbookID?: string;
            itemID?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Trade>, never>>(object: I): Trade;
};
