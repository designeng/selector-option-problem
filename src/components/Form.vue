<template>
  <form>
    <FormSelector
       :options="users"
       :selected="selected"
       :usePlaceholder="true"
       @change="onUserChange($event)"
    />
  </form>
</template>

<script>
import FormSelector from './FormSelector.vue';

export default {
    name: 'Form',
    components: {
        FormSelector
    },
    data () {
        return {
            usePlaceholder: true,
            users: [
                {
                    text: "FOO",
                    value: 'foo',
                },
                {
                    text: "BAR",
                    value: 'bar',
                },
            ],
            selected: 'bar'
        }
    },
    methods: {
        onUserChange (e) {
            console.log('Selected option...', e.target.value);
        }
    }
}
</script>
