"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const HouseOwnerVideo = ({ isOpen, id, url }) => {
    const [openModal, setOpenModal] = useState({
        isOpen: false,
        id: "0"
    });
    return (
        <div>
            <Button onClick={() => setOpenModal({
                isOpen: isOpen,
                id: id
            })}>
                {/* <FaRegCirclePlay className="w-16 h-16" /> */}
                <svg aria-hidden="true" fill="#ffffff" viewBox="0 0 1000 1000" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z"></path></svg>
            </Button>
            <Modal className="relative overflow-hidden" dismissible show={openModal.isOpen} onClose={() => setOpenModal({
                isOpen: false,
                id: "0"
            })}>
                <Modal.Body className="p-0 w-full h-ful">
                    <div className='flex items-center justify-center w-full h-60 lg:h-96 overflow-hidden'>
                        <iframe width="100%" height="100%" src={url} allowfullscreen="1"></iframe>
                    </div>
                </Modal.Body>

                <div className="absolute lg:-top-12 lg:-right-10">
                    <Button onClick={() => setOpenModal({
                        isOpen: false,
                        id: "0"
                    })}>
                        <FaXmark className="h-6 w-6 text-red-600" />
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default HouseOwnerVideo;