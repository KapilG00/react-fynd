import "./App.css";
import CounterComponent from "./1. BasicReact/CounterComponent/CounterComponent";
import ConditionalRendering from "./1. BasicReact/ConditionalRendering/ConditionalRendering";
import ListComponent from "./1. BasicReact/ListComponent/ListComponent";
import MultipleStates from "./1. BasicReact/MultipleStates/MultipleStates";
import HigherOrderComponent from "./1. BasicReact/HigherOrderComponent/HigherOrderComponent";
import NewsComponent from "./1. BasicReact/HigherOrderComponent/NewsComponent";
import PokemonComponent from "./1. BasicReact/CallingAPI/PokemonComponent";
// import Parent from "./2. Communication/Siblings/Parent";
// import Parent from "./2. Communication/ChildToParent/Parent";
// import Parent from "./2. Communication/ParentToChild/Parent";
import UseEffectTestComponent from "./1. BasicReact/TestComponent/UseEffectTestComponent";
import UseEffectTestCleanupComponent from "./1. BasicReact/TestComponent/UseEffectTestCleanupComponent";
import MultipleUseEffectComponent from "./1. BasicReact/TestComponent/MultipleUseEffectComponent";
import Calculator from "./1. BasicReact/LiftingStateUp/Calculator";
import Parent from "./4. LifeCycleOfComponent/MountingUpdateUnmountingPhase/Parent";
import PokemonDataComponent from "./5. HookUseEffect/HookUseEffect";
import UseEffectHookFlavours from "./5. HookUseEffect/UseEffectHookExplanation";
import DigitalClock from "./6. DigitalClock/DigitalClock";
import Form from "./7. Forms/Form";
import { useState } from "react";
import WelcomeDialog from "./14. CompositionVsInheritance/WelcomeDialog";
import UseRefHook from "./8. useRefHook/Basic/UseRefHook";
import ShowPrevValueWithLatest from "./8. useRefHook/Usage/ShowPrevValueWithLatest";
import AutoFocusInputFormComponent from "./8. useRefHook/Usage/AutoFocusInputFormComponent";
import UseReducerExample from "./9. useReducerHook/Usage/UseReducerExample";
import RoutingApp from "./10. RoutingApp/RoutingApp";

const studentsList = [
  {
    id: 1,
    name: "Kapil",
    age: 27,
  },
  {
    id: 2,
    name: "Aniket",
    age: 26,
  },
  {
    id: 3,
    name: "Shubham",
    age: 25,
  },
  {
    id: 4,
    name: "Shreyas",
    age: 27,
  },
];

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <h1>Hello there!!</h1>
      {/* <CounterComponent />
      <ConditionalRendering />
      <ListComponent students={studentsList} /> */}
      {/* <MultipleStates /> */}
      {/* <HigherOrderComponent date={new Date().toDateString()}>
        <div>This is a first example of HOC in React.</div>
      </HigherOrderComponent>
      <HigherOrderComponent date={new Date().toDateString()}>
        <NewsComponent />
      </HigherOrderComponent> */}
      {/* <PokemonComponent /> */}
      {/* <Parent /> */}
      {/* <UseEffectTestComponent /> */}
      {/* <UseEffectTestCleanupComponent /> */}
      {/* <MultipleUseEffectComponent /> */}
      {/* <Calculator /> */}
      {/* <Parent /> */}
      {/* <PokemonDataComponent /> */}
      {/* <UseEffectHookFlavours /> */}

      {/* {flag && <UseEffectHookFlavours />}
      <div>
        <button
          onClick={() => {
            setFlag((oldFlag) => !oldFlag);
          }}
        >
          Button inside App component
        </button>
      </div> */}
      {/* <DigitalClock /> */}
      {/* <Form /> */}
      {/* <WelcomeDialog /> */}
      {/* <UseRefHook /> */}
      {/* <ShowPrevValueWithLatest /> */}
      {/* <AutoFocusInputFormComponent /> */}
      {/* <UseReducerExample /> */}
    </div>
  );
}

export default App;
