import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Trade } from "./trade";
import { RedeemInfo } from "./redeem_info";
import { PaymentInfo } from "./payment_info";
import { Username, AccountAddr } from "./accounts";
import { Item } from "./item";
import { GoogleInAppPurchaseOrder } from "./google_iap_order";
import { Execution } from "./execution";
import { Recipe } from "./recipe";
import { Cookbook } from "./cookbook";
import { LCDClient } from "@osmonauts/lcd";
import { QueryListTradesByCreatorRequest, QueryListTradesByCreatorResponse, QueryGetRedeemInfoRequest, QueryGetRedeemInfoResponse, QueryAllRedeemInfoRequest, QueryAllRedeemInfoResponse, QueryGetPaymentInfoRequest, QueryGetPaymentInfoResponse, QueryAllPaymentInfoRequest, QueryAllPaymentInfoResponse, QueryGetUsernameByAddressRequest, QueryGetUsernameByAddressResponse, QueryGetAddressByUsernameRequest, QueryGetAddressByUsernameResponse, QueryGetTradeRequest, QueryGetTradeResponse, QueryListItemByOwnerRequest, QueryListItemByOwnerResponse, QueryGetGoogleInAppPurchaseOrderRequest, QueryGetGoogleInAppPurchaseOrderResponse, QueryListExecutionsByItemRequest, QueryListExecutionsByItemResponse, QueryListExecutionsByRecipeRequest, QueryListExecutionsByRecipeResponse, QueryGetExecutionRequest, QueryGetExecutionResponse, QueryListRecipesByCookbookRequest, QueryListRecipesByCookbookResponse, QueryGetItemRequest, QueryGetItemResponse, QueryGetRecipeRequest, QueryGetRecipeResponse, QueryListCookbooksByCreatorRequest, QueryListCookbooksByCreatorResponse, QueryGetCookbookRequest, QueryGetCookbookResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* Queries a list of listTradesByCreator items. */
  async listTradesByCreator(params: QueryListTradesByCreatorRequest): Promise<QueryListTradesByCreatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/trades/${params.creator}`;
    return await this.request(endpoint, options);
  }

  /* Queries a redeemInfo by index. */
  async redeemInfo(params: QueryGetRedeemInfoRequest): Promise<QueryGetRedeemInfoResponse> {
    const endpoint = `pylons/redeem/${params.ID}`;
    return await this.request(endpoint);
  }

  /* Queries a list of redeemInfo items. */
  async redeemInfoAll(params: QueryAllRedeemInfoRequest): Promise<QueryAllRedeemInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/redeems/`;
    return await this.request(endpoint, options);
  }

  /* Queries a paymentInfo by index. */
  async paymentInfo(params: QueryGetPaymentInfoRequest): Promise<QueryGetPaymentInfoResponse> {
    const endpoint = `pylons/payment/${params.purchaseID}`;
    return await this.request(endpoint);
  }

  /* Queries a list of paymentInfo items. */
  async paymentInfoAll(params: QueryAllPaymentInfoRequest): Promise<QueryAllPaymentInfoResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/payments/`;
    return await this.request(endpoint, options);
  }

  /* Queries a list of getAccountByAddress items. */
  async usernameByAddress(params: QueryGetUsernameByAddressRequest): Promise<QueryGetUsernameByAddressResponse> {
    const endpoint = `pylons/account/address/${params.address}`;
    return await this.request(endpoint);
  }

  /* Queries a username by account. */
  async addressByUsername(params: QueryGetAddressByUsernameRequest): Promise<QueryGetAddressByUsernameResponse> {
    const endpoint = `pylons/account/username/${params.username}`;
    return await this.request(endpoint);
  }

  /* Queries a trade by id. */
  async trade(params: QueryGetTradeRequest): Promise<QueryGetTradeResponse> {
    const endpoint = `pylons/trade/${params.ID}`;
    return await this.request(endpoint);
  }

  /* Queries a list of listItemByOwner items. */
  async listItemByOwner(params: QueryListItemByOwnerRequest): Promise<QueryListItemByOwnerResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/items/${params.owner}`;
    return await this.request(endpoint, options);
  }

  /* Queries a googleIAPOrder by PurchaseToken. */
  async googleInAppPurchaseOrder(params: QueryGetGoogleInAppPurchaseOrderRequest): Promise<QueryGetGoogleInAppPurchaseOrderResponse> {
    const endpoint = `pylons/iap/${params.PurchaseToken}`;
    return await this.request(endpoint);
  }

  /* Queries a list of listExecutionsByItem items. */
  async listExecutionsByItem(params: QueryListExecutionsByItemRequest): Promise<QueryListExecutionsByItemResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/executions/item/${params.CookbookID}/${params.ItemID}`;
    return await this.request(endpoint, options);
  }

  /* Queries a list of listExecutionsByRecipe items. */
  async listExecutionsByRecipe(params: QueryListExecutionsByRecipeRequest): Promise<QueryListExecutionsByRecipeResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/executions/recipe/${params.CookbookID}/${params.RecipeID}`;
    return await this.request(endpoint, options);
  }

  /* Queries a execution by id. */
  async execution(params: QueryGetExecutionRequest): Promise<QueryGetExecutionResponse> {
    const endpoint = `pylons/execution/${params.ID}`;
    return await this.request(endpoint);
  }

  /* Queries a list of listRecipesByCookbook items. */
  async listRecipesByCookbook(params: QueryListRecipesByCookbookRequest): Promise<QueryListRecipesByCookbookResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/recipes/${params.CookbookID}`;
    return await this.request(endpoint, options);
  }

  /* Queries a item by ID. */
  async item(params: QueryGetItemRequest): Promise<QueryGetItemResponse> {
    const endpoint = `pylons/item/${params.CookbookID}/${params.ID}`;
    return await this.request(endpoint);
  }

  /* Retrieves a recipe by ID. */
  async recipe(params: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse> {
    const endpoint = `pylons/recipe/${params.CookbookID}/${params.ID}`;
    return await this.request(endpoint);
  }

  /* Retrieves the list of cookbooks owned by an address */
  async listCookbooksByCreator(params: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `pylons/cookbooks/${params.creator}`;
    return await this.request(endpoint, options);
  }

  /* Retrieves a cookbook by ID. */
  async cookbook(params: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse> {
    const endpoint = `pylons/cookbook/${params.ID}`;
    return await this.request(endpoint);
  }

}