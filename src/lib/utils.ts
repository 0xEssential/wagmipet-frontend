export const formatAddressShort = (address: string): string =>
  `${address.slice(0, 4)}…${address.slice(address.length - 4, address.length)}`;

export const infuraSubdomain = (chainId: number) =>
  ({
    80001: 'polygon-mumbai',
    137: 'polygon-mainnet',
    4: 'rinkeby',
    1: 'mainnet',
  }[chainId]);
