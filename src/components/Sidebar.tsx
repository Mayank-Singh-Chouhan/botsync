// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAppSelector } from '../hooks/redux';
// import shield from '../assets/shield.svg'
// import { cn } from '../lib/utils';
// import Icon from './Icon';
// import { NAV_LINKS } from '../data/sidebar';

// const Sidebar: React.FC = () => {
//   const { isExpanded } = useAppSelector((state) => state.sidebar);

//   // Style for active links
//   const activeStyle = {
//     color: '#4a90e2',
//     borderRight: '2px solid #4a90e2'
//   };

//   return (
//     <aside 
//       className={cn(
//         'shadow-[4px_4px_10px_0px_#00000033] w-0 lg:w-[70px] transition-[width] duration-300 ease-in-out',
//         isExpanded && 'w-[300px] lg:w-[250px]'
//       )}
//     >
//       <div className= 'bg-navyBlue text-white font-extrabold text-[12px] h-[42px] flex gap-3 justify-center items-center'>
//         <img src={shield}/>
//         {isExpanded && <h1>Admin Portal</h1>}

//       </div>
//       <nav>
//         <ul className='flex flex-col pt-7'>
//           {NAV_LINKS.map((nav) => {
//             return (  
//               <li>
//                 <NavLink 
//                   to={nav.value} 
//                   className={cn('flex items-center p-[1rem_1rem]')}
//                   style={({ isActive }) => ({
//                     color: '#808080',
//                     justifyContent: isExpanded ? 'left' : 'center',
//                     ...(isActive ? activeStyle : {})
//                   })}
//                   end
//                 >
//                   <Icon name={nav.icon}/>
//                   {isExpanded && <span style={{ marginLeft: '0.75rem' }}>{nav.label}</span>}
//                 </NavLink>
//               </li>
//             )
//           })}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import shield from '../assets/shield.svg';
import { cn } from '../lib/utils';
import Icon from './ui/Icon';
import { NAV_LINKS } from '../data/sidebar';

const Sidebar: React.FC = () => {
  const { isExpanded } = useAppSelector((state) => state.sidebar);

  return (
    <aside
      className={cn(
        'shadow-[4px_4px_10px_0px_#00000033] transition-all duration-300 ease-in-out overflow-hidden',
        isExpanded ? 'w-[300px] lg:w-[250px]' : 'w-0 lg:w-[70px]'
      )}
    >
      <div className='bg-navyBlue text-white font-extrabold text-[12px] h-[42px] flex gap-3 items-center pl-6'>
        <img src={shield} alt="Shield icon" className="w-5 h-5 min-w-[20px]" />
        <div className={cn(
          'whitespace-nowrap overflow-hidden transition-all duration-300',
          isExpanded ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'
        )}>
          <h1>Admin Portal</h1>
        </div>
      </div>
      <nav>
        <ul className='flex flex-col pt-7'>
          {NAV_LINKS.map((nav) => (
            <li key={nav.value}>
              <NavLink
                to={nav.value}
                className={({ isActive }) => cn(
                  'flex items-center py-3 pl-6 relative',
                  isActive ? 'text-skyBlue border-r-2 border-skyBlue' : 'text-darkGrey',
                )}
              >
                <span className="flex items-center justify-center w-6 h-6 min-w-[24px]">
                  <Icon name={nav.icon} />
                </span>
                <span className={cn(
                  'ml-3 whitespace-nowrap overflow-hidden transition-all duration-300',
                  isExpanded ? 'opacity-100 max-w-[180px]' : 'opacity-0 max-w-0'
                )}>
                  {nav.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;