import React, {PropTypes} from 'react'

import Button from '../../../../src/Button/Button'

export default class ToolbarBase extends React.PureComponent {
  constructor(mode) {
    super();
    this.mode = mode;
  }

  activate() {
    // If we just rely on changing props for the current toolbar, MDC doesn't
    // updated the toolbar correctly, so we need to force a reload after
    // setting a cookie that indicate the toolbar mode and the toolbar picking
    // up that cookie before the first render.
    // See the counterpart that uses this cookie in pages/_template.jsx
    document.cookie = `toolbar-mode=${this.mode}`;
    window.scroll(0,0);
    location.reload();
  }

  render () {
    return (
      <Button raised={true} onClick={() => this.activate()}>Set toolbar to this mode</Button>
    )
  }
}
