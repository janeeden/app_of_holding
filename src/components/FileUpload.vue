<template>
  <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
    <div class="dropbox">
      <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
        accept="image/*" class="input-file">
      <p v-if="isInitial">
        Drag your file here to begin<br> or click to browse
      </p>
      <p v-if="isSaving">
        Uploading {{ fileCount }} files...
      </p>
    </div>
  </form>
</template>
<!-- Javascript -->
<script>
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;
import { upload } from '@/services/FileUploadService.js';
export default {
  name: 'FileUpload',
  props: ['value'],
  data() {
    return {
      uploadedFiles: [],
      uploadedFile: null,
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos'
    }
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadedFile = null,
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      upload(formData)
        .then(async x => {
          let images = await x;
          this.uploadedFiles = [].concat(images);
          this.uploadedFile = images[0];
          this.currentStatus = STATUS_SUCCESS;
          this.$emit('input', this.uploadedFile.url);
          this.reset();
        })
        .catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array
        .from(Array(fileList.length).keys())
        .map(x => {
          formData.append(fieldName, fileList[x], fileList[x].name);
        });

      // save it
      this.save(formData);
    }
  },
  mounted() {
    this.reset();
  },
}
</script>

<!-- SASS styling -->
<style>
 .dropbox {
    outline: 2px dashed grey; /* the dash box */
    /* outline-offset: -10px; */
    /* background: lightcyan; */
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover {
    background: lightcyan; /* when mouse over to the drop zone, change color */
  }

  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }
</style>