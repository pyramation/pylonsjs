import * as _m0 from "protobufjs/minimal";
export interface GoogleInAppPurchaseOrder {
    creator: string;
    productID: string;
    purchaseToken: string;
    receiptDataBase64: string;
    signature: string;
}
export declare const GoogleInAppPurchaseOrder: {
    encode(message: GoogleInAppPurchaseOrder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GoogleInAppPurchaseOrder;
    fromJSON(object: any): GoogleInAppPurchaseOrder;
    toJSON(message: GoogleInAppPurchaseOrder): unknown;
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
    } & Record<Exclude<keyof I, keyof GoogleInAppPurchaseOrder>, never>>(object: I): GoogleInAppPurchaseOrder;
};
