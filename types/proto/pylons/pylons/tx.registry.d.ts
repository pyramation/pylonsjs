import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBurnDebtToken, MsgUpdateAccount, MsgFulfillTrade, MsgCreateTrade, MsgCancelTrade, MsgCompleteExecutionEarly, MsgTransferCookbook, MsgGoogleInAppPurchaseGetCoins, MsgCreateAccount, MsgSendItems, MsgExecuteRecipe, MsgSetItemString, MsgCreateRecipe, MsgUpdateRecipe, MsgCreateCookbook, MsgUpdateCookbook } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        burnDebtToken(value: MsgBurnDebtToken): {
            type_url: string;
            value: Uint8Array;
        };
        updateAccount(value: MsgUpdateAccount): {
            type_url: string;
            value: Uint8Array;
        };
        fulfillTrade(value: MsgFulfillTrade): {
            type_url: string;
            value: Uint8Array;
        };
        createTrade(value: MsgCreateTrade): {
            type_url: string;
            value: Uint8Array;
        };
        cancelTrade(value: MsgCancelTrade): {
            type_url: string;
            value: Uint8Array;
        };
        completeExecutionEarly(value: MsgCompleteExecutionEarly): {
            type_url: string;
            value: Uint8Array;
        };
        transferCookbook(value: MsgTransferCookbook): {
            type_url: string;
            value: Uint8Array;
        };
        googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins): {
            type_url: string;
            value: Uint8Array;
        };
        createAccount(value: MsgCreateAccount): {
            type_url: string;
            value: Uint8Array;
        };
        sendItems(value: MsgSendItems): {
            type_url: string;
            value: Uint8Array;
        };
        executeRecipe(value: MsgExecuteRecipe): {
            type_url: string;
            value: Uint8Array;
        };
        setItemString(value: MsgSetItemString): {
            type_url: string;
            value: Uint8Array;
        };
        createRecipe(value: MsgCreateRecipe): {
            type_url: string;
            value: Uint8Array;
        };
        updateRecipe(value: MsgUpdateRecipe): {
            type_url: string;
            value: Uint8Array;
        };
        createCookbook(value: MsgCreateCookbook): {
            type_url: string;
            value: Uint8Array;
        };
        updateCookbook(value: MsgUpdateCookbook): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        burnDebtToken(value: MsgBurnDebtToken): {
            typeUrl: string;
            value: MsgBurnDebtToken;
        };
        updateAccount(value: MsgUpdateAccount): {
            typeUrl: string;
            value: MsgUpdateAccount;
        };
        fulfillTrade(value: MsgFulfillTrade): {
            typeUrl: string;
            value: MsgFulfillTrade;
        };
        createTrade(value: MsgCreateTrade): {
            typeUrl: string;
            value: MsgCreateTrade;
        };
        cancelTrade(value: MsgCancelTrade): {
            typeUrl: string;
            value: MsgCancelTrade;
        };
        completeExecutionEarly(value: MsgCompleteExecutionEarly): {
            typeUrl: string;
            value: MsgCompleteExecutionEarly;
        };
        transferCookbook(value: MsgTransferCookbook): {
            typeUrl: string;
            value: MsgTransferCookbook;
        };
        googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins): {
            typeUrl: string;
            value: MsgGoogleInAppPurchaseGetCoins;
        };
        createAccount(value: MsgCreateAccount): {
            typeUrl: string;
            value: MsgCreateAccount;
        };
        sendItems(value: MsgSendItems): {
            typeUrl: string;
            value: MsgSendItems;
        };
        executeRecipe(value: MsgExecuteRecipe): {
            typeUrl: string;
            value: MsgExecuteRecipe;
        };
        setItemString(value: MsgSetItemString): {
            typeUrl: string;
            value: MsgSetItemString;
        };
        createRecipe(value: MsgCreateRecipe): {
            typeUrl: string;
            value: MsgCreateRecipe;
        };
        updateRecipe(value: MsgUpdateRecipe): {
            typeUrl: string;
            value: MsgUpdateRecipe;
        };
        createCookbook(value: MsgCreateCookbook): {
            typeUrl: string;
            value: MsgCreateCookbook;
        };
        updateCookbook(value: MsgUpdateCookbook): {
            typeUrl: string;
            value: MsgUpdateCookbook;
        };
    };
    toJSON: {
        burnDebtToken(value: MsgBurnDebtToken): {
            typeUrl: string;
            value: unknown;
        };
        updateAccount(value: MsgUpdateAccount): {
            typeUrl: string;
            value: unknown;
        };
        fulfillTrade(value: MsgFulfillTrade): {
            typeUrl: string;
            value: unknown;
        };
        createTrade(value: MsgCreateTrade): {
            typeUrl: string;
            value: unknown;
        };
        cancelTrade(value: MsgCancelTrade): {
            typeUrl: string;
            value: unknown;
        };
        completeExecutionEarly(value: MsgCompleteExecutionEarly): {
            typeUrl: string;
            value: unknown;
        };
        transferCookbook(value: MsgTransferCookbook): {
            typeUrl: string;
            value: unknown;
        };
        googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins): {
            typeUrl: string;
            value: unknown;
        };
        createAccount(value: MsgCreateAccount): {
            typeUrl: string;
            value: unknown;
        };
        sendItems(value: MsgSendItems): {
            typeUrl: string;
            value: unknown;
        };
        executeRecipe(value: MsgExecuteRecipe): {
            typeUrl: string;
            value: unknown;
        };
        setItemString(value: MsgSetItemString): {
            typeUrl: string;
            value: unknown;
        };
        createRecipe(value: MsgCreateRecipe): {
            typeUrl: string;
            value: unknown;
        };
        updateRecipe(value: MsgUpdateRecipe): {
            typeUrl: string;
            value: unknown;
        };
        createCookbook(value: MsgCreateCookbook): {
            typeUrl: string;
            value: unknown;
        };
        updateCookbook(value: MsgUpdateCookbook): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        burnDebtToken(value: any): {
            typeUrl: string;
            value: MsgBurnDebtToken;
        };
        updateAccount(value: any): {
            typeUrl: string;
            value: MsgUpdateAccount;
        };
        fulfillTrade(value: any): {
            typeUrl: string;
            value: MsgFulfillTrade;
        };
        createTrade(value: any): {
            typeUrl: string;
            value: MsgCreateTrade;
        };
        cancelTrade(value: any): {
            typeUrl: string;
            value: MsgCancelTrade;
        };
        completeExecutionEarly(value: any): {
            typeUrl: string;
            value: MsgCompleteExecutionEarly;
        };
        transferCookbook(value: any): {
            typeUrl: string;
            value: MsgTransferCookbook;
        };
        googleInAppPurchaseGetCoins(value: any): {
            typeUrl: string;
            value: MsgGoogleInAppPurchaseGetCoins;
        };
        createAccount(value: any): {
            typeUrl: string;
            value: MsgCreateAccount;
        };
        sendItems(value: any): {
            typeUrl: string;
            value: MsgSendItems;
        };
        executeRecipe(value: any): {
            typeUrl: string;
            value: MsgExecuteRecipe;
        };
        setItemString(value: any): {
            typeUrl: string;
            value: MsgSetItemString;
        };
        createRecipe(value: any): {
            typeUrl: string;
            value: MsgCreateRecipe;
        };
        updateRecipe(value: any): {
            typeUrl: string;
            value: MsgUpdateRecipe;
        };
        createCookbook(value: any): {
            typeUrl: string;
            value: MsgCreateCookbook;
        };
        updateCookbook(value: any): {
            typeUrl: string;
            value: MsgUpdateCookbook;
        };
    };
    fromPartial: {
        burnDebtToken(value: MsgBurnDebtToken): {
            typeUrl: string;
            value: MsgBurnDebtToken;
        };
        updateAccount(value: MsgUpdateAccount): {
            typeUrl: string;
            value: MsgUpdateAccount;
        };
        fulfillTrade(value: MsgFulfillTrade): {
            typeUrl: string;
            value: MsgFulfillTrade;
        };
        createTrade(value: MsgCreateTrade): {
            typeUrl: string;
            value: MsgCreateTrade;
        };
        cancelTrade(value: MsgCancelTrade): {
            typeUrl: string;
            value: MsgCancelTrade;
        };
        completeExecutionEarly(value: MsgCompleteExecutionEarly): {
            typeUrl: string;
            value: MsgCompleteExecutionEarly;
        };
        transferCookbook(value: MsgTransferCookbook): {
            typeUrl: string;
            value: MsgTransferCookbook;
        };
        googleInAppPurchaseGetCoins(value: MsgGoogleInAppPurchaseGetCoins): {
            typeUrl: string;
            value: MsgGoogleInAppPurchaseGetCoins;
        };
        createAccount(value: MsgCreateAccount): {
            typeUrl: string;
            value: MsgCreateAccount;
        };
        sendItems(value: MsgSendItems): {
            typeUrl: string;
            value: MsgSendItems;
        };
        executeRecipe(value: MsgExecuteRecipe): {
            typeUrl: string;
            value: MsgExecuteRecipe;
        };
        setItemString(value: MsgSetItemString): {
            typeUrl: string;
            value: MsgSetItemString;
        };
        createRecipe(value: MsgCreateRecipe): {
            typeUrl: string;
            value: MsgCreateRecipe;
        };
        updateRecipe(value: MsgUpdateRecipe): {
            typeUrl: string;
            value: MsgUpdateRecipe;
        };
        createCookbook(value: MsgCreateCookbook): {
            typeUrl: string;
            value: MsgCreateCookbook;
        };
        updateCookbook(value: MsgUpdateCookbook): {
            typeUrl: string;
            value: MsgUpdateCookbook;
        };
    };
};
