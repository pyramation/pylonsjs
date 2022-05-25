import * as _m0 from "protobufjs/minimal";
export interface PaymentInfo {
    purchaseID: string;
    processorName: string;
    payerAddr: string;
    amount: string;
    productID: string;
    signature: string;
}
export declare const PaymentInfo: {
    encode(message: PaymentInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaymentInfo;
    fromJSON(object: any): PaymentInfo;
    toJSON(message: PaymentInfo): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof PaymentInfo>, never>>(object: I): PaymentInfo;
};
