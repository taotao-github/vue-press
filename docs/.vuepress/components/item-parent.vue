 <template>
  <ul>
    <li v-for="child in model">
      <span>{{ child.name }}</span>
      <item-child v-if="child.children.length" :folder="child.children"></item-child>
    </li>
  </ul>
</template>

                    
<script>
export default {
  name: "item",
  props: {
    model: Array
  }
};
</script>
                    
<style>
</style>