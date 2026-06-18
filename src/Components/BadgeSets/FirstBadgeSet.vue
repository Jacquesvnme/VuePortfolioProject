<script setup>
import Html from './Badges/Html.vue'
import Css from './Badges/Css.vue'
import Javascript from './Badges/Javascript.vue'

/*TODO 
All below need to be fixed
*/

import Python from './Badges/Python.vue'
import CSharp from './Badges/CSharp.vue'
import Sql from './Badges/Sql.vue'
import TSql from './Badges/TSql.vue'
import Markdown from './Badges/Markdown.vue'
import NodeJs from './Badges/NodeJs.vue'
import Json from './Badges/Json.vue'
import Jquery from './Badges/Jquery.vue'
</script>

<template>
  <div class="badge-set">
    <Html />
    <Css />
    <Javascript />

    <Python />
    <CSharp />
    <Sql />
    <TSql />
    <Markdown />
    <NodeJs />
    <Json />
    <Jquery />
  </div>
</template>

<style scoped>
.badge-set {
  display: flex;
  gap: 8px;
}
</style>
