import React from 'react';

export default function TokenSale() {
  return (
    <div style={{backgroundColor: '#050a0f', color: '#00f2ff', padding: '50px', textAlign: 'center', height: '100vh'}}>
      <h1>❄️ $ICEG TOKEN PRESALE</h1>
      <p>Join the 30 Billion Token Empire</p>
      
      <div style={{border: '2px solid #00f2ff', padding: '20px', borderRadius: '15px', display: 'inline-block'}}>
        <h3>Price: 0.00001 ETH = 1 $ICEG</h3>
        <button style={{backgroundColor: '#00f2ff', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '5px', fontWeight: 'bold'}}>
          CONNECT WALLET & BUY
        </button>
      </div>

      <div style={{marginTop: '40px'}}>
        <h4>EMPIRE WALLETS:</h4>
        <p>ETH: 0x3569846FAc7F7c1F5170a003c5a1ED9Fbf931596</p>
        <p>BTC: bc1qg5lw4pst39u5j8sxypwygjt2gddx7qc034eapg</p>
      </div>
    </div>
  );
}
