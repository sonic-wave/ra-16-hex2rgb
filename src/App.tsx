import { useState } from 'react'
import './App.css'
import { DisplayInfo } from './components/DisplayInfo/DisplayInfo'
import { ConventerInput } from './components/ConventerInput/ConventerInput'

function App() {
  const [hexValue, setHexValue] = useState('')

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const isValidHex = (hex: string): boolean => {
      const hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
      return hexRegex.test(hex);
    };

    const hexToRgb = (hex: string): string => {
      let trimmedHex = hex.replace('#', '');
      if (trimmedHex.length === 3) {
        trimmedHex = trimmedHex.split('').map((char) => char + char).join('');
      }
      const bigint = parseInt(trimmedHex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgb(${r}, ${g}, ${b})`;
    };


    if (value.length === 7) {
      if (isValidHex(value)) {
        const rgbValue = hexToRgb(value);
        setHexValue(rgbValue);
        document.body.style.backgroundColor = rgbValue;
      } else {
        setHexValue('Ошибка!')
        document.body.style.backgroundColor = 'red';
      }
    }

    if (value.length === 0) {
      document.body.style.backgroundColor = 'white';
      setHexValue('');
    }
  }

  return (
    <div className='container'>
      <ConventerInput onChangeHandler={onChangeHandler} />
      <DisplayInfo info={hexValue} />
    </div>
  )
}

export default App
