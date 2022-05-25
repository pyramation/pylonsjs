import { AminoMsg } from "@cosmjs/amino";
import { MsgBurnDebtToken, MsgUpdateAccount, MsgFulfillTrade, MsgCreateTrade, MsgCancelTrade, MsgCompleteExecutionEarly, MsgTransferCookbook, MsgGoogleInAppPurchaseGetCoins, MsgCreateAccount, MsgSendItems, MsgExecuteRecipe, MsgSetItemString, MsgCreateRecipe, MsgUpdateRecipe, MsgCreateCookbook, MsgUpdateCookbook } from "./tx";
export interface AminoMsgBurnDebtToken extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgBurnDebtToken";
    value: {
        creator: string;
        redeem_info: {
            id: string;
            processor_name: string;
            address: string;
            amount: string;
            signature: string;
        };
    };
}
export interface AminoMsgUpdateAccount extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgUpdateAccount";
    value: {
        creator: string;
        username: string;
    };
}
export interface AminoMsgFulfillTrade extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgFulfillTrade";
    value: {
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
}
export interface AminoMsgCreateTrade extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgCreateTrade";
    value: {
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
}
export interface AminoMsgCancelTrade extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgCancelTrade";
    value: {
        creator: string;
        id: string;
    };
}
export interface AminoMsgCompleteExecutionEarly extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly";
    value: {
        creator: string;
        id: string;
    };
}
export interface AminoMsgTransferCookbook extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgTransferCookbook";
    value: {
        creator: string;
        id: string;
        recipient: string;
    };
}
export interface AminoMsgGoogleInAppPurchaseGetCoins extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins";
    value: {
        creator: string;
        product_i_d: string;
        purchase_token: string;
        receipt_data_base64: string;
        signature: string;
    };
}
export interface AminoMsgCreateAccount extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgCreateAccount";
    value: {
        creator: string;
        username: string;
    };
}
export interface AminoMsgSendItems extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgSendItems";
    value: {
        creator: string;
        receiver: string;
        items: {
            cookbook_i_d: string;
            item_i_d: string;
        }[];
    };
}
export interface AminoMsgExecuteRecipe extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgExecuteRecipe";
    value: {
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
}
export interface AminoMsgSetItemString extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgSetItemString";
    value: {
        creator: string;
        cookbook_i_d: string;
        id: string;
        field: string;
        value: string;
    };
}
export interface AminoMsgCreateRecipe extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgCreateRecipe";
    value: {
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
}
export interface AminoMsgUpdateRecipe extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgUpdateRecipe";
    value: {
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
}
export interface AminoMsgCreateCookbook extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgCreateCookbook";
    value: {
        creator: string;
        id: string;
        name: string;
        description: string;
        developer: string;
        version: string;
        support_email: string;
        enabled: boolean;
    };
}
export interface AminoMsgUpdateCookbook extends AminoMsg {
    type: "/Pylonstech.pylons.pylons.MsgUpdateCookbook";
    value: {
        creator: string;
        id: string;
        name: string;
        description: string;
        developer: string;
        version: string;
        support_email: string;
        enabled: boolean;
    };
}
export declare const AminoConverter: {
    "/Pylonstech.pylons.pylons.MsgBurnDebtToken": {
        aminoType: string;
        toAmino: ({ creator, redeemInfo }: MsgBurnDebtToken) => AminoMsgBurnDebtToken["value"];
        fromAmino: ({ creator, redeem_info }: AminoMsgBurnDebtToken["value"]) => MsgBurnDebtToken;
    };
    "/Pylonstech.pylons.pylons.MsgUpdateAccount": {
        aminoType: string;
        toAmino: ({ creator, username }: MsgUpdateAccount) => AminoMsgUpdateAccount["value"];
        fromAmino: ({ creator, username }: AminoMsgUpdateAccount["value"]) => MsgUpdateAccount;
    };
    "/Pylonstech.pylons.pylons.MsgFulfillTrade": {
        aminoType: string;
        toAmino: ({ creator, ID, coinInputsIndex, items, paymentInfos }: MsgFulfillTrade) => AminoMsgFulfillTrade["value"];
        fromAmino: ({ creator, id, coin_inputs_index, items, payment_infos }: AminoMsgFulfillTrade["value"]) => MsgFulfillTrade;
    };
    "/Pylonstech.pylons.pylons.MsgCreateTrade": {
        aminoType: string;
        toAmino: ({ creator, coinInputs, itemInputs, coinOutputs, itemOutputs, extraInfo }: MsgCreateTrade) => AminoMsgCreateTrade["value"];
        fromAmino: ({ creator, coin_inputs, item_inputs, coin_outputs, item_outputs, extra_info }: AminoMsgCreateTrade["value"]) => MsgCreateTrade;
    };
    "/Pylonstech.pylons.pylons.MsgCancelTrade": {
        aminoType: string;
        toAmino: ({ creator, ID }: MsgCancelTrade) => AminoMsgCancelTrade["value"];
        fromAmino: ({ creator, id }: AminoMsgCancelTrade["value"]) => MsgCancelTrade;
    };
    "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly": {
        aminoType: string;
        toAmino: ({ creator, ID }: MsgCompleteExecutionEarly) => AminoMsgCompleteExecutionEarly["value"];
        fromAmino: ({ creator, id }: AminoMsgCompleteExecutionEarly["value"]) => MsgCompleteExecutionEarly;
    };
    "/Pylonstech.pylons.pylons.MsgTransferCookbook": {
        aminoType: string;
        toAmino: ({ creator, ID, recipient }: MsgTransferCookbook) => AminoMsgTransferCookbook["value"];
        fromAmino: ({ creator, id, recipient }: AminoMsgTransferCookbook["value"]) => MsgTransferCookbook;
    };
    "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
        aminoType: string;
        toAmino: ({ creator, productID, purchaseToken, receiptDataBase64, signature }: MsgGoogleInAppPurchaseGetCoins) => AminoMsgGoogleInAppPurchaseGetCoins["value"];
        fromAmino: ({ creator, product_i_d, purchase_token, receipt_data_base64, signature }: AminoMsgGoogleInAppPurchaseGetCoins["value"]) => MsgGoogleInAppPurchaseGetCoins;
    };
    "/Pylonstech.pylons.pylons.MsgCreateAccount": {
        aminoType: string;
        toAmino: ({ creator, username }: MsgCreateAccount) => AminoMsgCreateAccount["value"];
        fromAmino: ({ creator, username }: AminoMsgCreateAccount["value"]) => MsgCreateAccount;
    };
    "/Pylonstech.pylons.pylons.MsgSendItems": {
        aminoType: string;
        toAmino: ({ creator, receiver, items }: MsgSendItems) => AminoMsgSendItems["value"];
        fromAmino: ({ creator, receiver, items }: AminoMsgSendItems["value"]) => MsgSendItems;
    };
    "/Pylonstech.pylons.pylons.MsgExecuteRecipe": {
        aminoType: string;
        toAmino: ({ creator, cookbookID, recipeID, coinInputsIndex, itemIDs, paymentInfos }: MsgExecuteRecipe) => AminoMsgExecuteRecipe["value"];
        fromAmino: ({ creator, cookbook_i_d, recipe_i_d, coin_inputs_index, item_i_ds, payment_infos }: AminoMsgExecuteRecipe["value"]) => MsgExecuteRecipe;
    };
    "/Pylonstech.pylons.pylons.MsgSetItemString": {
        aminoType: string;
        toAmino: ({ creator, cookbookID, ID, field, value }: MsgSetItemString) => AminoMsgSetItemString["value"];
        fromAmino: ({ creator, cookbook_i_d, id, field, value }: AminoMsgSetItemString["value"]) => MsgSetItemString;
    };
    "/Pylonstech.pylons.pylons.MsgCreateRecipe": {
        aminoType: string;
        toAmino: ({ creator, cookbookID, ID, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: MsgCreateRecipe) => AminoMsgCreateRecipe["value"];
        fromAmino: ({ creator, cookbook_i_d, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: AminoMsgCreateRecipe["value"]) => MsgCreateRecipe;
    };
    "/Pylonstech.pylons.pylons.MsgUpdateRecipe": {
        aminoType: string;
        toAmino: ({ creator, cookbookID, ID, name, description, version, coinInputs, itemInputs, entries, outputs, blockInterval, costPerBlock, enabled, extraInfo }: MsgUpdateRecipe) => AminoMsgUpdateRecipe["value"];
        fromAmino: ({ creator, cookbook_i_d, id, name, description, version, coin_inputs, item_inputs, entries, outputs, block_interval, cost_per_block, enabled, extra_info }: AminoMsgUpdateRecipe["value"]) => MsgUpdateRecipe;
    };
    "/Pylonstech.pylons.pylons.MsgCreateCookbook": {
        aminoType: string;
        toAmino: ({ creator, ID, name, description, developer, version, supportEmail, enabled }: MsgCreateCookbook) => AminoMsgCreateCookbook["value"];
        fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: AminoMsgCreateCookbook["value"]) => MsgCreateCookbook;
    };
    "/Pylonstech.pylons.pylons.MsgUpdateCookbook": {
        aminoType: string;
        toAmino: ({ creator, ID, name, description, developer, version, supportEmail, enabled }: MsgUpdateCookbook) => AminoMsgUpdateCookbook["value"];
        fromAmino: ({ creator, id, name, description, developer, version, support_email, enabled }: AminoMsgUpdateCookbook["value"]) => MsgUpdateCookbook;
    };
};
