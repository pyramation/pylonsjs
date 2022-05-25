import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { PaymentInfo } from "./payment_info";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgBurnDebtToken {
    creator: string;
    redeemInfo: RedeemInfo;
}
export interface MsgBurnDebtTokenResponse {
}
export interface MsgUpdateAccount {
    creator: string;
    username: string;
}
export interface MsgUpdateAccountResponse {
}
export interface MsgCreateAccount {
    creator: string;
    username: string;
}
export interface MsgCreateAccountResponse {
}
export interface MsgFulfillTrade {
    creator: string;
    ID: Long;
    coinInputsIndex: Long;
    items: ItemRef[];
    paymentInfos: PaymentInfo[];
}
export interface MsgFulfillTradeResponse {
}
export interface MsgCreateTrade {
    creator: string;
    coinInputs: CoinInput[];
    itemInputs: ItemInput[];
    coinOutputs: Coin[];
    itemOutputs: ItemRef[];
    extraInfo: string;
}
export interface MsgCreateTradeResponse {
    ID: Long;
}
export interface MsgCancelTrade {
    creator: string;
    ID: Long;
}
export interface MsgCancelTradeResponse {
}
export interface MsgCompleteExecutionEarly {
    creator: string;
    ID: string;
}
export interface MsgCompleteExecutionEarlyResponse {
    ID: string;
}
export interface MsgTransferCookbook {
    creator: string;
    ID: string;
    recipient: string;
}
export interface MsgTransferCookbookResponse {
}
export interface MsgGoogleInAppPurchaseGetCoins {
    creator: string;
    productID: string;
    purchaseToken: string;
    receiptDataBase64: string;
    signature: string;
}
export interface MsgGoogleInAppPurchaseGetCoinsResponse {
}
export interface MsgSendItems {
    creator: string;
    receiver: string;
    items: ItemRef[];
}
export interface MsgSendItemsResponse {
}
export interface MsgExecuteRecipe {
    creator: string;
    cookbookID: string;
    recipeID: string;
    coinInputsIndex: Long;
    itemIDs: string[];
    paymentInfos: PaymentInfo[];
}
export interface MsgExecuteRecipeResponse {
    ID: string;
}
export interface MsgSetItemString {
    creator: string;
    cookbookID: string;
    ID: string;
    field: string;
    value: string;
}
export interface MsgSetItemStringResponse {
}
export interface MsgCreateRecipe {
    creator: string;
    cookbookID: string;
    ID: string;
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
export interface MsgCreateRecipeResponse {
}
export interface MsgUpdateRecipe {
    creator: string;
    cookbookID: string;
    ID: string;
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
export interface MsgUpdateRecipeResponse {
}
export interface MsgCreateCookbook {
    creator: string;
    ID: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    supportEmail: string;
    enabled: boolean;
}
export interface MsgCreateCookbookResponse {
}
export interface MsgUpdateCookbook {
    creator: string;
    ID: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    supportEmail: string;
    enabled: boolean;
}
export interface MsgUpdateCookbookResponse {
}
export declare const MsgBurnDebtToken: {
    encode(message: MsgBurnDebtToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtToken;
    fromJSON(object: any): MsgBurnDebtToken;
    toJSON(message: MsgBurnDebtToken): unknown;
    fromPartial<I extends {
        creator?: string;
        redeemInfo?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        };
    } & {
        creator?: string;
        redeemInfo?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        } & {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        } & Record<Exclude<keyof I["redeemInfo"], keyof RedeemInfo>, never>;
    } & Record<Exclude<keyof I, keyof MsgBurnDebtToken>, never>>(object: I): MsgBurnDebtToken;
};
export declare const MsgBurnDebtTokenResponse: {
    encode(_: MsgBurnDebtTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnDebtTokenResponse;
    fromJSON(_: any): MsgBurnDebtTokenResponse;
    toJSON(_: MsgBurnDebtTokenResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgBurnDebtTokenResponse;
};
export declare const MsgUpdateAccount: {
    encode(message: MsgUpdateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccount;
    fromJSON(object: any): MsgUpdateAccount;
    toJSON(message: MsgUpdateAccount): unknown;
    fromPartial<I extends {
        creator?: string;
        username?: string;
    } & {
        creator?: string;
        username?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateAccount>, never>>(object: I): MsgUpdateAccount;
};
export declare const MsgUpdateAccountResponse: {
    encode(_: MsgUpdateAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAccountResponse;
    fromJSON(_: any): MsgUpdateAccountResponse;
    toJSON(_: MsgUpdateAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateAccountResponse;
};
export declare const MsgCreateAccount: {
    encode(message: MsgCreateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccount;
    fromJSON(object: any): MsgCreateAccount;
    toJSON(message: MsgCreateAccount): unknown;
    fromPartial<I extends {
        creator?: string;
        username?: string;
    } & {
        creator?: string;
        username?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateAccount>, never>>(object: I): MsgCreateAccount;
};
export declare const MsgCreateAccountResponse: {
    encode(_: MsgCreateAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAccountResponse;
    fromJSON(_: any): MsgCreateAccountResponse;
    toJSON(_: MsgCreateAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateAccountResponse;
};
export declare const MsgFulfillTrade: {
    encode(message: MsgFulfillTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTrade;
    fromJSON(object: any): MsgFulfillTrade;
    toJSON(message: MsgFulfillTrade): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: any;
        coinInputsIndex?: any;
        items?: {
            cookbookID?: string;
            itemID?: string;
        }[];
        paymentInfos?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[];
    } & {
        creator?: string;
        ID?: any;
        coinInputsIndex?: any;
        items?: {
            cookbookID?: string;
            itemID?: string;
        }[] & ({
            cookbookID?: string;
            itemID?: string;
        } & {
            cookbookID?: string;
            itemID?: string;
        } & Record<Exclude<keyof I["items"][number], keyof ItemRef>, never>)[] & Record<Exclude<keyof I["items"], keyof {
            cookbookID?: string;
            itemID?: string;
        }[]>, never>;
        paymentInfos?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[] & ({
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        } & {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        } & Record<Exclude<keyof I["paymentInfos"][number], keyof PaymentInfo>, never>)[] & Record<Exclude<keyof I["paymentInfos"], keyof {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgFulfillTrade>, never>>(object: I): MsgFulfillTrade;
};
export declare const MsgFulfillTradeResponse: {
    encode(_: MsgFulfillTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFulfillTradeResponse;
    fromJSON(_: any): MsgFulfillTradeResponse;
    toJSON(_: MsgFulfillTradeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgFulfillTradeResponse;
};
export declare const MsgCreateTrade: {
    encode(message: MsgCreateTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTrade;
    fromJSON(object: any): MsgCreateTrade;
    toJSON(message: MsgCreateTrade): unknown;
    fromPartial<I extends {
        creator?: string;
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
    } & {
        creator?: string;
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
    } & Record<Exclude<keyof I, keyof MsgCreateTrade>, never>>(object: I): MsgCreateTrade;
};
export declare const MsgCreateTradeResponse: {
    encode(message: MsgCreateTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeResponse;
    fromJSON(object: any): MsgCreateTradeResponse;
    toJSON(message: MsgCreateTradeResponse): unknown;
    fromPartial<I extends {
        ID?: any;
    } & {
        ID?: any;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgCreateTradeResponse;
};
export declare const MsgCancelTrade: {
    encode(message: MsgCancelTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTrade;
    fromJSON(object: any): MsgCancelTrade;
    toJSON(message: MsgCancelTrade): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: any;
    } & {
        creator?: string;
        ID?: any;
    } & Record<Exclude<keyof I, keyof MsgCancelTrade>, never>>(object: I): MsgCancelTrade;
};
export declare const MsgCancelTradeResponse: {
    encode(_: MsgCancelTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTradeResponse;
    fromJSON(_: any): MsgCancelTradeResponse;
    toJSON(_: MsgCancelTradeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCancelTradeResponse;
};
export declare const MsgCompleteExecutionEarly: {
    encode(message: MsgCompleteExecutionEarly, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarly;
    fromJSON(object: any): MsgCompleteExecutionEarly;
    toJSON(message: MsgCompleteExecutionEarly): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
    } & {
        creator?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof MsgCompleteExecutionEarly>, never>>(object: I): MsgCompleteExecutionEarly;
};
export declare const MsgCompleteExecutionEarlyResponse: {
    encode(message: MsgCompleteExecutionEarlyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteExecutionEarlyResponse;
    fromJSON(object: any): MsgCompleteExecutionEarlyResponse;
    toJSON(message: MsgCompleteExecutionEarlyResponse): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgCompleteExecutionEarlyResponse;
};
export declare const MsgTransferCookbook: {
    encode(message: MsgTransferCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbook;
    fromJSON(object: any): MsgTransferCookbook;
    toJSON(message: MsgTransferCookbook): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
        recipient?: string;
    } & {
        creator?: string;
        ID?: string;
        recipient?: string;
    } & Record<Exclude<keyof I, keyof MsgTransferCookbook>, never>>(object: I): MsgTransferCookbook;
};
export declare const MsgTransferCookbookResponse: {
    encode(_: MsgTransferCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferCookbookResponse;
    fromJSON(_: any): MsgTransferCookbookResponse;
    toJSON(_: MsgTransferCookbookResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgTransferCookbookResponse;
};
export declare const MsgGoogleInAppPurchaseGetCoins: {
    encode(message: MsgGoogleInAppPurchaseGetCoins, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoins;
    fromJSON(object: any): MsgGoogleInAppPurchaseGetCoins;
    toJSON(message: MsgGoogleInAppPurchaseGetCoins): unknown;
    fromPartial<I extends {
        creator?: string;
        productID?: string;
        purchaseToken?: string;
        receiptDataBase64?: string;
        signature?: string;
    } & {
        creator?: string;
        productID?: string;
        purchaseToken?: string;
        receiptDataBase64?: string;
        signature?: string;
    } & Record<Exclude<keyof I, keyof MsgGoogleInAppPurchaseGetCoins>, never>>(object: I): MsgGoogleInAppPurchaseGetCoins;
};
export declare const MsgGoogleInAppPurchaseGetCoinsResponse: {
    encode(_: MsgGoogleInAppPurchaseGetCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGoogleInAppPurchaseGetCoinsResponse;
    fromJSON(_: any): MsgGoogleInAppPurchaseGetCoinsResponse;
    toJSON(_: MsgGoogleInAppPurchaseGetCoinsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgGoogleInAppPurchaseGetCoinsResponse;
};
export declare const MsgSendItems: {
    encode(message: MsgSendItems, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItems;
    fromJSON(object: any): MsgSendItems;
    toJSON(message: MsgSendItems): unknown;
    fromPartial<I extends {
        creator?: string;
        receiver?: string;
        items?: {
            cookbookID?: string;
            itemID?: string;
        }[];
    } & {
        creator?: string;
        receiver?: string;
        items?: {
            cookbookID?: string;
            itemID?: string;
        }[] & ({
            cookbookID?: string;
            itemID?: string;
        } & {
            cookbookID?: string;
            itemID?: string;
        } & Record<Exclude<keyof I["items"][number], keyof ItemRef>, never>)[] & Record<Exclude<keyof I["items"], keyof {
            cookbookID?: string;
            itemID?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgSendItems>, never>>(object: I): MsgSendItems;
};
export declare const MsgSendItemsResponse: {
    encode(_: MsgSendItemsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendItemsResponse;
    fromJSON(_: any): MsgSendItemsResponse;
    toJSON(_: MsgSendItemsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSendItemsResponse;
};
export declare const MsgExecuteRecipe: {
    encode(message: MsgExecuteRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipe;
    fromJSON(object: any): MsgExecuteRecipe;
    toJSON(message: MsgExecuteRecipe): unknown;
    fromPartial<I extends {
        creator?: string;
        cookbookID?: string;
        recipeID?: string;
        coinInputsIndex?: any;
        itemIDs?: string[];
        paymentInfos?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[];
    } & {
        creator?: string;
        cookbookID?: string;
        recipeID?: string;
        coinInputsIndex?: any;
        itemIDs?: string[] & string[] & Record<Exclude<keyof I["itemIDs"], keyof string[]>, never>;
        paymentInfos?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[] & ({
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        } & {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        } & Record<Exclude<keyof I["paymentInfos"][number], keyof PaymentInfo>, never>)[] & Record<Exclude<keyof I["paymentInfos"], keyof {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgExecuteRecipe>, never>>(object: I): MsgExecuteRecipe;
};
export declare const MsgExecuteRecipeResponse: {
    encode(message: MsgExecuteRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteRecipeResponse;
    fromJSON(object: any): MsgExecuteRecipeResponse;
    toJSON(message: MsgExecuteRecipeResponse): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgExecuteRecipeResponse;
};
export declare const MsgSetItemString: {
    encode(message: MsgSetItemString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemString;
    fromJSON(object: any): MsgSetItemString;
    toJSON(message: MsgSetItemString): unknown;
    fromPartial<I extends {
        creator?: string;
        cookbookID?: string;
        ID?: string;
        field?: string;
        value?: string;
    } & {
        creator?: string;
        cookbookID?: string;
        ID?: string;
        field?: string;
        value?: string;
    } & Record<Exclude<keyof I, keyof MsgSetItemString>, never>>(object: I): MsgSetItemString;
};
export declare const MsgSetItemStringResponse: {
    encode(_: MsgSetItemStringResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetItemStringResponse;
    fromJSON(_: any): MsgSetItemStringResponse;
    toJSON(_: MsgSetItemStringResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetItemStringResponse;
};
export declare const MsgCreateRecipe: {
    encode(message: MsgCreateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipe;
    fromJSON(object: any): MsgCreateRecipe;
    toJSON(message: MsgCreateRecipe): unknown;
    fromPartial<I extends {
        creator?: string;
        cookbookID?: string;
        ID?: string;
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
        creator?: string;
        cookbookID?: string;
        ID?: string;
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
            } & Record<Exclude<keyof I["entries"]["coinOutputs"][number], keyof import("./recipe").CoinOutput>, never>)[] & Record<Exclude<keyof I["entries"]["coinOutputs"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["strings"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["entries"]["itemOutputs"][number], keyof import("./recipe").ItemOutput>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number], keyof import("./recipe").ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"], keyof {
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
    } & Record<Exclude<keyof I, keyof MsgCreateRecipe>, never>>(object: I): MsgCreateRecipe;
};
export declare const MsgCreateRecipeResponse: {
    encode(_: MsgCreateRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRecipeResponse;
    fromJSON(_: any): MsgCreateRecipeResponse;
    toJSON(_: MsgCreateRecipeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateRecipeResponse;
};
export declare const MsgUpdateRecipe: {
    encode(message: MsgUpdateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipe;
    fromJSON(object: any): MsgUpdateRecipe;
    toJSON(message: MsgUpdateRecipe): unknown;
    fromPartial<I extends {
        creator?: string;
        cookbookID?: string;
        ID?: string;
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
        creator?: string;
        cookbookID?: string;
        ID?: string;
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
            } & Record<Exclude<keyof I["entries"]["coinOutputs"][number], keyof import("./recipe").CoinOutput>, never>)[] & Record<Exclude<keyof I["entries"]["coinOutputs"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["strings"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["entries"]["itemOutputs"][number], keyof import("./recipe").ItemOutput>, never>)[] & Record<Exclude<keyof I["entries"]["itemOutputs"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                    } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["entries"]["itemModifyOutputs"][number], keyof import("./recipe").ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["entries"]["itemModifyOutputs"], keyof {
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
    } & Record<Exclude<keyof I, keyof MsgUpdateRecipe>, never>>(object: I): MsgUpdateRecipe;
};
export declare const MsgUpdateRecipeResponse: {
    encode(_: MsgUpdateRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRecipeResponse;
    fromJSON(_: any): MsgUpdateRecipeResponse;
    toJSON(_: MsgUpdateRecipeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateRecipeResponse;
};
export declare const MsgCreateCookbook: {
    encode(message: MsgCreateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbook;
    fromJSON(object: any): MsgCreateCookbook;
    toJSON(message: MsgCreateCookbook): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
        name?: string;
        description?: string;
        developer?: string;
        version?: string;
        supportEmail?: string;
        enabled?: boolean;
    } & {
        creator?: string;
        ID?: string;
        name?: string;
        description?: string;
        developer?: string;
        version?: string;
        supportEmail?: string;
        enabled?: boolean;
    } & Record<Exclude<keyof I, keyof MsgCreateCookbook>, never>>(object: I): MsgCreateCookbook;
};
export declare const MsgCreateCookbookResponse: {
    encode(_: MsgCreateCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCookbookResponse;
    fromJSON(_: any): MsgCreateCookbookResponse;
    toJSON(_: MsgCreateCookbookResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateCookbookResponse;
};
export declare const MsgUpdateCookbook: {
    encode(message: MsgUpdateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbook;
    fromJSON(object: any): MsgUpdateCookbook;
    toJSON(message: MsgUpdateCookbook): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
        name?: string;
        description?: string;
        developer?: string;
        version?: string;
        supportEmail?: string;
        enabled?: boolean;
    } & {
        creator?: string;
        ID?: string;
        name?: string;
        description?: string;
        developer?: string;
        version?: string;
        supportEmail?: string;
        enabled?: boolean;
    } & Record<Exclude<keyof I, keyof MsgUpdateCookbook>, never>>(object: I): MsgUpdateCookbook;
};
export declare const MsgUpdateCookbookResponse: {
    encode(_: MsgUpdateCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCookbookResponse;
    fromJSON(_: any): MsgUpdateCookbookResponse;
    toJSON(_: MsgUpdateCookbookResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateCookbookResponse;
};
