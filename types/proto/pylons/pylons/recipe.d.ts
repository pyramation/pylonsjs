import { Coin } from "../../cosmos/base/v1beta1/coin";
import { StringKeyValue } from "./item";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
export declare const DoubleInputParam: {
    encode(message: DoubleInputParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleInputParam;
    fromJSON(object: any): DoubleInputParam;
    toJSON(message: DoubleInputParam): unknown;
    fromPartial<I extends {
        key?: string;
        minValue?: string;
        maxValue?: string;
    } & {
        key?: string;
        minValue?: string;
        maxValue?: string;
    } & Record<Exclude<keyof I, keyof DoubleInputParam>, never>>(object: I): DoubleInputParam;
};
export declare const LongInputParam: {
    encode(message: LongInputParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongInputParam;
    fromJSON(object: any): LongInputParam;
    toJSON(message: LongInputParam): unknown;
    fromPartial<I extends {
        key?: string;
        minValue?: any;
        maxValue?: any;
    } & {
        key?: string;
        minValue?: any;
        maxValue?: any;
    } & Record<Exclude<keyof I, keyof LongInputParam>, never>>(object: I): LongInputParam;
};
export declare const StringInputParam: {
    encode(message: StringInputParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringInputParam;
    fromJSON(object: any): StringInputParam;
    toJSON(message: StringInputParam): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
    } & {
        key?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof StringInputParam>, never>>(object: I): StringInputParam;
};
export declare const ItemInput: {
    encode(message: ItemInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemInput;
    fromJSON(object: any): ItemInput;
    toJSON(message: ItemInput): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["doubles"][number], keyof DoubleInputParam>, never>)[] & Record<Exclude<keyof I["doubles"], keyof {
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
        } & Record<Exclude<keyof I["longs"][number], keyof LongInputParam>, never>)[] & Record<Exclude<keyof I["longs"], keyof {
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
        } & Record<Exclude<keyof I["strings"][number], keyof StringInputParam>, never>)[] & Record<Exclude<keyof I["strings"], keyof {
            key?: string;
            value?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ItemInput>, never>>(object: I): ItemInput;
};
export declare const DoubleWeightRange: {
    encode(message: DoubleWeightRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleWeightRange;
    fromJSON(object: any): DoubleWeightRange;
    toJSON(message: DoubleWeightRange): unknown;
    fromPartial<I extends {
        lower?: string;
        upper?: string;
        weight?: any;
    } & {
        lower?: string;
        upper?: string;
        weight?: any;
    } & Record<Exclude<keyof I, keyof DoubleWeightRange>, never>>(object: I): DoubleWeightRange;
};
export declare const DoubleParam: {
    encode(message: DoubleParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleParam;
    fromJSON(object: any): DoubleParam;
    toJSON(message: DoubleParam): unknown;
    fromPartial<I extends {
        key?: string;
        weightRanges?: {
            lower?: string;
            upper?: string;
            weight?: any;
        }[];
        program?: string;
    } & {
        key?: string;
        weightRanges?: {
            lower?: string;
            upper?: string;
            weight?: any;
        }[] & ({
            lower?: string;
            upper?: string;
            weight?: any;
        } & {
            lower?: string;
            upper?: string;
            weight?: any;
        } & Record<Exclude<keyof I["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["weightRanges"], keyof {
            lower?: string;
            upper?: string;
            weight?: any;
        }[]>, never>;
        program?: string;
    } & Record<Exclude<keyof I, keyof DoubleParam>, never>>(object: I): DoubleParam;
};
export declare const IntWeightRange: {
    encode(message: IntWeightRange, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntWeightRange;
    fromJSON(object: any): IntWeightRange;
    toJSON(message: IntWeightRange): unknown;
    fromPartial<I extends {
        lower?: any;
        upper?: any;
        weight?: any;
    } & {
        lower?: any;
        upper?: any;
        weight?: any;
    } & Record<Exclude<keyof I, keyof IntWeightRange>, never>>(object: I): IntWeightRange;
};
export declare const LongParam: {
    encode(message: LongParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongParam;
    fromJSON(object: any): LongParam;
    toJSON(message: LongParam): unknown;
    fromPartial<I extends {
        key?: string;
        weightRanges?: {
            lower?: any;
            upper?: any;
            weight?: any;
        }[];
        program?: string;
    } & {
        key?: string;
        weightRanges?: {
            lower?: any;
            upper?: any;
            weight?: any;
        }[] & ({
            lower?: any;
            upper?: any;
            weight?: any;
        } & {
            lower?: any;
            upper?: any;
            weight?: any;
        } & Record<Exclude<keyof I["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["weightRanges"], keyof {
            lower?: any;
            upper?: any;
            weight?: any;
        }[]>, never>;
        program?: string;
    } & Record<Exclude<keyof I, keyof LongParam>, never>>(object: I): LongParam;
};
export declare const StringParam: {
    encode(message: StringParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringParam;
    fromJSON(object: any): StringParam;
    toJSON(message: StringParam): unknown;
    fromPartial<I extends {
        key?: string;
        value?: string;
        program?: string;
    } & {
        key?: string;
        value?: string;
        program?: string;
    } & Record<Exclude<keyof I, keyof StringParam>, never>>(object: I): StringParam;
};
export declare const CoinOutput: {
    encode(message: CoinOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinOutput;
    fromJSON(object: any): CoinOutput;
    toJSON(message: CoinOutput): unknown;
    fromPartial<I extends {
        ID?: string;
        coin?: {
            denom?: string;
            amount?: string;
        };
        program?: string;
    } & {
        ID?: string;
        coin?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coin"], keyof Coin>, never>;
        program?: string;
    } & Record<Exclude<keyof I, keyof CoinOutput>, never>>(object: I): CoinOutput;
};
export declare const ItemOutput: {
    encode(message: ItemOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemOutput;
    fromJSON(object: any): ItemOutput;
    toJSON(message: ItemOutput): unknown;
    fromPartial<I extends {
        ID?: string;
        doubles?: {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        }[];
        longs?: {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        }[];
        strings?: {
            key?: string;
            value?: string;
            program?: string;
        }[];
        mutableStrings?: {
            Key?: string;
            Value?: string;
        }[];
        transferFee?: {
            denom?: string;
            amount?: string;
        }[];
        tradePercentage?: string;
        quantity?: any;
        amountMinted?: any;
        tradeable?: boolean;
    } & {
        ID?: string;
        doubles?: {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        }[] & ({
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        } & {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[] & ({
                lower?: string;
                upper?: string;
                weight?: any;
            } & {
                lower?: string;
                upper?: string;
                weight?: any;
            } & Record<Exclude<keyof I["doubles"][number]["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["doubles"][number]["weightRanges"], keyof {
                lower?: string;
                upper?: string;
                weight?: any;
            }[]>, never>;
            program?: string;
        } & Record<Exclude<keyof I["doubles"][number], keyof DoubleParam>, never>)[] & Record<Exclude<keyof I["doubles"], keyof {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        }[]>, never>;
        longs?: {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        }[] & ({
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        } & {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[] & ({
                lower?: any;
                upper?: any;
                weight?: any;
            } & {
                lower?: any;
                upper?: any;
                weight?: any;
            } & Record<Exclude<keyof I["longs"][number]["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["longs"][number]["weightRanges"], keyof {
                lower?: any;
                upper?: any;
                weight?: any;
            }[]>, never>;
            program?: string;
        } & Record<Exclude<keyof I["longs"][number], keyof LongParam>, never>)[] & Record<Exclude<keyof I["longs"], keyof {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        }[]>, never>;
        strings?: {
            key?: string;
            value?: string;
            program?: string;
        }[] & ({
            key?: string;
            value?: string;
            program?: string;
        } & {
            key?: string;
            value?: string;
            program?: string;
        } & Record<Exclude<keyof I["strings"][number], keyof StringParam>, never>)[] & Record<Exclude<keyof I["strings"], keyof {
            key?: string;
            value?: string;
            program?: string;
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
        quantity?: any;
        amountMinted?: any;
        tradeable?: boolean;
    } & Record<Exclude<keyof I, keyof ItemOutput>, never>>(object: I): ItemOutput;
};
export declare const ItemModifyOutput: {
    encode(message: ItemModifyOutput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemModifyOutput;
    fromJSON(object: any): ItemModifyOutput;
    toJSON(message: ItemModifyOutput): unknown;
    fromPartial<I extends {
        ID?: string;
        itemInputRef?: string;
        doubles?: {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        }[];
        longs?: {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        }[];
        strings?: {
            key?: string;
            value?: string;
            program?: string;
        }[];
        mutableStrings?: {
            Key?: string;
            Value?: string;
        }[];
        transferFee?: {
            denom?: string;
            amount?: string;
        }[];
        tradePercentage?: string;
        quantity?: any;
        amountMinted?: any;
        tradeable?: boolean;
    } & {
        ID?: string;
        itemInputRef?: string;
        doubles?: {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        }[] & ({
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        } & {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[] & ({
                lower?: string;
                upper?: string;
                weight?: any;
            } & {
                lower?: string;
                upper?: string;
                weight?: any;
            } & Record<Exclude<keyof I["doubles"][number]["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["doubles"][number]["weightRanges"], keyof {
                lower?: string;
                upper?: string;
                weight?: any;
            }[]>, never>;
            program?: string;
        } & Record<Exclude<keyof I["doubles"][number], keyof DoubleParam>, never>)[] & Record<Exclude<keyof I["doubles"], keyof {
            key?: string;
            weightRanges?: {
                lower?: string;
                upper?: string;
                weight?: any;
            }[];
            program?: string;
        }[]>, never>;
        longs?: {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        }[] & ({
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        } & {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[] & ({
                lower?: any;
                upper?: any;
                weight?: any;
            } & {
                lower?: any;
                upper?: any;
                weight?: any;
            } & Record<Exclude<keyof I["longs"][number]["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["longs"][number]["weightRanges"], keyof {
                lower?: any;
                upper?: any;
                weight?: any;
            }[]>, never>;
            program?: string;
        } & Record<Exclude<keyof I["longs"][number], keyof LongParam>, never>)[] & Record<Exclude<keyof I["longs"], keyof {
            key?: string;
            weightRanges?: {
                lower?: any;
                upper?: any;
                weight?: any;
            }[];
            program?: string;
        }[]>, never>;
        strings?: {
            key?: string;
            value?: string;
            program?: string;
        }[] & ({
            key?: string;
            value?: string;
            program?: string;
        } & {
            key?: string;
            value?: string;
            program?: string;
        } & Record<Exclude<keyof I["strings"][number], keyof StringParam>, never>)[] & Record<Exclude<keyof I["strings"], keyof {
            key?: string;
            value?: string;
            program?: string;
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
        quantity?: any;
        amountMinted?: any;
        tradeable?: boolean;
    } & Record<Exclude<keyof I, keyof ItemModifyOutput>, never>>(object: I): ItemModifyOutput;
};
export declare const EntriesList: {
    encode(message: EntriesList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EntriesList;
    fromJSON(object: any): EntriesList;
    toJSON(message: EntriesList): unknown;
    fromPartial<I extends {
        coinOutputs?: {
            ID?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
            program?: string;
        }[];
        itemOutputs?: {
            ID?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        }[];
        itemModifyOutputs?: {
            ID?: string;
            itemInputRef?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        }[];
    } & {
        coinOutputs?: {
            ID?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
            program?: string;
        }[] & ({
            ID?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
            program?: string;
        } & {
            ID?: string;
            coin?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["coinOutputs"][number]["coin"], keyof Coin>, never>;
            program?: string;
        } & Record<Exclude<keyof I["coinOutputs"][number], keyof CoinOutput>, never>)[] & Record<Exclude<keyof I["coinOutputs"], keyof {
            ID?: string;
            coin?: {
                denom?: string;
                amount?: string;
            };
            program?: string;
        }[]>, never>;
        itemOutputs?: {
            ID?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        }[] & ({
            ID?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        } & {
            ID?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[] & ({
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            } & {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[] & ({
                    lower?: string;
                    upper?: string;
                    weight?: any;
                } & {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                } & Record<Exclude<keyof I["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[]>, never>;
                program?: string;
            } & Record<Exclude<keyof I["itemOutputs"][number]["doubles"][number], keyof DoubleParam>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["doubles"], keyof {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[]>, never>;
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[] & ({
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            } & {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[] & ({
                    lower?: any;
                    upper?: any;
                    weight?: any;
                } & {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                } & Record<Exclude<keyof I["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[]>, never>;
                program?: string;
            } & Record<Exclude<keyof I["itemOutputs"][number]["longs"][number], keyof LongParam>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["longs"], keyof {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[]>, never>;
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[] & ({
                key?: string;
                value?: string;
                program?: string;
            } & {
                key?: string;
                value?: string;
                program?: string;
            } & Record<Exclude<keyof I["itemOutputs"][number]["strings"][number], keyof StringParam>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["strings"], keyof {
                key?: string;
                value?: string;
                program?: string;
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
            } & Record<Exclude<keyof I["itemOutputs"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["mutableStrings"], keyof {
                Key?: string;
                Value?: string;
            }[]>, never>;
            transferFee?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["itemOutputs"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["itemOutputs"][number]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        } & Record<Exclude<keyof I["itemOutputs"][number], keyof ItemOutput>, never>)[] & Record<Exclude<keyof I["itemOutputs"], keyof {
            ID?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        }[]>, never>;
        itemModifyOutputs?: {
            ID?: string;
            itemInputRef?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        }[] & ({
            ID?: string;
            itemInputRef?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        } & {
            ID?: string;
            itemInputRef?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[] & ({
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            } & {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[] & ({
                    lower?: string;
                    upper?: string;
                    weight?: any;
                } & {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                } & Record<Exclude<keyof I["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[]>, never>;
                program?: string;
            } & Record<Exclude<keyof I["itemModifyOutputs"][number]["doubles"][number], keyof DoubleParam>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["doubles"], keyof {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[]>, never>;
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[] & ({
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            } & {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[] & ({
                    lower?: any;
                    upper?: any;
                    weight?: any;
                } & {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                } & Record<Exclude<keyof I["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[]>, never>;
                program?: string;
            } & Record<Exclude<keyof I["itemModifyOutputs"][number]["longs"][number], keyof LongParam>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["longs"], keyof {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[]>, never>;
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[] & ({
                key?: string;
                value?: string;
                program?: string;
            } & {
                key?: string;
                value?: string;
                program?: string;
            } & Record<Exclude<keyof I["itemModifyOutputs"][number]["strings"][number], keyof StringParam>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["strings"], keyof {
                key?: string;
                value?: string;
                program?: string;
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
            } & Record<Exclude<keyof I["itemModifyOutputs"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["mutableStrings"], keyof {
                Key?: string;
                Value?: string;
            }[]>, never>;
            transferFee?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["itemModifyOutputs"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"][number]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        } & Record<Exclude<keyof I["itemModifyOutputs"][number], keyof ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["itemModifyOutputs"], keyof {
            ID?: string;
            itemInputRef?: string;
            doubles?: {
                key?: string;
                weightRanges?: {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                }[];
                program?: string;
            }[];
            longs?: {
                key?: string;
                weightRanges?: {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                }[];
                program?: string;
            }[];
            strings?: {
                key?: string;
                value?: string;
                program?: string;
            }[];
            mutableStrings?: {
                Key?: string;
                Value?: string;
            }[];
            transferFee?: {
                denom?: string;
                amount?: string;
            }[];
            tradePercentage?: string;
            quantity?: any;
            amountMinted?: any;
            tradeable?: boolean;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof EntriesList>, never>>(object: I): EntriesList;
};
export declare const WeightedOutputs: {
    encode(message: WeightedOutputs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedOutputs;
    fromJSON(object: any): WeightedOutputs;
    toJSON(message: WeightedOutputs): unknown;
    fromPartial<I extends {
        entryIDs?: string[];
        weight?: any;
    } & {
        entryIDs?: string[] & string[] & Record<Exclude<keyof I["entryIDs"], keyof string[]>, never>;
        weight?: any;
    } & Record<Exclude<keyof I, keyof WeightedOutputs>, never>>(object: I): WeightedOutputs;
};
export declare const CoinInput: {
    encode(message: CoinInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinInput;
    fromJSON(object: any): CoinInput;
    toJSON(message: CoinInput): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "coins">, never>>(object: I): CoinInput;
};
export declare const Recipe: {
    encode(message: Recipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Recipe;
    fromJSON(object: any): Recipe;
    toJSON(message: Recipe): unknown;
    fromPartial<I extends {
        cookbookID?: string;
        ID?: string;
        nodeVersion?: any;
        name?: string;
        description?: string;
        version?: string;
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
        entries?: {
            coinOutputs?: {
                ID?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            }[];
            itemOutputs?: {
                ID?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[];
            itemModifyOutputs?: {
                ID?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[];
        };
        outputs?: {
            entryIDs?: string[];
            weight?: any;
        }[];
        blockInterval?: any;
        costPerBlock?: {
            denom?: string;
            amount?: string;
        };
        enabled?: boolean;
        extraInfo?: string;
    } & {
        cookbookID?: string;
        ID?: string;
        nodeVersion?: any;
        name?: string;
        description?: string;
        version?: string;
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
            } & Record<Exclude<keyof I["itemInputs"][number]["doubles"][number], keyof DoubleInputParam>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["itemInputs"][number]["longs"][number], keyof LongInputParam>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["longs"], keyof {
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
            } & Record<Exclude<keyof I["itemInputs"][number]["strings"][number], keyof StringInputParam>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["strings"], keyof {
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
        entries?: {
            coinOutputs?: {
                ID?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            }[];
            itemOutputs?: {
                ID?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[];
            itemModifyOutputs?: {
                ID?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[];
        } & {
            coinOutputs?: {
                ID?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            }[] & ({
                ID?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            } & {
                ID?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["entries"]["coinOutputs"][number]["coin"], keyof Coin>, never>;
                program?: string;
            } & Record<Exclude<keyof I["entries"]["coinOutputs"][number], keyof CoinOutput>, never>)[] & Record<Exclude<keyof I["entries"]["coinOutputs"], keyof {
                ID?: string;
                coin?: {
                    denom?: string;
                    amount?: string;
                };
                program?: string;
            }[]>, never>;
            itemOutputs?: {
                ID?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[] & ({
                ID?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            } & {
                ID?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[] & ({
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                } & {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[] & ({
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    } & {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number], keyof DoubleParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"], keyof {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[]>, never>;
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[] & ({
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                } & {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[] & ({
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    } & {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number], keyof LongParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"], keyof {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[]>, never>;
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                    program?: string;
                } & {
                    key?: string;
                    value?: string;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["strings"][number], keyof StringParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                    program?: string;
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
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["transferFee"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            } & Record<Exclude<keyof I["entries"]["itemOutputs"][number], keyof ItemOutput>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"], keyof {
                ID?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[]>, never>;
            itemModifyOutputs?: {
                ID?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[] & ({
                ID?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            } & {
                ID?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[] & ({
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                } & {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[] & ({
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    } & {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof DoubleParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[]>, never>;
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[] & ({
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                } & {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[] & ({
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    } & {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof IntWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number], keyof LongParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"], keyof {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[]>, never>;
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[] & ({
                    key?: string;
                    value?: string;
                    program?: string;
                } & {
                    key?: string;
                    value?: string;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["strings"][number], keyof StringParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                    program?: string;
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
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[] & ({
                    denom?: string;
                    amount?: string;
                } & {
                    denom?: string;
                    amount?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number], keyof ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"], keyof {
                ID?: string;
                itemInputRef?: string;
                doubles?: {
                    key?: string;
                    weightRanges?: {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                longs?: {
                    key?: string;
                    weightRanges?: {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[];
                    program?: string;
                }[];
                strings?: {
                    key?: string;
                    value?: string;
                    program?: string;
                }[];
                mutableStrings?: {
                    Key?: string;
                    Value?: string;
                }[];
                transferFee?: {
                    denom?: string;
                    amount?: string;
                }[];
                tradePercentage?: string;
                quantity?: any;
                amountMinted?: any;
                tradeable?: boolean;
            }[]>, never>;
        } & Record<Exclude<keyof I["entries"], keyof EntriesList>, never>;
        outputs?: {
            entryIDs?: string[];
            weight?: any;
        }[] & ({
            entryIDs?: string[];
            weight?: any;
        } & {
            entryIDs?: string[] & string[] & Record<Exclude<keyof I["outputs"][number]["entryIDs"], keyof string[]>, never>;
            weight?: any;
        } & Record<Exclude<keyof I["outputs"][number], keyof WeightedOutputs>, never>)[] & Record<Exclude<keyof I["outputs"], keyof {
            entryIDs?: string[];
            weight?: any;
        }[]>, never>;
        blockInterval?: any;
        costPerBlock?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["costPerBlock"], keyof Coin>, never>;
        enabled?: boolean;
        extraInfo?: string;
    } & Record<Exclude<keyof I, keyof Recipe>, never>>(object: I): Recipe;
};
