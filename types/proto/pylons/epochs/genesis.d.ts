import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface EpochInfo {
    identifier: string;
    startTime: Date;
    duration: string;
    currentEpoch: Long;
    currentEpochStartTime: Date;
    epochCountingStarted: boolean;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    epochs: EpochInfo[];
}
export declare const EpochInfo: {
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof EpochInfo>, never>>(object: I): EpochInfo;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["epochs"][number], keyof EpochInfo>, never>)[] & Record<Exclude<keyof I["epochs"], keyof {
            identifier?: string;
            startTime?: Date;
            duration?: string;
            currentEpoch?: any;
            currentEpochStartTime?: Date;
            epochCountingStarted?: boolean;
        }[]>, never>;
    } & Record<Exclude<keyof I, "epochs">, never>>(object: I): GenesisState;
};
