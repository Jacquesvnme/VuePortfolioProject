<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import type { CertificateEntry } from '@/types/portfolio'

defineProps<{ certificate: CertificateEntry }>()
</script>

<template>
  <li class="credential-entry">
    <a
      :href="certificate.credentialUrl"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${certificate.title}, ${certificate.issuer}, ${certificate.year} (opens in a new tab)`"
    >
      <strong>{{ certificate.title }}</strong>
      <span>{{ certificate.issuer }} · {{ certificate.year }}</span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  </li>
</template>
