import { RedeemInfo } from "./redeem_info";
import { Cookbook } from "./cookbook";
import { Recipe } from "./recipe";
import { PaymentInfo } from "./payment_info";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Item, StringKeyValue } from "./item";
import { ItemRef } from "./trade";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface EventBurnDebtToken {
    redeemInfo: RedeemInfo;
}
export interface EventCreateAccount {
    address: string;
    username: string;
}
export interface EventUpdateAccount {
    address: string;
    username: string;
}
export interface EventCreateCookbook {
    creator: string;
    ID: string;
}
/** EventUpdateCookbook contains a record of the cookbook pre-update.  The updated fields can be found by the message emitted by MsgUpdateCookbook */
export interface EventUpdateCookbook {
    originalCookbook: Cookbook;
}
export interface EventTransferCookbook {
    sender: string;
    receiver: string;
    ID: string;
}
export interface EventCreateRecipe {
    creator: string;
    CookbookID: string;
    ID: string;
}
/** EventUpdateRecipe contains a record of the recipe pre-update.  The updated fields can be found by the message emitted by MsgUpdateRecipe */
export interface EventUpdateRecipe {
    originalRecipe: Recipe;
}
/** EventCreateExecution contains the creator and ID of a created execution. Execution IDs are of the form {count-targetBlockHeight} */
export interface EventCreateExecution {
    creator: string;
    ID: string;
    paymentInfos: PaymentInfo[];
}
export interface EventCompleteExecution {
    creator: string;
    ID: string;
    burnCoins: Coin[];
    payCoins: Coin[];
    transferCoins: Coin[];
    feeCoins: Coin[];
    coinOutputs: Coin[];
    mintItems: Item[];
    modifyItems: Item[];
}
export interface EventDropExecution {
    creator: string;
    ID: string;
}
export interface EventCompleteExecutionEarly {
    creator: string;
    ID: string;
}
export interface EventSendItems {
    sender: string;
    receiver: string;
    items: ItemRef[];
}
export interface EventSetItemString {
    creator: string;
    CookbookID: string;
    ID: string;
    originalMutableStrings: StringKeyValue[];
}
export interface EventCreateTrade {
    creator: string;
    ID: Long;
}
export interface EventCancelTrade {
    creator: string;
    ID: Long;
}
export interface EventFulfillTrade {
    ID: Long;
    creator: string;
    fulfiller: string;
    itemInputs: ItemRef[];
    coinInputs: Coin[];
    itemOutputs: ItemRef[];
    coinOutputs: Coin[];
    paymentInfos: PaymentInfo[];
}
export interface EventGooglePurchase {
    creator: string;
    productID: string;
    purchaseToken: string;
    receiptDataBase64: string;
    signature: string;
}
export interface EventStripePurchase {
    creator: string;
    ID: string;
}
export declare const EventBurnDebtToken: {
    encode(message: EventBurnDebtToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnDebtToken;
    fromJSON(object: any): EventBurnDebtToken;
    toJSON(message: EventBurnDebtToken): unknown;
    fromPartial<I extends {
        redeemInfo?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        };
    } & {
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
    } & Record<Exclude<keyof I, "redeemInfo">, never>>(object: I): EventBurnDebtToken;
};
export declare const EventCreateAccount: {
    encode(message: EventCreateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateAccount;
    fromJSON(object: any): EventCreateAccount;
    toJSON(message: EventCreateAccount): unknown;
    fromPartial<I extends {
        address?: string;
        username?: string;
    } & {
        address?: string;
        username?: string;
    } & Record<Exclude<keyof I, keyof EventCreateAccount>, never>>(object: I): EventCreateAccount;
};
export declare const EventUpdateAccount: {
    encode(message: EventUpdateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateAccount;
    fromJSON(object: any): EventUpdateAccount;
    toJSON(message: EventUpdateAccount): unknown;
    fromPartial<I extends {
        address?: string;
        username?: string;
    } & {
        address?: string;
        username?: string;
    } & Record<Exclude<keyof I, keyof EventUpdateAccount>, never>>(object: I): EventUpdateAccount;
};
export declare const EventCreateCookbook: {
    encode(message: EventCreateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCookbook;
    fromJSON(object: any): EventCreateCookbook;
    toJSON(message: EventCreateCookbook): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
    } & {
        creator?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof EventCreateCookbook>, never>>(object: I): EventCreateCookbook;
};
export declare const EventUpdateCookbook: {
    encode(message: EventUpdateCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCookbook;
    fromJSON(object: any): EventUpdateCookbook;
    toJSON(message: EventUpdateCookbook): unknown;
    fromPartial<I extends {
        originalCookbook?: {
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
        originalCookbook?: {
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
        } & Record<Exclude<keyof I["originalCookbook"], keyof Cookbook>, never>;
    } & Record<Exclude<keyof I, "originalCookbook">, never>>(object: I): EventUpdateCookbook;
};
export declare const EventTransferCookbook: {
    encode(message: EventTransferCookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventTransferCookbook;
    fromJSON(object: any): EventTransferCookbook;
    toJSON(message: EventTransferCookbook): unknown;
    fromPartial<I extends {
        sender?: string;
        receiver?: string;
        ID?: string;
    } & {
        sender?: string;
        receiver?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof EventTransferCookbook>, never>>(object: I): EventTransferCookbook;
};
export declare const EventCreateRecipe: {
    encode(message: EventCreateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateRecipe;
    fromJSON(object: any): EventCreateRecipe;
    toJSON(message: EventCreateRecipe): unknown;
    fromPartial<I extends {
        creator?: string;
        CookbookID?: string;
        ID?: string;
    } & {
        creator?: string;
        CookbookID?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof EventCreateRecipe>, never>>(object: I): EventCreateRecipe;
};
export declare const EventUpdateRecipe: {
    encode(message: EventUpdateRecipe, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateRecipe;
    fromJSON(object: any): EventUpdateRecipe;
    toJSON(message: EventUpdateRecipe): unknown;
    fromPartial<I extends {
        originalRecipe?: {
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
        originalRecipe?: {
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
                } & Record<Exclude<keyof I["originalRecipe"]["coinInputs"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["originalRecipe"]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["originalRecipe"]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["originalRecipe"]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["coinOutputs"][number]["coin"], keyof Coin>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["originalRecipe"]["entries"]["coinOutputs"][number], keyof import("./recipe").CoinOutput>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"][number], keyof import("./recipe").ItemOutput>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"][number], keyof import("./recipe").ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["entries"]["itemModifyOutputs"], keyof {
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
            } & Record<Exclude<keyof I["originalRecipe"]["entries"], keyof import("./recipe").EntriesList>, never>;
            outputs?: {
                entryIDs?: string[];
                weight?: any;
            }[] & ({
                entryIDs?: string[];
                weight?: any;
            } & {
                entryIDs?: string[] & string[] & Record<Exclude<keyof I["originalRecipe"]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                weight?: any;
            } & Record<Exclude<keyof I["originalRecipe"]["outputs"][number], keyof import("./recipe").WeightedOutputs>, never>)[] & Record<Exclude<keyof I["originalRecipe"]["outputs"], keyof {
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
            } & Record<Exclude<keyof I["originalRecipe"]["costPerBlock"], keyof Coin>, never>;
            enabled?: boolean;
            extraInfo?: string;
        } & Record<Exclude<keyof I["originalRecipe"], keyof Recipe>, never>;
    } & Record<Exclude<keyof I, "originalRecipe">, never>>(object: I): EventUpdateRecipe;
};
export declare const EventCreateExecution: {
    encode(message: EventCreateExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateExecution;
    fromJSON(object: any): EventCreateExecution;
    toJSON(message: EventCreateExecution): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
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
        ID?: string;
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
    } & Record<Exclude<keyof I, keyof EventCreateExecution>, never>>(object: I): EventCreateExecution;
};
export declare const EventCompleteExecution: {
    encode(message: EventCompleteExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteExecution;
    fromJSON(object: any): EventCompleteExecution;
    toJSON(message: EventCompleteExecution): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
        burnCoins?: {
            denom?: string;
            amount?: string;
        }[];
        payCoins?: {
            denom?: string;
            amount?: string;
        }[];
        transferCoins?: {
            denom?: string;
            amount?: string;
        }[];
        feeCoins?: {
            denom?: string;
            amount?: string;
        }[];
        coinOutputs?: {
            denom?: string;
            amount?: string;
        }[];
        mintItems?: {
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
        modifyItems?: {
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
    } & {
        creator?: string;
        ID?: string;
        burnCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["burnCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["burnCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        payCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["payCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["payCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        transferCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["transferCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["transferCoins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        feeCoins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["feeCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["feeCoins"], keyof {
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
        mintItems?: {
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
            } & Record<Exclude<keyof I["mintItems"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["mintItems"][number]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["mintItems"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["mintItems"][number]["longs"], keyof {
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
            } & Record<Exclude<keyof I["mintItems"][number]["strings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["mintItems"][number]["strings"], keyof {
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
            } & Record<Exclude<keyof I["mintItems"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["mintItems"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["mintItems"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["mintItems"][number]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
        } & Record<Exclude<keyof I["mintItems"][number], keyof Item>, never>)[] & Record<Exclude<keyof I["mintItems"], keyof {
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
        modifyItems?: {
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
            } & Record<Exclude<keyof I["modifyItems"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["modifyItems"][number]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["modifyItems"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["modifyItems"][number]["longs"], keyof {
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
            } & Record<Exclude<keyof I["modifyItems"][number]["strings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["modifyItems"][number]["strings"], keyof {
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
            } & Record<Exclude<keyof I["modifyItems"][number]["mutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["modifyItems"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["modifyItems"][number]["transferFee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["modifyItems"][number]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
        } & Record<Exclude<keyof I["modifyItems"][number], keyof Item>, never>)[] & Record<Exclude<keyof I["modifyItems"], keyof {
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
    } & Record<Exclude<keyof I, keyof EventCompleteExecution>, never>>(object: I): EventCompleteExecution;
};
export declare const EventDropExecution: {
    encode(message: EventDropExecution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDropExecution;
    fromJSON(object: any): EventDropExecution;
    toJSON(message: EventDropExecution): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
    } & {
        creator?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof EventDropExecution>, never>>(object: I): EventDropExecution;
};
export declare const EventCompleteExecutionEarly: {
    encode(message: EventCompleteExecutionEarly, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCompleteExecutionEarly;
    fromJSON(object: any): EventCompleteExecutionEarly;
    toJSON(message: EventCompleteExecutionEarly): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
    } & {
        creator?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof EventCompleteExecutionEarly>, never>>(object: I): EventCompleteExecutionEarly;
};
export declare const EventSendItems: {
    encode(message: EventSendItems, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendItems;
    fromJSON(object: any): EventSendItems;
    toJSON(message: EventSendItems): unknown;
    fromPartial<I extends {
        sender?: string;
        receiver?: string;
        items?: {
            cookbookID?: string;
            itemID?: string;
        }[];
    } & {
        sender?: string;
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
    } & Record<Exclude<keyof I, keyof EventSendItems>, never>>(object: I): EventSendItems;
};
export declare const EventSetItemString: {
    encode(message: EventSetItemString, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetItemString;
    fromJSON(object: any): EventSetItemString;
    toJSON(message: EventSetItemString): unknown;
    fromPartial<I extends {
        creator?: string;
        CookbookID?: string;
        ID?: string;
        originalMutableStrings?: {
            Key?: string;
            Value?: string;
        }[];
    } & {
        creator?: string;
        CookbookID?: string;
        ID?: string;
        originalMutableStrings?: {
            Key?: string;
            Value?: string;
        }[] & ({
            Key?: string;
            Value?: string;
        } & {
            Key?: string;
            Value?: string;
        } & Record<Exclude<keyof I["originalMutableStrings"][number], keyof StringKeyValue>, never>)[] & Record<Exclude<keyof I["originalMutableStrings"], keyof {
            Key?: string;
            Value?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof EventSetItemString>, never>>(object: I): EventSetItemString;
};
export declare const EventCreateTrade: {
    encode(message: EventCreateTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateTrade;
    fromJSON(object: any): EventCreateTrade;
    toJSON(message: EventCreateTrade): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: any;
    } & {
        creator?: string;
        ID?: any;
    } & Record<Exclude<keyof I, keyof EventCreateTrade>, never>>(object: I): EventCreateTrade;
};
export declare const EventCancelTrade: {
    encode(message: EventCancelTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelTrade;
    fromJSON(object: any): EventCancelTrade;
    toJSON(message: EventCancelTrade): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: any;
    } & {
        creator?: string;
        ID?: any;
    } & Record<Exclude<keyof I, keyof EventCancelTrade>, never>>(object: I): EventCancelTrade;
};
export declare const EventFulfillTrade: {
    encode(message: EventFulfillTrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFulfillTrade;
    fromJSON(object: any): EventFulfillTrade;
    toJSON(message: EventFulfillTrade): unknown;
    fromPartial<I extends {
        ID?: any;
        creator?: string;
        fulfiller?: string;
        itemInputs?: {
            cookbookID?: string;
            itemID?: string;
        }[];
        coinInputs?: {
            denom?: string;
            amount?: string;
        }[];
        itemOutputs?: {
            cookbookID?: string;
            itemID?: string;
        }[];
        coinOutputs?: {
            denom?: string;
            amount?: string;
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
        ID?: any;
        creator?: string;
        fulfiller?: string;
        itemInputs?: {
            cookbookID?: string;
            itemID?: string;
        }[] & ({
            cookbookID?: string;
            itemID?: string;
        } & {
            cookbookID?: string;
            itemID?: string;
        } & Record<Exclude<keyof I["itemInputs"][number], keyof ItemRef>, never>)[] & Record<Exclude<keyof I["itemInputs"], keyof {
            cookbookID?: string;
            itemID?: string;
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
    } & Record<Exclude<keyof I, keyof EventFulfillTrade>, never>>(object: I): EventFulfillTrade;
};
export declare const EventGooglePurchase: {
    encode(message: EventGooglePurchase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventGooglePurchase;
    fromJSON(object: any): EventGooglePurchase;
    toJSON(message: EventGooglePurchase): unknown;
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
    } & Record<Exclude<keyof I, keyof EventGooglePurchase>, never>>(object: I): EventGooglePurchase;
};
export declare const EventStripePurchase: {
    encode(message: EventStripePurchase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventStripePurchase;
    fromJSON(object: any): EventStripePurchase;
    toJSON(message: EventStripePurchase): unknown;
    fromPartial<I extends {
        creator?: string;
        ID?: string;
    } & {
        creator?: string;
        ID?: string;
    } & Record<Exclude<keyof I, keyof EventStripePurchase>, never>>(object: I): EventStripePurchase;
};
