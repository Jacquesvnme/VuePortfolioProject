<script setup>
import ThreeSectionLayout from '../../../old/Layouts/ThreeSectionLayout.vue'
import TopBar from '../../Components/Bar/TopBar.vue'
import SmallSpacer from '../../Components/Spacers/SmallSpacer.vue'
import ThinDivider from '../../Components/Divider/ThinDivider.vue'

import At from '../../Components/Svg/Functional/At.vue'
import Github from '../../Components/Svg/Functional/Github.vue'
import LinkedIn from '../../Components/Svg/Functional/LinkedIn.vue'
import Link from '../../Components/Svg/Functional/Link.vue'
import AddressBook from '../../Components/Svg/Functional/AddressBook.vue'
import Wrench from '../../Components/Svg/Functional/Wrench.vue'
import User from '../../Components/Svg/Functional/User.vue'
import AngleRight from '../../Components/Svg/Functional/AngleRight.vue'
</script>

<template>
  <ThreeSectionLayout>
    <div class="TopBar">
      <TopBar to="/About-Me" label="About-Me" />
    </div>

    <SmallSpacer />

    <div class="card">
      <User class="medium-svg-styling" />
      <!-- ! About Me -->
      <p class="eyebrow display-inline">About Me</p>
      <p class="about-me-paragraph">
        I'm a student currently studying at Belgium Campus I have learnt a wide variety of
        programming languages and frameworks I believe my problem solving skills is a highly
        valuable skill that will help me solve any problem that might come my way I am always open
        to learning new languages and gaining new knowledge I also have proficient skills in web
        programming which includes HTML, CSS, and JavaScript, along with a few frameworks & modules
        I would like to further my progress and one day become a full stack developer.
      </p>

      <ThinDivider />
      <!-- ! Key Skills -->
      <Wrench class="medium-svg-styling" />
      <p class="eyebrow display-inline">Key Skills</p>

      <ul class="custom-list-skills">
        <li><AngleRight class="small-svg-styling" />Web Development</li>
        <li><AngleRight class="small-svg-styling" />Software Development</li>
        <li><AngleRight class="small-svg-styling" />Software Testing</li>
        <li><AngleRight class="small-svg-styling" />Research Skills</li>
        <li><AngleRight class="small-svg-styling" />Team Collaboration & Communication</li>
        <li><AngleRight class="small-svg-styling" />Leadership Skills</li>
        <li><AngleRight class="small-svg-styling" />Problem Solving</li>
        <li><AngleRight class="small-svg-styling" />Project Management & Agile Methodologies</li>
      </ul>

      <ThinDivider />
      <!-- ! Contact Details -->
      <AddressBook class="medium-svg-styling" />
      <p class="eyebrow display-inline">Contact Details</p>

      <ul class="custom-list-contact">
        <!-- ! Email -->
        <li>
          <a
            href="mailto:jacquesvnme@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            aria-label="Email Jacques Van Niekerk"
          >
            <At class="small-svg-styling" />
            <span class="link-text display-inline">jacquesvnme@gmail.com</span>
          </a>
        </li>
        <!-- ! LinkedIn -->
        <li>
          <a
            href="https://www.linkedin.com/in/jacques-van-niekerk-231b872ba"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            aria-label="LinkedIn Profile of Jacques Van Niekerk"
          >
            <LinkedIn class="small-svg-styling" />
            <span class="link-text display-inline">LinkedIn</span>
          </a>
        </li>
        <!-- ! Github -->
        <li>
          <a
            href="https://github.com/Jacquesvnme"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            aria-label="Github Profile of Jacques Van Niekerk"
          >
            <Github class="small-svg-styling" />
            <span class="link-text display-inline">Github</span>
          </a>
        </li>
        <!-- ! W3Schools -->
        <li>
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            aria-label="W3Schools Profile of Jacques Van Niekerk"
          >
            <Link class="small-svg-styling" />
            <span class="link-text display-inline">W3Schools</span>
          </a>
        </li>
        <!-- ! Codecademy -->
        <li>
          <a
            href="https://www.codecademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="link"
            aria-label="Codecademy Profile of Jacques Van Niekerk"
          >
            <Link class="small-svg-styling" />
            <span class="link-text display-inline">Codecademy</span>
          </a>
        </li>
      </ul>

      <ThinDivider />
      <!-- ! Languages -->
      <AddressBook class="medium-svg-styling" />
      <p class="eyebrow display-inline">Languages</p>
      <ul class="custom-list-languages">
        <li><AngleRight class="small-svg-styling" />English</li>
        <li><AngleRight class="small-svg-styling" />Afrikaans</li>
      </ul>

      <ThinDivider />
      <!-- ! Address -->
      <AddressBook class="medium-svg-styling" />
      <p class="eyebrow display-inline">Current location</p>
      <div class="current-location">
        <iframe class="location-image" alt="OpenStreetMap image of my current location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=28.20499420166016%2C-26.26062949435368%2C28.39845657348633%2C-26.120609901056977&amp;layer=hot">
        </iframe>
      </div>
      <small class="center-align">
        <a href="https://www.openstreetmap.org/?#map=13/-26.19064/28.30173&amp;layers=H" class="link normal-color">View Larger Map</a>
      </small>

    </div>
  </ThreeSectionLayout>
</template>

<style scoped>
.about-me-paragraph {
  text-align: justify;
  text-justify: inter-word;
}

.link {
  color: var(--white);
  text-decoration: none;
}

.custom-list-skills,
.custom-list-contact,
.custom-list-languages {
  list-style-type: none;
  margin-left: -1rem;
}

.custom-list-skills li,
.custom-list-contact li,
.custom-list-languages li {
  margin-bottom: 0.5rem;
}

.eyebrow,
.link-text {
  margin-left: 0.5rem;
}

.small-svg-styling {
  margin-right: 0.5rem;
}

/* Styling for the location image */
.current-location {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.location-image {
  width: min(100%, 720px);
  height: auto;
  min-height: 300px;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  object-fit: cover;
}

.normal-color {
  color: var(--secondary-color) !important;
}
</style>
