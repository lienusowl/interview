<template>
  <div id="app-ce">
    <IndexWhat></IndexWhat>
    <div class="blue-block">
      <div class="container-fluid">
        <div class="CS-files-work">

          <TabIndex></TabIndex>

          <div class="tab-content">
            <Sends></Sends>
            <Results></Results>
          </div>

        </div>
      </div>
    </div>
    <Instruction></Instruction>
  </div>
</template>

<script>

import IndexWhat from './components/static/IndexWhat';
import Instruction from './components/static/Instruction';
import TabIndex from './components/content/tab/index-head/TabIndex';
import Sends from './components/content/Sends';
import Results from './components/content/Results';

export default {
  name: 'app-ce',
  components: {
      IndexWhat,
      Instruction,
      TabIndex,
      Sends,
      Results
  }
}
</script>

<style>

</style>
