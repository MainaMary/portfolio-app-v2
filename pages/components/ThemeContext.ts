import { createContext } from "react";
interface Props {
  theme: string;
  allThemeStyles?: any;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeContext = createContext<Props>({} as Props);
export default ThemeContext;
