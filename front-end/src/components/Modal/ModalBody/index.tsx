import Button from "../../Button";
import ModalStyled from "../style";
import { AiFillCloseSquare } from "react-icons/ai";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

interface IModal {
  children: ReactNode;
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

function Modal({ children, isOpenModal, setIsOpenModal }: IModal) {
  const modalUseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseModal(event: Event) {
      const target = event.target instanceof Node ? event.target : null;
      if (target && !modalUseRef.current?.contains(target)) {
        setIsOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleCloseModal);

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [isOpenModal]);

  return (
    <ModalStyled>
      <div ref={modalUseRef}>
        <Button
          className="closeModal"
          backgroundColor={"transparent"}
          onClick={() => setIsOpenModal(false)}
        >
          <AiFillCloseSquare size={28} />
        </Button>
        {children}
      </div>
    </ModalStyled>
  );
}

export default Modal;
