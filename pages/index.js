import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ICEGODS MAINFRAME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">❄️ ICEGODS MAINFRAME v3.0</h1>
        <p className="description">Status: 👽 ALIEN BRAIN ONLINE</p>
        
        <div className="grid">
          <div className="card">
            <h3>Premier Access &rarr;</h3>
            <p>Connect your wallet to unlock 24/7 Bot Hosting.</p>
            <button className="btn-connect">CONNECT WALLET</button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container { min-height: 100vh; background: #050505; color: #00f2ff; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .title { font-size: 3rem; text-shadow: 0 0 10px #00f2ff; }
        .card { border: 1px solid #00f2ff; padding: 2rem; border-radius: 15px; background: rgba(0, 242, 255, 0.05); }
        .btn-connect { background: #00f2ff; color: #000; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; border-radius: 5px; margin-top: 10px; }
      `}</style>
    </div>
  )
}
