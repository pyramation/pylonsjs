import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as pylonsPylonsTxRegistry from "../pylons/pylons/tx.registry";
import * as pylonsPylonsTxAmino from "../pylons/pylons/tx.amino";
export const getSigningPylonstechClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const registry = new Registry([...defaultTypes, ...pylonsPylonsTxRegistry.registry]);
  const aminoTypes = new AminoTypes({ ...pylonsPylonsTxAmino.AminoConverter
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};