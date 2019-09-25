/** @format */

import "./styles.scss";

import { h, Component, createRef, Fragment } from "preact";
import Helmet from "preact-helmet";
import { connect } from "react-redux";
import { updateCaretPos } from "redux/actions";
import { Renderer, RenderMode } from "render";
import { renderStyle } from "render/style";

/**
 * A document editing component.
 * @extends Component
 */
class Editor extends Component {
  /**
   * Constructs a new editor component.
   */
  constructor(props) {
    super(props);
    this.contentEditableDiv = createRef();

    // Binds
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  /**
   * Returns absolute values of caret's start/end positions
   */
  getCaretPos() {
    const range = document.getSelection().getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(this.contentEditableDiv.current);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const positionStart = preSelectionRange.toString().length;
    const positionEnd = positionStart + range.toString().length;
    return { positionStart, positionEnd };
  }

  /**
   * Handles clicks to the document element.
   */
  handleDocumentClick() {
    this.props.updateCaretPos(this.getCaretPos());
  }

  render = props => (
    <Fragment>
      <Helmet
        style={[
          {
            type: "text/css",
            cssText: renderStyle(props.styles),
          },
        ]}
      />

      <div
        ref={this.contentEditableDiv}
        class="editor"
        contenteditable="true"
        onClick={this.handleDocumentClick}
      >
        {new Renderer(props.document, {
          renderMode: RenderMode.CONTENT,
          pageStyle: {
            marginBottom: "1cm",
            marginLeft: "1cm",
            marginRight: "1cm",
            marginTop: "1cm",
            height: "140mm",
            width: "120mm",
          },
        }).render()}
      </div>
    </Fragment>
  );
}

export default connect(
  state => ({ document: state.document.nodes, styles: state.styles }),
  { updateCaretPos },
)(Editor);
