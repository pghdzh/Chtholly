<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>珂朵莉·电子设定集</h1>
        <div class="typewriter-manual">
          <span>{{ displayText }}</span>
          <span class="cursor">|</span>
        </div>
        <router-link to="/timeLine" class="btn">了解她的故事</router-link>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__content">
        <span>© 2025 珂朵莉设定集 · 光与记忆永存</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const sentences = [
  "「即使明知道那将是终点，我也要为你守护每一刻。」",
  "「纵然时间无情，我仍愿与你共度微光。」",
  "「星夜漫长，你的微笑，是我唯一的信仰。」",
];

const displayText = ref("");
let current = 0;
let deleting = false;
let charIndex = 0;

function loop() {
  const fullText = sentences[current];
  if (!deleting) {
    displayText.value = fullText.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === fullText.length) {
      deleting = true;
      setTimeout(loop, 1500);
      return;
    }
  } else {
    displayText.value = fullText.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      current = (current + 1) % sentences.length;
    }
  }
  setTimeout(loop, deleting ? 50 : 150);
}

onMounted(loop);
</script>

<style lang="scss" scoped>
$gradient-start: #1e2e4d;
$gradient-mid: #758cb3;
$gradient-end: #d06487;

.home {
  color: rgba(255, 255, 255, 0.9);
  background: linear-gradient(
    to bottom right,
    $gradient-start,
    $gradient-mid,
    $gradient-end
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .hero {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 1rem;

    .hero-content {
      max-width: 600px;

      h1 {
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 0 8px rgba($gradient-end, 0.8);
      }
      .typewriter-manual {
        margin-top: 20px;
        text-align: center;
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.9);
      }
      .cursor {
        display: inline-block;
        width: 1ch;
        animation: blink 1s step-end infinite;
      }
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
      .btn {
        display: inline-block;
        margin-top: 1.5rem;
        padding: 0.8rem 1.6rem;
        font-size: 1rem;
        color: #fff;
        background: linear-gradient(to right, $gradient-mid, $gradient-end);
        border-radius: 0.4rem;
        text-decoration: none;
        transition: transform 0.3s, box-shadow 0.3s;
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 0 8px rgba($gradient-end, 0.6);
        }
      }
    }
  }

  .footer {
    text-align: center;
    padding: 1rem 0;
    background: linear-gradient(to right, $gradient-start, $gradient-end);
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);

    &__content {
      max-width: 800px;
      margin: 0 auto;
    }
  }
}

@media (max-width: 768px) {
  .home .footer__container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
