 <template>
  <ul>
    <li v-for="child in folder">
      <span>{{ child.name }}</span>
      <item-parent v-if="child.children.length" :model="child.children"></item-parent>
    </li>
  </ul>
</template>

                    
<script>
export default {
  props: {
    folder: Array
  }
};
</script>
                    
<style>
</style>