import { useMemo, useState } from 'react'
import './App.css'

const tools = [
  { name: 'ChatGPT', price: 'Free / Plus $20', role: '通用对话与创作', pros: '生态丰富、插件多', cons: '高峰期偶有波动' },
  { name: 'Claude', price: 'Free / Pro $20', role: '长文理解与分析', pros: '长上下文能力强', cons: '多模态生态偏少' },
  { name: 'Gemini', price: 'Free / Advanced $19.99', role: 'Google 生态协作', pros: 'Workspace 集成好', cons: '回复稳定性波动' },
  { name: 'Perplexity', price: 'Free / Pro $20', role: '搜索问答', pros: '引用来源清晰', cons: '创作能力一般' },
  { name: 'Midjourney', price: 'Basic $10+', role: 'AI 绘图', pros: '画质强，风格多', cons: '上手门槛略高' },
  { name: 'Notion AI', price: 'Add-on $10', role: '文档知识管理', pros: '与文档流程融合', cons: '复杂推理一般' },
  { name: 'GitHub Copilot', price: '$10/月', role: '代码补全', pros: 'IDE 集成顺滑', cons: '需人工审查代码' },
  { name: 'Cursor', price: 'Free / Pro $20', role: 'AI 编程 IDE', pros: '代码改造效率高', cons: '依赖模型配额' },
  { name: 'Canva Magic', price: 'Pro 套餐内', role: '设计与海报', pros: '模板丰富', cons: '深度定制有限' },
  { name: 'Jasper', price: '$39+', role: '营销文案', pros: '品牌语气管理好', cons: '中文场景一般' },
]

export default function App() {
  const [left, setLeft] = useState('ChatGPT')
  const [right, setRight] = useState('Claude')
  const leftTool = tools.find((t) => t.name === left)
  const rightTool = tools.find((t) => t.name === right)

  const advice = useMemo(() => {
    if (!leftTool || !rightTool) return ''
    if (leftTool.role.includes('编程') || rightTool.role.includes('编程')) return '推荐建议：如果你主要写代码，优先选择编程导向工具；若还需通用创作，可搭配 ChatGPT/Claude。'
    if (leftTool.role.includes('搜索') || rightTool.role.includes('搜索')) return '推荐建议：以事实检索为主时优先带引用的工具，再配合创作模型做润色。'
    return '推荐建议：先按主场景选择（创作/分析/设计），再看价格与生态集成。'
  }, [leftTool, rightTool])

  return (
    <main className="container stack">
      <header className="header"><h1>AI Tool Compare Cards</h1><p>内置 10 款常见 AI 工具，选择两项进行对比。</p></header>
      <section className="card stack">
        <div className="grid grid-2">
          <label>工具 A<select value={left} onChange={(e) => setLeft(e.target.value)}>{tools.map((t) => <option key={t.name}>{t.name}</option>)}</select></label>
          <label>工具 B<select value={right} onChange={(e) => setRight(e.target.value)}>{tools.map((t) => <option key={t.name}>{t.name}</option>)}</select></label>
        </div>
      </section>
      <section className="grid grid-2">
        {[leftTool, rightTool].map((tool) => tool && <article key={tool.name} className="card stack"><h3 style={{ margin: '0' }}>{tool.name}</h3><div><b>价格：</b>{tool.price}</div><div><b>定位：</b>{tool.role}</div><div><b>优势：</b>{tool.pros}</div><div><b>劣势：</b>{tool.cons}</div></article>)}
      </section>
      <section className="card"><span className="badge">推荐建议</span><p>{advice}</p></section>
    </main>
  )
}
