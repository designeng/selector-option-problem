<template>
    <select
        :value="selectedOption"
        @change="$emit('change', $event)"
    >
        <option ref="placeholderOption" value="">Select your option</option>
        <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
        >{{ option.text }}</option>
    </select>
</template>

<script>
export default {
    name: 'FormSelector',
    props: {
        selected: String,
        options: Array,
        usePlaceholder: Boolean,
    },
    computed: {
        selectedOption () {
            return this.selected;
        }
    },
    mounted () {
        const placeholderOption = this.$refs['placeholderOption'];
        if(this.usePlaceholder) {
            placeholderOption.setAttribute('selected', '');
            placeholderOption.setAttribute('disabled', '');
        }
    }
}
</script>
