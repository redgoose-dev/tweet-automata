<div class="loading">
  <p class="spinner"></p>
</div>

<style lang="scss">
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  width: 64px;
  height: 64px;
}
.spinner {
  margin: 0;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background: var(--color-text-key);
  box-sizing: border-box;
  animation: flipX 1s linear infinite;
}
@keyframes flipX {
  0% {
    transform: perspective(200px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(200px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(200px) rotateX(-180deg) rotateY(-180deg);
  }
}
</style>
