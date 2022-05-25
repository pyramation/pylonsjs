import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
export interface EventEndEpoch {
  currentEpoch: Long;
}
export interface EventBeginEpoch {
  currentEpoch: Long;
  startTime: Date;
}

function createBaseEventEndEpoch(): EventEndEpoch {
  return {
    currentEpoch: Long.ZERO
  };
}

export const EventEndEpoch = {
  encode(message: EventEndEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentEpoch.isZero()) {
      writer.uint32(8).int64(message.currentEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEndEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEndEpoch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventEndEpoch {
    return {
      currentEpoch: isSet(object.currentEpoch) ? Long.fromString(object.currentEpoch) : Long.ZERO
    };
  },

  toJSON(message: EventEndEpoch): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEndEpoch>, I>>(object: I): EventEndEpoch {
    const message = createBaseEventEndEpoch();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    return message;
  }

};

function createBaseEventBeginEpoch(): EventBeginEpoch {
  return {
    currentEpoch: Long.ZERO,
    startTime: undefined
  };
}

export const EventBeginEpoch = {
  encode(message: EventBeginEpoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.currentEpoch.isZero()) {
      writer.uint32(8).int64(message.currentEpoch);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBeginEpoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBeginEpoch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = (reader.int64() as Long);
          break;

        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventBeginEpoch {
    return {
      currentEpoch: isSet(object.currentEpoch) ? Long.fromString(object.currentEpoch) : Long.ZERO,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined
    };
  },

  toJSON(message: EventBeginEpoch): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBeginEpoch>, I>>(object: I): EventBeginEpoch {
    const message = createBaseEventBeginEpoch();
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    message.startTime = object.startTime ?? undefined;
    return message;
  }

};