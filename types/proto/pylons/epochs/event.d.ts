import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface EventEndEpoch {
    currentEpoch: Long;
}
export interface EventBeginEpoch {
    currentEpoch: Long;
    startTime: Date;
}
export declare const EventEndEpoch: {
    encode(message: EventEndEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEndEpoch;
    fromJSON(object: any): EventEndEpoch;
    toJSON(message: EventEndEpoch): unknown;
    fromPartial<I extends {
        currentEpoch?: any;
    } & {
        currentEpoch?: any;
    } & Record<Exclude<keyof I, "currentEpoch">, never>>(object: I): EventEndEpoch;
};
export declare const EventBeginEpoch: {
    encode(message: EventBeginEpoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBeginEpoch;
    fromJSON(object: any): EventBeginEpoch;
    toJSON(message: EventBeginEpoch): unknown;
    fromPartial<I extends {
        currentEpoch?: any;
        startTime?: Date;
    } & {
        currentEpoch?: any;
        startTime?: Date;
    } & Record<Exclude<keyof I, keyof EventBeginEpoch>, never>>(object: I): EventBeginEpoch;
};
