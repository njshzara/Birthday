import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [isUnlocked, setIsUnlocked] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [error, setError] = useState(false)

  const handleUnlock = (e) => {
    e.preventDefault()
    if (passwordInput === 'navhazra1') {
      setIsUnlocked(true)
    } else {
      setError(true)
      setPasswordInput('')
    }
  }

  if (!isUnlocked) {
    return (
      <div className="main-wrapper lock-page">
        <motion.div
          className="lock-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="ribbon">🎀</div>
          <h1>Welcome</h1>
          <p className="lock-text">Please enter the password to view this special page.</p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value)
                setError(false)
              }}
              placeholder="Password..."
              className={error ? 'input-error' : ''}
              autoFocus
            />
            <button type="submit">Enter ✨</button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="main-wrapper">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}
        numberOfPieces={200}
        gravity={0.15}
        colors={['#FFD1DC', '#FFF0F5', '#D4AF37', '#FFB7C5']}
      />

      <div className="app-container">

        {/* HERO SECTION */}
        <motion.header
          className="hero"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="ribbon">🎀</div>
          <h1>Happy 20th Birthday<br />Zeynep</h1>
          <p className="hero-subtitle">Twenty years of being fabulous ✨</p>
        </motion.header>

        {/* PHOTO GALLERY */}
        <motion.div
          className="gallery"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="polaroid">
            <img src="/images/zeynep1.png" alt="Zeynep 1" />
          </div>
          <div className="polaroid">
            <img src="/images/zeynep2.jpg" alt="Zeynep 2" />
          </div>
          <div className="polaroid">
            <img src="/images/zeynep3.png" alt="Zeynep 3" />
          </div>
        </motion.div>

        {/* MESSAGE CARD */}
        <motion.div
          className="message-card"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="ribbon">🎂</div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Happy Birthday Zeynep! <br /><br />
              You are truly the sweetest person I have ever met! Wishing you a wonderful life and a bright future ahead. I hope you achieve all your goals and everything you dream of.
            </p>
            <p style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', marginTop: '1rem' }}>
              Yours, <br /> Navjit
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default App
