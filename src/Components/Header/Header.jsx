import React, { useEffect } from 'react';
import { Button, Dropdown } from 'antd';

export default function Header() {

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = React.useState(null);

    useEffect(() => {
      let lastScrollY = window?.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window?.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window?.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);

    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  const items = [
    {
      key: '1',
      label: (<a href='#features' className='hover:text-[#878787] duration-300'>Features</a>)
    },
    {
      key: '2',
      label: (<a href='#about' className='hover:text-[#878787] duration-300'>About</a>)
    },
    {
      key: '3',
      label: (<a href='#currencies' className='hover:text-[#878787] duration-300'>Coins</a>)
    },
    {
      key: '4',
      label: (<a href='#security' className='hover:text-[#878787] duration-300'>Security</a>)
    },
  ];

  return (
    <div className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-white transition-all duration-500 z-10`}>
      <div className='flex items-center justify-between font-medium md:px-12 px-4 py-6'>
        <div className='hidden md:block'>
          <div className='flex items-center gap-8'>
            <a href='#features' className='hover:text-[#878787] duration-300'>Features</a>
            <a href='#about' className='hover:text-[#878787] duration-300'>About</a>
            <a href='#currencies' className='hover:text-[#878787] duration-300'>Coins</a>
            <a href='#security' className='hover:text-[#878787] duration-300'>Security</a>
          </div>
        </div>

        <a href='/'>
          <div className='flex cursor-pointer items-center'>
            <div className='h-[28px] w-[28px] bg-black flex justify-center items-center rounded-lg'>
              <div className='-rotate-45 text-white text-lg'>
                ➜
              </div>
            </div>
            <p className='ml-2 font-bold text-xl'>CoinUp</p>
          </div>
        </a>

        <div className='hidden md:block'>
          <div className='flex gap-4'>
            <a href='#support'><button className='bg-[white] text-black font-semibold px-4 py-2 rounded-lg border border-[#e7e7e7] hover:bg-[#fafafaf5] hover:border-[#cfcfcf] duration-500'>Support</button></a>
            <a href='#downloads'><button className='bg-[black] text-white font-semibold px-4 py-2 rounded-lg'>Download</button></a>
          </div>
        </div>

        <div className='md:hidden block'>
          <Dropdown
            menu={{ items }}
            destroyPopupOnHide={true}
            placement="bottomRight"
          >
            <Button className='p-0 border-none outline-none'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              </svg>
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
