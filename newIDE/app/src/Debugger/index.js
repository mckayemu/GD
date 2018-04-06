// @flow
import * as React from 'react';
import DebuggerDialog from './DebuggerDialog';
import optionalRequire from '../Utils/OptionalRequire';
const electron = optionalRequire('electron');
const ipcRenderer = electron ? electron.ipcRenderer : null;

type Props = {|
  open: boolean,
  onClose: () => void,
|};
type State = {||};

export default class Debugger extends React.Component<Props, State> {
  componentDidMount() {
    this._startServer();
  }

  _startServer = () => {
    if (!ipcRenderer) return;

    ipcRenderer.removeAllListeners('debugger-start-server-done');
    ipcRenderer.removeAllListeners('debugger-dump-received');
    ipcRenderer.on('debugger-start-server-done', (event, err) => {
      console.log('debugger-start-server-done'); //TODO
    });
    ipcRenderer.on('debugger-dump-received', (event, dumpContent) => {
      console.log('debugger-dump-received: ', dumpContent); //TODO
    });
    ipcRenderer.send('debugger-start-server');
  };

  render() {
    const { open, onClose } = this.props;
    return <DebuggerDialog open={open} onClose={onClose} />;
  }
}
