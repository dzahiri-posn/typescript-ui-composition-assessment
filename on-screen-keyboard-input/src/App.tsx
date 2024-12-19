import { FC } from 'react'
import './App.css'
import { Input } from './Input'
import { KeypadButtons } from './KeypadButtons'

const App: FC = () => {
  return (
    <div>
      <Input />
      <KeypadButtons />
    </div>
  )
}
export default App;
