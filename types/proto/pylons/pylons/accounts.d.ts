import * as _m0 from "protobufjs/minimal";
export interface UserMap {
    accountAddr: string;
    username: string;
}
export interface Username {
    value: string;
}
export interface AccountAddr {
    value: string;
}
export declare const UserMap: {
    encode(message: UserMap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserMap;
    fromJSON(object: any): UserMap;
    toJSON(message: UserMap): unknown;
    fromPartial<I extends {
        accountAddr?: string;
        username?: string;
    } & {
        accountAddr?: string;
        username?: string;
    } & Record<Exclude<keyof I, keyof UserMap>, never>>(object: I): UserMap;
};
export declare const Username: {
    encode(message: Username, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Username;
    fromJSON(object: any): Username;
    toJSON(message: Username): unknown;
    fromPartial<I extends {
        value?: string;
    } & {
        value?: string;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): Username;
};
export declare const AccountAddr: {
    encode(message: AccountAddr, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountAddr;
    fromJSON(object: any): AccountAddr;
    toJSON(message: AccountAddr): unknown;
    fromPartial<I extends {
        value?: string;
    } & {
        value?: string;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): AccountAddr;
};
