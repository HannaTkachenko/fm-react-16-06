import React, { Component } from "react";
import Tree from "./components/Tree/index";
import Header from "./components/Header/index";
import { UserContext, ThemeContext } from "./context/index";
import CONSTANTS from "./constants";
const {THEMES} = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
      user: {
        id: 1,
        fname: "Elon",
        lname: "Musk",
        imgSrc:
          "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/hevy6dvk7gien0rmg37n",
      },
    };
  }

  //setTheme = (theme) => this.setState({theme:theme});
  setTheme = (theme) => this.setState({theme});

  render() {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
