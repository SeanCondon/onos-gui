// Code generated by protoc-gen-go. DO NOT EDIT.

import * as jspb from "google-protobuf"

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class AddRequest extends jspb.Message {
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
  static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequest;
  static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class AddResponse extends jspb.Message {
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddResponse): AddResponse.AsObject;
  static serializeBinaryToWriter(message: AddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResponse;
  static deserializeBinaryFromReader(message: AddResponse, reader: jspb.BinaryReader): AddResponse;
}

export namespace AddResponse {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class GetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetResponse extends jspb.Message {
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  getSubscribe(): boolean;
  setSubscribe(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    subscribe: boolean,
  }
}

export class ListResponse extends jspb.Message {
  getType(): ListResponse.Type;
  setType(value: ListResponse.Type): void;

  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    type: ListResponse.Type,
    device?: Device.AsObject,
  }

  export enum Type { 
    NONE = 0,
    ADDED = 1,
    UPDATED = 2,
    REMOVED = 3,
  }
}

export class RemoveRequest extends jspb.Message {
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;
  hasDevice(): boolean;
  clearDevice(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRequest): RemoveRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRequest;
  static deserializeBinaryFromReader(message: RemoveRequest, reader: jspb.BinaryReader): RemoveRequest;
}

export namespace RemoveRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class RemoveResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveResponse): RemoveResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveResponse;
  static deserializeBinaryFromReader(message: RemoveResponse, reader: jspb.BinaryReader): RemoveResponse;
}

export namespace RemoveResponse {
  export type AsObject = {
  }
}

export class Device extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRevision(): number;
  setRevision(value: number): void;

  getAddress(): string;
  setAddress(value: string): void;

  getTarget(): string;
  setTarget(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;
  hasTimeout(): boolean;
  clearTimeout(): void;

  getCredentials(): Credentials | undefined;
  setCredentials(value?: Credentials): void;
  hasCredentials(): boolean;
  clearCredentials(): void;

  getTls(): TlsConfig | undefined;
  setTls(value?: TlsConfig): void;
  hasTls(): boolean;
  clearTls(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    id: string,
    revision: number,
    address: string,
    target: string,
    version: string,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    credentials?: Credentials.AsObject,
    tls?: TlsConfig.AsObject,
  }
}

export class Credentials extends jspb.Message {
  getUser(): string;
  setUser(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Credentials.AsObject;
  static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
  static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Credentials;
  static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
  export type AsObject = {
    user: string,
    password: string,
  }
}

export class TlsConfig extends jspb.Message {
  getCacert(): string;
  setCacert(value: string): void;

  getCert(): string;
  setCert(value: string): void;

  getKey(): string;
  setKey(value: string): void;

  getPlain(): boolean;
  setPlain(value: boolean): void;

  getInsecure(): boolean;
  setInsecure(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TlsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TlsConfig): TlsConfig.AsObject;
  static serializeBinaryToWriter(message: TlsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TlsConfig;
  static deserializeBinaryFromReader(message: TlsConfig, reader: jspb.BinaryReader): TlsConfig;
}

export namespace TlsConfig {
  export type AsObject = {
    cacert: string,
    cert: string,
    key: string,
    plain: boolean,
    insecure: boolean,
  }
}

