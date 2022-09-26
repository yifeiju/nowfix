import { AppProvider } from "./app/store";
import MainNavigator from "./navigation";
import {
  TestDispatch,
  TestSelectorUser,
  TestSelectorUserDispatch,
  TestSelectorServices,
  TestSelectorServicesDispatch,
} from "./screens/testStore";

const App = () => (
  <>
    <AppProvider>
      <MainNavigator />
      {/* <TestDispatch />
      <TestSelectorUser />
      <TestSelectorUserDispatch />
      <TestSelectorServices />
      <TestSelectorServicesDispatch /> */}
    </AppProvider>
  </>
);

export default App;
