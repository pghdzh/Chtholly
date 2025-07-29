<!-- src/views/StoryOverview.vue -->
<template>
  <div class="story-page">
    <section class="story-hero">
      <h1>她的故事</h1>
      <p>在这个残酷而美丽的世界，珂朵莉与他相遇，并在战火中绽放出属于自己的微光。</p>
    </section>

    <section class="story-timeline">
      <div
        v-for="(episode, index) in episodes"
        :key="index"
        class="story-card"
      >
        <div class="story-card__title">#{{ index + 1 }} {{ episode.title }}</div>
        <div class="story-card__content">{{ episode.content }}</div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__content">© 2025 珂朵莉设定集</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const episodes = [
  {
    title: "在太阳西斜的这个世界里",
    content:
      "唯一存活下来的人类青年威廉，在悬浮岛街道上拯救了追赶猫的少女珂朵莉。她说自己已经没有遗憾了。",
  },
  {
    title: "置身天上之森",
    content:
      "得知妖精兵器的真相后，珂朵莉向威廉提出最后的愿望：‘请再对我温柔一点。’",
  },
  {
    title: "等这场战争结束之后",
    content:
      "威廉教授珂朵莉使用圣剑瑟尼欧里斯，并想出不必牺牲的方式。",
  },
  {
    title: "不归之人与望眼欲穿的人们",
    content:
      "战场归来已半月无信，缇亚忒察觉珂朵莉的变化。少女们依然在战斗中挣扎。",
  },
  {
    title: "人人本着正义之名",
    content:
      "上级下达撤退命令，但珂朵莉不愿放弃任何一座岛屿，也不愿放弃任何一个人。",
  },
  {
    title: "长存不灭的过去，逐渐消逝的未来",
    content:
      "威廉与史旺谈起往昔，并表示：‘我现在只想赶快回到她们身边。’",
  },
  {
    title: "我回来了",
    content:
      "妖精兵们开始质疑‘兽’的起源。葛力克说：‘我已将自己视为你们的父亲。’",
  },
  {
    title: "纵使日薄西山",
    content:
      "命运逼迫珂朵莉等人再次前往地表执行任务，威廉也一并同行。",
  },
  {
    title: "即便看不到未来",
    content:
      "珂朵莉陷入身份焦虑，艾瑟雅鼓励她：‘被前世困扰的，不止是你一个。’",
  },
  {
    title: "此时此刻的光辉",
    content:
      "威廉治愈魔力中毒的妖精兵，却依旧不被信任。他们质问：‘人类是如何创造出“兽”的？’",
  },
  {
    title: "盼君勿忘",
    content:
      "告白后的别扭未解，突发地震引发第六兽袭击，他们必须在故乡一决胜负。",
  },
  {
    title: "世上最幸福的女孩",
    content:
      "珂朵莉和威廉并肩而战，用生命谱写属于他们的终章。‘你的存在，是她的救赎。’",
  },
];
</script>

<style scoped lang="scss">
.story-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom right, #1e2e4d, #758cb3, #d06487);
  color: #f2f2f2;
  padding-top: 20px;
  .story-hero {
    padding: 4rem 1rem 2rem;
    text-align: center;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
    }

    p {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .story-timeline {
    padding: 2rem 1rem;
    max-width: 900px;
    margin: 0 auto;
    display: grid;
    gap: 1.5rem;
  }

  .story-card {
    background: rgba(255, 255, 255, 0.07);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    &__title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #fff;
    }

    &__content {
      font-size: 1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
    }
  }

  .footer {
    text-align: center;
    padding: 1rem 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    background: linear-gradient(to right, #1e2e4d, #d06487);
  }
}
</style>
