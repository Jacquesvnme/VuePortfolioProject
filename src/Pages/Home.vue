<template>
  <div class="main-page">
    <div class="TopBar">
      <h1 class="headline word-break">Portfolio Website</h1>
      <div>
        <ul class="custom-nav-list display-inline">
          <li>Home</li>
          <li>About</li>
          <li>Skills & Academics</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Privacy & Terms</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div class="main-content">
      Welcome to my portfolio website

      I'm Jacques Van Niekerk
      A Full Stack Developer

      Check out my site to see all the different projects I've worked on, my skills and experience, and more about me as a person.
    </div>
  </div>
</template>

<style scoped>
.main-page {
  
}

.TopBar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 80px;
}

.main-content {
  padding: 1rem;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.headline{
  font-size: 2.5rem;
  margin-left: 1rem;
}

.custom-nav-list {
  list-style: none;
  padding: 0;
  margin-right: 1rem;
}


.custom-nav-list li {
  margin: 0 0.5rem;
  cursor: pointer;
}

.display-inline {
  display: inline-flex;
  gap: 1rem;
}

.word-break {
  word-break: break-word;
}
</style>
