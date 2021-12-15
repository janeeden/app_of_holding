<template>
  <div class="initiative-card">
    <div v-if="this.card" role="button" class="card-wrapper" data-bs-toggle="modal" :data-bs-target="'#mmodal_'+this._uid">
      <div class="card-back" :style="{ width: cardWidth }">
        <div class="text-center"
          :style="{
            fontFamily: this.font, 
            fontSize: this.fontsize + 'px',
            lineHeight: (this.lineHeight || parseInt(this.fontsize) + 4 ) + 'px',
          }">{{charactername}}</div>
      </div>
      <div></div>
      <div class="card-front" :style="{ width: cardWidth }">
        <div><img :src="imageUrl" :style="{ width: cardWidth }" /></div>
        <div class="text-center"
          :style="{
            fontFamily: this.font, 
            fontSize: this.fontsize + 'px',
            lineHeight: (this.lineHeight || parseInt(this.fontsize) + 4 ) + 'px',
          }">{{charactername}}</div>
      </div>
    </div>

    <div :id="'mmodal_'+this._uid" class="modal fade dont-print" role="dialog">
      <div  class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="form-group ">
                  <label for="charname">Name</label>  
                  <input class="form-control" v-model="charname" name="charname" id="charname" placeholder="character name" />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group ">
                  <label for="charname">Custom Width</label>  
                  <input class="form-control" v-model="ownWidth" type="number" name="ownWidth" id="ownWidth" :placeholder="width" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group ">
                  <label for="charname">Font</label>  
                  <input class="form-control" v-model="font" name="font" id="font" placeholder="font" />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group ">
                  <label for="charname">Fontsize</label>  
                  <input class="form-control" type="number" v-model="fontsize" name="fontsize" id="fontsize" placeholder="fontsize" />
                </div>
              </div>
              <div class="col-4">
                <div class="form-group ">
                  <label for="charname">Line Height</label>  
                  <input class="form-control" type="number" v-model="lineHeight" name="lineHeight" id="lineHeight" placeholder="Auto" />
                </div>
              </div>
            </div>
            <div class="form-group ">
              <label for="charname">Image</label>
              <FileUpload v-model="image"></FileUpload>
              <img :src="imageUrl" width="50px;" style="margin-top: 5px;">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from '@/components/FileUpload.vue'
export default {
  name: 'InitiativeCard',
  props: ['card', 'selected', 'width'],
  components: {
    FileUpload,
  },
  data() {
    return { 
      charname: null,
      font: "OldLondon",
      fontsize: 19,
      lineHeight: null,
      image: null,
      ownWidth: null,
    }
  },
  computed: {
    charactername () {
      return this.charname || this.card.charname;
    },
    imageUrl () {
      return this.image || this.card.image;
    },
    cardWidth () {
      return Math.max(10, parseInt(this.ownWidth || this.width)) + "px"
    }
  }
}
</script>

<style>
.edit-box {
  z-index: 10;
  position: absolute;
  left: 0;
  margin-top: 15px;
  background-color: white;
  padding: 15px;
  padding-right: 30px;
  width: 100%;
  -webkit-border-radius: 5px;
  border-radius: 5px; 
  -webkit-box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.3);
  box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.3);
}

.card-wrapper {
  display: inline-block;
  background-color: white;
  -webkit-box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.3);
  box-shadow: 2px 2px 6px 2px rgba(0,0,0,0.3);
}

.card-front, .card-back {
  width: 180px;
  display: inline-block;
}

.card-back {
  margin-top: 0;
  padding-top: 15px;
  min-height: 180px;
  transform: rotate(180deg);
}

.card-front {
  cursor: pointer;
}

.card-front img {
  width: 180px;
}

.initiative-card {
  display: inline-block;
  
}

.body-printing .card-wrapper {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #5f5f5f;
}
</style>