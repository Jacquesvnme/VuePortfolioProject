<script setup>
import ThreeSectionLayout from '../../../old/Layouts/ThreeSectionLayout.vue'
import TopBar from '../../Components/Bar/TopBar.vue'
import SmallSpacer from '../../Components/Spacers/SmallSpacer.vue'
import AngleRight from '../../Components/Svg/Functional/AngleRight.vue'

import FirstBadgeSet from '../../Components/BadgeSets/FirstBadgeSet.vue'
import SecondBadgeSet from '../../Components/BadgeSets/SecondBadgeSet.vue'
import ThirdBadgeSet from '../../Components/BadgeSets/ThirdBadgeSet.vue'
import Archived from '../../Components/BadgeSets/Archived.vue'

import Wakatime from '../../Components/Wakatime/Wakatime.vue'

/*TODO
Badges to add:
HTML, CSS, JavaScript, Vue.Js, React, Node.Js, Json, JQuery, Markdown,
PostgreSQL, T-SQL, SQL, C#, Python

Applications & Platforms:
MS Word, MS Excel, MS PowerPoint, MS Access, MS Teams, MS SQL Server,
MS Visual Studio, MS Visual Studio Code, GitHub, NPM, Postman

Other To Add:
Bash, cloudflare, dotnet, flask, git, obsidian, opencv, powershell, vite, wasm, blazor, NuGet, Plotly.JS,
NumPy, Pandas, Azure, Cloudflare, Notepad++, Matplotlib, YouTube Music, Notion, PyPi, Starship, tmux
*/
</script>

<template>
  <ThreeSectionLayout>
    <div class="TopBar">
      <TopBar to="/Skills" label="Skills" />
    </div>
    <SmallSpacer />
    <div class="card">
      <p class="eyebrow">Skills</p>
      <p>This section is still being implemented.</p>
      <SmallSpacer />

      <p class="eyebrow">Languages, Frameworks, and Tools</p>
      <FirstBadgeSet />
      <SmallSpacer />

      <p class="eyebrow">Applications & Platforms</p>
      <SecondBadgeSet />
      <SmallSpacer />

      <p class="eyebrow">Certifications</p>
      <ThirdBadgeSet />
      <SmallSpacer />

      <p class="eyebrow">Archived</p>
      <Archived />
      <SmallSpacer />

      <p class="eyebrow">Industry knowledge</p>
      <ul class="custom-industry-knowlegde-list">
        <li><AngleRight class="small-svg-styling" />Basic Computer Architecture</li>
        <li><AngleRight class="small-svg-styling" />Intermediate Computer Components Knowledge</li>
        <li><AngleRight class="small-svg-styling" />Basic Networking</li>
        <li><AngleRight class="small-svg-styling" />Basic Database Development</li>
        <li><AngleRight class="small-svg-styling" />Programming
          <ul class="custom-industry-knowlegde-sublist-1">
            <li><AngleRight class="small-svg-styling" />.NET ecosystem</li>
            <li><AngleRight class="small-svg-styling" />C# as the primary language</li>
            <li><AngleRight class="small-svg-styling" />Some knowledge related to VisualBasic</li>
          </ul>
        </li>
        <li><AngleRight class="small-svg-styling" />Web programming
          <ul class="custom-industry-knowlegde-sublist-2">
            <li><AngleRight class="small-svg-styling" />Basic's like HTML, CSS, JavaScript</li>
            <li><AngleRight class="small-svg-styling" />Experience with ReactNative, ExpressJS, NextJS and most recently VueJs</li>
            <li><AngleRight class="small-svg-styling" />Experience with NodeJS</li>
          </ul>
        </li>
        <li><AngleRight class="small-svg-styling" />Basic knowledge Project Management</li>
        <li><AngleRight class="small-svg-styling" />Basic knowledge Software Testing</li>
        <li><AngleRight class="small-svg-styling" />Basic knowledge Machine Learning</li>
        <li><AngleRight class="small-svg-styling" />Some Basic Fundamentals Cybersecurity</li>
      </ul>
      <SmallSpacer />

      <p class="eyebrow">Project</p>
      This section is still being implemented.
      <SmallSpacer />

      <p class="eyebrow">WakaTime Stats</p>
      <Wakatime />
    </div>
  </ThreeSectionLayout>
</template>

<style scoped>
.custom-industry-knowlegde-list {
  list-style: none;
  margin-left: -1rem;
}

.custom-industry-knowlegde-sublist-1,
.custom-industry-knowlegde-sublist-2{
  list-style: none;
  margin-left: -1rem;
}

.small-svg-styling {
  margin-right: 0.5rem;
}
</style>