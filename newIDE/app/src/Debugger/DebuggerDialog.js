// @flow
import * as React from 'react';
import Dialog from '../UI/Dialog';
import FlatButton from 'material-ui/FlatButton';

type Props = {|
  open: boolean,
  onClose: () => void,
|};

export default class DebuggerDialog extends React.Component<Props, {}> {
  render() {
    const { open, onClose } = this.props;
    if (!open) return null;

    return (
      <Dialog
        actions={[
          <FlatButton key="close" label="Close" primary onClick={onClose} />,
        ]}
        modal
        open={open}
        onRequestClose={onClose}
      >
        Test
      </Dialog>
    );
  }
}
