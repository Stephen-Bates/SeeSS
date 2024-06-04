import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import { Box } from '@chakra-ui/react';

const CodeEditor = ({ code, handleSetCode }) => {
  return (
    <Box>
      <CodeMirror
        value={code}
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={handleSetCode}
      />
    </Box>
  );
};

export default CodeEditor;
