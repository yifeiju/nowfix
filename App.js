import Provider from "./app/Provider";
import AppProvider from "./app/store";
import MainNavigator from "./navigation";

const App = () => (
  <>
    <AppProvider>
      <Provider>
        <MainNavigator />
      </Provider>
    </AppProvider>
  </>
);

export default App;
