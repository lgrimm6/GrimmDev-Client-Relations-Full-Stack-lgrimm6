import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/AuthContexts";
import { IContact } from "../../contexts/interfaces";
import ContainerDashboardPage from "./style";
import EditProfile from "../../components/Modal/EditProfile";
import Modal from "../../components/Modal/ModalBody";
import { FaUserEdit } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import api from "../../services";
import EditContact from "../../components/Modal/EditContact";
import AddContact from "../../components/Modal/AddContact";

const DashboardPage = () => {
  const navigate = useNavigate();
  const {
    client,
    contacts,
    setContacts,
    setClient,
    isOpenModalEditProfile,
    setIsOpenModalEditProfile,
    isOpenModalEditContact,
    setIsOpenModalEditContact,
    downloadPDF,
    isOpenModalAddContact,
    setIsOpenModalAddContact,
  } = useContext(AuthContext);
  const handleLogout = () => {
    window.localStorage.clear();
    setClient(null);
    navigate("/", { replace: true });
  };

  const deleteContact = async (contactId: string) => {
    try {
      await api.delete(`/clients/${client?.id}/contact/${contactId}`);
      setContacts([...contacts!.filter((contact) => contact.id !== contactId)]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpenModalEditProfile ? (
        <Modal
          isOpenModal={isOpenModalEditProfile}
          setIsOpenModal={setIsOpenModalEditProfile}
        >
          <EditProfile></EditProfile>
        </Modal>
      ) : isOpenModalAddContact ? (
        <Modal
          isOpenModal={isOpenModalAddContact}
          setIsOpenModal={setIsOpenModalAddContact}
        >
          <AddContact></AddContact>
        </Modal>
      ) : (
        <></>
      )}
      <ContainerDashboardPage>
        <header>
          <h1>Client Relations</h1>
          <Button
            onClick={handleLogout}
            backgroundColor={"var(--grey-3)"}
            hover={"var(--grey-2)"}
          >
            Sair
          </Button>
        </header>
        <section>
          <div className="containerClient">
            <h3>Cliente: {client?.name}</h3>
            <h3>Telefone: {client?.phone}</h3>
          </div>
          <div className="containerClient">
            <h3>Email: {client?.email}</h3>
            <h3>Registro: {String(client?.createdAt).slice(0, 10)}</h3>
          </div>
          <Button
            className="editProfile"
            backgroundColor={"var(--grey-3)"}
            hover={"var(--grey-2)"}
            width={"3vw"}
            onClick={() => setIsOpenModalEditProfile(true)}
          >
            <FaUserEdit />
          </Button>
        </section>
        <main>
          <div className="containerNewContact">
            <h2>Contacts</h2>
            <Button
              backgroundColor={"var(--grey-3)"}
              hover={"var(--grey-2)"}
              onClick={downloadPDF}
            >
              <GrDocumentPdf size={24} className="buttonPDF" />
            </Button>
            <Button
              width={"30px"}
              backgroundColor={"var(--grey-3)"}
              hover={"var(--grey-2)"}
              onClick={() => setIsOpenModalAddContact(true)}
            >
              +
            </Button>
          </div>
          <ul>
            {contacts?.map((contact: IContact) => (
              <li key={contact.id}>
                <div className="containerContact">
                  <div className="infoContact">
                    <h3>Nome: {contact.name}</h3>
                    <h3>Telefone: {contact.phone}</h3>
                  </div>
                  <div className="infoContact">
                    <h3>Email: {contact.email}</h3>
                    <h3>Registro: {String(client?.createdAt).slice(0, 10)}</h3>
                  </div>
                </div>
                <div className="buttonsContact">
                  <Button
                    width={"50%"}
                    backgroundColor={"var(--grey-3)"}
                    hover={"var(--grey-2)"}
                    onClick={() => setIsOpenModalEditContact(true)}
                  >
                    <FaUserEdit />
                  </Button>
                  {isOpenModalEditContact && (
                    <Modal
                      isOpenModal={isOpenModalEditContact}
                      setIsOpenModal={setIsOpenModalEditContact}
                    >
                      <EditContact></EditContact>
                    </Modal>
                  )}
                  <Button
                    width={"50%"}
                    backgroundColor={"var(--grey-3)"}
                    hover={"var(--grey-4)"}
                    onClick={() => deleteContact(contact.id)}
                  >
                    <RiDeleteBin6Line />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </ContainerDashboardPage>
    </>
  );
};

export default DashboardPage;
