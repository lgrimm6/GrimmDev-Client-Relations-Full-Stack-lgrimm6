import AuthProvider from "./contexts/AuthContexts";
import RoutesMain from "./routes";
import Global from "./style/global";

function App() {
  return (
    <AuthProvider>
      <Global />
      <RoutesMain></RoutesMain>
    </AuthProvider>
  );
}

export default App;
