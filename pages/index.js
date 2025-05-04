
import { useState } from "react";

export default function Home() {
  const [loan, setLoan] = useState(10000000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(5);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const monthly = (loan * r) / (1 - Math.pow(1 + r, -n));
    const total = monthly * n;
    const interest = total - loan;
    setResult({ monthly, total, interest });
  };

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif", backgroundColor: "#111", color: "#fff" }}>
      <h1>L Multi Finance Calculator</h1>
      <p>대출 원금 (원): <input type="number" value={loan} onChange={e => setLoan(+e.target.value)} /></p>
      <p>대출 기간 (년): <input type="number" value={years} onChange={e => setYears(+e.target.value)} /></p>
      <p>금리 (%): <input type="number" value={rate} onChange={e => setRate(+e.target.value)} /></p>
      <button onClick={calculate}>계산하기</button>
      {result && (
        <div>
          <p>월 상환금: {Math.round(result.monthly).toLocaleString()} 원</p>
          <p>총 상환금: {Math.round(result.total).toLocaleString()} 원</p>
          <p>총 이자: {Math.round(result.interest).toLocaleString()} 원</p>
        </div>
      )}
    </main>
  );
}
