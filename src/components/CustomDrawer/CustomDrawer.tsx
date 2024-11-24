import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Props as ContainerProps } from './CustomDrawer.container';
import { ITranslate } from 'utils/interfaces/general.types';

interface Props extends ContainerProps {
    t: ITranslate;
    isOpen: boolean;
    CloseDrawer: () => void;
}

export const CustomDrawer = (props: Props) => {
    const { isOpen, CloseDrawer, children } = props;

    return (
        <Transition show={isOpen}>
            <Dialog className="relative z-50" onClose={CloseDrawer}>
                <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="bg-cia-grey-dark fixed inset-0 bg-ac-space bg-opacity-70 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <TransitionChild
                                enter="transform transition ease-in-out duration-300 sm:duration-400"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-300 sm:duration-500"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full">
                                <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        {children}
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
