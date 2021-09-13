import React from 'react';

import { menagerie } from '@/lib/menagerie';

const Tabs = ({ color, currentProject, setCurrentProject }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {menagerie.map((project, index) => (
              <li
                className="-mb-px mr-2 last:mr-0 flex-auto text-center"
                key={project.contractAddress}
              >
                <a
                  className={
                    'text-3xl p-4 border-4 border-current hover:text-gray-500 dark:hover:text-gray-400' +
                    (currentProject.contractAddress === project.contractAddress
                      ? ' text-gray-500'
                      : ' text-black dark:text-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentProject(project);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabs;
