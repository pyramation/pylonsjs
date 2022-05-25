import { DoubleKeyValue, LongKeyValue, StringKeyValue } from "./item";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface ItemRecord {
    ID: string;
    doubles: DoubleKeyValue[];
    longs: LongKeyValue[];
    strings: StringKeyValue[];
}
export interface Execution {
    creator: string;
    ID: string;
    recipeID: string;
    cookbookID: string;
    recipeVersion: string;
    nodeVersion: Long;
    blockHeight: Long;
    itemInputs: ItemRecord[];
    coinInputs: Coin[];
    coinOutputs: Coin[];
    itemOutputIDs: string[];
    itemModifyOutputIDs: string[];
}
export declare const ItemRecord: {
    encode(message: ItemRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ItemRecord;
    fromJSON(object: any): ItemRecord;
    toJSON(message: ItemRecord): unknown;
    fromPartial<I extends {
        ID?: string;
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
    } & {
        ID?: string;
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
    } & Record<Exclude<keyof I, keyof ItemRecord>, never>>(object: I): ItemRecord;
};
export declare const Execution: {
    encode(message: Execution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Execution;
    fromJSON(object: any): Execution;
    toJSON(message: Execution): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
        recipeID?: string;
        cookbookID?: string;
        recipeVersion?: string;
        nodeVersion?: any;
        blockHeight?: any;
        itemInputs?: {
            ID?: string;
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
        }[];
        coinInputs?: {
            denom?: string;
            amount?: string;
        }[];
        coinOutputs?: {
            denom?: string;
            amount?: string;
        }[];
        itemOutputIDs?: string[];
        itemModifyOutputIDs?: string[];
    } & {
        creator?: string;
        ID?: string;
        recipeID?: string;
        cookbookID?: string;
        recipeVersion?: string;
        nodeVersion?: any;
        blockHeight?: any;
        itemInputs?: {
            ID?: string;
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
        }[] & ({
            ID?: string;
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
        } & {
            ID?: string;
            doubles?: {
                Key?: string;
                Value?: string;
            }[] & ({
                Key?: string;
                Value?: string;
            } & {
                Key?: string;
                Value?: string;
            } & Record<Exclude<keyof I["itemInputs"][number]["doubles"][number], keyof DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["itemInputs"][number]["longs"][number], keyof LongKeyValue>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["longs"], keyof {
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
            } & Record<Exclude<keyof I["itemInputs"][number]["strings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["itemInputs"][number]["strings"], keyof {
                Key?: string;
                Value?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["itemInputs"][number], keyof ItemRecord>, never>)[] & Record<Exclude<keyof I["itemInputs"], keyof {
            ID?: string;
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
        }[]>, never>;
        coinInputs?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coinInputs"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coinInputs"], keyof {
            denom?: string;
            amount?: string;
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
        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["itemOutputIDs"], keyof string[]>, never>;
        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["itemModifyOutputIDs"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof Execution>, never>>(object: I): Execution;
};
