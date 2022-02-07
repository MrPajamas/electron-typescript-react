import { useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';

const CodeArea = () => {
  const ref = useRef();
  const [code, setCode] = useState(`{"a":13123}`);
  console.log(ref,'ref');
  const set = () => {
    setCode(`123`);
    console.log(ref);
  }

  return (
    <>
      <div onClick={set}>点击</div>
      <CodeMirror
        ref={ref}
        style={{ height: '100%' }}
        value={code}
        height={'100%'}
        width={'100%'}
        extensions={[json()]}
        theme={'dark'}
        onChange={(value, viewUpdate) => {
          // console.log('value:', value);
          console.log(viewUpdate);
        }}
      />
      <div ></div>
    </>
  );
}

export default CodeArea;
