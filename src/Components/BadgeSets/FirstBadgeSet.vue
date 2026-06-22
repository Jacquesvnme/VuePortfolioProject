<script setup>
import Html from '../Badges/Brands/Html.vue'
import Css from '../Badges/Brands/Css.vue'
import Javascript from '../Badges/Brands/Javascript.vue'

/*TODO 
All below need to be fixed
*/

import Python from '../Badges/Brands/Python.vue'
import CSharp from '../Badges/Brands/CSharp.vue'
import Sql from '../Badges/Brands/Sql.vue'
import TSql from '../Badges/Brands/TSql.vue'
import Markdown from '../Badges/Brands/Markdown.vue'
import NodeJs from '../Badges/Brands/NodeJs.vue'
import Json from '../Badges/Brands/Json.vue'
import Jquery from '../Badges/Brands/Jquery.vue'

/*TODO
Badges to add: VsiualBasic
*/

/*TODO
make bagdes small on mobile for better view
*/
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
  flex-wrap: wrap;
  gap: 8px;
}
</style>
