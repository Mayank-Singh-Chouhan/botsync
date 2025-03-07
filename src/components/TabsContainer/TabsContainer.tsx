import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface TabItemBase {
  id: string;
  label: string;
  content: ReactNode;
  panelTitle?: string;
}

interface TabsContainerProps<T extends TabItemBase> {
  tabs: T[];
  defaultTab?: string;
  paramName?: string;
}

const TabsContainer = <T extends TabItemBase>({
  tabs,
  defaultTab = tabs[0]?.id || '',
  paramName = 'tab',
}: TabsContainerProps<T>) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabId = searchParams.get(paramName) || defaultTab;

  const handleTabChange = (tabId: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(paramName, tabId);
    setSearchParams(newSearchParams);
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="tabs-container flex flex-col lg:flex-row gap-14">
      <div className='flex lg:flex-col gap-4 max-lg:w-full overflow-auto'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'transition-colors shrink-0 gap-4 text-[16px] font-normal cursor-pointer lg:w-[250px] max-w-[250px] p-4 rounded-lg text-left flex justify-between items-center bg-lightGrey text-black',
              tab.id === activeTabId && 'bg-skyBlue text-white'
            )}
          >
            <p className='line-clamp-1'>
              {tab.label}
            </p>
            <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00176 14.0292C0.768108 14.0297 0.541672 13.9483 0.36176 13.7992C0.260501 13.7153 0.1768 13.6122 0.115448 13.4958C0.0540956 13.3795 0.0162993 13.2522 0.00422342 13.1212C-0.00785244 12.9902 0.00602958 12.8582 0.0450741 12.7326C0.0841185 12.607 0.147558 12.4903 0.23176 12.3892L4.71176 7.02924L0.39176 1.65924C0.308694 1.55695 0.246663 1.43925 0.209231 1.31291C0.171799 1.18657 0.159705 1.05408 0.173645 0.923055C0.187584 0.792027 0.227281 0.665045 0.290454 0.549408C0.353628 0.433772 0.439033 0.33176 0.54176 0.249237C0.645226 0.158201 0.766392 0.0895333 0.897654 0.0475443C1.02892 0.00555526 1.16744 -0.00884844 1.30453 0.00523645C1.44163 0.0193213 1.57433 0.0615911 1.69431 0.129393C1.81429 0.197195 1.91897 0.289065 2.00176 0.399237L6.83176 6.39924C6.97884 6.57817 7.05925 6.80261 7.05925 7.03424C7.05925 7.26586 6.97884 7.4903 6.83176 7.66924L1.83176 13.6692C1.73144 13.7903 1.60401 13.8859 1.4598 13.9485C1.31559 14.011 1.15867 14.0387 1.00176 14.0292Z" fill="currentColor"/>
            </svg>
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab.panelTitle && <h2 className='font-bold leading-none text-[24px]'>{activeTab.panelTitle}</h2>}
        {activeTab.content}
      </div>
    </div>
  );
};

export default TabsContainer;