import './App.css'

const tools = [
  { name: 'ChatGPT', best: '通用问答与创作', price: 'Free / Plus', speed: '快' },
  { name: 'Claude', best: '长文理解与总结', price: 'Free / Pro', speed: '中' },
  { name: 'Gemini', best: 'Google 生态集成', price: 'Free / Advanced', speed: '快' },
]

export default function App() {
  return (
    <main className="container">
      <h1>AI Tool Compare Cards</h1>
      <div className="grid">
        {tools.map((t) => (
          <section key={t.name} className="card">
            <h2>{t.name}</h2>
            <p><b>适用：</b>{t.best}</p>
            <p><b>价格：</b>{t.price}</p>
            <p><b>速度：</b>{t.speed}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
