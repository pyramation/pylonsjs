import * as _101 from "../pylons/epochs/event";
import * as _102 from "../pylons/epochs/genesis";
import * as _103 from "../pylons/epochs/query";
import * as _104 from "../pylons/pylons/accounts";
import * as _105 from "../pylons/pylons/cookbook";
import * as _106 from "../pylons/pylons/event";
import * as _107 from "../pylons/pylons/execution";
import * as _108 from "../pylons/pylons/genesis";
import * as _109 from "../pylons/pylons/google_iap_order";
import * as _110 from "../pylons/pylons/item";
import * as _111 from "../pylons/pylons/params";
import * as _112 from "../pylons/pylons/payment_info";
import * as _113 from "../pylons/pylons/query";
import * as _114 from "../pylons/pylons/recipe";
import * as _115 from "../pylons/pylons/redeem_info";
import * as _116 from "../pylons/pylons/trade";
import * as _117 from "../pylons/pylons/tx";
export declare namespace Pylonstech {
    namespace pylons {
        const epochs: {
            QueryEpochsInfoRequest: {
                encode(_: _103.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEpochsInfoRequest;
                fromJSON(_: any): _103.QueryEpochsInfoRequest;
                toJSON(_: _103.QueryEpochsInfoRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _103.QueryEpochsInfoRequest;
            };
            QueryEpochsInfoResponse: {
                encode(message: _103.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEpochsInfoResponse;
                fromJSON(object: any): _103.QueryEpochsInfoResponse;
                toJSON(message: _103.QueryEpochsInfoResponse): unknown;
                fromPartial<I_1 extends {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    }[];
                } & {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    }[] & ({
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    } & {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    } & Record<Exclude<keyof I_1["epochs"][number], keyof _102.EpochInfo>, never>)[] & Record<Exclude<keyof I_1["epochs"], keyof {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_1, "epochs">, never>>(object: I_1): _103.QueryEpochsInfoResponse;
            };
            QueryCurrentEpochRequest: {
                encode(message: _103.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentEpochRequest;
                fromJSON(object: any): _103.QueryCurrentEpochRequest;
                toJSON(message: _103.QueryCurrentEpochRequest): unknown;
                fromPartial<I_2 extends {
                    identifier?: string;
                } & {
                    identifier?: string;
                } & Record<Exclude<keyof I_2, "identifier">, never>>(object: I_2): _103.QueryCurrentEpochRequest;
            };
            QueryCurrentEpochResponse: {
                encode(message: _103.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryCurrentEpochResponse;
                fromJSON(object: any): _103.QueryCurrentEpochResponse;
                toJSON(message: _103.QueryCurrentEpochResponse): unknown;
                fromPartial<I_3 extends {
                    currentEpoch?: any;
                } & {
                    currentEpoch?: any;
                } & Record<Exclude<keyof I_3, "currentEpoch">, never>>(object: I_3): _103.QueryCurrentEpochResponse;
            };
            EpochInfo: {
                encode(message: _102.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EpochInfo;
                fromJSON(object: any): _102.EpochInfo;
                toJSON(message: _102.EpochInfo): unknown;
                fromPartial<I_4 extends {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                } & {
                    identifier?: string;
                    startTime?: Date;
                    duration?: string;
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                } & Record<Exclude<keyof I_4, keyof _102.EpochInfo>, never>>(object: I_4): _102.EpochInfo;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                fromJSON(object: any): _102.GenesisState;
                toJSON(message: _102.GenesisState): unknown;
                fromPartial<I_5 extends {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    }[];
                } & {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    }[] & ({
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    } & {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    } & Record<Exclude<keyof I_5["epochs"][number], keyof _102.EpochInfo>, never>)[] & Record<Exclude<keyof I_5["epochs"], keyof {
                        identifier?: string;
                        startTime?: Date;
                        duration?: string;
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_5, "epochs">, never>>(object: I_5): _102.GenesisState;
            };
            EventEndEpoch: {
                encode(message: _101.EventEndEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.EventEndEpoch;
                fromJSON(object: any): _101.EventEndEpoch;
                toJSON(message: _101.EventEndEpoch): unknown;
                fromPartial<I_6 extends {
                    currentEpoch?: any;
                } & {
                    currentEpoch?: any;
                } & Record<Exclude<keyof I_6, "currentEpoch">, never>>(object: I_6): _101.EventEndEpoch;
            };
            EventBeginEpoch: {
                encode(message: _101.EventBeginEpoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.EventBeginEpoch;
                fromJSON(object: any): _101.EventBeginEpoch;
                toJSON(message: _101.EventBeginEpoch): unknown;
                fromPartial<I_7 extends {
                    currentEpoch?: any;
                    startTime?: Date;
                } & {
                    currentEpoch?: any;
                    startTime?: Date;
                } & Record<Exclude<keyof I_7, keyof _101.EventBeginEpoch>, never>>(object: I_7): _101.EventBeginEpoch;
            };
        };
        const pylons: {
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    burnDebtToken(value: _117.MsgBurnDebtToken): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateAccount(value: _117.MsgUpdateAccount): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    fulfillTrade(value: _117.MsgFulfillTrade): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createTrade(value: _117.MsgCreateTrade): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    cancelTrade(value: _117.MsgCancelTrade): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    completeExecutionEarly(value: _117.MsgCompleteExecutionEarly): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    transferCookbook(value: _117.MsgTransferCookbook): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    googleInAppPurchaseGetCoins(value: _117.MsgGoogleInAppPurchaseGetCoins): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createAccount(value: _117.MsgCreateAccount): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    sendItems(value: _117.MsgSendItems): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    executeRecipe(value: _117.MsgExecuteRecipe): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    setItemString(value: _117.MsgSetItemString): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createRecipe(value: _117.MsgCreateRecipe): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateRecipe(value: _117.MsgUpdateRecipe): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createCookbook(value: _117.MsgCreateCookbook): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateCookbook(value: _117.MsgUpdateCookbook): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    burnDebtToken(value: _117.MsgBurnDebtToken): {
                        typeUrl: string;
                        value: _117.MsgBurnDebtToken;
                    };
                    updateAccount(value: _117.MsgUpdateAccount): {
                        typeUrl: string;
                        value: _117.MsgUpdateAccount;
                    };
                    fulfillTrade(value: _117.MsgFulfillTrade): {
                        typeUrl: string;
                        value: _117.MsgFulfillTrade;
                    };
                    createTrade(value: _117.MsgCreateTrade): {
                        typeUrl: string;
                        value: _117.MsgCreateTrade;
                    };
                    cancelTrade(value: _117.MsgCancelTrade): {
                        typeUrl: string;
                        value: _117.MsgCancelTrade;
                    };
                    completeExecutionEarly(value: _117.MsgCompleteExecutionEarly): {
                        typeUrl: string;
                        value: _117.MsgCompleteExecutionEarly;
                    };
                    transferCookbook(value: _117.MsgTransferCookbook): {
                        typeUrl: string;
                        value: _117.MsgTransferCookbook;
                    };
                    googleInAppPurchaseGetCoins(value: _117.MsgGoogleInAppPurchaseGetCoins): {
                        typeUrl: string;
                        value: _117.MsgGoogleInAppPurchaseGetCoins;
                    };
                    createAccount(value: _117.MsgCreateAccount): {
                        typeUrl: string;
                        value: _117.MsgCreateAccount;
                    };
                    sendItems(value: _117.MsgSendItems): {
                        typeUrl: string;
                        value: _117.MsgSendItems;
                    };
                    executeRecipe(value: _117.MsgExecuteRecipe): {
                        typeUrl: string;
                        value: _117.MsgExecuteRecipe;
                    };
                    setItemString(value: _117.MsgSetItemString): {
                        typeUrl: string;
                        value: _117.MsgSetItemString;
                    };
                    createRecipe(value: _117.MsgCreateRecipe): {
                        typeUrl: string;
                        value: _117.MsgCreateRecipe;
                    };
                    updateRecipe(value: _117.MsgUpdateRecipe): {
                        typeUrl: string;
                        value: _117.MsgUpdateRecipe;
                    };
                    createCookbook(value: _117.MsgCreateCookbook): {
                        typeUrl: string;
                        value: _117.MsgCreateCookbook;
                    };
                    updateCookbook(value: _117.MsgUpdateCookbook): {
                        typeUrl: string;
                        value: _117.MsgUpdateCookbook;
                    };
                };
                toJSON: {
                    burnDebtToken(value: _117.MsgBurnDebtToken): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAccount(value: _117.MsgUpdateAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fulfillTrade(value: _117.MsgFulfillTrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createTrade(value: _117.MsgCreateTrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelTrade(value: _117.MsgCancelTrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    completeExecutionEarly(value: _117.MsgCompleteExecutionEarly): {
                        typeUrl: string;
                        value: unknown;
                    };
                    transferCookbook(value: _117.MsgTransferCookbook): {
                        typeUrl: string;
                        value: unknown;
                    };
                    googleInAppPurchaseGetCoins(value: _117.MsgGoogleInAppPurchaseGetCoins): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createAccount(value: _117.MsgCreateAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sendItems(value: _117.MsgSendItems): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeRecipe(value: _117.MsgExecuteRecipe): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setItemString(value: _117.MsgSetItemString): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createRecipe(value: _117.MsgCreateRecipe): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRecipe(value: _117.MsgUpdateRecipe): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createCookbook(value: _117.MsgCreateCookbook): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateCookbook(value: _117.MsgUpdateCookbook): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    burnDebtToken(value: any): {
                        typeUrl: string;
                        value: _117.MsgBurnDebtToken;
                    };
                    updateAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgUpdateAccount;
                    };
                    fulfillTrade(value: any): {
                        typeUrl: string;
                        value: _117.MsgFulfillTrade;
                    };
                    createTrade(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreateTrade;
                    };
                    cancelTrade(value: any): {
                        typeUrl: string;
                        value: _117.MsgCancelTrade;
                    };
                    completeExecutionEarly(value: any): {
                        typeUrl: string;
                        value: _117.MsgCompleteExecutionEarly;
                    };
                    transferCookbook(value: any): {
                        typeUrl: string;
                        value: _117.MsgTransferCookbook;
                    };
                    googleInAppPurchaseGetCoins(value: any): {
                        typeUrl: string;
                        value: _117.MsgGoogleInAppPurchaseGetCoins;
                    };
                    createAccount(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreateAccount;
                    };
                    sendItems(value: any): {
                        typeUrl: string;
                        value: _117.MsgSendItems;
                    };
                    executeRecipe(value: any): {
                        typeUrl: string;
                        value: _117.MsgExecuteRecipe;
                    };
                    setItemString(value: any): {
                        typeUrl: string;
                        value: _117.MsgSetItemString;
                    };
                    createRecipe(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreateRecipe;
                    };
                    updateRecipe(value: any): {
                        typeUrl: string;
                        value: _117.MsgUpdateRecipe;
                    };
                    createCookbook(value: any): {
                        typeUrl: string;
                        value: _117.MsgCreateCookbook;
                    };
                    updateCookbook(value: any): {
                        typeUrl: string;
                        value: _117.MsgUpdateCookbook;
                    };
                };
                fromPartial: {
                    burnDebtToken(value: _117.MsgBurnDebtToken): {
                        typeUrl: string;
                        value: _117.MsgBurnDebtToken;
                    };
                    updateAccount(value: _117.MsgUpdateAccount): {
                        typeUrl: string;
                        value: _117.MsgUpdateAccount;
                    };
                    fulfillTrade(value: _117.MsgFulfillTrade): {
                        typeUrl: string;
                        value: _117.MsgFulfillTrade;
                    };
                    createTrade(value: _117.MsgCreateTrade): {
                        typeUrl: string;
                        value: _117.MsgCreateTrade;
                    };
                    cancelTrade(value: _117.MsgCancelTrade): {
                        typeUrl: string;
                        value: _117.MsgCancelTrade;
                    };
                    completeExecutionEarly(value: _117.MsgCompleteExecutionEarly): {
                        typeUrl: string;
                        value: _117.MsgCompleteExecutionEarly;
                    };
                    transferCookbook(value: _117.MsgTransferCookbook): {
                        typeUrl: string;
                        value: _117.MsgTransferCookbook;
                    };
                    googleInAppPurchaseGetCoins(value: _117.MsgGoogleInAppPurchaseGetCoins): {
                        typeUrl: string;
                        value: _117.MsgGoogleInAppPurchaseGetCoins;
                    };
                    createAccount(value: _117.MsgCreateAccount): {
                        typeUrl: string;
                        value: _117.MsgCreateAccount;
                    };
                    sendItems(value: _117.MsgSendItems): {
                        typeUrl: string;
                        value: _117.MsgSendItems;
                    };
                    executeRecipe(value: _117.MsgExecuteRecipe): {
                        typeUrl: string;
                        value: _117.MsgExecuteRecipe;
                    };
                    setItemString(value: _117.MsgSetItemString): {
                        typeUrl: string;
                        value: _117.MsgSetItemString;
                    };
                    createRecipe(value: _117.MsgCreateRecipe): {
                        typeUrl: string;
                        value: _117.MsgCreateRecipe;
                    };
                    updateRecipe(value: _117.MsgUpdateRecipe): {
                        typeUrl: string;
                        value: _117.MsgUpdateRecipe;
                    };
                    createCookbook(value: _117.MsgCreateCookbook): {
                        typeUrl: string;
                        value: _117.MsgCreateCookbook;
                    };
                    updateCookbook(value: _117.MsgUpdateCookbook): {
                        typeUrl: string;
                        value: _117.MsgUpdateCookbook;
                    };
                };
            };
            AminoConverter: {
                "/Pylonstech.pylons.pylons.MsgBurnDebtToken": {
                    aminoType: string;
                    toAmino: ({ creator, redeemInfo }: _117.MsgBurnDebtToken) => {
                        creator: string;
                        redeem_info: {
                            id: string;
                            processor_name: string;
                            address: string;
                            amount: string;
                            signature: string;
                        };
                    };
                    fromAmino: ({ creator, redeem_info }: {
                        creator: string;
                        redeem_info: {
                            id: string;
                            processor_name: string;
                            address: string;
                            amount: string;
                            signature: string;
                        };
                    }) => _117.MsgBurnDebtToken;
                };
                "/Pylonstech.pylons.pylons.MsgUpdateAccount": {
                    aminoType: string;
                    toAmino: ({ creator, username }: _117.MsgUpdateAccount) => {
                        creator: string;
                        username: string;
                    };
                    fromAmino: ({ creator, username }: {
                        creator: string;
                        username: string;
                    }) => _117.MsgUpdateAccount;
                };
                "/Pylonstech.pylons.pylons.MsgFulfillTrade": {
                    aminoType: string;
                    toAmino: ({ creator, ID, coinInputsIndex, items, paymentInfos }: _117.MsgFulfillTrade) => {
                        creator: string;
                        id: string;
                        coin_inputs_index: string;
                        items: {
                            cookbook_i_d: string;
                            item_i_d: string;
                        }[];
                        payment_infos: {
                            purchase_i_d: string;
                            processor_name: string;
                            payer_addr: string;
                            amount: string;
                            product_i_d: string;
                            signature: string;
                        }[];
                    };
                    fromAmino: ({ creator, id, coin_inputs_index, items, payment_infos }: {
                        creator: string;
                        id: string;
                        coin_inputs_index: string;
                        items: {
                            cookbook_i_d: string;
                            item_i_d: string;
                        }[];
                        payment_infos: {
                            purchase_i_d: string;
                            processor_name: string;
                            payer_addr: string;
                            amount: string;
                            product_i_d: string;
                            signature: string;
                        }[];
                    }) => _117.MsgFulfillTrade;
                };
                "/Pylonstech.pylons.pylons.MsgCreateTrade": {
                    aminoType: string;
                    toAmino: ({ creator, coinInputs, itemInputs, coinOutputs, itemOutputs, extraInfo }: _117.MsgCreateTrade) => {
                        creator: string;
                        coin_inputs: {
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        item_inputs: {
                            id: string;
                            doubles: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            longs: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            strings: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        coin_outputs: {
                            denom: string;
                            amount: string;
                        }[];
                        item_outputs: {
                            cookbook_i_d: string;
                            item_i_d: string;
                        }[];
                        extra_info: string;
                    };
                    fromAmino: ({ creator, coin_inputs, item_inputs, coin_outputs, item_outputs, extra_info }: {
                        creator: string;
                        coin_inputs: {
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        item_inputs: {
                            id: string;
                            doubles: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            longs: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            strings: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        coin_outputs: {
                            denom: string;
                            amount: string;
                        }[];
                        item_outputs: {
                            cookbook_i_d: string;
                            item_i_d: string;
                        }[];
                        extra_info: string;
                    }) => _117.MsgCreateTrade;
                };
                "/Pylonstech.pylons.pylons.MsgCancelTrade": {
                    aminoType: string;
                    toAmino: ({ creator, ID }: _117.MsgCancelTrade) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _117.MsgCancelTrade;
                };
                "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly": {
                    aminoType: string;
                    toAmino: ({ creator, ID }: _117.MsgCompleteExecutionEarly) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _117.MsgCompleteExecutionEarly;
                };
                "/Pylonstech.pylons.pylons.MsgTransferCookbook": {
                    aminoType: string;
                    toAmino: ({ creator, ID, recipient }: _117.MsgTransferCookbook) => {
                        creator: string;
                        id: string;
                        recipient: string;
                    };
                    fromAmino: ({ creator, id, recipient }: {
                        creator: string;
                        id: string;
                        recipient: string;
                    }) => _117.MsgTransferCookbook;
                };
                "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
                    aminoType: string;
                    toAmino: ({ creator, productID, purchaseToken, receiptDataBase64, signature }: _117.MsgGoogleInAppPurchaseGetCoins) => {
                        creator: string;
                        product_i_d: string;
                        purchase_token: string;
                        receipt_data_base64: string;
                        signature: string;
                    };
                    fromAmino: ({ creator, product_i_d, purchase_token, receipt_data_base64, signature }: {
                        creator: string;
                        product_i_d: string;
                        purchase_token: string;
                        receipt_data_base64: string;
                        signature: string;
                    }) => _117.MsgGoogleInAppPurchaseGetCoins;
                };
                "/Pylonstech.pylons.pylons.MsgCreateAccount": {
                    aminoType: string;
                    toAmino: ({ creator, username }: _117.MsgCreateAccount) => {
                        creator: string;
                        username: string;
                    };
                    fromAmino: ({ creator, username }: {
                        creator: string;
                        username: string;
                    }) => _117.MsgCreateAccount;
                };
                "/Pylonstech.pylons.pylons.MsgSendItems": {
                    aminoType: string;
                    toAmino: ({ creator, receiver, items }: _117.MsgSendItems) => {
                        creator: string;
                        receiver: string;
                        items: {
                            cookbook_i_d: string;
                            item_i_d: string;
                        }[];
                    };
                    fromAmino: ({ creator, receiver, items }: {
                        creator: string;
                        receiver: string;
                        items: {
                            cookbook_i_d: string;
                            item_i_d: string;
                        }[];
                    }) => _117.MsgSendItems;
                };
                "/Pylonstech.pylons.pylons.MsgExecuteRecipe": {
                    aminoType: string;
                    toAmino: ({ creator, cookbookID, recipeID, coinInputsIndex, itemIDs, paymentInfos }: _117.MsgExecuteRecipe) => {
                        creator: string;
                        cookbook_i_d: string;
                        recipe_i_d: string;
                        coin_inputs_index: string;
                        item_i_ds: string[];
                        payment_infos: {
                            purchase_i_d: string;
                            processor_name: string;
                            payer_addr: string;
                            amount: string;
                            product_i_d: string;
                            signature: string;
                        }[];
                    };
                    fromAmino: ({ creator, cookbook_i_d, recipe_i_d, coin_inputs_index, item_i_ds, payment_infos }: {
                        creator: string;
                        cookbook_i_d: string;
                        recipe_i_d: string;
                        coin_inputs_index: string;
                        item_i_ds: string[];
                        payment_infos: {
                            purchase_i_d: string;
                            processor_name: string;
                            payer_addr: string;
                            amount: string;
                            product_i_d: string;
                            signature: string;
                        }[];
                    }) => _117.MsgExecuteRecipe;
                };
                "/Pylonstech.pylons.pylons.MsgSetItemString": {
                    aminoType: string;
                    toAmino: ({ creator, cookbookID, ID, field, value }: _117.MsgSetItemString) => {
                        creator: string;
                        cookbook_i_d: string;
                        id: string;
                        field: string;
                        value: string;
                    };
                    fromAmino: ({ creator, cookbook_i_d, id, field, value }: {
                        creator: string;
                        cookbook_i_d: string;
                        id: string;
                        field: string;
                        value: string;
                    }) => _117.MsgSetItemString;
                };
                "/Pylonstech.pylons.pylons.MsgCreateRecipe": {
                    aminoType: string;
                    toAmino: ({ creator, cookbookID, ID, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: _117.MsgCreateRecipe) => {
                        creator: string;
                        cookbook_i_d: string;
                        id: string;
                        name: string;
                        description: string;
                        version: string;
                        coin_inputs: {
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        item_inputs: {
                            id: string;
                            doubles: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            longs: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            strings: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        entries: {
                            coin_outputs: {
                                id: string;
                                coin: {
                                    denom: string;
                                    amount: string;
                                };
                                program: string;
                            }[];
                            item_outputs: {
                                id: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                            item_modify_outputs: {
                                id: string;
                                item_input_ref: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                        };
                        outputs: {
                            entry_i_ds: string[];
                            weight: string;
                        }[];
                        block_interval: string;
                        cost_per_block: {
                            denom: string;
                            amount: string;
                        };
                        enabled: boolean;
                        extra_info: string;
                    };
                    fromAmino: ({ creator, cookbook_i_d, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: {
                        creator: string;
                        cookbook_i_d: string;
                        id: string;
                        name: string;
                        description: string;
                        version: string;
                        coin_inputs: {
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        item_inputs: {
                            id: string;
                            doubles: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            longs: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            strings: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        entries: {
                            coin_outputs: {
                                id: string;
                                coin: {
                                    denom: string;
                                    amount: string;
                                };
                                program: string;
                            }[];
                            item_outputs: {
                                id: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                            item_modify_outputs: {
                                id: string;
                                item_input_ref: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                        };
                        outputs: {
                            entry_i_ds: string[];
                            weight: string;
                        }[];
                        block_interval: string;
                        cost_per_block: {
                            denom: string;
                            amount: string;
                        };
                        enabled: boolean;
                        extra_info: string;
                    }) => _117.MsgCreateRecipe;
                };
                "/Pylonstech.pylons.pylons.MsgUpdateRecipe": {
                    aminoType: string;
                    toAmino: ({ creator, cookbookID, ID, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: _117.MsgUpdateRecipe) => {
                        creator: string;
                        cookbook_i_d: string;
                        id: string;
                        name: string;
                        description: string;
                        version: string;
                        coin_inputs: {
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        item_inputs: {
                            id: string;
                            doubles: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            longs: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            strings: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        entries: {
                            coin_outputs: {
                                id: string;
                                coin: {
                                    denom: string;
                                    amount: string;
                                };
                                program: string;
                            }[];
                            item_outputs: {
                                id: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                            item_modify_outputs: {
                                id: string;
                                item_input_ref: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                        };
                        outputs: {
                            entry_i_ds: string[];
                            weight: string;
                        }[];
                        block_interval: string;
                        cost_per_block: {
                            denom: string;
                            amount: string;
                        };
                        enabled: boolean;
                        extra_info: string;
                    };
                    fromAmino: ({ creator, cookbook_i_d, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: {
                        creator: string;
                        cookbook_i_d: string;
                        id: string;
                        name: string;
                        description: string;
                        version: string;
                        coin_inputs: {
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        item_inputs: {
                            id: string;
                            doubles: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            longs: {
                                key: string;
                                min_value: string;
                                max_value: string;
                            }[];
                            strings: {
                                key: string;
                                value: string;
                            }[];
                        }[];
                        entries: {
                            coin_outputs: {
                                id: string;
                                coin: {
                                    denom: string;
                                    amount: string;
                                };
                                program: string;
                            }[];
                            item_outputs: {
                                id: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                            item_modify_outputs: {
                                id: string;
                                item_input_ref: string;
                                doubles: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                longs: {
                                    key: string;
                                    weight_ranges: {
                                        lower: string;
                                        upper: string;
                                        weight: string;
                                    }[];
                                    program: string;
                                }[];
                                strings: {
                                    key: string;
                                    value: string;
                                    program: string;
                                }[];
                                mutable_strings: {
                                    key: string;
                                    value: string;
                                }[];
                                transfer_fee: {
                                    denom: string;
                                    amount: string;
                                }[];
                                trade_percentage: string;
                                quantity: string;
                                amount_minted: string;
                                tradeable: boolean;
                            }[];
                        };
                        outputs: {
                            entry_i_ds: string[];
                            weight: string;
                        }[];
                        block_interval: string;
                        cost_per_block: {
                            denom: string;
                            amount: string;
                        };
                        enabled: boolean;
                        extra_info: string;
                    }) => _117.MsgUpdateRecipe;
                };
                "/Pylonstech.pylons.pylons.MsgCreateCookbook": {
                    aminoType: string;
                    toAmino: ({ creator, ID, name, description, developer, version, supportEmail, enabled }: _117.MsgCreateCookbook) => {
                        creator: string;
                        id: string;
                        name: string;
                        description: string;
                        developer: string;
                        version: string;
                        support_email: string;
                        enabled: boolean;
                    };
                    fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: {
                        creator: string;
                        id: string;
                        name: string;
                        description: string;
                        developer: string;
                        version: string;
                        support_email: string;
                        enabled: boolean;
                    }) => _117.MsgCreateCookbook;
                };
                "/Pylonstech.pylons.pylons.MsgUpdateCookbook": {
                    aminoType: string;
                    toAmino: ({ creator, ID, name, description, developer, version, supportEmail, enabled }: _117.MsgUpdateCookbook) => {
                        creator: string;
                        id: string;
                        name: string;
                        description: string;
                        developer: string;
                        version: string;
                        support_email: string;
                        enabled: boolean;
                    };
                    fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: {
                        creator: string;
                        id: string;
                        name: string;
                        description: string;
                        developer: string;
                        version: string;
                        support_email: string;
                        enabled: boolean;
                    }) => _117.MsgUpdateCookbook;
                };
            };
            MsgBurnDebtToken: {
                encode(message: _117.MsgBurnDebtToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgBurnDebtToken;
                fromJSON(object: any): _117.MsgBurnDebtToken;
                toJSON(message: _117.MsgBurnDebtToken): unknown;
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
                    } & Record<Exclude<keyof I["redeemInfo"], keyof _115.RedeemInfo>, never>;
                } & Record<Exclude<keyof I, keyof _117.MsgBurnDebtToken>, never>>(object: I): _117.MsgBurnDebtToken;
            };
            MsgBurnDebtTokenResponse: {
                encode(_: _117.MsgBurnDebtTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgBurnDebtTokenResponse;
                fromJSON(_: any): _117.MsgBurnDebtTokenResponse;
                toJSON(_: _117.MsgBurnDebtTokenResponse): unknown;
                fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _117.MsgBurnDebtTokenResponse;
            };
            MsgUpdateAccount: {
                encode(message: _117.MsgUpdateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateAccount;
                fromJSON(object: any): _117.MsgUpdateAccount;
                toJSON(message: _117.MsgUpdateAccount): unknown;
                fromPartial<I_2 extends {
                    creator?: string;
                    username?: string;
                } & {
                    creator?: string;
                    username?: string;
                } & Record<Exclude<keyof I_2, keyof _117.MsgUpdateAccount>, never>>(object: I_2): _117.MsgUpdateAccount;
            };
            MsgUpdateAccountResponse: {
                encode(_: _117.MsgUpdateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateAccountResponse;
                fromJSON(_: any): _117.MsgUpdateAccountResponse;
                toJSON(_: _117.MsgUpdateAccountResponse): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _117.MsgUpdateAccountResponse;
            };
            MsgCreateAccount: {
                encode(message: _117.MsgCreateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateAccount;
                fromJSON(object: any): _117.MsgCreateAccount;
                toJSON(message: _117.MsgCreateAccount): unknown;
                fromPartial<I_4 extends {
                    creator?: string;
                    username?: string;
                } & {
                    creator?: string;
                    username?: string;
                } & Record<Exclude<keyof I_4, keyof _117.MsgCreateAccount>, never>>(object: I_4): _117.MsgCreateAccount;
            };
            MsgCreateAccountResponse: {
                encode(_: _117.MsgCreateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateAccountResponse;
                fromJSON(_: any): _117.MsgCreateAccountResponse;
                toJSON(_: _117.MsgCreateAccountResponse): unknown;
                fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _117.MsgCreateAccountResponse;
            };
            MsgFulfillTrade: {
                encode(message: _117.MsgFulfillTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgFulfillTrade;
                fromJSON(object: any): _117.MsgFulfillTrade;
                toJSON(message: _117.MsgFulfillTrade): unknown;
                fromPartial<I_6 extends {
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
                    } & Record<Exclude<keyof I_6["items"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_6["items"], keyof {
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
                    } & Record<Exclude<keyof I_6["paymentInfos"][number], keyof _112.PaymentInfo>, never>)[] & Record<Exclude<keyof I_6["paymentInfos"], keyof {
                        purchaseID?: string;
                        processorName?: string;
                        payerAddr?: string;
                        amount?: string;
                        productID?: string;
                        signature?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_6, keyof _117.MsgFulfillTrade>, never>>(object: I_6): _117.MsgFulfillTrade;
            };
            MsgFulfillTradeResponse: {
                encode(_: _117.MsgFulfillTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgFulfillTradeResponse;
                fromJSON(_: any): _117.MsgFulfillTradeResponse;
                toJSON(_: _117.MsgFulfillTradeResponse): unknown;
                fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _117.MsgFulfillTradeResponse;
            };
            MsgCreateTrade: {
                encode(message: _117.MsgCreateTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateTrade;
                fromJSON(object: any): _117.MsgCreateTrade;
                toJSON(message: _117.MsgCreateTrade): unknown;
                fromPartial<I_8 extends {
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
                        } & Record<Exclude<keyof I_8["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_8["coinInputs"][number]["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_8["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_8["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_8["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_8["itemInputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_8["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_8["itemInputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_8["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_8["itemInputs"][number]["strings"], keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_8["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_8["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I_8["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_8["coinOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_8["itemOutputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_8["itemOutputs"], keyof {
                        cookbookID?: string;
                        itemID?: string;
                    }[]>, never>;
                    extraInfo?: string;
                } & Record<Exclude<keyof I_8, keyof _117.MsgCreateTrade>, never>>(object: I_8): _117.MsgCreateTrade;
            };
            MsgCreateTradeResponse: {
                encode(message: _117.MsgCreateTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateTradeResponse;
                fromJSON(object: any): _117.MsgCreateTradeResponse;
                toJSON(message: _117.MsgCreateTradeResponse): unknown;
                fromPartial<I_9 extends {
                    ID?: any;
                } & {
                    ID?: any;
                } & Record<Exclude<keyof I_9, "ID">, never>>(object: I_9): _117.MsgCreateTradeResponse;
            };
            MsgCancelTrade: {
                encode(message: _117.MsgCancelTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCancelTrade;
                fromJSON(object: any): _117.MsgCancelTrade;
                toJSON(message: _117.MsgCancelTrade): unknown;
                fromPartial<I_10 extends {
                    creator?: string;
                    ID?: any;
                } & {
                    creator?: string;
                    ID?: any;
                } & Record<Exclude<keyof I_10, keyof _117.MsgCancelTrade>, never>>(object: I_10): _117.MsgCancelTrade;
            };
            MsgCancelTradeResponse: {
                encode(_: _117.MsgCancelTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCancelTradeResponse;
                fromJSON(_: any): _117.MsgCancelTradeResponse;
                toJSON(_: _117.MsgCancelTradeResponse): unknown;
                fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _117.MsgCancelTradeResponse;
            };
            MsgCompleteExecutionEarly: {
                encode(message: _117.MsgCompleteExecutionEarly, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCompleteExecutionEarly;
                fromJSON(object: any): _117.MsgCompleteExecutionEarly;
                toJSON(message: _117.MsgCompleteExecutionEarly): unknown;
                fromPartial<I_12 extends {
                    creator?: string;
                    ID?: string;
                } & {
                    creator?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_12, keyof _117.MsgCompleteExecutionEarly>, never>>(object: I_12): _117.MsgCompleteExecutionEarly;
            };
            MsgCompleteExecutionEarlyResponse: {
                encode(message: _117.MsgCompleteExecutionEarlyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCompleteExecutionEarlyResponse;
                fromJSON(object: any): _117.MsgCompleteExecutionEarlyResponse;
                toJSON(message: _117.MsgCompleteExecutionEarlyResponse): unknown;
                fromPartial<I_13 extends {
                    ID?: string;
                } & {
                    ID?: string;
                } & Record<Exclude<keyof I_13, "ID">, never>>(object: I_13): _117.MsgCompleteExecutionEarlyResponse;
            };
            MsgTransferCookbook: {
                encode(message: _117.MsgTransferCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgTransferCookbook;
                fromJSON(object: any): _117.MsgTransferCookbook;
                toJSON(message: _117.MsgTransferCookbook): unknown;
                fromPartial<I_14 extends {
                    creator?: string;
                    ID?: string;
                    recipient?: string;
                } & {
                    creator?: string;
                    ID?: string;
                    recipient?: string;
                } & Record<Exclude<keyof I_14, keyof _117.MsgTransferCookbook>, never>>(object: I_14): _117.MsgTransferCookbook;
            };
            MsgTransferCookbookResponse: {
                encode(_: _117.MsgTransferCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgTransferCookbookResponse;
                fromJSON(_: any): _117.MsgTransferCookbookResponse;
                toJSON(_: _117.MsgTransferCookbookResponse): unknown;
                fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _117.MsgTransferCookbookResponse;
            };
            MsgGoogleInAppPurchaseGetCoins: {
                encode(message: _117.MsgGoogleInAppPurchaseGetCoins, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgGoogleInAppPurchaseGetCoins;
                fromJSON(object: any): _117.MsgGoogleInAppPurchaseGetCoins;
                toJSON(message: _117.MsgGoogleInAppPurchaseGetCoins): unknown;
                fromPartial<I_16 extends {
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
                } & Record<Exclude<keyof I_16, keyof _117.MsgGoogleInAppPurchaseGetCoins>, never>>(object: I_16): _117.MsgGoogleInAppPurchaseGetCoins;
            };
            MsgGoogleInAppPurchaseGetCoinsResponse: {
                encode(_: _117.MsgGoogleInAppPurchaseGetCoinsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgGoogleInAppPurchaseGetCoinsResponse;
                fromJSON(_: any): _117.MsgGoogleInAppPurchaseGetCoinsResponse;
                toJSON(_: _117.MsgGoogleInAppPurchaseGetCoinsResponse): unknown;
                fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _117.MsgGoogleInAppPurchaseGetCoinsResponse;
            };
            MsgSendItems: {
                encode(message: _117.MsgSendItems, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgSendItems;
                fromJSON(object: any): _117.MsgSendItems;
                toJSON(message: _117.MsgSendItems): unknown;
                fromPartial<I_18 extends {
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
                    } & Record<Exclude<keyof I_18["items"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_18["items"], keyof {
                        cookbookID?: string;
                        itemID?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_18, keyof _117.MsgSendItems>, never>>(object: I_18): _117.MsgSendItems;
            };
            MsgSendItemsResponse: {
                encode(_: _117.MsgSendItemsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgSendItemsResponse;
                fromJSON(_: any): _117.MsgSendItemsResponse;
                toJSON(_: _117.MsgSendItemsResponse): unknown;
                fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _117.MsgSendItemsResponse;
            };
            MsgExecuteRecipe: {
                encode(message: _117.MsgExecuteRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgExecuteRecipe;
                fromJSON(object: any): _117.MsgExecuteRecipe;
                toJSON(message: _117.MsgExecuteRecipe): unknown;
                fromPartial<I_20 extends {
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
                    itemIDs?: string[] & string[] & Record<Exclude<keyof I_20["itemIDs"], keyof string[]>, never>;
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
                    } & Record<Exclude<keyof I_20["paymentInfos"][number], keyof _112.PaymentInfo>, never>)[] & Record<Exclude<keyof I_20["paymentInfos"], keyof {
                        purchaseID?: string;
                        processorName?: string;
                        payerAddr?: string;
                        amount?: string;
                        productID?: string;
                        signature?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_20, keyof _117.MsgExecuteRecipe>, never>>(object: I_20): _117.MsgExecuteRecipe;
            };
            MsgExecuteRecipeResponse: {
                encode(message: _117.MsgExecuteRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgExecuteRecipeResponse;
                fromJSON(object: any): _117.MsgExecuteRecipeResponse;
                toJSON(message: _117.MsgExecuteRecipeResponse): unknown;
                fromPartial<I_21 extends {
                    ID?: string;
                } & {
                    ID?: string;
                } & Record<Exclude<keyof I_21, "ID">, never>>(object: I_21): _117.MsgExecuteRecipeResponse;
            };
            MsgSetItemString: {
                encode(message: _117.MsgSetItemString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgSetItemString;
                fromJSON(object: any): _117.MsgSetItemString;
                toJSON(message: _117.MsgSetItemString): unknown;
                fromPartial<I_22 extends {
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
                } & Record<Exclude<keyof I_22, keyof _117.MsgSetItemString>, never>>(object: I_22): _117.MsgSetItemString;
            };
            MsgSetItemStringResponse: {
                encode(_: _117.MsgSetItemStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgSetItemStringResponse;
                fromJSON(_: any): _117.MsgSetItemStringResponse;
                toJSON(_: _117.MsgSetItemStringResponse): unknown;
                fromPartial<I_23 extends {} & {} & Record<Exclude<keyof I_23, never>, never>>(_: I_23): _117.MsgSetItemStringResponse;
            };
            MsgCreateRecipe: {
                encode(message: _117.MsgCreateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateRecipe;
                fromJSON(object: any): _117.MsgCreateRecipe;
                toJSON(message: _117.MsgCreateRecipe): unknown;
                fromPartial<I_24 extends {
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
                        } & Record<Exclude<keyof I_24["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_24["coinInputs"][number]["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_24["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_24["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_24["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_24["itemInputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_24["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_24["itemInputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_24["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_24["itemInputs"][number]["strings"], keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_24["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_24["itemInputs"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_24["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_24["entries"]["coinOutputs"], keyof {
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
                                } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["strings"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        } & Record<Exclude<keyof I_24["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemOutputs"], keyof {
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
                                } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                            } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        } & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_24["entries"]["itemModifyOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_24["entries"], keyof _114.EntriesList>, never>;
                    outputs?: {
                        entryIDs?: string[];
                        weight?: any;
                    }[] & ({
                        entryIDs?: string[];
                        weight?: any;
                    } & {
                        entryIDs?: string[] & string[] & Record<Exclude<keyof I_24["outputs"][number]["entryIDs"], keyof string[]>, never>;
                        weight?: any;
                    } & Record<Exclude<keyof I_24["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_24["outputs"], keyof {
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
                    } & Record<Exclude<keyof I_24["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    enabled?: boolean;
                    extraInfo?: string;
                } & Record<Exclude<keyof I_24, keyof _117.MsgCreateRecipe>, never>>(object: I_24): _117.MsgCreateRecipe;
            };
            MsgCreateRecipeResponse: {
                encode(_: _117.MsgCreateRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateRecipeResponse;
                fromJSON(_: any): _117.MsgCreateRecipeResponse;
                toJSON(_: _117.MsgCreateRecipeResponse): unknown;
                fromPartial<I_25 extends {} & {} & Record<Exclude<keyof I_25, never>, never>>(_: I_25): _117.MsgCreateRecipeResponse;
            };
            MsgUpdateRecipe: {
                encode(message: _117.MsgUpdateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateRecipe;
                fromJSON(object: any): _117.MsgUpdateRecipe;
                toJSON(message: _117.MsgUpdateRecipe): unknown;
                fromPartial<I_26 extends {
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
                        } & Record<Exclude<keyof I_26["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_26["coinInputs"][number]["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_26["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_26["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_26["itemInputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_26["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_26["itemInputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_26["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_26["itemInputs"][number]["strings"], keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_26["itemInputs"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_26["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_26["entries"]["coinOutputs"], keyof {
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
                                } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["strings"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        } & Record<Exclude<keyof I_26["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemOutputs"], keyof {
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
                                } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                            } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        } & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_26["entries"]["itemModifyOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_26["entries"], keyof _114.EntriesList>, never>;
                    outputs?: {
                        entryIDs?: string[];
                        weight?: any;
                    }[] & ({
                        entryIDs?: string[];
                        weight?: any;
                    } & {
                        entryIDs?: string[] & string[] & Record<Exclude<keyof I_26["outputs"][number]["entryIDs"], keyof string[]>, never>;
                        weight?: any;
                    } & Record<Exclude<keyof I_26["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_26["outputs"], keyof {
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
                    } & Record<Exclude<keyof I_26["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    enabled?: boolean;
                    extraInfo?: string;
                } & Record<Exclude<keyof I_26, keyof _117.MsgUpdateRecipe>, never>>(object: I_26): _117.MsgUpdateRecipe;
            };
            MsgUpdateRecipeResponse: {
                encode(_: _117.MsgUpdateRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateRecipeResponse;
                fromJSON(_: any): _117.MsgUpdateRecipeResponse;
                toJSON(_: _117.MsgUpdateRecipeResponse): unknown;
                fromPartial<I_27 extends {} & {} & Record<Exclude<keyof I_27, never>, never>>(_: I_27): _117.MsgUpdateRecipeResponse;
            };
            MsgCreateCookbook: {
                encode(message: _117.MsgCreateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateCookbook;
                fromJSON(object: any): _117.MsgCreateCookbook;
                toJSON(message: _117.MsgCreateCookbook): unknown;
                fromPartial<I_28 extends {
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
                } & Record<Exclude<keyof I_28, keyof _117.MsgCreateCookbook>, never>>(object: I_28): _117.MsgCreateCookbook;
            };
            MsgCreateCookbookResponse: {
                encode(_: _117.MsgCreateCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgCreateCookbookResponse;
                fromJSON(_: any): _117.MsgCreateCookbookResponse;
                toJSON(_: _117.MsgCreateCookbookResponse): unknown;
                fromPartial<I_29 extends {} & {} & Record<Exclude<keyof I_29, never>, never>>(_: I_29): _117.MsgCreateCookbookResponse;
            };
            MsgUpdateCookbook: {
                encode(message: _117.MsgUpdateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateCookbook;
                fromJSON(object: any): _117.MsgUpdateCookbook;
                toJSON(message: _117.MsgUpdateCookbook): unknown;
                fromPartial<I_30 extends {
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
                } & Record<Exclude<keyof I_30, keyof _117.MsgUpdateCookbook>, never>>(object: I_30): _117.MsgUpdateCookbook;
            };
            MsgUpdateCookbookResponse: {
                encode(_: _117.MsgUpdateCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.MsgUpdateCookbookResponse;
                fromJSON(_: any): _117.MsgUpdateCookbookResponse;
                toJSON(_: _117.MsgUpdateCookbookResponse): unknown;
                fromPartial<I_31 extends {} & {} & Record<Exclude<keyof I_31, never>, never>>(_: I_31): _117.MsgUpdateCookbookResponse;
            };
            ItemRef: {
                encode(message: _116.ItemRef, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ItemRef;
                fromJSON(object: any): _116.ItemRef;
                toJSON(message: _116.ItemRef): unknown;
                fromPartial<I_32 extends {
                    cookbookID?: string;
                    itemID?: string;
                } & {
                    cookbookID?: string;
                    itemID?: string;
                } & Record<Exclude<keyof I_32, keyof _116.ItemRef>, never>>(object: I_32): _116.ItemRef;
            };
            Trade: {
                encode(message: _116.Trade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Trade;
                fromJSON(object: any): _116.Trade;
                toJSON(message: _116.Trade): unknown;
                fromPartial<I_33 extends {
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
                        } & Record<Exclude<keyof I_33["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_33["coinInputs"][number]["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_33["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_33["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_33["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_33["itemInputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_33["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_33["itemInputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_33["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_33["itemInputs"][number]["strings"], keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_33["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_33["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I_33["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_33["coinOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_33["itemOutputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_33["itemOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_33["tradedItemInputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_33["tradedItemInputs"], keyof {
                        cookbookID?: string;
                        itemID?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_33, keyof _116.Trade>, never>>(object: I_33): _116.Trade;
            };
            RedeemInfo: {
                encode(message: _115.RedeemInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.RedeemInfo;
                fromJSON(object: any): _115.RedeemInfo;
                toJSON(message: _115.RedeemInfo): unknown;
                fromPartial<I_34 extends {
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
                } & Record<Exclude<keyof I_34, keyof _115.RedeemInfo>, never>>(object: I_34): _115.RedeemInfo;
            };
            CreatePaymentAccount: {
                encode(message: _115.CreatePaymentAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.CreatePaymentAccount;
                fromJSON(object: any): _115.CreatePaymentAccount;
                toJSON(message: _115.CreatePaymentAccount): unknown;
                fromPartial<I_35 extends {
                    address?: string;
                    token?: string;
                    signature?: string;
                } & {
                    address?: string;
                    token?: string;
                    signature?: string;
                } & Record<Exclude<keyof I_35, keyof _115.CreatePaymentAccount>, never>>(object: I_35): _115.CreatePaymentAccount;
            };
            DoubleInputParam: {
                encode(message: _114.DoubleInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DoubleInputParam;
                fromJSON(object: any): _114.DoubleInputParam;
                toJSON(message: _114.DoubleInputParam): unknown;
                fromPartial<I_36 extends {
                    key?: string;
                    minValue?: string;
                    maxValue?: string;
                } & {
                    key?: string;
                    minValue?: string;
                    maxValue?: string;
                } & Record<Exclude<keyof I_36, keyof _114.DoubleInputParam>, never>>(object: I_36): _114.DoubleInputParam;
            };
            LongInputParam: {
                encode(message: _114.LongInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LongInputParam;
                fromJSON(object: any): _114.LongInputParam;
                toJSON(message: _114.LongInputParam): unknown;
                fromPartial<I_37 extends {
                    key?: string;
                    minValue?: any;
                    maxValue?: any;
                } & {
                    key?: string;
                    minValue?: any;
                    maxValue?: any;
                } & Record<Exclude<keyof I_37, keyof _114.LongInputParam>, never>>(object: I_37): _114.LongInputParam;
            };
            StringInputParam: {
                encode(message: _114.StringInputParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.StringInputParam;
                fromJSON(object: any): _114.StringInputParam;
                toJSON(message: _114.StringInputParam): unknown;
                fromPartial<I_38 extends {
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I_38, keyof _114.StringInputParam>, never>>(object: I_38): _114.StringInputParam;
            };
            ItemInput: {
                encode(message: _114.ItemInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ItemInput;
                fromJSON(object: any): _114.ItemInput;
                toJSON(message: _114.ItemInput): unknown;
                fromPartial<I_39 extends {
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
                    } & Record<Exclude<keyof I_39["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_39["doubles"], keyof {
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
                    } & Record<Exclude<keyof I_39["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_39["longs"], keyof {
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
                    } & Record<Exclude<keyof I_39["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_39["strings"], keyof {
                        key?: string;
                        value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_39, keyof _114.ItemInput>, never>>(object: I_39): _114.ItemInput;
            };
            DoubleWeightRange: {
                encode(message: _114.DoubleWeightRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DoubleWeightRange;
                fromJSON(object: any): _114.DoubleWeightRange;
                toJSON(message: _114.DoubleWeightRange): unknown;
                fromPartial<I_40 extends {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                } & {
                    lower?: string;
                    upper?: string;
                    weight?: any;
                } & Record<Exclude<keyof I_40, keyof _114.DoubleWeightRange>, never>>(object: I_40): _114.DoubleWeightRange;
            };
            DoubleParam: {
                encode(message: _114.DoubleParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.DoubleParam;
                fromJSON(object: any): _114.DoubleParam;
                toJSON(message: _114.DoubleParam): unknown;
                fromPartial<I_41 extends {
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
                    } & Record<Exclude<keyof I_41["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_41["weightRanges"], keyof {
                        lower?: string;
                        upper?: string;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I_41, keyof _114.DoubleParam>, never>>(object: I_41): _114.DoubleParam;
            };
            IntWeightRange: {
                encode(message: _114.IntWeightRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.IntWeightRange;
                fromJSON(object: any): _114.IntWeightRange;
                toJSON(message: _114.IntWeightRange): unknown;
                fromPartial<I_42 extends {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                } & {
                    lower?: any;
                    upper?: any;
                    weight?: any;
                } & Record<Exclude<keyof I_42, keyof _114.IntWeightRange>, never>>(object: I_42): _114.IntWeightRange;
            };
            LongParam: {
                encode(message: _114.LongParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.LongParam;
                fromJSON(object: any): _114.LongParam;
                toJSON(message: _114.LongParam): unknown;
                fromPartial<I_43 extends {
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
                    } & Record<Exclude<keyof I_43["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_43["weightRanges"], keyof {
                        lower?: any;
                        upper?: any;
                        weight?: any;
                    }[]>, never>;
                    program?: string;
                } & Record<Exclude<keyof I_43, keyof _114.LongParam>, never>>(object: I_43): _114.LongParam;
            };
            StringParam: {
                encode(message: _114.StringParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.StringParam;
                fromJSON(object: any): _114.StringParam;
                toJSON(message: _114.StringParam): unknown;
                fromPartial<I_44 extends {
                    key?: string;
                    value?: string;
                    program?: string;
                } & {
                    key?: string;
                    value?: string;
                    program?: string;
                } & Record<Exclude<keyof I_44, keyof _114.StringParam>, never>>(object: I_44): _114.StringParam;
            };
            CoinOutput: {
                encode(message: _114.CoinOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CoinOutput;
                fromJSON(object: any): _114.CoinOutput;
                toJSON(message: _114.CoinOutput): unknown;
                fromPartial<I_45 extends {
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
                    } & Record<Exclude<keyof I_45["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    program?: string;
                } & Record<Exclude<keyof I_45, keyof _114.CoinOutput>, never>>(object: I_45): _114.CoinOutput;
            };
            ItemOutput: {
                encode(message: _114.ItemOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ItemOutput;
                fromJSON(object: any): _114.ItemOutput;
                toJSON(message: _114.ItemOutput): unknown;
                fromPartial<I_46 extends {
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
                        } & Record<Exclude<keyof I_46["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_46["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I_46["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_46["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_46["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_46["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I_46["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_46["longs"], keyof {
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
                    } & Record<Exclude<keyof I_46["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_46["strings"], keyof {
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
                    } & Record<Exclude<keyof I_46["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_46["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I_46["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_46["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I_46, keyof _114.ItemOutput>, never>>(object: I_46): _114.ItemOutput;
            };
            ItemModifyOutput: {
                encode(message: _114.ItemModifyOutput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ItemModifyOutput;
                fromJSON(object: any): _114.ItemModifyOutput;
                toJSON(message: _114.ItemModifyOutput): unknown;
                fromPartial<I_47 extends {
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
                        } & Record<Exclude<keyof I_47["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_47["doubles"][number]["weightRanges"], keyof {
                            lower?: string;
                            upper?: string;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I_47["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_47["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_47["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_47["longs"][number]["weightRanges"], keyof {
                            lower?: any;
                            upper?: any;
                            weight?: any;
                        }[]>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I_47["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_47["longs"], keyof {
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
                    } & Record<Exclude<keyof I_47["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_47["strings"], keyof {
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
                    } & Record<Exclude<keyof I_47["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_47["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I_47["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_47["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                    quantity?: any;
                    amountMinted?: any;
                    tradeable?: boolean;
                } & Record<Exclude<keyof I_47, keyof _114.ItemModifyOutput>, never>>(object: I_47): _114.ItemModifyOutput;
            };
            EntriesList: {
                encode(message: _114.EntriesList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.EntriesList;
                fromJSON(object: any): _114.EntriesList;
                toJSON(message: _114.EntriesList): unknown;
                fromPartial<I_48 extends {
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
                        } & Record<Exclude<keyof I_48["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        program?: string;
                    } & Record<Exclude<keyof I_48["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_48["coinOutputs"], keyof {
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
                            } & Record<Exclude<keyof I_48["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[]>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_48["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_48["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[]>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_48["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_48["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_48["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_48["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"][number]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    } & Record<Exclude<keyof I_48["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_48["itemOutputs"], keyof {
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
                            } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                lower?: string;
                                upper?: string;
                                weight?: any;
                            }[]>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                lower?: any;
                                upper?: any;
                                weight?: any;
                            }[]>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"][number]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                        quantity?: any;
                        amountMinted?: any;
                        tradeable?: boolean;
                    } & Record<Exclude<keyof I_48["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_48["itemModifyOutputs"], keyof {
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
                } & Record<Exclude<keyof I_48, keyof _114.EntriesList>, never>>(object: I_48): _114.EntriesList;
            };
            WeightedOutputs: {
                encode(message: _114.WeightedOutputs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.WeightedOutputs;
                fromJSON(object: any): _114.WeightedOutputs;
                toJSON(message: _114.WeightedOutputs): unknown;
                fromPartial<I_49 extends {
                    entryIDs?: string[];
                    weight?: any;
                } & {
                    entryIDs?: string[] & string[] & Record<Exclude<keyof I_49["entryIDs"], keyof string[]>, never>;
                    weight?: any;
                } & Record<Exclude<keyof I_49, keyof _114.WeightedOutputs>, never>>(object: I_49): _114.WeightedOutputs;
            };
            CoinInput: {
                encode(message: _114.CoinInput, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.CoinInput;
                fromJSON(object: any): _114.CoinInput;
                toJSON(message: _114.CoinInput): unknown;
                fromPartial<I_50 extends {
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
                    } & Record<Exclude<keyof I_50["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_50["coins"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_50, "coins">, never>>(object: I_50): _114.CoinInput;
            };
            Recipe: {
                encode(message: _114.Recipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Recipe;
                fromJSON(object: any): _114.Recipe;
                toJSON(message: _114.Recipe): unknown;
                fromPartial<I_51 extends {
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
                        } & Record<Exclude<keyof I_51["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["coinInputs"][number]["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_51["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_51["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_51["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_51["itemInputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_51["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_51["itemInputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_51["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_51["itemInputs"][number]["strings"], keyof {
                            key?: string;
                            value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_51["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_51["itemInputs"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                            program?: string;
                        } & Record<Exclude<keyof I_51["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_51["entries"]["coinOutputs"], keyof {
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
                                } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["strings"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        } & Record<Exclude<keyof I_51["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemOutputs"], keyof {
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
                                } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                    lower?: string;
                                    upper?: string;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                    lower?: any;
                                    upper?: any;
                                    weight?: any;
                                }[]>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                            } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            tradePercentage?: string;
                            quantity?: any;
                            amountMinted?: any;
                            tradeable?: boolean;
                        } & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_51["entries"]["itemModifyOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_51["entries"], keyof _114.EntriesList>, never>;
                    outputs?: {
                        entryIDs?: string[];
                        weight?: any;
                    }[] & ({
                        entryIDs?: string[];
                        weight?: any;
                    } & {
                        entryIDs?: string[] & string[] & Record<Exclude<keyof I_51["outputs"][number]["entryIDs"], keyof string[]>, never>;
                        weight?: any;
                    } & Record<Exclude<keyof I_51["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_51["outputs"], keyof {
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
                    } & Record<Exclude<keyof I_51["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    enabled?: boolean;
                    extraInfo?: string;
                } & Record<Exclude<keyof I_51, keyof _114.Recipe>, never>>(object: I_51): _114.Recipe;
            };
            QueryListTradesByCreatorRequest: {
                encode(message: _113.QueryListTradesByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListTradesByCreatorRequest;
                fromJSON(object: any): _113.QueryListTradesByCreatorRequest;
                toJSON(message: _113.QueryListTradesByCreatorRequest): unknown;
                fromPartial<I_52 extends {
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
                    } & Record<Exclude<keyof I_52["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_52, keyof _113.QueryListTradesByCreatorRequest>, never>>(object: I_52): _113.QueryListTradesByCreatorRequest;
            };
            QueryListTradesByCreatorResponse: {
                encode(message: _113.QueryListTradesByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListTradesByCreatorResponse;
                fromJSON(object: any): _113.QueryListTradesByCreatorResponse;
                toJSON(message: _113.QueryListTradesByCreatorResponse): unknown;
                fromPartial<I_53 extends {
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
                            } & Record<Exclude<keyof I_53["Trades"][number]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_53["Trades"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_53["Trades"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_53["Trades"][number]["itemOutputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_53["Trades"][number]["tradedItemInputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_53["Trades"][number]["tradedItemInputs"], keyof {
                            cookbookID?: string;
                            itemID?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_53["Trades"][number], keyof _116.Trade>, never>)[] & Record<Exclude<keyof I_53["Trades"], keyof {
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
                    } & Record<Exclude<keyof I_53["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_53, keyof _113.QueryListTradesByCreatorResponse>, never>>(object: I_53): _113.QueryListTradesByCreatorResponse;
            };
            QueryGetRedeemInfoRequest: {
                encode(message: _113.QueryGetRedeemInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetRedeemInfoRequest;
                fromJSON(object: any): _113.QueryGetRedeemInfoRequest;
                toJSON(message: _113.QueryGetRedeemInfoRequest): unknown;
                fromPartial<I_54 extends {
                    ID?: string;
                } & {
                    ID?: string;
                } & Record<Exclude<keyof I_54, "ID">, never>>(object: I_54): _113.QueryGetRedeemInfoRequest;
            };
            QueryGetRedeemInfoResponse: {
                encode(message: _113.QueryGetRedeemInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetRedeemInfoResponse;
                fromJSON(object: any): _113.QueryGetRedeemInfoResponse;
                toJSON(message: _113.QueryGetRedeemInfoResponse): unknown;
                fromPartial<I_55 extends {
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
                    } & Record<Exclude<keyof I_55["RedeemInfo"], keyof _115.RedeemInfo>, never>;
                } & Record<Exclude<keyof I_55, "RedeemInfo">, never>>(object: I_55): _113.QueryGetRedeemInfoResponse;
            };
            QueryAllRedeemInfoRequest: {
                encode(message: _113.QueryAllRedeemInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryAllRedeemInfoRequest;
                fromJSON(object: any): _113.QueryAllRedeemInfoRequest;
                toJSON(message: _113.QueryAllRedeemInfoRequest): unknown;
                fromPartial<I_56 extends {
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
                    } & Record<Exclude<keyof I_56["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_56, "pagination">, never>>(object: I_56): _113.QueryAllRedeemInfoRequest;
            };
            QueryAllRedeemInfoResponse: {
                encode(message: _113.QueryAllRedeemInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryAllRedeemInfoResponse;
                fromJSON(object: any): _113.QueryAllRedeemInfoResponse;
                toJSON(message: _113.QueryAllRedeemInfoResponse): unknown;
                fromPartial<I_57 extends {
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
                    } & Record<Exclude<keyof I_57["RedeemInfo"][number], keyof _115.RedeemInfo>, never>)[] & Record<Exclude<keyof I_57["RedeemInfo"], keyof {
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
                    } & Record<Exclude<keyof I_57["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_57, keyof _113.QueryAllRedeemInfoResponse>, never>>(object: I_57): _113.QueryAllRedeemInfoResponse;
            };
            QueryGetPaymentInfoRequest: {
                encode(message: _113.QueryGetPaymentInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetPaymentInfoRequest;
                fromJSON(object: any): _113.QueryGetPaymentInfoRequest;
                toJSON(message: _113.QueryGetPaymentInfoRequest): unknown;
                fromPartial<I_58 extends {
                    purchaseID?: string;
                } & {
                    purchaseID?: string;
                } & Record<Exclude<keyof I_58, "purchaseID">, never>>(object: I_58): _113.QueryGetPaymentInfoRequest;
            };
            QueryGetPaymentInfoResponse: {
                encode(message: _113.QueryGetPaymentInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetPaymentInfoResponse;
                fromJSON(object: any): _113.QueryGetPaymentInfoResponse;
                toJSON(message: _113.QueryGetPaymentInfoResponse): unknown;
                fromPartial<I_59 extends {
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
                    } & Record<Exclude<keyof I_59["PaymentInfo"], keyof _112.PaymentInfo>, never>;
                } & Record<Exclude<keyof I_59, "PaymentInfo">, never>>(object: I_59): _113.QueryGetPaymentInfoResponse;
            };
            QueryAllPaymentInfoRequest: {
                encode(message: _113.QueryAllPaymentInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryAllPaymentInfoRequest;
                fromJSON(object: any): _113.QueryAllPaymentInfoRequest;
                toJSON(message: _113.QueryAllPaymentInfoRequest): unknown;
                fromPartial<I_60 extends {
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
                    } & Record<Exclude<keyof I_60["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_60, "pagination">, never>>(object: I_60): _113.QueryAllPaymentInfoRequest;
            };
            QueryAllPaymentInfoResponse: {
                encode(message: _113.QueryAllPaymentInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryAllPaymentInfoResponse;
                fromJSON(object: any): _113.QueryAllPaymentInfoResponse;
                toJSON(message: _113.QueryAllPaymentInfoResponse): unknown;
                fromPartial<I_61 extends {
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
                    } & Record<Exclude<keyof I_61["PaymentInfo"][number], keyof _112.PaymentInfo>, never>)[] & Record<Exclude<keyof I_61["PaymentInfo"], keyof {
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
                    } & Record<Exclude<keyof I_61["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_61, keyof _113.QueryAllPaymentInfoResponse>, never>>(object: I_61): _113.QueryAllPaymentInfoResponse;
            };
            QueryGetUsernameByAddressRequest: {
                encode(message: _113.QueryGetUsernameByAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetUsernameByAddressRequest;
                fromJSON(object: any): _113.QueryGetUsernameByAddressRequest;
                toJSON(message: _113.QueryGetUsernameByAddressRequest): unknown;
                fromPartial<I_62 extends {
                    address?: string;
                } & {
                    address?: string;
                } & Record<Exclude<keyof I_62, "address">, never>>(object: I_62): _113.QueryGetUsernameByAddressRequest;
            };
            QueryGetAddressByUsernameRequest: {
                encode(message: _113.QueryGetAddressByUsernameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetAddressByUsernameRequest;
                fromJSON(object: any): _113.QueryGetAddressByUsernameRequest;
                toJSON(message: _113.QueryGetAddressByUsernameRequest): unknown;
                fromPartial<I_63 extends {
                    username?: string;
                } & {
                    username?: string;
                } & Record<Exclude<keyof I_63, "username">, never>>(object: I_63): _113.QueryGetAddressByUsernameRequest;
            };
            QueryGetUsernameByAddressResponse: {
                encode(message: _113.QueryGetUsernameByAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetUsernameByAddressResponse;
                fromJSON(object: any): _113.QueryGetUsernameByAddressResponse;
                toJSON(message: _113.QueryGetUsernameByAddressResponse): unknown;
                fromPartial<I_64 extends {
                    username?: {
                        value?: string;
                    };
                } & {
                    username?: {
                        value?: string;
                    } & {
                        value?: string;
                    } & Record<Exclude<keyof I_64["username"], "value">, never>;
                } & Record<Exclude<keyof I_64, "username">, never>>(object: I_64): _113.QueryGetUsernameByAddressResponse;
            };
            QueryGetAddressByUsernameResponse: {
                encode(message: _113.QueryGetAddressByUsernameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetAddressByUsernameResponse;
                fromJSON(object: any): _113.QueryGetAddressByUsernameResponse;
                toJSON(message: _113.QueryGetAddressByUsernameResponse): unknown;
                fromPartial<I_65 extends {
                    address?: {
                        value?: string;
                    };
                } & {
                    address?: {
                        value?: string;
                    } & {
                        value?: string;
                    } & Record<Exclude<keyof I_65["address"], "value">, never>;
                } & Record<Exclude<keyof I_65, "address">, never>>(object: I_65): _113.QueryGetAddressByUsernameResponse;
            };
            QueryGetTradeRequest: {
                encode(message: _113.QueryGetTradeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetTradeRequest;
                fromJSON(object: any): _113.QueryGetTradeRequest;
                toJSON(message: _113.QueryGetTradeRequest): unknown;
                fromPartial<I_66 extends {
                    ID?: any;
                } & {
                    ID?: any;
                } & Record<Exclude<keyof I_66, "ID">, never>>(object: I_66): _113.QueryGetTradeRequest;
            };
            QueryGetTradeResponse: {
                encode(message: _113.QueryGetTradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetTradeResponse;
                fromJSON(object: any): _113.QueryGetTradeResponse;
                toJSON(message: _113.QueryGetTradeResponse): unknown;
                fromPartial<I_67 extends {
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
                            } & Record<Exclude<keyof I_67["Trade"]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_67["Trade"]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_67["Trade"]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_67["Trade"]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_67["Trade"]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_67["Trade"]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_67["Trade"]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_67["Trade"]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_67["Trade"]["itemOutputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_67["Trade"]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_67["Trade"]["tradedItemInputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_67["Trade"]["tradedItemInputs"], keyof {
                            cookbookID?: string;
                            itemID?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_67["Trade"], keyof _116.Trade>, never>;
                } & Record<Exclude<keyof I_67, "Trade">, never>>(object: I_67): _113.QueryGetTradeResponse;
            };
            QueryListItemByOwnerRequest: {
                encode(message: _113.QueryListItemByOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListItemByOwnerRequest;
                fromJSON(object: any): _113.QueryListItemByOwnerRequest;
                toJSON(message: _113.QueryListItemByOwnerRequest): unknown;
                fromPartial<I_68 extends {
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
                    } & Record<Exclude<keyof I_68["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_68, keyof _113.QueryListItemByOwnerRequest>, never>>(object: I_68): _113.QueryListItemByOwnerRequest;
            };
            QueryListItemByOwnerResponse: {
                encode(message: _113.QueryListItemByOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListItemByOwnerResponse;
                fromJSON(object: any): _113.QueryListItemByOwnerResponse;
                toJSON(message: _113.QueryListItemByOwnerResponse): unknown;
                fromPartial<I_69 extends {
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
                        } & Record<Exclude<keyof I_69["Items"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_69["Items"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_69["Items"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_69["Items"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_69["Items"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_69["Items"][number]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_69["Items"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_69["Items"][number]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_69["Items"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_69["Items"][number]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                    } & Record<Exclude<keyof I_69["Items"][number], keyof _110.Item>, never>)[] & Record<Exclude<keyof I_69["Items"], keyof {
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
                    } & Record<Exclude<keyof I_69["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_69, keyof _113.QueryListItemByOwnerResponse>, never>>(object: I_69): _113.QueryListItemByOwnerResponse;
            };
            QueryGetGoogleInAppPurchaseOrderRequest: {
                encode(message: _113.QueryGetGoogleInAppPurchaseOrderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetGoogleInAppPurchaseOrderRequest;
                fromJSON(object: any): _113.QueryGetGoogleInAppPurchaseOrderRequest;
                toJSON(message: _113.QueryGetGoogleInAppPurchaseOrderRequest): unknown;
                fromPartial<I_70 extends {
                    PurchaseToken?: string;
                } & {
                    PurchaseToken?: string;
                } & Record<Exclude<keyof I_70, "PurchaseToken">, never>>(object: I_70): _113.QueryGetGoogleInAppPurchaseOrderRequest;
            };
            QueryGetGoogleInAppPurchaseOrderResponse: {
                encode(message: _113.QueryGetGoogleInAppPurchaseOrderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetGoogleInAppPurchaseOrderResponse;
                fromJSON(object: any): _113.QueryGetGoogleInAppPurchaseOrderResponse;
                toJSON(message: _113.QueryGetGoogleInAppPurchaseOrderResponse): unknown;
                fromPartial<I_71 extends {
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
                    } & Record<Exclude<keyof I_71["Order"], keyof _109.GoogleInAppPurchaseOrder>, never>;
                } & Record<Exclude<keyof I_71, "Order">, never>>(object: I_71): _113.QueryGetGoogleInAppPurchaseOrderResponse;
            };
            QueryListExecutionsByItemRequest: {
                encode(message: _113.QueryListExecutionsByItemRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListExecutionsByItemRequest;
                fromJSON(object: any): _113.QueryListExecutionsByItemRequest;
                toJSON(message: _113.QueryListExecutionsByItemRequest): unknown;
                fromPartial<I_72 extends {
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
                    } & Record<Exclude<keyof I_72["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_72, keyof _113.QueryListExecutionsByItemRequest>, never>>(object: I_72): _113.QueryListExecutionsByItemRequest;
            };
            QueryListExecutionsByItemResponse: {
                encode(message: _113.QueryListExecutionsByItemResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListExecutionsByItemResponse;
                fromJSON(object: any): _113.QueryListExecutionsByItemResponse;
                toJSON(message: _113.QueryListExecutionsByItemResponse): unknown;
                fromPartial<I_73 extends {
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
                            } & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_73["CompletedExecutions"][number]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_73["CompletedExecutions"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_73["CompletedExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_73["CompletedExecutions"][number], keyof _107.Execution>, never>)[] & Record<Exclude<keyof I_73["CompletedExecutions"], keyof {
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
                            } & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_73["PendingExecutions"][number]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_73["PendingExecutions"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_73["PendingExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_73["PendingExecutions"][number], keyof _107.Execution>, never>)[] & Record<Exclude<keyof I_73["PendingExecutions"], keyof {
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
                    } & Record<Exclude<keyof I_73["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_73, keyof _113.QueryListExecutionsByItemResponse>, never>>(object: I_73): _113.QueryListExecutionsByItemResponse;
            };
            QueryListExecutionsByRecipeRequest: {
                encode(message: _113.QueryListExecutionsByRecipeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListExecutionsByRecipeRequest;
                fromJSON(object: any): _113.QueryListExecutionsByRecipeRequest;
                toJSON(message: _113.QueryListExecutionsByRecipeRequest): unknown;
                fromPartial<I_74 extends {
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
                    } & Record<Exclude<keyof I_74["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_74, keyof _113.QueryListExecutionsByRecipeRequest>, never>>(object: I_74): _113.QueryListExecutionsByRecipeRequest;
            };
            QueryListExecutionsByRecipeResponse: {
                encode(message: _113.QueryListExecutionsByRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListExecutionsByRecipeResponse;
                fromJSON(object: any): _113.QueryListExecutionsByRecipeResponse;
                toJSON(message: _113.QueryListExecutionsByRecipeResponse): unknown;
                fromPartial<I_75 extends {
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
                            } & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_75["CompletedExecutions"][number]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_75["CompletedExecutions"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_75["CompletedExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_75["CompletedExecutions"][number], keyof _107.Execution>, never>)[] & Record<Exclude<keyof I_75["CompletedExecutions"], keyof {
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
                            } & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_75["PendingExecutions"][number]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_75["PendingExecutions"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_75["PendingExecutions"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_75["PendingExecutions"][number], keyof _107.Execution>, never>)[] & Record<Exclude<keyof I_75["PendingExecutions"], keyof {
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
                    } & Record<Exclude<keyof I_75["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_75, keyof _113.QueryListExecutionsByRecipeResponse>, never>>(object: I_75): _113.QueryListExecutionsByRecipeResponse;
            };
            QueryGetExecutionRequest: {
                encode(message: _113.QueryGetExecutionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetExecutionRequest;
                fromJSON(object: any): _113.QueryGetExecutionRequest;
                toJSON(message: _113.QueryGetExecutionRequest): unknown;
                fromPartial<I_76 extends {
                    ID?: string;
                } & {
                    ID?: string;
                } & Record<Exclude<keyof I_76, "ID">, never>>(object: I_76): _113.QueryGetExecutionRequest;
            };
            QueryGetExecutionResponse: {
                encode(message: _113.QueryGetExecutionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetExecutionResponse;
                fromJSON(object: any): _113.QueryGetExecutionResponse;
                toJSON(message: _113.QueryGetExecutionResponse): unknown;
                fromPartial<I_77 extends {
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
                            } & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_77["Execution"]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_77["Execution"]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_77["Execution"]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_77["Execution"]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_77["Execution"]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_77["Execution"]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_77["Execution"]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_77["Execution"]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_77["Execution"], keyof _107.Execution>, never>;
                    Completed?: boolean;
                } & Record<Exclude<keyof I_77, keyof _113.QueryGetExecutionResponse>, never>>(object: I_77): _113.QueryGetExecutionResponse;
            };
            QueryListRecipesByCookbookRequest: {
                encode(message: _113.QueryListRecipesByCookbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListRecipesByCookbookRequest;
                fromJSON(object: any): _113.QueryListRecipesByCookbookRequest;
                toJSON(message: _113.QueryListRecipesByCookbookRequest): unknown;
                fromPartial<I_78 extends {
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
                    } & Record<Exclude<keyof I_78["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_78, keyof _113.QueryListRecipesByCookbookRequest>, never>>(object: I_78): _113.QueryListRecipesByCookbookRequest;
            };
            QueryListRecipesByCookbookResponse: {
                encode(message: _113.QueryListRecipesByCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListRecipesByCookbookResponse;
                fromJSON(object: any): _113.QueryListRecipesByCookbookResponse;
                toJSON(message: _113.QueryListRecipesByCookbookResponse): unknown;
                fromPartial<I_79 extends {
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
                            } & Record<Exclude<keyof I_79["Recipes"][number]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_79["Recipes"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["itemInputs"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["coinOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["entries"]["itemModifyOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_79["Recipes"][number]["entries"], keyof _114.EntriesList>, never>;
                        outputs?: {
                            entryIDs?: string[];
                            weight?: any;
                        }[] & ({
                            entryIDs?: string[];
                            weight?: any;
                        } & {
                            entryIDs?: string[] & string[] & Record<Exclude<keyof I_79["Recipes"][number]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                            weight?: any;
                        } & Record<Exclude<keyof I_79["Recipes"][number]["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_79["Recipes"][number]["outputs"], keyof {
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
                        } & Record<Exclude<keyof I_79["Recipes"][number]["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        enabled?: boolean;
                        extraInfo?: string;
                    } & Record<Exclude<keyof I_79["Recipes"][number], keyof _114.Recipe>, never>)[] & Record<Exclude<keyof I_79["Recipes"], keyof {
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
                    } & Record<Exclude<keyof I_79["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_79, keyof _113.QueryListRecipesByCookbookResponse>, never>>(object: I_79): _113.QueryListRecipesByCookbookResponse;
            };
            QueryGetItemRequest: {
                encode(message: _113.QueryGetItemRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetItemRequest;
                fromJSON(object: any): _113.QueryGetItemRequest;
                toJSON(message: _113.QueryGetItemRequest): unknown;
                fromPartial<I_80 extends {
                    CookbookID?: string;
                    ID?: string;
                } & {
                    CookbookID?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_80, keyof _113.QueryGetItemRequest>, never>>(object: I_80): _113.QueryGetItemRequest;
            };
            QueryGetItemResponse: {
                encode(message: _113.QueryGetItemResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetItemResponse;
                fromJSON(object: any): _113.QueryGetItemResponse;
                toJSON(message: _113.QueryGetItemResponse): unknown;
                fromPartial<I_81 extends {
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
                        } & Record<Exclude<keyof I_81["Item"]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_81["Item"]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_81["Item"]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_81["Item"]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_81["Item"]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_81["Item"]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_81["Item"]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_81["Item"]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_81["Item"]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_81["Item"]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                    } & Record<Exclude<keyof I_81["Item"], keyof _110.Item>, never>;
                } & Record<Exclude<keyof I_81, "Item">, never>>(object: I_81): _113.QueryGetItemResponse;
            };
            QueryGetRecipeRequest: {
                encode(message: _113.QueryGetRecipeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetRecipeRequest;
                fromJSON(object: any): _113.QueryGetRecipeRequest;
                toJSON(message: _113.QueryGetRecipeRequest): unknown;
                fromPartial<I_82 extends {
                    CookbookID?: string;
                    ID?: string;
                } & {
                    CookbookID?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_82, keyof _113.QueryGetRecipeRequest>, never>>(object: I_82): _113.QueryGetRecipeRequest;
            };
            QueryGetRecipeResponse: {
                encode(message: _113.QueryGetRecipeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetRecipeResponse;
                fromJSON(object: any): _113.QueryGetRecipeResponse;
                toJSON(message: _113.QueryGetRecipeResponse): unknown;
                fromPartial<I_83 extends {
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
                            } & Record<Exclude<keyof I_83["Recipe"]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_83["Recipe"]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_83["Recipe"]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_83["Recipe"]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["itemInputs"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_83["Recipe"]["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["coinOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["entries"]["itemModifyOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_83["Recipe"]["entries"], keyof _114.EntriesList>, never>;
                        outputs?: {
                            entryIDs?: string[];
                            weight?: any;
                        }[] & ({
                            entryIDs?: string[];
                            weight?: any;
                        } & {
                            entryIDs?: string[] & string[] & Record<Exclude<keyof I_83["Recipe"]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                            weight?: any;
                        } & Record<Exclude<keyof I_83["Recipe"]["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_83["Recipe"]["outputs"], keyof {
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
                        } & Record<Exclude<keyof I_83["Recipe"]["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        enabled?: boolean;
                        extraInfo?: string;
                    } & Record<Exclude<keyof I_83["Recipe"], keyof _114.Recipe>, never>;
                } & Record<Exclude<keyof I_83, "Recipe">, never>>(object: I_83): _113.QueryGetRecipeResponse;
            };
            QueryListCookbooksByCreatorRequest: {
                encode(message: _113.QueryListCookbooksByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListCookbooksByCreatorRequest;
                fromJSON(object: any): _113.QueryListCookbooksByCreatorRequest;
                toJSON(message: _113.QueryListCookbooksByCreatorRequest): unknown;
                fromPartial<I_84 extends {
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
                    } & Record<Exclude<keyof I_84["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_84, keyof _113.QueryListCookbooksByCreatorRequest>, never>>(object: I_84): _113.QueryListCookbooksByCreatorRequest;
            };
            QueryListCookbooksByCreatorResponse: {
                encode(message: _113.QueryListCookbooksByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryListCookbooksByCreatorResponse;
                fromJSON(object: any): _113.QueryListCookbooksByCreatorResponse;
                toJSON(message: _113.QueryListCookbooksByCreatorResponse): unknown;
                fromPartial<I_85 extends {
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
                    } & Record<Exclude<keyof I_85["Cookbooks"][number], keyof _105.Cookbook>, never>)[] & Record<Exclude<keyof I_85["Cookbooks"], keyof {
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
                    } & Record<Exclude<keyof I_85["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_85, keyof _113.QueryListCookbooksByCreatorResponse>, never>>(object: I_85): _113.QueryListCookbooksByCreatorResponse;
            };
            QueryGetCookbookRequest: {
                encode(message: _113.QueryGetCookbookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetCookbookRequest;
                fromJSON(object: any): _113.QueryGetCookbookRequest;
                toJSON(message: _113.QueryGetCookbookRequest): unknown;
                fromPartial<I_86 extends {
                    ID?: string;
                } & {
                    ID?: string;
                } & Record<Exclude<keyof I_86, "ID">, never>>(object: I_86): _113.QueryGetCookbookRequest;
            };
            QueryGetCookbookResponse: {
                encode(message: _113.QueryGetCookbookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGetCookbookResponse;
                fromJSON(object: any): _113.QueryGetCookbookResponse;
                toJSON(message: _113.QueryGetCookbookResponse): unknown;
                fromPartial<I_87 extends {
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
                    } & Record<Exclude<keyof I_87["Cookbook"], keyof _105.Cookbook>, never>;
                } & Record<Exclude<keyof I_87, "Cookbook">, never>>(object: I_87): _113.QueryGetCookbookResponse;
            };
            PaymentInfo: {
                encode(message: _112.PaymentInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.PaymentInfo;
                fromJSON(object: any): _112.PaymentInfo;
                toJSON(message: _112.PaymentInfo): unknown;
                fromPartial<I_88 extends {
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
                } & Record<Exclude<keyof I_88, keyof _112.PaymentInfo>, never>>(object: I_88): _112.PaymentInfo;
            };
            GoogleInAppPurchasePackage: {
                encode(message: _111.GoogleInAppPurchasePackage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GoogleInAppPurchasePackage;
                fromJSON(object: any): _111.GoogleInAppPurchasePackage;
                toJSON(message: _111.GoogleInAppPurchasePackage): unknown;
                fromPartial<I_89 extends {
                    packageName?: string;
                    productID?: string;
                    amount?: string;
                } & {
                    packageName?: string;
                    productID?: string;
                    amount?: string;
                } & Record<Exclude<keyof I_89, keyof _111.GoogleInAppPurchasePackage>, never>>(object: I_89): _111.GoogleInAppPurchasePackage;
            };
            CoinIssuer: {
                encode(message: _111.CoinIssuer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.CoinIssuer;
                fromJSON(object: any): _111.CoinIssuer;
                toJSON(message: _111.CoinIssuer): unknown;
                fromPartial<I_90 extends {
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
                    } & Record<Exclude<keyof I_90["packages"][number], keyof _111.GoogleInAppPurchasePackage>, never>)[] & Record<Exclude<keyof I_90["packages"], keyof {
                        packageName?: string;
                        productID?: string;
                        amount?: string;
                    }[]>, never>;
                    googleInAppPurchasePubKey?: string;
                    entityName?: string;
                } & Record<Exclude<keyof I_90, keyof _111.CoinIssuer>, never>>(object: I_90): _111.CoinIssuer;
            };
            PaymentProcessor: {
                encode(message: _111.PaymentProcessor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.PaymentProcessor;
                fromJSON(object: any): _111.PaymentProcessor;
                toJSON(message: _111.PaymentProcessor): unknown;
                fromPartial<I_91 extends {
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
                } & Record<Exclude<keyof I_91, keyof _111.PaymentProcessor>, never>>(object: I_91): _111.PaymentProcessor;
            };
            Params: {
                encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                fromJSON(object: any): _111.Params;
                toJSON(message: _111.Params): unknown;
                fromPartial<I_92 extends {
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
                        } & Record<Exclude<keyof I_92["coinIssuers"][number]["packages"][number], keyof _111.GoogleInAppPurchasePackage>, never>)[] & Record<Exclude<keyof I_92["coinIssuers"][number]["packages"], keyof {
                            packageName?: string;
                            productID?: string;
                            amount?: string;
                        }[]>, never>;
                        googleInAppPurchasePubKey?: string;
                        entityName?: string;
                    } & Record<Exclude<keyof I_92["coinIssuers"][number], keyof _111.CoinIssuer>, never>)[] & Record<Exclude<keyof I_92["coinIssuers"], keyof {
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
                    } & Record<Exclude<keyof I_92["paymentProcessors"][number], keyof _111.PaymentProcessor>, never>)[] & Record<Exclude<keyof I_92["paymentProcessors"], keyof {
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
                    } & Record<Exclude<keyof I_92["updateItemStringFee"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    minTransferFee?: string;
                    maxTransferFee?: string;
                    updateUsernameFee?: {
                        denom?: string;
                        amount?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                    } & Record<Exclude<keyof I_92["updateUsernameFee"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                    distrEpochIdentifier?: string;
                    engineVersion?: any;
                } & Record<Exclude<keyof I_92, keyof _111.Params>, never>>(object: I_92): _111.Params;
            };
            DoubleKeyValue: {
                encode(message: _110.DoubleKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DoubleKeyValue;
                fromJSON(object: any): _110.DoubleKeyValue;
                toJSON(message: _110.DoubleKeyValue): unknown;
                fromPartial<I_93 extends {
                    Key?: string;
                    Value?: string;
                } & {
                    Key?: string;
                    Value?: string;
                } & Record<Exclude<keyof I_93, keyof _110.DoubleKeyValue>, never>>(object: I_93): _110.DoubleKeyValue;
            };
            LongKeyValue: {
                encode(message: _110.LongKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.LongKeyValue;
                fromJSON(object: any): _110.LongKeyValue;
                toJSON(message: _110.LongKeyValue): unknown;
                fromPartial<I_94 extends {
                    Key?: string;
                    Value?: any;
                } & {
                    Key?: string;
                    Value?: any;
                } & Record<Exclude<keyof I_94, keyof _110.LongKeyValue>, never>>(object: I_94): _110.LongKeyValue;
            };
            StringKeyValue: {
                encode(message: _110.StringKeyValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.StringKeyValue;
                fromJSON(object: any): _110.StringKeyValue;
                toJSON(message: _110.StringKeyValue): unknown;
                fromPartial<I_95 extends {
                    Key?: string;
                    Value?: string;
                } & {
                    Key?: string;
                    Value?: string;
                } & Record<Exclude<keyof I_95, keyof _110.StringKeyValue>, never>>(object: I_95): _110.StringKeyValue;
            };
            Item: {
                encode(message: _110.Item, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Item;
                fromJSON(object: any): _110.Item;
                toJSON(message: _110.Item): unknown;
                fromPartial<I_96 extends {
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
                    } & Record<Exclude<keyof I_96["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_96["doubles"], keyof {
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
                    } & Record<Exclude<keyof I_96["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_96["longs"], keyof {
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
                    } & Record<Exclude<keyof I_96["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_96["strings"], keyof {
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
                    } & Record<Exclude<keyof I_96["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_96["mutableStrings"], keyof {
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
                    } & Record<Exclude<keyof I_96["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_96["transferFee"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    tradePercentage?: string;
                } & Record<Exclude<keyof I_96, keyof _110.Item>, never>>(object: I_96): _110.Item;
            };
            GoogleInAppPurchaseOrder: {
                encode(message: _109.GoogleInAppPurchaseOrder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GoogleInAppPurchaseOrder;
                fromJSON(object: any): _109.GoogleInAppPurchaseOrder;
                toJSON(message: _109.GoogleInAppPurchaseOrder): unknown;
                fromPartial<I_97 extends {
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
                } & Record<Exclude<keyof I_97, keyof _109.GoogleInAppPurchaseOrder>, never>>(object: I_97): _109.GoogleInAppPurchaseOrder;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                fromJSON(object: any): _108.GenesisState;
                toJSON(message: _108.GenesisState): unknown;
                fromPartial<I_98 extends {
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
                    } & Record<Exclude<keyof I_98["redeemInfoList"][number], keyof _115.RedeemInfo>, never>)[] & Record<Exclude<keyof I_98["redeemInfoList"], keyof {
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
                    } & Record<Exclude<keyof I_98["paymentInfoList"][number], keyof _112.PaymentInfo>, never>)[] & Record<Exclude<keyof I_98["paymentInfoList"], keyof {
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
                    } & Record<Exclude<keyof I_98["accountList"][number], keyof _104.UserMap>, never>)[] & Record<Exclude<keyof I_98["accountList"], keyof {
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
                            } & Record<Exclude<keyof I_98["tradeList"][number]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_98["tradeList"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["tradeList"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["tradeList"][number]["itemOutputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["itemOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["tradeList"][number]["tradedItemInputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_98["tradeList"][number]["tradedItemInputs"], keyof {
                            cookbookID?: string;
                            itemID?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_98["tradeList"][number], keyof _116.Trade>, never>)[] & Record<Exclude<keyof I_98["tradeList"], keyof {
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
                            } & Record<Exclude<keyof I_98["params"]["coinIssuers"][number]["packages"][number], keyof _111.GoogleInAppPurchasePackage>, never>)[] & Record<Exclude<keyof I_98["params"]["coinIssuers"][number]["packages"], keyof {
                                packageName?: string;
                                productID?: string;
                                amount?: string;
                            }[]>, never>;
                            googleInAppPurchasePubKey?: string;
                            entityName?: string;
                        } & Record<Exclude<keyof I_98["params"]["coinIssuers"][number], keyof _111.CoinIssuer>, never>)[] & Record<Exclude<keyof I_98["params"]["coinIssuers"], keyof {
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
                        } & Record<Exclude<keyof I_98["params"]["paymentProcessors"][number], keyof _111.PaymentProcessor>, never>)[] & Record<Exclude<keyof I_98["params"]["paymentProcessors"], keyof {
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
                        } & Record<Exclude<keyof I_98["params"]["updateItemStringFee"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        minTransferFee?: string;
                        maxTransferFee?: string;
                        updateUsernameFee?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_98["params"]["updateUsernameFee"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        distrEpochIdentifier?: string;
                        engineVersion?: any;
                    } & Record<Exclude<keyof I_98["params"], keyof _111.Params>, never>;
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
                    } & Record<Exclude<keyof I_98["googleInAppPurchaseOrderList"][number], keyof _109.GoogleInAppPurchaseOrder>, never>)[] & Record<Exclude<keyof I_98["googleInAppPurchaseOrderList"], keyof {
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
                            } & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_98["executionList"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["executionList"][number]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["executionList"][number]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["executionList"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["executionList"][number]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_98["executionList"][number]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_98["executionList"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_98["executionList"][number], keyof _107.Execution>, never>)[] & Record<Exclude<keyof I_98["executionList"], keyof {
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
                            } & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number]["strings"], keyof {
                                Key?: string;
                                Value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemInputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["pendingExecutionList"][number]["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["coinInputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["pendingExecutionList"][number]["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["coinOutputs"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemOutputIDs"], keyof string[]>, never>;
                        itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_98["pendingExecutionList"][number]["itemModifyOutputIDs"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_98["pendingExecutionList"][number], keyof _107.Execution>, never>)[] & Record<Exclude<keyof I_98["pendingExecutionList"], keyof {
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
                        } & Record<Exclude<keyof I_98["itemList"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_98["itemList"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_98["itemList"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_98["itemList"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_98["itemList"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_98["itemList"][number]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_98["itemList"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_98["itemList"][number]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_98["itemList"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["itemList"][number]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                    } & Record<Exclude<keyof I_98["itemList"][number], keyof _110.Item>, never>)[] & Record<Exclude<keyof I_98["itemList"], keyof {
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
                            } & Record<Exclude<keyof I_98["recipeList"][number]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_98["recipeList"][number]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["itemInputs"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["coinOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["entries"]["itemModifyOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["recipeList"][number]["entries"], keyof _114.EntriesList>, never>;
                        outputs?: {
                            entryIDs?: string[];
                            weight?: any;
                        }[] & ({
                            entryIDs?: string[];
                            weight?: any;
                        } & {
                            entryIDs?: string[] & string[] & Record<Exclude<keyof I_98["recipeList"][number]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                            weight?: any;
                        } & Record<Exclude<keyof I_98["recipeList"][number]["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_98["recipeList"][number]["outputs"], keyof {
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
                        } & Record<Exclude<keyof I_98["recipeList"][number]["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        enabled?: boolean;
                        extraInfo?: string;
                    } & Record<Exclude<keyof I_98["recipeList"][number], keyof _114.Recipe>, never>)[] & Record<Exclude<keyof I_98["recipeList"], keyof {
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
                    } & Record<Exclude<keyof I_98["cookbookList"][number], keyof _105.Cookbook>, never>)[] & Record<Exclude<keyof I_98["cookbookList"], keyof {
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
                } & Record<Exclude<keyof I_98, keyof _108.GenesisState>, never>>(object: I_98): _108.GenesisState;
            };
            ItemRecord: {
                encode(message: _107.ItemRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ItemRecord;
                fromJSON(object: any): _107.ItemRecord;
                toJSON(message: _107.ItemRecord): unknown;
                fromPartial<I_99 extends {
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
                    } & Record<Exclude<keyof I_99["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_99["doubles"], keyof {
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
                    } & Record<Exclude<keyof I_99["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_99["longs"], keyof {
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
                    } & Record<Exclude<keyof I_99["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_99["strings"], keyof {
                        Key?: string;
                        Value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_99, keyof _107.ItemRecord>, never>>(object: I_99): _107.ItemRecord;
            };
            Execution: {
                encode(message: _107.Execution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Execution;
                fromJSON(object: any): _107.Execution;
                toJSON(message: _107.Execution): unknown;
                fromPartial<I_100 extends {
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
                        } & Record<Exclude<keyof I_100["itemInputs"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_100["itemInputs"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_100["itemInputs"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_100["itemInputs"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_100["itemInputs"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_100["itemInputs"][number]["strings"], keyof {
                            Key?: string;
                            Value?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_100["itemInputs"][number], keyof _107.ItemRecord>, never>)[] & Record<Exclude<keyof I_100["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I_100["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_100["coinInputs"], keyof {
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
                    } & Record<Exclude<keyof I_100["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_100["coinOutputs"], keyof {
                        denom?: string;
                        amount?: string;
                    }[]>, never>;
                    itemOutputIDs?: string[] & string[] & Record<Exclude<keyof I_100["itemOutputIDs"], keyof string[]>, never>;
                    itemModifyOutputIDs?: string[] & string[] & Record<Exclude<keyof I_100["itemModifyOutputIDs"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_100, keyof _107.Execution>, never>>(object: I_100): _107.Execution;
            };
            EventBurnDebtToken: {
                encode(message: _106.EventBurnDebtToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventBurnDebtToken;
                fromJSON(object: any): _106.EventBurnDebtToken;
                toJSON(message: _106.EventBurnDebtToken): unknown;
                fromPartial<I_101 extends {
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
                    } & Record<Exclude<keyof I_101["redeemInfo"], keyof _115.RedeemInfo>, never>;
                } & Record<Exclude<keyof I_101, "redeemInfo">, never>>(object: I_101): _106.EventBurnDebtToken;
            };
            EventCreateAccount: {
                encode(message: _106.EventCreateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCreateAccount;
                fromJSON(object: any): _106.EventCreateAccount;
                toJSON(message: _106.EventCreateAccount): unknown;
                fromPartial<I_102 extends {
                    address?: string;
                    username?: string;
                } & {
                    address?: string;
                    username?: string;
                } & Record<Exclude<keyof I_102, keyof _106.EventCreateAccount>, never>>(object: I_102): _106.EventCreateAccount;
            };
            EventUpdateAccount: {
                encode(message: _106.EventUpdateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventUpdateAccount;
                fromJSON(object: any): _106.EventUpdateAccount;
                toJSON(message: _106.EventUpdateAccount): unknown;
                fromPartial<I_103 extends {
                    address?: string;
                    username?: string;
                } & {
                    address?: string;
                    username?: string;
                } & Record<Exclude<keyof I_103, keyof _106.EventUpdateAccount>, never>>(object: I_103): _106.EventUpdateAccount;
            };
            EventCreateCookbook: {
                encode(message: _106.EventCreateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCreateCookbook;
                fromJSON(object: any): _106.EventCreateCookbook;
                toJSON(message: _106.EventCreateCookbook): unknown;
                fromPartial<I_104 extends {
                    creator?: string;
                    ID?: string;
                } & {
                    creator?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_104, keyof _106.EventCreateCookbook>, never>>(object: I_104): _106.EventCreateCookbook;
            };
            EventUpdateCookbook: {
                encode(message: _106.EventUpdateCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventUpdateCookbook;
                fromJSON(object: any): _106.EventUpdateCookbook;
                toJSON(message: _106.EventUpdateCookbook): unknown;
                fromPartial<I_105 extends {
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
                    } & Record<Exclude<keyof I_105["originalCookbook"], keyof _105.Cookbook>, never>;
                } & Record<Exclude<keyof I_105, "originalCookbook">, never>>(object: I_105): _106.EventUpdateCookbook;
            };
            EventTransferCookbook: {
                encode(message: _106.EventTransferCookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventTransferCookbook;
                fromJSON(object: any): _106.EventTransferCookbook;
                toJSON(message: _106.EventTransferCookbook): unknown;
                fromPartial<I_106 extends {
                    sender?: string;
                    receiver?: string;
                    ID?: string;
                } & {
                    sender?: string;
                    receiver?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_106, keyof _106.EventTransferCookbook>, never>>(object: I_106): _106.EventTransferCookbook;
            };
            EventCreateRecipe: {
                encode(message: _106.EventCreateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCreateRecipe;
                fromJSON(object: any): _106.EventCreateRecipe;
                toJSON(message: _106.EventCreateRecipe): unknown;
                fromPartial<I_107 extends {
                    creator?: string;
                    CookbookID?: string;
                    ID?: string;
                } & {
                    creator?: string;
                    CookbookID?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_107, keyof _106.EventCreateRecipe>, never>>(object: I_107): _106.EventCreateRecipe;
            };
            EventUpdateRecipe: {
                encode(message: _106.EventUpdateRecipe, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventUpdateRecipe;
                fromJSON(object: any): _106.EventUpdateRecipe;
                toJSON(message: _106.EventUpdateRecipe): unknown;
                fromPartial<I_108 extends {
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
                            } & Record<Exclude<keyof I_108["originalRecipe"]["coinInputs"][number]["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["coinInputs"][number]["coins"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_108["originalRecipe"]["coinInputs"][number], "coins">, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["coinInputs"], keyof {
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
                            } & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number]["doubles"][number], keyof _114.DoubleInputParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number]["doubles"], keyof {
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
                            } & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number]["longs"][number], keyof _114.LongInputParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number]["longs"], keyof {
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
                            } & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number]["strings"][number], keyof _114.StringInputParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number]["strings"], keyof {
                                key?: string;
                                value?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"][number], keyof _114.ItemInput>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["itemInputs"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["coinOutputs"][number]["coin"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                                program?: string;
                            } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["coinOutputs"][number], keyof _114.CoinOutput>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["coinOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"][number], keyof _114.ItemOutput>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemOutputs"], keyof {
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
                                    } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"][number], keyof _114.DoubleWeightRange>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number]["weightRanges"], keyof {
                                        lower?: string;
                                        upper?: string;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"][number], keyof _114.DoubleParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["doubles"], keyof {
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
                                    } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"][number], keyof _114.IntWeightRange>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"][number]["weightRanges"], keyof {
                                        lower?: any;
                                        upper?: any;
                                        weight?: any;
                                    }[]>, never>;
                                    program?: string;
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"][number], keyof _114.LongParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["longs"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["strings"][number], keyof _114.StringParam>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["strings"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["mutableStrings"], keyof {
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
                                } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number]["transferFee"], keyof {
                                    denom?: string;
                                    amount?: string;
                                }[]>, never>;
                                tradePercentage?: string;
                                quantity?: any;
                                amountMinted?: any;
                                tradeable?: boolean;
                            } & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"][number], keyof _114.ItemModifyOutput>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["entries"]["itemModifyOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_108["originalRecipe"]["entries"], keyof _114.EntriesList>, never>;
                        outputs?: {
                            entryIDs?: string[];
                            weight?: any;
                        }[] & ({
                            entryIDs?: string[];
                            weight?: any;
                        } & {
                            entryIDs?: string[] & string[] & Record<Exclude<keyof I_108["originalRecipe"]["outputs"][number]["entryIDs"], keyof string[]>, never>;
                            weight?: any;
                        } & Record<Exclude<keyof I_108["originalRecipe"]["outputs"][number], keyof _114.WeightedOutputs>, never>)[] & Record<Exclude<keyof I_108["originalRecipe"]["outputs"], keyof {
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
                        } & Record<Exclude<keyof I_108["originalRecipe"]["costPerBlock"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        enabled?: boolean;
                        extraInfo?: string;
                    } & Record<Exclude<keyof I_108["originalRecipe"], keyof _114.Recipe>, never>;
                } & Record<Exclude<keyof I_108, "originalRecipe">, never>>(object: I_108): _106.EventUpdateRecipe;
            };
            EventCreateExecution: {
                encode(message: _106.EventCreateExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCreateExecution;
                fromJSON(object: any): _106.EventCreateExecution;
                toJSON(message: _106.EventCreateExecution): unknown;
                fromPartial<I_109 extends {
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
                    } & Record<Exclude<keyof I_109["paymentInfos"][number], keyof _112.PaymentInfo>, never>)[] & Record<Exclude<keyof I_109["paymentInfos"], keyof {
                        purchaseID?: string;
                        processorName?: string;
                        payerAddr?: string;
                        amount?: string;
                        productID?: string;
                        signature?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_109, keyof _106.EventCreateExecution>, never>>(object: I_109): _106.EventCreateExecution;
            };
            EventCompleteExecution: {
                encode(message: _106.EventCompleteExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCompleteExecution;
                fromJSON(object: any): _106.EventCompleteExecution;
                toJSON(message: _106.EventCompleteExecution): unknown;
                fromPartial<I_110 extends {
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
                    } & Record<Exclude<keyof I_110["burnCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["burnCoins"], keyof {
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
                    } & Record<Exclude<keyof I_110["payCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["payCoins"], keyof {
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
                    } & Record<Exclude<keyof I_110["transferCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["transferCoins"], keyof {
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
                    } & Record<Exclude<keyof I_110["feeCoins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["feeCoins"], keyof {
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
                    } & Record<Exclude<keyof I_110["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["coinOutputs"], keyof {
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
                        } & Record<Exclude<keyof I_110["mintItems"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_110["mintItems"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_110["mintItems"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_110["mintItems"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_110["mintItems"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_110["mintItems"][number]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_110["mintItems"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_110["mintItems"][number]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_110["mintItems"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["mintItems"][number]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                    } & Record<Exclude<keyof I_110["mintItems"][number], keyof _110.Item>, never>)[] & Record<Exclude<keyof I_110["mintItems"], keyof {
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
                        } & Record<Exclude<keyof I_110["modifyItems"][number]["doubles"][number], keyof _110.DoubleKeyValue>, never>)[] & Record<Exclude<keyof I_110["modifyItems"][number]["doubles"], keyof {
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
                        } & Record<Exclude<keyof I_110["modifyItems"][number]["longs"][number], keyof _110.LongKeyValue>, never>)[] & Record<Exclude<keyof I_110["modifyItems"][number]["longs"], keyof {
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
                        } & Record<Exclude<keyof I_110["modifyItems"][number]["strings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_110["modifyItems"][number]["strings"], keyof {
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
                        } & Record<Exclude<keyof I_110["modifyItems"][number]["mutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_110["modifyItems"][number]["mutableStrings"], keyof {
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
                        } & Record<Exclude<keyof I_110["modifyItems"][number]["transferFee"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_110["modifyItems"][number]["transferFee"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        tradePercentage?: string;
                    } & Record<Exclude<keyof I_110["modifyItems"][number], keyof _110.Item>, never>)[] & Record<Exclude<keyof I_110["modifyItems"], keyof {
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
                } & Record<Exclude<keyof I_110, keyof _106.EventCompleteExecution>, never>>(object: I_110): _106.EventCompleteExecution;
            };
            EventDropExecution: {
                encode(message: _106.EventDropExecution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventDropExecution;
                fromJSON(object: any): _106.EventDropExecution;
                toJSON(message: _106.EventDropExecution): unknown;
                fromPartial<I_111 extends {
                    creator?: string;
                    ID?: string;
                } & {
                    creator?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_111, keyof _106.EventDropExecution>, never>>(object: I_111): _106.EventDropExecution;
            };
            EventCompleteExecutionEarly: {
                encode(message: _106.EventCompleteExecutionEarly, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCompleteExecutionEarly;
                fromJSON(object: any): _106.EventCompleteExecutionEarly;
                toJSON(message: _106.EventCompleteExecutionEarly): unknown;
                fromPartial<I_112 extends {
                    creator?: string;
                    ID?: string;
                } & {
                    creator?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_112, keyof _106.EventCompleteExecutionEarly>, never>>(object: I_112): _106.EventCompleteExecutionEarly;
            };
            EventSendItems: {
                encode(message: _106.EventSendItems, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventSendItems;
                fromJSON(object: any): _106.EventSendItems;
                toJSON(message: _106.EventSendItems): unknown;
                fromPartial<I_113 extends {
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
                    } & Record<Exclude<keyof I_113["items"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_113["items"], keyof {
                        cookbookID?: string;
                        itemID?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_113, keyof _106.EventSendItems>, never>>(object: I_113): _106.EventSendItems;
            };
            EventSetItemString: {
                encode(message: _106.EventSetItemString, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventSetItemString;
                fromJSON(object: any): _106.EventSetItemString;
                toJSON(message: _106.EventSetItemString): unknown;
                fromPartial<I_114 extends {
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
                    } & Record<Exclude<keyof I_114["originalMutableStrings"][number], keyof _110.StringKeyValue>, never>)[] & Record<Exclude<keyof I_114["originalMutableStrings"], keyof {
                        Key?: string;
                        Value?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_114, keyof _106.EventSetItemString>, never>>(object: I_114): _106.EventSetItemString;
            };
            EventCreateTrade: {
                encode(message: _106.EventCreateTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCreateTrade;
                fromJSON(object: any): _106.EventCreateTrade;
                toJSON(message: _106.EventCreateTrade): unknown;
                fromPartial<I_115 extends {
                    creator?: string;
                    ID?: any;
                } & {
                    creator?: string;
                    ID?: any;
                } & Record<Exclude<keyof I_115, keyof _106.EventCreateTrade>, never>>(object: I_115): _106.EventCreateTrade;
            };
            EventCancelTrade: {
                encode(message: _106.EventCancelTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventCancelTrade;
                fromJSON(object: any): _106.EventCancelTrade;
                toJSON(message: _106.EventCancelTrade): unknown;
                fromPartial<I_116 extends {
                    creator?: string;
                    ID?: any;
                } & {
                    creator?: string;
                    ID?: any;
                } & Record<Exclude<keyof I_116, keyof _106.EventCancelTrade>, never>>(object: I_116): _106.EventCancelTrade;
            };
            EventFulfillTrade: {
                encode(message: _106.EventFulfillTrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventFulfillTrade;
                fromJSON(object: any): _106.EventFulfillTrade;
                toJSON(message: _106.EventFulfillTrade): unknown;
                fromPartial<I_117 extends {
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
                    } & Record<Exclude<keyof I_117["itemInputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_117["itemInputs"], keyof {
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
                    } & Record<Exclude<keyof I_117["coinInputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_117["coinInputs"], keyof {
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
                    } & Record<Exclude<keyof I_117["itemOutputs"][number], keyof _116.ItemRef>, never>)[] & Record<Exclude<keyof I_117["itemOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_117["coinOutputs"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_117["coinOutputs"], keyof {
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
                    } & Record<Exclude<keyof I_117["paymentInfos"][number], keyof _112.PaymentInfo>, never>)[] & Record<Exclude<keyof I_117["paymentInfos"], keyof {
                        purchaseID?: string;
                        processorName?: string;
                        payerAddr?: string;
                        amount?: string;
                        productID?: string;
                        signature?: string;
                    }[]>, never>;
                } & Record<Exclude<keyof I_117, keyof _106.EventFulfillTrade>, never>>(object: I_117): _106.EventFulfillTrade;
            };
            EventGooglePurchase: {
                encode(message: _106.EventGooglePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventGooglePurchase;
                fromJSON(object: any): _106.EventGooglePurchase;
                toJSON(message: _106.EventGooglePurchase): unknown;
                fromPartial<I_118 extends {
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
                } & Record<Exclude<keyof I_118, keyof _106.EventGooglePurchase>, never>>(object: I_118): _106.EventGooglePurchase;
            };
            EventStripePurchase: {
                encode(message: _106.EventStripePurchase, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.EventStripePurchase;
                fromJSON(object: any): _106.EventStripePurchase;
                toJSON(message: _106.EventStripePurchase): unknown;
                fromPartial<I_119 extends {
                    creator?: string;
                    ID?: string;
                } & {
                    creator?: string;
                    ID?: string;
                } & Record<Exclude<keyof I_119, keyof _106.EventStripePurchase>, never>>(object: I_119): _106.EventStripePurchase;
            };
            Cookbook: {
                encode(message: _105.Cookbook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Cookbook;
                fromJSON(object: any): _105.Cookbook;
                toJSON(message: _105.Cookbook): unknown;
                fromPartial<I_120 extends {
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
                } & Record<Exclude<keyof I_120, keyof _105.Cookbook>, never>>(object: I_120): _105.Cookbook;
            };
            UserMap: {
                encode(message: _104.UserMap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UserMap;
                fromJSON(object: any): _104.UserMap;
                toJSON(message: _104.UserMap): unknown;
                fromPartial<I_121 extends {
                    accountAddr?: string;
                    username?: string;
                } & {
                    accountAddr?: string;
                    username?: string;
                } & Record<Exclude<keyof I_121, keyof _104.UserMap>, never>>(object: I_121): _104.UserMap;
            };
            Username: {
                encode(message: _104.Username, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Username;
                fromJSON(object: any): _104.Username;
                toJSON(message: _104.Username): unknown;
                fromPartial<I_122 extends {
                    value?: string;
                } & {
                    value?: string;
                } & Record<Exclude<keyof I_122, "value">, never>>(object: I_122): _104.Username;
            };
            AccountAddr: {
                encode(message: _104.AccountAddr, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.AccountAddr;
                fromJSON(object: any): _104.AccountAddr;
                toJSON(message: _104.AccountAddr): unknown;
                fromPartial<I_123 extends {
                    value?: string;
                } & {
                    value?: string;
                } & Record<Exclude<keyof I_123, "value">, never>>(object: I_123): _104.AccountAddr;
            };
        };
    }
}
