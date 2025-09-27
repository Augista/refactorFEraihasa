import { Disclosure, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { HiChevronUp, HiOutlineLogout } from 'react-icons/hi';
import { IoCartOutline } from 'react-icons/io5';
import { LuClipboardList, LuUser } from 'react-icons/lu';

import Button from '@/components/buttons/Button';
import ButtonLink from '@/components/links/ButtonLink';
import Modal from '@/components/modal/Modal';
import { showToast, SUCCESS_TOAST } from '@/components/Toast';
import Typography from '@/components/Typography';
import { getToken } from '@/lib/cookies';
import useAuthStore from '@/store/useAuthStore';

export function MobileSidebar() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const logOut = useAuthStore.useLogout();
  const token = getToken();
  const router = useRouter();
  const user = useAuthStore().user;

  useEffect(() => {
    if (user !== undefined && token !== null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user, token]);

  const handleLogout = () => {
    logOut();
    setIsModalOpen(false);
    showToast('Sampai jumpa lagi!, semoga harimu menyenangkan', SUCCESS_TOAST);
    router.push('/');
  };

  const handleConfirmLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='block w-full px-5 mb-8 xl:hidden'>
      <Modal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        className=''
        title='Apakah kamu yakin ingin logout?'
        modalContainerClassName='border p-4'
        titleClassName='font-semibold text-white'
      >
        {/* Buttons in the modal footer */}
        <div className='flex flex-row justify-end gap-2 my-3'>
          {/* Close button */}
          <Button
            onClick={() => setIsModalOpen(false)}
            className='text-white bg-slate-400 hover:bg-slate-500'
          >
            Cancel
          </Button>

          {/* Execute button */}
          <Button
            onClick={handleLogout}
            className='text-white hover:bg-rose-700 bg-red'
          >
            Logout
          </Button>
        </div>
      </Modal>

      <Disclosure as='div' className={'!w-full'}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${
                open ? 'font-medium' : 'font-normal'
              } flex justify-between items-center w-full border border-[#D1D5DC] rounded-md px-3 py-2`}
            >
              <span className='text-lg'>Navigasi Profile</span>
              <HiChevronUp
                className={`${
                  open
                    ? 'rotate-180 transform transition ease-in-out duration-200 '
                    : ''
                }  text-[#1C1C1C] h-5 w-5`}
              />
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='flex flex-col mt-2 relative xl:absolute z-30 bg-white w-full border border-[#4EA4BE] rounded-md'>
                <div className='bg-white rounded-2xl'>
                  <ul className=''>
                    <li className='py-3 text-[#1B7691] hover:bg-[#E4E4E7] transition-colors cursor-pointer'>
                      <ButtonLink
                        href='/profile/notification'
                        className='gap-2 px-7 !text-base font-medium '
                        leftIcon={FaRegBell}
                      >
                        Notification
                      </ButtonLink>
                    </li>
                    <li className='py-3 text-[#1B7691] hover:bg-[#E4E4E7] transition-colors cursor-pointer'>
                      <ButtonLink
                        href='/profile/edit'
                        className='gap-2 px-7 !text-base font-medium'
                        leftIcon={LuUser}
                      >
                        User Profile
                      </ButtonLink>
                    </li>
                    <li className=' bg-[#4EA4BE] py-3 text-white'>
                      <ButtonLink
                        href='/profile/activity'
                        className='gap-2 px-7 !text-base font-medium'
                        leftIcon={LuClipboardList}
                      >
                        Aktifitas Saya
                      </ButtonLink>
                    </li>
                    <li className='py-3 text-[#1B7691] hover:bg-[#E4E4E7] transition-colors cursor-pointer'>
                      <ButtonLink
                        href='/profile/transaction'
                        className='gap-2 px-7 !text-base font-medium'
                        leftIcon={IoCartOutline}
                      >
                        Riwayat Transaksi
                      </ButtonLink>
                    </li>
                    <li className='px-8 py-3'>
                      {/* <ButtonLink
                        leftIcon={HiOutlineLogout}
                        href=''
                        variant='unstyled'
                        className='bg-[#E94759] w-full gap-2 px-7 py-2 !text-base font-medium text-white'
                      >
                        Log Out
                      </ButtonLink> */}
                      <Button
                        leftIcon={HiOutlineLogout}
                        className='bg-[#E94759] w-full gap-1/2 px-7 py-2 !text-base font-medium text-white'
                        onClick={handleConfirmLogout}
                      >
                        <span className=''>Log out</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export function SidebarUser() {
  return (
    <div className='py-6 bg-white rounded-2xl'>
      <Typography variant='p' weight='semibold' className='px-4 text-lg '>
        Navigasi Profile
      </Typography>
      <ul className='mt-4'>
        <li className='py-3 text-[#1B7691] hover:bg-[#E4E4E7] transition-colors cursor-pointer'>
          <ButtonLink
            href='/profile/notification'
            className='gap-2 px-7 !text-base font-medium '
            leftIcon={FaRegBell}
          >
            Notification
          </ButtonLink>
        </li>
        <li className='py-3 text-[#1B7691] hover:bg-[#E4E4E7] transition-colors cursor-pointer'>
          <ButtonLink
            href='/profile/edit'
            className='gap-2 px-7 !text-base font-medium'
            leftIcon={LuUser}
          >
            User Profile
          </ButtonLink>
        </li>
        <li className=' bg-[#4EA4BE] py-3 text-white'>
          <ButtonLink
            href='/profile/activity'
            className='gap-2 px-7 !text-base font-medium'
            leftIcon={LuClipboardList}
          >
            Aktifitas Saya
          </ButtonLink>
        </li>
        <li className=' py-3 text-[#1B7691] hover:bg-[#E4E4E7] transition-colors cursor-pointer'>
          <ButtonLink
            href='/profile/transaction'
            className='gap-2 px-7 !text-base font-medium'
            leftIcon={IoCartOutline}
          >
            Riwayat Transaksi
          </ButtonLink>
        </li>
        <li className='px-8 py-3'>
          <ButtonLink
            leftIcon={HiOutlineLogout}
            href=''
            variant='unstyled'
            className='bg-[#E94759] w-full gap-2 px-7 py-2 !text-base font-medium text-white'
          >
            Log Out
          </ButtonLink>
        </li>
      </ul>
    </div>
  );
}
