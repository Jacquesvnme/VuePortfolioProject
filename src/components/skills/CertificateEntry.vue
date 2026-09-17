<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import type { CertificateEntry } from '@/types/portfolio'

defineProps<{ certificate: CertificateEntry }>()
</script>

<template>
  <article class="certificate-entry">
    <div>
      <h3 class="certificate-title">{{ certificate.title }}</h3>
      <p>{{ certificate.issuer }} · {{ certificate.year }}</p>
    </div>
    <a
      class="icon-link"
      :href="certificate.credentialUrl"
      aria-label="View dummy credential"
      @click.prevent
    >
      <ArrowUpRight aria-hidden="true" />
    </a>
  </article>
</template>
