<script setup>
import ThreeSectionLayout from '../../Layouts/ThreeSectionLayout.vue'
import TopBar from '../../Components/Bar/TopBar.vue'
import SmallSpacer from '../../Components/Spacers/SmallSpacer.vue'

import FirstBadgeSet from '../../Components/BadgeSets/FirstBadgeSet.vue'
import SecondBadgeSet from '../../Components/BadgeSets/SecondBadgeSet.vue'
import ThirdBadgeSet from '../../Components/BadgeSets/ThirdBadgeSet.vue'
import Archived from '../../Components/BadgeSets/Archived.vue'

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
    </div>
  </ThreeSectionLayout>
</template>
