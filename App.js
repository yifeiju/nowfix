import AppProvider from "./app/store";
import MainNavigator from "./navigation";

const App = () => (
  <>
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  </>
);

export default App;
