import * as _0 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _0.ScalarType;
    scalarTypeToJSON(object: _0.ScalarType): string;
    ScalarType: typeof _0.ScalarType;
    InterfaceDescriptor: {
        encode(message: _0.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.InterfaceDescriptor;
        fromJSON(object: any): _0.InterfaceDescriptor;
        toJSON(message: _0.InterfaceDescriptor): unknown;
        fromPartial<I extends {
            name?: string;
            description?: string;
        } & {
            name?: string;
            description?: string;
        } & Record<Exclude<keyof I, keyof _0.InterfaceDescriptor>, never>>(object: I): _0.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _0.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ScalarDescriptor;
        fromJSON(object: any): _0.ScalarDescriptor;
        toJSON(message: _0.ScalarDescriptor): unknown;
        fromPartial<I_1 extends {
            name?: string;
            description?: string;
            fieldType?: _0.ScalarType[];
        } & {
            name?: string;
            description?: string;
            fieldType?: _0.ScalarType[] & _0.ScalarType[] & Record<Exclude<keyof I_1["fieldType"], keyof _0.ScalarType[]>, never>;
        } & Record<Exclude<keyof I_1, keyof _0.ScalarDescriptor>, never>>(object: I_1): _0.ScalarDescriptor;
    };
};
