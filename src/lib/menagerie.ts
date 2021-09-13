import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

export type PetProject = {
  name: string;
  ticker: string;
  chainId: number;
  contractAddress: string;
  mint: {
    cost: BigNumber;
    type: 'open' | 'restricted';
    parentAddress: string | null;
    url: string;
  };
};

export const menagerie: PetProject[] = [
  {
    name: 'WAGMIPET',
    ticker: 'PET',
    chainId: 137,
    contractAddress: '0x011276D94A09d9D6855eF260B6FeC4050f37940D',
    mint: {
      cost: parseUnits('0', 'ether'),
      type: 'open',
      parentAddress: null,
      url: 'https://ethpet.m1guelpf.me/',
    },
  },
  {
    name: 'Glyph Pets',
    ticker: 'GP',
    chainId: 1,
    contractAddress: '0xa628b11974D11A9eC902C73c625D2FBD18e53568',
    mint: {
      cost: parseUnits('0', 'ether'),
      type: 'open',
      parentAddress: null,
      url: 'https://etherscan.io/address/0xa628b11974D11A9eC902C73c625D2FBD18e53568#writeContract',
    },
  },
];
