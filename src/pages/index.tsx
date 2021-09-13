import { Biconomy } from '@biconomy/mexa';
import { Contract, ethers } from 'ethers';
import { FC, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

import Intro from '@/components/Intro';
import LoadingIndicator from '@/components/LoadingIndicator';
import MintPet from '@/components/MintPet';
import PetSelector from '@/components/PetSelector';
import Tabs from '@/components/Tabs';
import {
  Wagmipet as Wagmiabi,
  Wagmipet__factory as Wagmipet,
} from '@/contracts';
import { fetchPets } from '@/lib/fetcher';
import { menagerie, PetProject } from '@/lib/menagerie';
import { infuraSubdomain } from '@/lib/utils';

const Home: FC = () => {
  const [web3, setWeb3] = useState<ethers.providers.Web3Provider>(null);
  const [currentProject, setCurrentProject] = useState<PetProject>(
    menagerie[0],
  );
  const [currentContract, setCurrentContract] = useState<Wagmiabi>(null);
  const [userAddress, setUserAddress] = useState<string>('');

  const { data: petList, mutate: mutatePetList } = useSWR<
    Record<number, string>
  >(
    () =>
      userAddress &&
      currentContract &&
      `pets-${userAddress}-${currentContract.address}`,
    () => fetchPets(currentContract, userAddress),
    { revalidateOnFocus: false },
  );

  useEffect(() => {
    const contract = Wagmipet.connect(
      currentProject.contractAddress,
      new ethers.providers.JsonRpcProvider(
        `https://${infuraSubdomain(currentProject.chainId)}.infura.io/v3/${
          process.env.NEXT_PUBLIC_INFURA_ID
        }`,
      ),
    );
    setCurrentContract(contract);
  }, [currentProject]);

  useEffect(() => {
    if (!web3) {
      setUserAddress('');
      return;
    }

    web3.getSigner().getAddress().then(setUserAddress);
  }, [web3]);

  if (!web3 || !userAddress) {
    return <Intro setWeb3={setWeb3} />;
  }

  if (petList == null) return <LoadingIndicator />;

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Tabs
        color="white"
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
      {Object.keys(petList).length > 0 ? (
        <PetSelector
          currentProject={currentProject}
          petList={petList}
          setPetList={mutatePetList}
        />
      ) : (
        <MintPet currentProject={currentProject} />
      )}
    </div>
  );
};

export default Home;
