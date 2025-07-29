<template>
  <div class="profile-page">
    <!-- 顶部导航占位 -> 实际导航由 App.vue 提供 -->
    <div class="nav-placeholder"></div>

    <!-- 角色简介 Hero 区 -->
    <section class="intro section-hero">
      <h1>珂朵莉 · 诺塔 · 瑟尼欧里斯</h1>
      <p class="subtitle">妖精兵器、圣剑持有者，在微光中微笑的少女</p>
    </section>

    <!-- 身份背景 区块 -->
    <section class="section-identity">
      <h2>身份背景</h2>
      <div class="identity-card">
        <p>所在组织：奥尔兰多商会第四仓库——妖精仓库</p>
        <p>种族/身份：无征种妖精兵武器，黄金妖精一族前辈</p>
        <p>圣剑适合者：最强圣剑“瑟尼欧里斯”持有者</p>
      </div>
    </section>

    <!-- 外貌衣着 区块 -->
    <section class="section-appearance">
      <h2>外貌衣着</h2>
      <div class="appearance-grid">
        <div class="item">
          <strong>发色</strong>
          <span>天蓝 → 赤红</span>
        </div>
        <div class="item">
          <strong>瞳色</strong>
          <span>海洋蓝 → 泛红</span>
        </div>
        <div class="item">
          <strong>服饰</strong>
          <span>灰色大衣与帽子（后获花饰帽）</span>
        </div>
        <div class="item">
          <strong>身材</strong>
          <span>娇小纤细，约165cm</span>
        </div>
      </div>
    </section>

    <!-- 性格特点 区块 -->
    <section class="section-personality">
      <h2>性格特点</h2>
      <ul class="personality-list">
        <li>稳重淡然，内心温柔却坚毅</li>
        <li>爱面子，常逞强展现成熟</li>
        <li>观察力强，恋爱中守护欲爆棚</li>
        <li>不畏后果，勇于创造奇迹</li>
      </ul>
    </section>

    <!-- 角色能力 区块 -->
    <section class="section-abilities">
      <h2>角色能力</h2>
      <div class="abilities-cards">
        <div class="ability-card">
          <h3>魔力</h3>
          <p>高伤害输出，心脏催化，代价巨大。</p>
        </div>
        <div class="ability-card">
          <h3>圣剑</h3>
          <p>“瑟尼欧里斯”：41片金属构成的古圣剑。</p>
        </div>
        <div class="ability-card">
          <h3>绝招</h3>
          <p>开启“妖精乡之门”自爆毁灭十七兽。</p>
        </div>
      </div>
    </section>

    <!-- 人际关系 区块 -->
    <section class="section-relations">
      <h2>人际关系</h2>
      <ul class="relations-list">
        <li><strong>威廉·克梅修</strong> — 未婚夫，五百年前人族勇者</li>
        <li><strong>艾瑟雅</strong> — 前世伙伴，揭示侵蚀真相</li>
        <li><strong>奈芙莲</strong> — 暗中关心，友谊深厚</li>
        <li><strong>娜芙德</strong> — 深感不舍，哀求不战</li>
        <li><strong>菈恩托露可</strong> — 怀疑亦认可</li>
      </ul>
    </section>

    <!-- 角色经历 区块 -->
    <section class="section-history">
      <h2>角色经历</h2>
      <ol class="history-list">
        <li>第28号岛街头初遇，追猫坠落被威廉相救。</li>
        <li>得知五日后牺牲，请求索吻并索要温柔。</li>
        <li>接受圣剑教导，允诺 butter cake 奖励。</li>
        <li>战斗中魔力侵蚀，发瞳渐变，记忆与人格瓦解。</li>
        <li>最终开启门扉自爆，以笑颜守护人类与威廉。</li>
        <li>遗体被打捞，传说其意志化作轮回。</li>
      </ol>
    </section>

    <footer class="footer">
      <div class="footer__content">© 2025 珂朵莉设定集 · 光与记忆永存</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 内容静态定义，无额外逻辑
</script>

<style scoped lang="scss">
$grad-a: #1e2e4d;
$grad-b: #758cb3;
$grad-c: #d06487;
$text: rgba(255,255,255,0.9);

.profile-page {
  padding-top: 64px; /* 顶部导航高度预留 */
  background: linear-gradient(to bottom right, $grad-a, $grad-b, $grad-c);
  color: $text;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nav-placeholder {
  height: 64px;
}

// 通用标题样式
section h2 {
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: #fff;
  text-align: center;
}

// Hero
.section-hero {
  text-align: center;
  padding: 2rem 1rem;
  h1 { font-size: 2.8rem; text-shadow: 0 0 8px rgba($grad-c,0.8); margin-bottom: 0.5rem; }
  .subtitle { font-size: 1.1rem; opacity: 0.8; }
}

// 身份背景
.section-identity {
  padding: 1.5rem;
  .identity-card {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255,255,255,0.1);
    padding: 1rem 1.5rem;
    border-radius: 8px;
  }
  p { margin: 0.5rem 0; line-height: 1.4; }
}

// 外貌衣着
.section-appearance {
  padding: 1.5rem;
  .appearance-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
    gap: 1rem;
  }
  .item {
    background: rgba(255,255,255,0.07);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    strong { display: block; margin-bottom: 0.5rem; color: #fff; }
  }
}

// 性格特点
.section-personality {
  padding: 1.5rem;
  .personality-list {
    max-width: 600px;
    margin: 0 auto;
    list-style: disc;
    padding-left: 1.5rem;
  }
  li { margin-bottom: 0.6rem; line-height: 1.5; }
}

// 角色能力
.section-abilities {
  padding: 1.5rem;
  .abilities-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .ability-card {
    background: rgba(255,255,255,0.1);
    flex: 1 1 200px;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    transition: transform 0.3s;
    &:hover { transform: translateY(-4px); }
    h3 { margin-bottom: 0.5rem; color: #fff; }
  }
}

// 人际关系
.section-relations {
  padding: 1.5rem;
  .relations-list {
    max-width: 600px;
    margin: 0 auto;
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.8rem;
    line-height: 1.5;
    strong { color: #fff; }
  }
}

// 角色经历
.section-history {
  padding: 1.5rem;
  .history-list {
    max-width: 600px;
    margin: 0 auto;
    list-style: decimal;
    padding-left: 1.5rem;
  }
  li { margin-bottom: 0.6rem; line-height: 1.5; }
}

// 页脚
.footer {
  margin-top: auto;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
  opacity: 0.8;
  background: rgba(0,0,0,0.2);
}

// 移动端适配
@media (max-width: 768px) {
  .section-hero h1 { font-size: 2.2rem; }
  section { padding: 1rem; }
}
</style>
