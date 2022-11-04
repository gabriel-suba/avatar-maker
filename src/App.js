/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from 'react';
import { adventurer } from './spriteFactory';
import './style.css'

// TODO: ADD OTHER SPRITES OPTION

function App() {
  const [selected, setSelected] = useState({})
  const [avatarUrl, setAvatarUrl] = useState('')
  const [url, setUrl] = useState('https://avatars.dicebear.com/api/adventurer/')
  const [seed, setSeed] = useState('soojin.svg?')
  const [bgColor, setBgColor] = useState('')
  const [feature, setFeature] = useState([])
  
  useEffect(() => {
    function handleBuildQuery() {
      const sample = buildFeatureQuery(feature).join("")
      const query = url.concat(seed).concat(bgColor).concat(sample)
  
      setAvatarUrl(query)
    }

    if (feature) {
      handleBuildQuery()
    }
  }, [feature, bgColor, seed])

  function buildFeatureQuery(arr) {
    const query = [...arr]

    for (let i = 0; i < query.length; i++) {
      let curr = query[i]

      if (i % 2 === 0) {
        query[i] = curr.concat('[]=')
      } else {
        query[i] = curr.concat('&')
      }
    }

    return query
  }

  function handleChangeBg(e) {
    const { target: { dataset: { bgcolor } } } = e
    setBgColor(`background=%23${bgcolor}&`)
  }

  function handleRandomSeed() {
    const random = Math.floor(Math.random() * 1000)
    setSeed(`${random}.svg?`)
  }

  function handleSelect(e) {
    const { target: { name, value } } = e

    const temp = [...feature]
    
    if (!temp.includes(name) && value !== 'none') {
      temp.push(name)
      temp.push(value)

      if (name === 'accessoires') {
        temp.push('accessoiresProbability')
        temp.push('100')
      }

      setFeature([...temp]) 
      setSelected(prev => ({ ...prev, [name]: value }))
      return
    }

    if (name === 'accessoires' && value === 'none') {
      let idx = temp.indexOf('accessoires')

      temp.splice(idx, 4)

      setFeature([...temp])
      setSelected(prev => ({ ...prev, [name]: value }))

      return
    }

    const featureIndex = temp.indexOf(name) + 1

    temp[featureIndex] = value

    setFeature([...temp]) 
    setSelected(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="App">
      <div className="container">
        <h1>AVATAR MAKER</h1>
        <div className="maker">
          <div className="left">
            <div className="avatar-output">
              <img width={300} src={avatarUrl} alt="an icon" />
            </div>
            <div className="links">
              <div>Download SVG</div>
              <div onClick={handleRandomSeed}>Random</div>
            </div>
          </div>

          <div className="right">

            <h3>Choose a sprite</h3>
            <div className="sprites">
              <div className="sprite"> {/** adventurers */}
                <img src="https://avatars.dicebear.com/api/adventurer/5.svg?background=%235bccf6" alt="an icon" />
              </div>
              <div className="sprite"> {/** big smile */}
                <img src="https://avatars.dicebear.com/api/big-smile/5.svg?background=%235bccf6" alt="an icon" />
              </div>
              <div className="sprite"> {/** miniavs */}
                <img src="https://avatars.dicebear.com/api/miniavs/5.svg?background=%235bccf6" alt="an icon" />
              </div>
              <div className="sprite"> {/** open peeps */}
                <img src="https://avatars.dicebear.com/api/open-peeps/5.svg?background=%235bccf6" alt="an icon" />
              </div>
            </div>

            <h3>Pick a background color</h3>
            <div className="avatar-bg">
              <div className="color-options">
                <div onClick={handleChangeBg} data-bgcolor="5bccf6" className="clr-1"></div>
                <div onClick={handleChangeBg} data-bgcolor="e6ace4" className="clr-2"></div>
                <div onClick={handleChangeBg} data-bgcolor="354a53" className="clr-3"></div>
                <div onClick={handleChangeBg} data-bgcolor="49c087" className="clr-4"></div>
                <div onClick={handleChangeBg} data-bgcolor="f39530" className="clr-5"></div>
              </div>
            </div>

            {adventurer.map(item => (
              <div className="form-group" key={item.name}>
                <label htmlFor={item.label}>{item.label}</label>
                <select 
                onChange={handleSelect} 
                value={selected[item.name] ? selected[item.name] : item.name} 
                name={item.name}
                >
                  <option value={item.name} disabled>choose an option...</option>
                  {item.options.map(opt => (<option value={opt.value} key={opt.value}>{opt.display}</option>))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
