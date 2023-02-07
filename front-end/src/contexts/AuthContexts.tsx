import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IFormLogin } from "../components/Forms/FormLogin/interfaces";
import { IFormRegister } from "../components/Forms/FormRegister/interfaces";
import api from "../services";
import { IClient, IContact } from "./interfaces";

interface IAuthProviderProps {
  children: ReactNode;
}
interface IAuthContext {
  displayPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loginRequest: (data: IFormLogin) => Promise<void>;
  onSubmitFunctionRegister: (data: IFormRegister) => Promise<void>;
  client: IClient | null;
  contacts: IContact[] | null;
  setContacts: Dispatch<SetStateAction<IContact[] | null>>;
  setClient: Dispatch<SetStateAction<IClient | null>>;
  isOpenModalEditProfile: boolean;
  setIsOpenModalEditProfile: Dispatch<SetStateAction<boolean>>;
  isOpenModalEditContact: boolean;
  setIsOpenModalEditContact: Dispatch<SetStateAction<boolean>>;
  isOpenModalAddContact: boolean;
  setIsOpenModalAddContact: Dispatch<SetStateAction<boolean>>;
  downloadPDF: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [client, setClient] = useState<IClient | null>(null);
  const [contacts, setContacts] = useState<IContact[] | null>(null);
  const [isOpenModalEditProfile, setIsOpenModalEditProfile] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenModalEditContact, setIsOpenModalEditContact] =
    useState<boolean>(false);

  const [isOpenModalAddContact, setIsOpenModalAddContact] =
    useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@client-relations:token");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/clients/profile");
          setClient(data);
          setContacts([...data.contact]);
        } catch (error) {
          navigate("/", { replace: true });
          console.log(error);
        }
      }
      setIsLoading(false);
      /*  navigate("/", { replace: true }); */
    }
    loadUser();
  }, []);

  const displayPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword(!showPassword);
    setTimeout(() => {
      (document.getElementById("password") as HTMLInputElement).type =
        "password";
    }, 500);
    (document.getElementById("password") as HTMLInputElement).type = "text";
  };

  const loginRequest = async (data: any): Promise<void> => {
    try {
      const res = await api.post("/clients/login", data);
      localStorage.setItem("@client-relations:token", res.data.token);
      setClient(res.data.client);
      setContacts(res.data.client.contact);
      navigate("/dashboard");
    } catch (error) {
      localStorage.clear();
      console.error(error);
    }
  };

  const onSubmitFunctionRegister = async (data: IFormRegister) => {
    try {
      await api.post("/clients", data);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const downloadPDF = async () => {
    try {
      const response = await api.get("/clients/generate/pdf", {
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": "attachment; filename=client_data.pdf",
        },
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "client_data.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        displayPassword,
        loginRequest,
        onSubmitFunctionRegister,
        client,
        contacts,
        setContacts,
        setClient,
        isOpenModalEditProfile,
        setIsOpenModalEditProfile,
        downloadPDF,
        isOpenModalEditContact,
        setIsOpenModalEditContact,
        isOpenModalAddContact,
        setIsOpenModalAddContact,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
