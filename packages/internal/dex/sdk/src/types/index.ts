import { ethers } from 'ethers';
import { Currency, TradeType } from '@uniswap/sdk-core';
import { Route } from '@uniswap/v3-sdk';
import { ModuleConfiguration } from '@imtbl/config';
import { ExchangeContracts } from 'config';

export type Amount = {
  token: TokenInfo;
  amount: ethers.BigNumberish;
};

export type QuoteTradeInfo = {
  route: Route<Currency, Currency>;
  amountIn: ethers.BigNumberish;
  tokenIn: Currency;
  amountOut: ethers.BigNumberish;
  tokenOut: Currency;
  tradeType: TradeType;
};

export type QuoteResponse = {
  trade: QuoteTradeInfo;
};

export type TradeInfo = {
  quote: Amount;
  quoteWithMaxSlippage: Amount;
  slippage: number;
};

export type TransactionResponse = {
  transaction: ethers.providers.TransactionRequest;
  info: TradeInfo;
};

export type TokenInfo = {
  chainId: number;
  address: string;
  decimals: number;
  symbol?: string;
  name?: string;
};

export interface ExchangeOverrides {
  rpcURL: string;
  exchangeContracts: ExchangeContracts;
  commonRoutingTokens: TokenInfo[];
}

export interface ExchangeModuleConfiguration
  extends ModuleConfiguration<ExchangeOverrides> {
  chainId: number; // TODO - union of Sandbox/Prod chains?
}
