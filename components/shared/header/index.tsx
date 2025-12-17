import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import ModeToggle from './mode-toggle';
import Menu from './menu';
import { LuTent } from 'react-icons/lu';

import { TbLetterV } from "react-icons/tb";

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='container gap-4 py-8 flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            {/* <Image
              priority={true}
              src='/images/logo.svg'
              width={48}
              height={48}
              alt={`${APP_NAME} logo`}
            /> */}
            <Button size='icon' asChild>
              <LuTent className='w-6 h-6' />
            </Button>
            <span className='hidden lg:block font-bold text-3xl ml-3 text-zinc-900 text-shadow-sm italic'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;