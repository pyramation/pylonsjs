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
import { Long } from "@osmonauts/helpers";
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
export declare const QueryListTradesByCreatorRequest: {
    encode(message: QueryListTradesByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorRequest;
    fromJSON(object: any): QueryListTradesByCreatorRequest;
    toJSON(message: QueryListTradesByCreatorRequest): unknown;
    fromPartial<I extends {
        creator?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        creator?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryListTradesByCreatorRequest>, never>>(object: I): QueryListTradesByCreatorRequest;
};
export declare const QueryListTradesByCreatorResponse: {
    encode(message: QueryListTradesByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListTradesByCreatorResponse;
    fromJSON(object: any): QueryListTradesByCreatorResponse;
    toJSON(message: QueryListTradesByCreatorResponse): unknown;
    fromPartial<I extends {
        Trades?: {
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
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        Trades?: {
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
        }[] & ({
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
                } & Record<Exclude<keyof I["Trades"][number]["coinInputs"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Trades"][number]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Trades"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["Trades"][number]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Trades"][number]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["Trades"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["Trades"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Trades"][number]["coinOutputs"], keyof {
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
            } & Record<Exclude<keyof I["Trades"][number]["itemOutputs"][number], keyof import("./trade").ItemRef>, never>)[] & Record<Exclude<keyof I["Trades"][number]["itemOutputs"], keyof {
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
            } & Record<Exclude<keyof I["Trades"][number]["tradedItemInputs"][number], keyof import("./trade").ItemRef>, never>)[] & Record<Exclude<keyof I["Trades"][number]["tradedItemInputs"], keyof {
                cookbookID?: string;
                itemID?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["Trades"][number], keyof Trade>, never>)[] & Record<Exclude<keyof I["Trades"], keyof {
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
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryListTradesByCreatorResponse>, never>>(object: I): QueryListTradesByCreatorResponse;
};
export declare const QueryGetRedeemInfoRequest: {
    encode(message: QueryGetRedeemInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoRequest;
    fromJSON(object: any): QueryGetRedeemInfoRequest;
    toJSON(message: QueryGetRedeemInfoRequest): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): QueryGetRedeemInfoRequest;
};
export declare const QueryGetRedeemInfoResponse: {
    encode(message: QueryGetRedeemInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRedeemInfoResponse;
    fromJSON(object: any): QueryGetRedeemInfoResponse;
    toJSON(message: QueryGetRedeemInfoResponse): unknown;
    fromPartial<I extends {
        RedeemInfo?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        };
    } & {
        RedeemInfo?: {
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
        } & Record<Exclude<keyof I["RedeemInfo"], keyof RedeemInfo>, never>;
    } & Record<Exclude<keyof I, "RedeemInfo">, never>>(object: I): QueryGetRedeemInfoResponse;
};
export declare const QueryAllRedeemInfoRequest: {
    encode(message: QueryAllRedeemInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoRequest;
    fromJSON(object: any): QueryAllRedeemInfoRequest;
    toJSON(message: QueryAllRedeemInfoRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAllRedeemInfoRequest;
};
export declare const QueryAllRedeemInfoResponse: {
    encode(message: QueryAllRedeemInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRedeemInfoResponse;
    fromJSON(object: any): QueryAllRedeemInfoResponse;
    toJSON(message: QueryAllRedeemInfoResponse): unknown;
    fromPartial<I extends {
        RedeemInfo?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        RedeemInfo?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        }[] & ({
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
        } & Record<Exclude<keyof I["RedeemInfo"][number], keyof RedeemInfo>, never>)[] & Record<Exclude<keyof I["RedeemInfo"], keyof {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllRedeemInfoResponse>, never>>(object: I): QueryAllRedeemInfoResponse;
};
export declare const QueryGetPaymentInfoRequest: {
    encode(message: QueryGetPaymentInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoRequest;
    fromJSON(object: any): QueryGetPaymentInfoRequest;
    toJSON(message: QueryGetPaymentInfoRequest): unknown;
    fromPartial<I extends {
        purchaseID?: string;
    } & {
        purchaseID?: string;
    } & Record<Exclude<keyof I, "purchaseID">, never>>(object: I): QueryGetPaymentInfoRequest;
};
export declare const QueryGetPaymentInfoResponse: {
    encode(message: QueryGetPaymentInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPaymentInfoResponse;
    fromJSON(object: any): QueryGetPaymentInfoResponse;
    toJSON(message: QueryGetPaymentInfoResponse): unknown;
    fromPartial<I extends {
        PaymentInfo?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        };
    } & {
        PaymentInfo?: {
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
        } & Record<Exclude<keyof I["PaymentInfo"], keyof PaymentInfo>, never>;
    } & Record<Exclude<keyof I, "PaymentInfo">, never>>(object: I): QueryGetPaymentInfoResponse;
};
export declare const QueryAllPaymentInfoRequest: {
    encode(message: QueryAllPaymentInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoRequest;
    fromJSON(object: any): QueryAllPaymentInfoRequest;
    toJSON(message: QueryAllPaymentInfoRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAllPaymentInfoRequest;
};
export declare const QueryAllPaymentInfoResponse: {
    encode(message: QueryAllPaymentInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllPaymentInfoResponse;
    fromJSON(object: any): QueryAllPaymentInfoResponse;
    toJSON(message: QueryAllPaymentInfoResponse): unknown;
    fromPartial<I extends {
        PaymentInfo?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        PaymentInfo?: {
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
        } & Record<Exclude<keyof I["PaymentInfo"][number], keyof PaymentInfo>, never>)[] & Record<Exclude<keyof I["PaymentInfo"], keyof {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllPaymentInfoResponse>, never>>(object: I): QueryAllPaymentInfoResponse;
};
export declare const QueryGetUsernameByAddressRequest: {
    encode(message: QueryGetUsernameByAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressRequest;
    fromJSON(object: any): QueryGetUsernameByAddressRequest;
    toJSON(message: QueryGetUsernameByAddressRequest): unknown;
    fromPartial<I extends {
        address?: string;
    } & {
        address?: string;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryGetUsernameByAddressRequest;
};
export declare const QueryGetAddressByUsernameRequest: {
    encode(message: QueryGetAddressByUsernameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameRequest;
    fromJSON(object: any): QueryGetAddressByUsernameRequest;
    toJSON(message: QueryGetAddressByUsernameRequest): unknown;
    fromPartial<I extends {
        username?: string;
    } & {
        username?: string;
    } & Record<Exclude<keyof I, "username">, never>>(object: I): QueryGetAddressByUsernameRequest;
};
export declare const QueryGetUsernameByAddressResponse: {
    encode(message: QueryGetUsernameByAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUsernameByAddressResponse;
    fromJSON(object: any): QueryGetUsernameByAddressResponse;
    toJSON(message: QueryGetUsernameByAddressResponse): unknown;
    fromPartial<I extends {
        username?: {
            value?: string;
        };
    } & {
        username?: {
            value?: string;
        } & {
            value?: string;
        } & Record<Exclude<keyof I["username"], "value">, never>;
    } & Record<Exclude<keyof I, "username">, never>>(object: I): QueryGetUsernameByAddressResponse;
};
export declare const QueryGetAddressByUsernameResponse: {
    encode(message: QueryGetAddressByUsernameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAddressByUsernameResponse;
    fromJSON(object: any): QueryGetAddressByUsernameResponse;
    toJSON(message: QueryGetAddressByUsernameResponse): unknown;
    fromPartial<I extends {
        address?: {
            value?: string;
        };
    } & {
        address?: {
            value?: string;
        } & {
            value?: string;
        } & Record<Exclude<keyof I["address"], "value">, never>;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryGetAddressByUsernameResponse;
};
export declare const QueryGetTradeRequest: {
    encode(message: QueryGetTradeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeRequest;
    fromJSON(object: any): QueryGetTradeRequest;
    toJSON(message: QueryGetTradeRequest): unknown;
    fromPartial<I extends {
        ID?: any;
    } & {
        ID?: any;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): QueryGetTradeRequest;
};
export declare const QueryGetTradeResponse: {
    encode(message: QueryGetTradeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeResponse;
    fromJSON(object: any): QueryGetTradeResponse;
    toJSON(message: QueryGetTradeResponse): unknown;
    fromPartial<I extends {
        Trade?: {
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
        };
    } & {
        Trade?: {
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
                } & Record<Exclude<keyof I["Trade"]["coinInputs"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Trade"]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Trade"]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["Trade"]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["Trade"]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["Trade"]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["Trade"]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["Trade"]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["Trade"]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["Trade"]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Trade"]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["Trade"]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["Trade"]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Trade"]["coinOutputs"], keyof {
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
            } & Record<Exclude<keyof I["Trade"]["itemOutputs"][number], keyof import("./trade").ItemRef>, never>)[] & Record<Exclude<keyof I["Trade"]["itemOutputs"], keyof {
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
            } & Record<Exclude<keyof I["Trade"]["tradedItemInputs"][number], keyof import("./trade").ItemRef>, never>)[] & Record<Exclude<keyof I["Trade"]["tradedItemInputs"], keyof {
                cookbookID?: string;
                itemID?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["Trade"], keyof Trade>, never>;
    } & Record<Exclude<keyof I, "Trade">, never>>(object: I): QueryGetTradeResponse;
};
export declare const QueryListItemByOwnerRequest: {
    encode(message: QueryListItemByOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerRequest;
    fromJSON(object: any): QueryListItemByOwnerRequest;
    toJSON(message: QueryListItemByOwnerRequest): unknown;
    fromPartial<I extends {
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        owner?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryListItemByOwnerRequest>, never>>(object: I): QueryListItemByOwnerRequest;
};
export declare const QueryListItemByOwnerResponse: {
    encode(message: QueryListItemByOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListItemByOwnerResponse;
    fromJSON(object: any): QueryListItemByOwnerResponse;
    toJSON(message: QueryListItemByOwnerResponse): unknown;
    fromPartial<I extends {
        Items?: {
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
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        Items?: {
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
        }[] & ({
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
            } & Record<Exclude<keyof I["Items"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["Items"][number]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["Items"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["Items"][number]["longs"], keyof {
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
            } & Record<Exclude<keyof I["Items"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Items"][number]["strings"], keyof {
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
            } & Record<Exclude<keyof I["Items"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Items"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["Items"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Items"][number]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
        } & Record<Exclude<keyof I["Items"][number], keyof Item>, never>)[] & Record<Exclude<keyof I["Items"], keyof {
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
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryListItemByOwnerResponse>, never>>(object: I): QueryListItemByOwnerResponse;
};
export declare const QueryGetGoogleInAppPurchaseOrderRequest: {
    encode(message: QueryGetGoogleInAppPurchaseOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderRequest;
    fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderRequest;
    toJSON(message: QueryGetGoogleInAppPurchaseOrderRequest): unknown;
    fromPartial<I extends {
        PurchaseToken?: string;
    } & {
        PurchaseToken?: string;
    } & Record<Exclude<keyof I, "PurchaseToken">, never>>(object: I): QueryGetGoogleInAppPurchaseOrderRequest;
};
export declare const QueryGetGoogleInAppPurchaseOrderResponse: {
    encode(message: QueryGetGoogleInAppPurchaseOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGoogleInAppPurchaseOrderResponse;
    fromJSON(object: any): QueryGetGoogleInAppPurchaseOrderResponse;
    toJSON(message: QueryGetGoogleInAppPurchaseOrderResponse): unknown;
    fromPartial<I extends {
        Order?: {
            creator?: string;
            productID?: string;
            purchaseToken?: string;
            receiptDataBase64?: string;
            signature?: string;
        };
    } & {
        Order?: {
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
        } & Record<Exclude<keyof I["Order"], keyof GoogleInAppPurchaseOrder>, never>;
    } & Record<Exclude<keyof I, "Order">, never>>(object: I): QueryGetGoogleInAppPurchaseOrderResponse;
};
export declare const QueryListExecutionsByItemRequest: {
    encode(message: QueryListExecutionsByItemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemRequest;
    fromJSON(object: any): QueryListExecutionsByItemRequest;
    toJSON(message: QueryListExecutionsByItemRequest): unknown;
    fromPartial<I extends {
        CookbookID?: string;
        ItemID?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        CookbookID?: string;
        ItemID?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryListExecutionsByItemRequest>, never>>(object: I): QueryListExecutionsByItemRequest;
};
export declare const QueryListExecutionsByItemResponse: {
    encode(message: QueryListExecutionsByItemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByItemResponse;
    fromJSON(object: any): QueryListExecutionsByItemResponse;
    toJSON(message: QueryListExecutionsByItemResponse): unknown;
    fromPartial<I extends {
        CompletedExecutions?: {
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
        }[];
        PendingExecutions?: {
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
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        CompletedExecutions?: {
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
        }[] & ({
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
                } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["CompletedExecutions"][number]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["CompletedExecutions"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["CompletedExecutions"][number], keyof Execution>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"], keyof {
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
        }[]>, never>;
        PendingExecutions?: {
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
        }[] & ({
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
                } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["PendingExecutions"][number]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["PendingExecutions"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["PendingExecutions"][number], keyof Execution>, never>)[] & Record<Exclude<keyof I["PendingExecutions"], keyof {
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
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryListExecutionsByItemResponse>, never>>(object: I): QueryListExecutionsByItemResponse;
};
export declare const QueryListExecutionsByRecipeRequest: {
    encode(message: QueryListExecutionsByRecipeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeRequest;
    fromJSON(object: any): QueryListExecutionsByRecipeRequest;
    toJSON(message: QueryListExecutionsByRecipeRequest): unknown;
    fromPartial<I extends {
        CookbookID?: string;
        RecipeID?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        CookbookID?: string;
        RecipeID?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryListExecutionsByRecipeRequest>, never>>(object: I): QueryListExecutionsByRecipeRequest;
};
export declare const QueryListExecutionsByRecipeResponse: {
    encode(message: QueryListExecutionsByRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeResponse;
    fromJSON(object: any): QueryListExecutionsByRecipeResponse;
    toJSON(message: QueryListExecutionsByRecipeResponse): unknown;
    fromPartial<I extends {
        CompletedExecutions?: {
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
        }[];
        PendingExecutions?: {
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
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        CompletedExecutions?: {
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
        }[] & ({
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
                } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["CompletedExecutions"][number]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["CompletedExecutions"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"][number]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["CompletedExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["CompletedExecutions"][number], keyof Execution>, never>)[] & Record<Exclude<keyof I["CompletedExecutions"], keyof {
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
        }[]>, never>;
        PendingExecutions?: {
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
        }[] & ({
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
                } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["PendingExecutions"][number]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["PendingExecutions"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["PendingExecutions"][number]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["PendingExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["PendingExecutions"][number], keyof Execution>, never>)[] & Record<Exclude<keyof I["PendingExecutions"], keyof {
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
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryListExecutionsByRecipeResponse>, never>>(object: I): QueryListExecutionsByRecipeResponse;
};
export declare const QueryGetExecutionRequest: {
    encode(message: QueryGetExecutionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionRequest;
    fromJSON(object: any): QueryGetExecutionRequest;
    toJSON(message: QueryGetExecutionRequest): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): QueryGetExecutionRequest;
};
export declare const QueryGetExecutionResponse: {
    encode(message: QueryGetExecutionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExecutionResponse;
    fromJSON(object: any): QueryGetExecutionResponse;
    toJSON(message: QueryGetExecutionResponse): unknown;
    fromPartial<I extends {
        Execution?: {
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
        };
        Completed?: boolean;
    } & {
        Execution?: {
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
                } & Record<Exclude<keyof I["Execution"]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["Execution"]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["Execution"]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["Execution"]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["Execution"]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Execution"]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Execution"]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["Execution"]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["Execution"]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Execution"]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["Execution"]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Execution"]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["Execution"]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["Execution"]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["Execution"], keyof Execution>, never>;
        Completed?: boolean;
    } & Record<Exclude<keyof I, keyof QueryGetExecutionResponse>, never>>(object: I): QueryGetExecutionResponse;
};
export declare const QueryListRecipesByCookbookRequest: {
    encode(message: QueryListRecipesByCookbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookRequest;
    fromJSON(object: any): QueryListRecipesByCookbookRequest;
    toJSON(message: QueryListRecipesByCookbookRequest): unknown;
    fromPartial<I extends {
        CookbookID?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        CookbookID?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryListRecipesByCookbookRequest>, never>>(object: I): QueryListRecipesByCookbookRequest;
};
export declare const QueryListRecipesByCookbookResponse: {
    encode(message: QueryListRecipesByCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRecipesByCookbookResponse;
    fromJSON(object: any): QueryListRecipesByCookbookResponse;
    toJSON(message: QueryListRecipesByCookbookResponse): unknown;
    fromPartial<I extends {
        Recipes?: {
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
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        Recipes?: {
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
        }[] & ({
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
                } & Record<Exclude<keyof I["Recipes"][number]["coinInputs"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Recipes"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["Recipes"][number]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Recipes"][number]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["coinOutputs"][number]["coin"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["Recipes"][number]["entries"]["coinOutputs"][number], keyof import("./recipe").CoinOutput>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"][number], keyof import("./recipe").ItemOutput>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"][number], keyof import("./recipe").ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["entries"]["itemModifyOutputs"], keyof {
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
            } & Record<Exclude<keyof I["Recipes"][number]["entries"], keyof import("./recipe").EntriesList>, never>;
            outputs?: {
                entryIDs?: string[];
                weight?: any;
            }[] & ({
                entryIDs?: string[];
                weight?: any;
            } & {
                entryIDs?: string[] & string[] & Record<Exclude<keyof I["Recipes"][number]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                weight?: any;
            } & Record<Exclude<keyof I["Recipes"][number]["outputs"][number], keyof import("./recipe").WeightedOutputs>, never>)[] & Record<Exclude<keyof I["Recipes"][number]["outputs"], keyof {
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
            } & Record<Exclude<keyof I["Recipes"][number]["costPerBlock"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
            enabled?: boolean;
            extraInfo?: string;
        } & Record<Exclude<keyof I["Recipes"][number], keyof Recipe>, never>)[] & Record<Exclude<keyof I["Recipes"], keyof {
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
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryListRecipesByCookbookResponse>, never>>(object: I): QueryListRecipesByCookbookResponse;
};
export declare const QueryGetItemRequest: {
    encode(message: QueryGetItemRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemRequest;
    fromJSON(object: any): QueryGetItemRequest;
    toJSON(message: QueryGetItemRequest): unknown;
    fromPartial<I extends {
        CookbookID?: string;
        ID?: string;
    } & {
        CookbookID?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof QueryGetItemRequest>, never>>(object: I): QueryGetItemRequest;
};
export declare const QueryGetItemResponse: {
    encode(message: QueryGetItemResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetItemResponse;
    fromJSON(object: any): QueryGetItemResponse;
    toJSON(message: QueryGetItemResponse): unknown;
    fromPartial<I extends {
        Item?: {
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
        };
    } & {
        Item?: {
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
            } & Record<Exclude<keyof I["Item"]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["Item"]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["Item"]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["Item"]["longs"], keyof {
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
            } & Record<Exclude<keyof I["Item"]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Item"]["strings"], keyof {
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
            } & Record<Exclude<keyof I["Item"]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Item"]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["Item"]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Item"]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
        } & Record<Exclude<keyof I["Item"], keyof Item>, never>;
    } & Record<Exclude<keyof I, "Item">, never>>(object: I): QueryGetItemResponse;
};
export declare const QueryGetRecipeRequest: {
    encode(message: QueryGetRecipeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeRequest;
    fromJSON(object: any): QueryGetRecipeRequest;
    toJSON(message: QueryGetRecipeRequest): unknown;
    fromPartial<I extends {
        CookbookID?: string;
        ID?: string;
    } & {
        CookbookID?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof QueryGetRecipeRequest>, never>>(object: I): QueryGetRecipeRequest;
};
export declare const QueryGetRecipeResponse: {
    encode(message: QueryGetRecipeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRecipeResponse;
    fromJSON(object: any): QueryGetRecipeResponse;
    toJSON(message: QueryGetRecipeResponse): unknown;
    fromPartial<I extends {
        Recipe?: {
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
        };
    } & {
        Recipe?: {
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
                } & Record<Exclude<keyof I["Recipe"]["coinInputs"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Recipe"]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Recipe"]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["Recipe"]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["Recipe"]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["Recipe"]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["Recipe"]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["Recipe"]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["Recipe"]["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["coinOutputs"][number]["coin"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["Recipe"]["entries"]["coinOutputs"][number], keyof import("./recipe").CoinOutput>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"][number], keyof import("./recipe").ItemOutput>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"][number], keyof import("./recipe").ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["Recipe"]["entries"]["itemModifyOutputs"], keyof {
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
            } & Record<Exclude<keyof I["Recipe"]["entries"], keyof import("./recipe").EntriesList>, never>;
            outputs?: {
                entryIDs?: string[];
                weight?: any;
            }[] & ({
                entryIDs?: string[];
                weight?: any;
            } & {
                entryIDs?: string[] & string[] & Record<Exclude<keyof I["Recipe"]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                weight?: any;
            } & Record<Exclude<keyof I["Recipe"]["outputs"][number], keyof import("./recipe").WeightedOutputs>, never>)[] & Record<Exclude<keyof I["Recipe"]["outputs"], keyof {
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
            } & Record<Exclude<keyof I["Recipe"]["costPerBlock"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
            enabled?: boolean;
            extraInfo?: string;
        } & Record<Exclude<keyof I["Recipe"], keyof Recipe>, never>;
    } & Record<Exclude<keyof I, "Recipe">, never>>(object: I): QueryGetRecipeResponse;
};
export declare const QueryListCookbooksByCreatorRequest: {
    encode(message: QueryListCookbooksByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest;
    fromJSON(object: any): QueryListCookbooksByCreatorRequest;
    toJSON(message: QueryListCookbooksByCreatorRequest): unknown;
    fromPartial<I extends {
        creator?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        creator?: string;
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, keyof QueryListCookbooksByCreatorRequest>, never>>(object: I): QueryListCookbooksByCreatorRequest;
};
export declare const QueryListCookbooksByCreatorResponse: {
    encode(message: QueryListCookbooksByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse;
    fromJSON(object: any): QueryListCookbooksByCreatorResponse;
    toJSON(message: QueryListCookbooksByCreatorResponse): unknown;
    fromPartial<I extends {
        Cookbooks?: {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        Cookbooks?: {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        }[] & ({
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        } & {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        } & Record<Exclude<keyof I["Cookbooks"][number], keyof Cookbook>, never>)[] & Record<Exclude<keyof I["Cookbooks"], keyof {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryListCookbooksByCreatorResponse>, never>>(object: I): QueryListCookbooksByCreatorResponse;
};
export declare const QueryGetCookbookRequest: {
    encode(message: QueryGetCookbookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookRequest;
    fromJSON(object: any): QueryGetCookbookRequest;
    toJSON(message: QueryGetCookbookRequest): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): QueryGetCookbookRequest;
};
export declare const QueryGetCookbookResponse: {
    encode(message: QueryGetCookbookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCookbookResponse;
    fromJSON(object: any): QueryGetCookbookResponse;
    toJSON(message: QueryGetCookbookResponse): unknown;
    fromPartial<I extends {
        Cookbook?: {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        };
    } & {
        Cookbook?: {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        } & {
            creator?: string;
            ID?: string;
            nodeVersion?: any;
            name?: string;
            description?: string;
            developer?: string;
            version?: string;
            supportEmail?: string;
            enabled?: boolean;
        } & Record<Exclude<keyof I["Cookbook"], keyof Cookbook>, never>;
    } & Record<Exclude<keyof I, "Cookbook">, never>>(object: I): QueryGetCookbookResponse;
};
