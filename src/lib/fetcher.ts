import { BigNumber } from 'ethers';

import { Wagmipet } from '@/contracts';

	return Object.fromEntries(
		await Promise.all(
			[...Array(userBalance.toNumber())].map(async (_, index) => {
				const tokenIndex: BigNumber = await contract.tokenOfOwnerByIndex(userAddress, index)

  return Object.fromEntries(
    await Promise.all(
      [...Array(userBalance.toNumber())].map(async (_, index) => {
        const tokenIndex: BigNumber = await contract.tokenOfOwnerByIndex(
          userAddress,
          index,
        );

        return [tokenIndex.toNumber(), await contract.getName(tokenIndex)];
      }),
    ),
  );
};
