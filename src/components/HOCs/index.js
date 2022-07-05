import { ThemeContext } from "../../context";

export const WithContextTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => <InnerComponent theme={theme} setTheme={setTheme}/>}
    </ThemeContext.Consumer>
  );
};