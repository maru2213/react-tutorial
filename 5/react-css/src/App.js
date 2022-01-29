import { CssModules } from "./components/CssModules"
import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  return (
    <>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
}
