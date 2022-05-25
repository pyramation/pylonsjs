import { RedeemInfo } from "./redeem_info";
import { PaymentInfo } from "./payment_info";
import { UserMap } from "./accounts";
import { Trade } from "./trade";
import { Params } from "./params";
import { GoogleInAppPurchaseOrder } from "./google_iap_order";
import { Execution } from "./execution";
import { Item } from "./item";
import { Recipe } from "./recipe";
import { Cookbook } from "./cookbook";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the pylons module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    redeemInfoList: RedeemInfo[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    paymentInfoList: PaymentInfo[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    accountList: UserMap[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    tradeList: Trade[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    tradeCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    entityCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    params: Params;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    googleInAppPurchaseOrderList: GoogleInAppPurchaseOrder[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    googleIAPOrderCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    executionList: Execution[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    executionCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    pendingExecutionList: Execution[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    pendingExecutionCount: Long;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    itemList: Item[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    recipeList: Recipe[];
    /**
     * this line is used by starport scaffolding # genesis/proto/stateField
     * this line is used by starport scaffolding # ibc/genesis/proto
     */
    cookbookList: Cookbook[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        redeemInfoList?: {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        }[];
        paymentInfoList?: {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[];
        accountList?: {
            accountAddr?: string;
            username?: string;
        }[];
        tradeList?: {
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
        tradeCount?: any;
        entityCount?: any;
        params?: {
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
        };
        googleInAppPurchaseOrderList?: {
            creator?: string;
            productID?: string;
            purchaseToken?: string;
            receiptDataBase64?: string;
            signature?: string;
        }[];
        googleIAPOrderCount?: any;
        executionList?: {
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
        executionCount?: any;
        pendingExecutionList?: {
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
        pendingExecutionCount?: any;
        itemList?: {
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
        recipeList?: {
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
        cookbookList?: {
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
    } & {
        redeemInfoList?: {
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
        } & Record<Exclude<keyof I["redeemInfoList"][number], keyof RedeemInfo>, never>)[] & Record<Exclude<keyof I["redeemInfoList"], keyof {
            ID?: string;
            processorName?: string;
            address?: string;
            amount?: string;
            signature?: string;
        }[]>, never>;
        paymentInfoList?: {
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
        } & Record<Exclude<keyof I["paymentInfoList"][number], keyof PaymentInfo>, never>)[] & Record<Exclude<keyof I["paymentInfoList"], keyof {
            purchaseID?: string;
            processorName?: string;
            payerAddr?: string;
            amount?: string;
            productID?: string;
            signature?: string;
        }[]>, never>;
        accountList?: {
            accountAddr?: string;
            username?: string;
        }[] & ({
            accountAddr?: string;
            username?: string;
        } & {
            accountAddr?: string;
            username?: string;
        } & Record<Exclude<keyof I["accountList"][number], keyof UserMap>, never>)[] & Record<Exclude<keyof I["accountList"], keyof {
            accountAddr?: string;
            username?: string;
        }[]>, never>;
        tradeList?: {
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
                } & Record<Exclude<keyof I["tradeList"][number]["coinInputs"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["tradeList"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["tradeList"][number]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["tradeList"][number]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["tradeList"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["coinOutputs"], keyof {
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
            } & Record<Exclude<keyof I["tradeList"][number]["itemOutputs"][number], keyof import("./trade").ItemRef>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["itemOutputs"], keyof {
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
            } & Record<Exclude<keyof I["tradeList"][number]["tradedItemInputs"][number], keyof import("./trade").ItemRef>, never>)[] & Record<Exclude<keyof I["tradeList"][number]["tradedItemInputs"], keyof {
                cookbookID?: string;
                itemID?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["tradeList"][number], keyof Trade>, never>)[] & Record<Exclude<keyof I["tradeList"], keyof {
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
        tradeCount?: any;
        entityCount?: any;
        params?: {
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
                } & Record<Exclude<keyof I["params"]["coinIssuers"][number]["packages"][number], keyof import("./params").GoogleInAppPurchasePackage>, never>)[] & Record<Exclude<keyof I["params"]["coinIssuers"][number]["packages"], keyof {
                    packageName?: string;
                    productID?: string;
                    amount?: string;
                }[]>, never>;
                googleInAppPurchasePubKey?: string;
                entityName?: string;
            } & Record<Exclude<keyof I["params"]["coinIssuers"][number], keyof import("./params").CoinIssuer>, never>)[] & Record<Exclude<keyof I["params"]["coinIssuers"], keyof {
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
            } & Record<Exclude<keyof I["params"]["paymentProcessors"][number], keyof import("./params").PaymentProcessor>, never>)[] & Record<Exclude<keyof I["params"]["paymentProcessors"], keyof {
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
            } & Record<Exclude<keyof I["params"]["updateItemStringFee"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
            minTransferFee?: string;
            maxTransferFee?: string;
            updateUsernameFee?: {
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["params"]["updateUsernameFee"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
            distrEpochIdentifier?: string;
            engineVersion?: any;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
        googleInAppPurchaseOrderList?: {
            creator?: string;
            productID?: string;
            purchaseToken?: string;
            receiptDataBase64?: string;
            signature?: string;
        }[] & ({
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
        } & Record<Exclude<keyof I["googleInAppPurchaseOrderList"][number], keyof GoogleInAppPurchaseOrder>, never>)[] & Record<Exclude<keyof I["googleInAppPurchaseOrderList"], keyof {
            creator?: string;
            productID?: string;
            purchaseToken?: string;
            receiptDataBase64?: string;
            signature?: string;
        }[]>, never>;
        googleIAPOrderCount?: any;
        executionList?: {
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
                } & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["executionList"][number]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["executionList"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["executionList"][number]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["executionList"][number]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["executionList"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["executionList"][number]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["executionList"][number]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["executionList"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["executionList"][number], keyof Execution>, never>)[] & Record<Exclude<keyof I["executionList"], keyof {
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
        executionCount?: any;
        pendingExecutionList?: {
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
                } & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number]["strings"], keyof {
                    Key?: string;
                    Value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"][number], keyof import("./execution").ItemRecord>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"][number]["itemInputs"], keyof {
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
            } & Record<Exclude<keyof I["pendingExecutionList"][number]["coinInputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"][number]["coinInputs"], keyof {
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
            } & Record<Exclude<keyof I["pendingExecutionList"][number]["coinOutputs"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"][number]["coinOutputs"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I["pendingExecutionList"][number]["itemOutputIDs"], keyof string[]>, never>;
            itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I["pendingExecutionList"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
        } & Record<Exclude<keyof I["pendingExecutionList"][number], keyof Execution>, never>)[] & Record<Exclude<keyof I["pendingExecutionList"], keyof {
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
        pendingExecutionCount?: any;
        itemList?: {
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
            } & Record<Exclude<keyof I["itemList"][number]["doubles"][number], keyof import("./item").DoubleKeyValue>, never>)[] & Record<Exclude<keyof I["itemList"][number]["doubles"], keyof {
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
            } & Record<Exclude<keyof I["itemList"][number]["longs"][number], keyof import("./item").LongKeyValue>, never>)[] & Record<Exclude<keyof I["itemList"][number]["longs"], keyof {
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
            } & Record<Exclude<keyof I["itemList"][number]["strings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["itemList"][number]["strings"], keyof {
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
            } & Record<Exclude<keyof I["itemList"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["itemList"][number]["mutableStrings"], keyof {
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
            } & Record<Exclude<keyof I["itemList"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["itemList"][number]["transferFee"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            tradePercentage?: string;
        } & Record<Exclude<keyof I["itemList"][number], keyof Item>, never>)[] & Record<Exclude<keyof I["itemList"], keyof {
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
        recipeList?: {
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
                } & Record<Exclude<keyof I["recipeList"][number]["coinInputs"][number]["coins"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["coinInputs"][number]["coins"], keyof {
                    denom?: string;
                    amount?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["recipeList"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I["recipeList"][number]["coinInputs"], keyof {
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
                } & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number]["doubles"][number], keyof import("./recipe").DoubleInputParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number]["doubles"], keyof {
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
                } & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number]["longs"][number], keyof import("./recipe").LongInputParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number]["longs"], keyof {
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
                } & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number]["strings"][number], keyof import("./recipe").StringInputParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number]["strings"], keyof {
                    key?: string;
                    value?: string;
                }[]>, never>;
            } & Record<Exclude<keyof I["recipeList"][number]["itemInputs"][number], keyof import("./recipe").ItemInput>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["coinOutputs"][number]["coin"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
                    program?: string;
                } & Record<Exclude<keyof I["recipeList"][number]["entries"]["coinOutputs"][number], keyof import("./recipe").CoinOutput>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"][number], keyof import("./recipe").ItemOutput>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof import("./recipe").DoubleWeightRange>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof import("./recipe").DoubleParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof import("./recipe").IntWeightRange>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof import("./recipe").LongParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof import("./recipe").StringParam>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof import("./item").StringKeyValue>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"][number], keyof import("./recipe").ItemModifyOutput>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["entries"]["itemModifyOutputs"], keyof {
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
            } & Record<Exclude<keyof I["recipeList"][number]["entries"], keyof import("./recipe").EntriesList>, never>;
            outputs?: {
                entryIDs?: string[];
                weight?: any;
            }[] & ({
                entryIDs?: string[];
                weight?: any;
            } & {
                entryIDs?: string[] & string[] & Record<Exclude<keyof I["recipeList"][number]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                weight?: any;
            } & Record<Exclude<keyof I["recipeList"][number]["outputs"][number], keyof import("./recipe").WeightedOutputs>, never>)[] & Record<Exclude<keyof I["recipeList"][number]["outputs"], keyof {
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
            } & Record<Exclude<keyof I["recipeList"][number]["costPerBlock"], keyof import("../../cosmos/base/v1beta1/coin").Coin>, never>;
            enabled?: boolean;
            extraInfo?: string;
        } & Record<Exclude<keyof I["recipeList"][number], keyof Recipe>, never>)[] & Record<Exclude<keyof I["recipeList"], keyof {
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
        cookbookList?: {
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
        } & Record<Exclude<keyof I["cookbookList"][number], keyof Cookbook>, never>)[] & Record<Exclude<keyof I["cookbookList"], keyof {
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
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
