import { FC } from 'react';

import { PetProject } from '@/lib/menagerie';

const MintPet: FC<{ currentProject: PetProject }> = ({ currentProject }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <h1 className="text-5xl md:text-7xl text-center dark:text-white">
        Adopt a new ${currentProject.name}
      </h1>
      <p className="max-w-xs md:max-w-prose text-2xl md:text-3xl text-center dark:text-white">
        Ready to bring home (to your wallet) a smol fren?
        <br />
        <br />
        Head over to the minting site to adopt your {currentProject.name}!
      </p>
      <a
        href={currentProject.mint.url}
        target="_blank"
        className="text-3xl p-4 border-4 border-current text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400"
        rel="noreferrer"
      >
        Visit Minting Site
      </a>
    </div>
  );
};

export default MintPet;
