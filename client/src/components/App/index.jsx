/** @format */

import "./styles.scss";
import demo from "./demo.json";
import { h, Component } from "preact";
import Editor from "components/Editor";
import Header from "components/Header";

const POST_URI_OPEN_FILE = "http://127.0.0.1:3000/load";

export default class App extends Component {
  /**
   * Constructs a new app component.
   * @param {Object} props Component properties.
   */
  constructor(props) {
    super(props);
    this.state = { document: demo.document };
    this.loadFile = this.loadFile.bind(this);
  }

  loadFile() {
    const { dialog } = require("electron").remote;
    var filePath = dialog.showOpenDialog({
      properties: ["openFile"],
    });
    fetch(POST_URI_OPEN_FILE, { method: "POST", body: filePath[0] })
      .then(resp => {
        this.setState(resp.json());
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <div class="app">
        <button onClick={this.loadFile}>Load</button>
        <Header title={this.state.document.title} />
        <Editor dom={this.state.document} />
      </div>
    );
  }
}
