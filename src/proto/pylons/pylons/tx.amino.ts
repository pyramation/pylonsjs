import { RedeemInfo } from "./redeem_info";
import { ItemRef } from "./trade";
import { PaymentInfo } from "./payment_info";
import { CoinInput, ItemInput, EntriesList, WeightedOutputs, DoubleInputParam, LongInputParam, StringInputParam, CoinOutput, ItemOutput, DoubleParam, DoubleWeightRange, LongParam, IntWeightRange, StringParam, ItemModifyOutput } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { StringKeyValue } from "./item";
import { MsgBurnDebtToken, MsgUpdateAccount, MsgFulfillTrade, MsgCreateTrade, MsgCancelTrade, MsgCompleteExecutionEarly, MsgTransferCookbook, MsgGoogleInAppPurchaseGetCoins, MsgCreateAccount, MsgSendItems, MsgExecuteRecipe, MsgSetItemString, MsgCreateRecipe, MsgUpdateRecipe, MsgCreateCookbook, MsgUpdateCookbook } from "./tx";
export interface AminoMsgBurnDebtToken extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgBurnDebtToken";
  value: {
    creator: string;
    redeem_info: {
      id: string;
      processor_name: string;
      address: string;
      amount: string;
      signature: string;
    };
  };
}
export interface AminoMsgUpdateAccount extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgUpdateAccount";
  value: {
    creator: string;
    username: string;
  };
}
export interface AminoMsgFulfillTrade extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgFulfillTrade";
  value: {
    creator: string;
    id: string;
    coin_inputs_index: string;
    items: {
      cookbook_i_d: string;
      item_i_d: string;
    }[];
    payment_infos: {
      purchase_i_d: string;
      processor_name: string;
      payer_addr: string;
      amount: string;
      product_i_d: string;
      signature: string;
    }[];
  };
}
export interface AminoMsgCreateTrade extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgCreateTrade";
  value: {
    creator: string;
    coin_inputs: {
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    item_inputs: {
      id: string;
      doubles: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      longs: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      strings: {
        key: string;
        value: string;
      }[];
    }[];
    coin_outputs: {
      denom: string;
      amount: string;
    }[];
    item_outputs: {
      cookbook_i_d: string;
      item_i_d: string;
    }[];
    extra_info: string;
  };
}
export interface AminoMsgCancelTrade extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgCancelTrade";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgCompleteExecutionEarly extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly";
  value: {
    creator: string;
    id: string;
  };
}
export interface AminoMsgTransferCookbook extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgTransferCookbook";
  value: {
    creator: string;
    id: string;
    recipient: string;
  };
}
export interface AminoMsgGoogleInAppPurchaseGetCoins extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins";
  value: {
    creator: string;
    product_i_d: string;
    purchase_token: string;
    receipt_data_base64: string;
    signature: string;
  };
}
export interface AminoMsgCreateAccount extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgCreateAccount";
  value: {
    creator: string;
    username: string;
  };
}
export interface AminoMsgSendItems extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgSendItems";
  value: {
    creator: string;
    receiver: string;
    items: {
      cookbook_i_d: string;
      item_i_d: string;
    }[];
  };
}
export interface AminoMsgExecuteRecipe extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgExecuteRecipe";
  value: {
    creator: string;
    cookbook_i_d: string;
    recipe_i_d: string;
    coin_inputs_index: string;
    item_i_ds: string[];
    payment_infos: {
      purchase_i_d: string;
      processor_name: string;
      payer_addr: string;
      amount: string;
      product_i_d: string;
      signature: string;
    }[];
  };
}
export interface AminoMsgSetItemString extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgSetItemString";
  value: {
    creator: string;
    cookbook_i_d: string;
    id: string;
    field: string;
    value: string;
  };
}
export interface AminoMsgCreateRecipe extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgCreateRecipe";
  value: {
    creator: string;
    cookbook_i_d: string;
    id: string;
    name: string;
    description: string;
    version: string;
    coin_inputs: {
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    item_inputs: {
      id: string;
      doubles: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      longs: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      strings: {
        key: string;
        value: string;
      }[];
    }[];
    entries: {
      coin_outputs: {
        id: string;
        coin: {
          denom: string;
          amount: string;
        };
        program: string;
      }[];
      item_outputs: {
        id: string;
        doubles: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
      item_modify_outputs: {
        id: string;
        item_input_ref: string;
        doubles: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
    };
    outputs: {
      entry_i_ds: string[];
      weight: string;
    }[];
    block_interval: string;
    cost_per_block: {
      denom: string;
      amount: string;
    };
    enabled: boolean;
    extra_info: string;
  };
}
export interface AminoMsgUpdateRecipe extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgUpdateRecipe";
  value: {
    creator: string;
    cookbook_i_d: string;
    id: string;
    name: string;
    description: string;
    version: string;
    coin_inputs: {
      coins: {
        denom: string;
        amount: string;
      }[];
    }[];
    item_inputs: {
      id: string;
      doubles: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      longs: {
        key: string;
        min_value: string;
        max_value: string;
      }[];
      strings: {
        key: string;
        value: string;
      }[];
    }[];
    entries: {
      coin_outputs: {
        id: string;
        coin: {
          denom: string;
          amount: string;
        };
        program: string;
      }[];
      item_outputs: {
        id: string;
        doubles: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
      item_modify_outputs: {
        id: string;
        item_input_ref: string;
        doubles: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        longs: {
          key: string;
          weight_ranges: {
            lower: string;
            upper: string;
            weight: string;
          }[];
          program: string;
        }[];
        strings: {
          key: string;
          value: string;
          program: string;
        }[];
        mutable_strings: {
          key: string;
          value: string;
        }[];
        transfer_fee: {
          denom: string;
          amount: string;
        }[];
        trade_percentage: string;
        quantity: string;
        amount_minted: string;
        tradeable: boolean;
      }[];
    };
    outputs: {
      entry_i_ds: string[];
      weight: string;
    }[];
    block_interval: string;
    cost_per_block: {
      denom: string;
      amount: string;
    };
    enabled: boolean;
    extra_info: string;
  };
}
export interface AminoMsgCreateCookbook extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgCreateCookbook";
  value: {
    creator: string;
    id: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    support_email: string;
    enabled: boolean;
  };
}
export interface AminoMsgUpdateCookbook extends AminoMsg {
  type: "/Pylonstech.pylons.pylons.MsgUpdateCookbook";
  value: {
    creator: string;
    id: string;
    name: string;
    description: string;
    developer: string;
    version: string;
    support_email: string;
    enabled: boolean;
  };
}
export const AminoConverter = {
  "/Pylonstech.pylons.pylons.MsgBurnDebtToken": {
    aminoType: "/Pylonstech.pylons.pylons.MsgBurnDebtToken",
    toAmino: ({
      creator,
      redeemInfo
    }: MsgBurnDebtToken): AminoMsgBurnDebtToken["value"] => {
      return {
        creator,
        redeem_info: {
          id: redeemInfo.ID,
          processor_name: redeemInfo.processorName,
          address: redeemInfo.address,
          amount: redeemInfo.amount,
          signature: redeemInfo.signature
        }
      };
    },
    fromAmino: ({
      creator,
      redeem_info
    }: AminoMsgBurnDebtToken["value"]): MsgBurnDebtToken => {
      return {
        creator,
        redeemInfo: {
          ID: redeem_info.id,
          processorName: redeem_info.processor_name,
          address: redeem_info.address,
          amount: redeem_info.amount,
          signature: redeem_info.signature
        }
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgUpdateAccount": {
    aminoType: "/Pylonstech.pylons.pylons.MsgUpdateAccount",
    toAmino: ({
      creator,
      username
    }: MsgUpdateAccount): AminoMsgUpdateAccount["value"] => {
      return {
        creator,
        username
      };
    },
    fromAmino: ({
      creator,
      username
    }: AminoMsgUpdateAccount["value"]): MsgUpdateAccount => {
      return {
        creator,
        username
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgFulfillTrade": {
    aminoType: "/Pylonstech.pylons.pylons.MsgFulfillTrade",
    toAmino: ({
      creator,
      ID,
      coinInputsIndex,
      items,
      paymentInfos
    }: MsgFulfillTrade): AminoMsgFulfillTrade["value"] => {
      return {
        creator,
        id: ID.toString(),
        coin_inputs_index: coinInputsIndex.toString(),
        items: items.map(el0 => ({
          cookbook_i_d: el0.cookbookID,
          item_i_d: el0.itemID
        })),
        payment_infos: paymentInfos.map(el0 => ({
          purchase_i_d: el0.purchaseID,
          processor_name: el0.processorName,
          payer_addr: el0.payerAddr,
          amount: el0.amount,
          product_i_d: el0.productID,
          signature: el0.signature
        }))
      };
    },
    fromAmino: ({
      creator,
      id,
      coin_inputs_index,
      items,
      payment_infos
    }: AminoMsgFulfillTrade["value"]): MsgFulfillTrade => {
      return {
        creator,
        ID: Long.fromString(id),
        coinInputsIndex: Long.fromString(coin_inputs_index),
        items: items.map(el0 => ({
          cookbookID: el0.cookbook_i_d,
          itemID: el0.item_i_d
        })),
        paymentInfos: payment_infos.map(el0 => ({
          purchaseID: el0.purchase_i_d,
          processorName: el0.processor_name,
          payerAddr: el0.payer_addr,
          amount: el0.amount,
          productID: el0.product_i_d,
          signature: el0.signature
        }))
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgCreateTrade": {
    aminoType: "/Pylonstech.pylons.pylons.MsgCreateTrade",
    toAmino: ({
      creator,
      coinInputs,
      itemInputs,
      coinOutputs,
      itemOutputs,
      extraInfo
    }: MsgCreateTrade): AminoMsgCreateTrade["value"] => {
      return {
        creator,
        coin_inputs: coinInputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        item_inputs: itemInputs.map(el0 => ({
          id: el0.ID,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue,
            max_value: el1.maxValue
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue.toString(),
            max_value: el1.maxValue.toString()
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        coin_outputs: coinOutputs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        item_outputs: itemOutputs.map(el0 => ({
          cookbook_i_d: el0.cookbookID,
          item_i_d: el0.itemID
        })),
        extra_info: extraInfo
      };
    },
    fromAmino: ({
      creator,
      coin_inputs,
      item_inputs,
      coin_outputs,
      item_outputs,
      extra_info
    }: AminoMsgCreateTrade["value"]): MsgCreateTrade => {
      return {
        creator,
        coinInputs: coin_inputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        itemInputs: item_inputs.map(el0 => ({
          ID: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            minValue: el1.min_value,
            maxValue: el1.max_value
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            minValue: Long.fromString(el1.min_value),
            maxValue: Long.fromString(el1.max_value)
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        coinOutputs: coin_outputs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        itemOutputs: item_outputs.map(el0 => ({
          cookbookID: el0.cookbook_i_d,
          itemID: el0.item_i_d
        })),
        extraInfo: extra_info
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgCancelTrade": {
    aminoType: "/Pylonstech.pylons.pylons.MsgCancelTrade",
    toAmino: ({
      creator,
      ID
    }: MsgCancelTrade): AminoMsgCancelTrade["value"] => {
      return {
        creator,
        id: ID.toString()
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgCancelTrade["value"]): MsgCancelTrade => {
      return {
        creator,
        ID: Long.fromString(id)
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly": {
    aminoType: "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly",
    toAmino: ({
      creator,
      ID
    }: MsgCompleteExecutionEarly): AminoMsgCompleteExecutionEarly["value"] => {
      return {
        creator,
        id: ID
      };
    },
    fromAmino: ({
      creator,
      id
    }: AminoMsgCompleteExecutionEarly["value"]): MsgCompleteExecutionEarly => {
      return {
        creator,
        ID: id
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgTransferCookbook": {
    aminoType: "/Pylonstech.pylons.pylons.MsgTransferCookbook",
    toAmino: ({
      creator,
      ID,
      recipient
    }: MsgTransferCookbook): AminoMsgTransferCookbook["value"] => {
      return {
        creator,
        id: ID,
        recipient
      };
    },
    fromAmino: ({
      creator,
      id,
      recipient
    }: AminoMsgTransferCookbook["value"]): MsgTransferCookbook => {
      return {
        creator,
        ID: id,
        recipient
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins": {
    aminoType: "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins",
    toAmino: ({
      creator,
      productID,
      purchaseToken,
      receiptDataBase64,
      signature
    }: MsgGoogleInAppPurchaseGetCoins): AminoMsgGoogleInAppPurchaseGetCoins["value"] => {
      return {
        creator,
        product_i_d: productID,
        purchase_token: purchaseToken,
        receipt_data_base64: receiptDataBase64,
        signature
      };
    },
    fromAmino: ({
      creator,
      product_i_d,
      purchase_token,
      receipt_data_base64,
      signature
    }: AminoMsgGoogleInAppPurchaseGetCoins["value"]): MsgGoogleInAppPurchaseGetCoins => {
      return {
        creator,
        productID: product_i_d,
        purchaseToken: purchase_token,
        receiptDataBase64: receipt_data_base64,
        signature
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgCreateAccount": {
    aminoType: "/Pylonstech.pylons.pylons.MsgCreateAccount",
    toAmino: ({
      creator,
      username
    }: MsgCreateAccount): AminoMsgCreateAccount["value"] => {
      return {
        creator,
        username
      };
    },
    fromAmino: ({
      creator,
      username
    }: AminoMsgCreateAccount["value"]): MsgCreateAccount => {
      return {
        creator,
        username
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgSendItems": {
    aminoType: "/Pylonstech.pylons.pylons.MsgSendItems",
    toAmino: ({
      creator,
      receiver,
      items
    }: MsgSendItems): AminoMsgSendItems["value"] => {
      return {
        creator,
        receiver,
        items: items.map(el0 => ({
          cookbook_i_d: el0.cookbookID,
          item_i_d: el0.itemID
        }))
      };
    },
    fromAmino: ({
      creator,
      receiver,
      items
    }: AminoMsgSendItems["value"]): MsgSendItems => {
      return {
        creator,
        receiver,
        items: items.map(el0 => ({
          cookbookID: el0.cookbook_i_d,
          itemID: el0.item_i_d
        }))
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgExecuteRecipe": {
    aminoType: "/Pylonstech.pylons.pylons.MsgExecuteRecipe",
    toAmino: ({
      creator,
      cookbookID,
      recipeID,
      coinInputsIndex,
      itemIDs,
      paymentInfos
    }: MsgExecuteRecipe): AminoMsgExecuteRecipe["value"] => {
      return {
        creator,
        cookbook_i_d: cookbookID,
        recipe_i_d: recipeID,
        coin_inputs_index: coinInputsIndex.toString(),
        item_i_ds: itemIDs,
        payment_infos: paymentInfos.map(el0 => ({
          purchase_i_d: el0.purchaseID,
          processor_name: el0.processorName,
          payer_addr: el0.payerAddr,
          amount: el0.amount,
          product_i_d: el0.productID,
          signature: el0.signature
        }))
      };
    },
    fromAmino: ({
      creator,
      cookbook_i_d,
      recipe_i_d,
      coin_inputs_index,
      item_i_ds,
      payment_infos
    }: AminoMsgExecuteRecipe["value"]): MsgExecuteRecipe => {
      return {
        creator,
        cookbookID: cookbook_i_d,
        recipeID: recipe_i_d,
        coinInputsIndex: Long.fromString(coin_inputs_index),
        itemIDs: item_i_ds,
        paymentInfos: payment_infos.map(el0 => ({
          purchaseID: el0.purchase_i_d,
          processorName: el0.processor_name,
          payerAddr: el0.payer_addr,
          amount: el0.amount,
          productID: el0.product_i_d,
          signature: el0.signature
        }))
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgSetItemString": {
    aminoType: "/Pylonstech.pylons.pylons.MsgSetItemString",
    toAmino: ({
      creator,
      cookbookID,
      ID,
      field,
      value
    }: MsgSetItemString): AminoMsgSetItemString["value"] => {
      return {
        creator,
        cookbook_i_d: cookbookID,
        id: ID,
        field,
        value
      };
    },
    fromAmino: ({
      creator,
      cookbook_i_d,
      id,
      field,
      value
    }: AminoMsgSetItemString["value"]): MsgSetItemString => {
      return {
        creator,
        cookbookID: cookbook_i_d,
        ID: id,
        field,
        value
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgCreateRecipe": {
    aminoType: "/Pylonstech.pylons.pylons.MsgCreateRecipe",
    toAmino: ({
      creator,
      cookbookID,
      ID,
      name,
      description,
      version,
      coinInputs,
      itemInputs,
      entries,
      outputs,
      blockInterval,
      costPerBlock,
      enabled,
      extraInfo
    }: MsgCreateRecipe): AminoMsgCreateRecipe["value"] => {
      return {
        creator,
        cookbook_i_d: cookbookID,
        id: ID,
        name,
        description,
        version,
        coin_inputs: coinInputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        item_inputs: itemInputs.map(el0 => ({
          id: el0.ID,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue,
            max_value: el1.maxValue
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue.toString(),
            max_value: el1.maxValue.toString()
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coin_outputs: entries.coinOutputs.map(el0 => ({
            id: el0.ID,
            coin: {
              denom: el0.coin.denom,
              amount: Long.fromNumber(el0.coin.amount).toString()
            },
            program: el0.program
          })),
          item_outputs: entries.itemOutputs.map(el0 => ({
            id: el0.ID,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.Key,
              value: el1.Value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          })),
          item_modify_outputs: entries.itemModifyOutputs.map(el0 => ({
            id: el0.ID,
            item_input_ref: el0.itemInputRef,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.Key,
              value: el1.Value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entry_i_ds: el0.entryIDs,
          weight: el0.weight.toString()
        })),
        block_interval: blockInterval.toString(),
        cost_per_block: {
          denom: costPerBlock.denom,
          amount: Long.fromNumber(costPerBlock.amount).toString()
        },
        enabled,
        extra_info: extraInfo
      };
    },
    fromAmino: ({
      creator,
      cookbook_i_d,
      id,
      name,
      description,
      version,
      coin_inputs,
      item_inputs,
      entries,
      outputs,
      block_interval,
      cost_per_block,
      enabled,
      extra_info
    }: AminoMsgCreateRecipe["value"]): MsgCreateRecipe => {
      return {
        creator,
        cookbookID: cookbook_i_d,
        ID: id,
        name,
        description,
        version,
        coinInputs: coin_inputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        itemInputs: item_inputs.map(el0 => ({
          ID: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            minValue: el1.min_value,
            maxValue: el1.max_value
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            minValue: Long.fromString(el1.min_value),
            maxValue: Long.fromString(el1.max_value)
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coinOutputs: entries.coin_outputs.map(el1 => ({
            ID: el1.id,
            coin: {
              denom: el1.coin.denom,
              amount: el1.coin.amount
            },
            program: el1.program
          })),
          itemOutputs: entries.item_outputs.map(el1 => ({
            ID: el1.id,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              Key: el2.key,
              Value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          })),
          itemModifyOutputs: entries.item_modify_outputs.map(el1 => ({
            ID: el1.id,
            itemInputRef: el1.item_input_ref,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              Key: el2.key,
              Value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entryIDs: el0.entry_i_ds,
          weight: Long.fromString(el0.weight)
        })),
        blockInterval: Long.fromString(block_interval),
        costPerBlock: {
          denom: cost_per_block.denom,
          amount: cost_per_block.amount
        },
        enabled,
        extraInfo: extra_info
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgUpdateRecipe": {
    aminoType: "/Pylonstech.pylons.pylons.MsgUpdateRecipe",
    toAmino: ({
      creator,
      cookbookID,
      ID,
      name,
      description,
      version,
      coinInputs,
      itemInputs,
      entries,
      outputs,
      blockInterval,
      costPerBlock,
      enabled,
      extraInfo
    }: MsgUpdateRecipe): AminoMsgUpdateRecipe["value"] => {
      return {
        creator,
        cookbook_i_d: cookbookID,
        id: ID,
        name,
        description,
        version,
        coin_inputs: coinInputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        item_inputs: itemInputs.map(el0 => ({
          id: el0.ID,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue,
            max_value: el1.maxValue
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            min_value: el1.minValue.toString(),
            max_value: el1.maxValue.toString()
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coin_outputs: entries.coinOutputs.map(el0 => ({
            id: el0.ID,
            coin: {
              denom: el0.coin.denom,
              amount: Long.fromNumber(el0.coin.amount).toString()
            },
            program: el0.program
          })),
          item_outputs: entries.itemOutputs.map(el0 => ({
            id: el0.ID,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.Key,
              value: el1.Value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          })),
          item_modify_outputs: entries.itemModifyOutputs.map(el0 => ({
            id: el0.ID,
            item_input_ref: el0.itemInputRef,
            doubles: el0.doubles.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower,
                upper: el2.upper,
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            longs: el0.longs.map(el1 => ({
              key: el1.key,
              weight_ranges: el1.weightRanges.map(el2 => ({
                lower: el2.lower.toString(),
                upper: el2.upper.toString(),
                weight: el2.weight.toString()
              })),
              program: el1.program
            })),
            strings: el0.strings.map(el1 => ({
              key: el1.key,
              value: el1.value,
              program: el1.program
            })),
            mutable_strings: el0.mutableStrings.map(el1 => ({
              key: el1.Key,
              value: el1.Value
            })),
            transfer_fee: el0.transferFee.map(el1 => ({
              denom: el1.denom,
              amount: el1.amount
            })),
            trade_percentage: el0.tradePercentage,
            quantity: el0.quantity.toString(),
            amount_minted: el0.amountMinted.toString(),
            tradeable: el0.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entry_i_ds: el0.entryIDs,
          weight: el0.weight.toString()
        })),
        block_interval: blockInterval.toString(),
        cost_per_block: {
          denom: costPerBlock.denom,
          amount: Long.fromNumber(costPerBlock.amount).toString()
        },
        enabled,
        extra_info: extraInfo
      };
    },
    fromAmino: ({
      creator,
      cookbook_i_d,
      id,
      name,
      description,
      version,
      coin_inputs,
      item_inputs,
      entries,
      outputs,
      block_interval,
      cost_per_block,
      enabled,
      extra_info
    }: AminoMsgUpdateRecipe["value"]): MsgUpdateRecipe => {
      return {
        creator,
        cookbookID: cookbook_i_d,
        ID: id,
        name,
        description,
        version,
        coinInputs: coin_inputs.map(el0 => ({
          coins: el0.coins.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        itemInputs: item_inputs.map(el0 => ({
          ID: el0.id,
          doubles: el0.doubles.map(el1 => ({
            key: el1.key,
            minValue: el1.min_value,
            maxValue: el1.max_value
          })),
          longs: el0.longs.map(el1 => ({
            key: el1.key,
            minValue: Long.fromString(el1.min_value),
            maxValue: Long.fromString(el1.max_value)
          })),
          strings: el0.strings.map(el1 => ({
            key: el1.key,
            value: el1.value
          }))
        })),
        entries: {
          coinOutputs: entries.coin_outputs.map(el1 => ({
            ID: el1.id,
            coin: {
              denom: el1.coin.denom,
              amount: el1.coin.amount
            },
            program: el1.program
          })),
          itemOutputs: entries.item_outputs.map(el1 => ({
            ID: el1.id,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              Key: el2.key,
              Value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          })),
          itemModifyOutputs: entries.item_modify_outputs.map(el1 => ({
            ID: el1.id,
            itemInputRef: el1.item_input_ref,
            doubles: el1.doubles.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: el3.lower,
                upper: el3.upper,
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            longs: el1.longs.map(el2 => ({
              key: el2.key,
              weightRanges: el2.weight_ranges.map(el3 => ({
                lower: Long.fromString(el3.lower),
                upper: Long.fromString(el3.upper),
                weight: Long.fromString(el3.weight)
              })),
              program: el2.program
            })),
            strings: el1.strings.map(el2 => ({
              key: el2.key,
              value: el2.value,
              program: el2.program
            })),
            mutableStrings: el1.mutable_strings.map(el2 => ({
              Key: el2.key,
              Value: el2.value
            })),
            transferFee: el1.transfer_fee.map(el2 => ({
              denom: el2.denom,
              amount: el2.amount
            })),
            tradePercentage: el1.trade_percentage,
            quantity: Long.fromString(el1.quantity),
            amountMinted: Long.fromString(el1.amount_minted),
            tradeable: el1.tradeable
          }))
        },
        outputs: outputs.map(el0 => ({
          entryIDs: el0.entry_i_ds,
          weight: Long.fromString(el0.weight)
        })),
        blockInterval: Long.fromString(block_interval),
        costPerBlock: {
          denom: cost_per_block.denom,
          amount: cost_per_block.amount
        },
        enabled,
        extraInfo: extra_info
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgCreateCookbook": {
    aminoType: "/Pylonstech.pylons.pylons.MsgCreateCookbook",
    toAmino: ({
      creator,
      ID,
      name,
      description,
      developer,
      version,
      supportEmail,
      enabled
    }: MsgCreateCookbook): AminoMsgCreateCookbook["value"] => {
      return {
        creator,
        id: ID,
        name,
        description,
        developer,
        version,
        support_email: supportEmail,
        enabled
      };
    },
    fromAmino: ({
      creator,
      id,
      name,
      description,
      developer,
      version,
      support_email,
      enabled
    }: AminoMsgCreateCookbook["value"]): MsgCreateCookbook => {
      return {
        creator,
        ID: id,
        name,
        description,
        developer,
        version,
        supportEmail: support_email,
        enabled
      };
    }
  },
  "/Pylonstech.pylons.pylons.MsgUpdateCookbook": {
    aminoType: "/Pylonstech.pylons.pylons.MsgUpdateCookbook",
    toAmino: ({
      creator,
      ID,
      name,
      description,
      developer,
      version,
      supportEmail,
      enabled
    }: MsgUpdateCookbook): AminoMsgUpdateCookbook["value"] => {
      return {
        creator,
        id: ID,
        name,
        description,
        developer,
        version,
        support_email: supportEmail,
        enabled
      };
    },
    fromAmino: ({
      creator,
      id,
      name,
      description,
      developer,
      version,
      support_email,
      enabled
    }: AminoMsgUpdateCookbook["value"]): MsgUpdateCookbook => {
      return {
        creator,
        ID: id,
        name,
        description,
        developer,
        version,
        supportEmail: support_email,
        enabled
      };
    }
  }
};