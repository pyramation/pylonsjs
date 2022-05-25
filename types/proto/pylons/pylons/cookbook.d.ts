import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Cookbook {
    creator: string;
    ID: string;
    nodeVersion: Long;
    name: string;
    description: string;
    developer: string;
    version: string;
    supportEmail: string;
    enabled: boolean;
}
export declare const Cookbook: {
    encode(message: Cookbook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cookbook;
    fromJSON(object: any): Cookbook;
    toJSON(message: Cookbook): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof Cookbook>, never>>(object: I): Cookbook;
};
