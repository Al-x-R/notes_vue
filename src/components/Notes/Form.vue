<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
          required
          v-model="value"
          placeholder="Type your note"
      />
      <TagsList @onItemClick="handleTagClick" :items="tags"/>
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '../Tags/TagsList';

export default {
  name: 'Form',
  components: { TagsList },
  data() {
    return {
      value: '',
      selectedTags: [],
      tags: ['tag1', 'tag2', 'tag3'],
    };
  },
  methods: {
    onSubmit() {
      const payload = { title: this.value, tags: this.selectedTags };
      this.$store.dispatch('setNoteAction', payload);
      this.value = '';
      this.selectedTags = [];
    },
    handleTagClick(tag) {
      this.selectedTags.push(tag);
    }
  }
};
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;

  textarea {
    margin-bottom: 0;
  }
}
</style>