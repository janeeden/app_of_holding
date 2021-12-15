<template>
  <div class="initiative-cards" id="initiativeCards">
    <h3>Create initiative cards</h3>
    <div class="container">
      <div class="card-actions row row-cols-lg-auto align-items-center">
        <button @click="addCard" class="btn btn-primary btn-sm">Add a card</button>
        <button @click="printCards" class="btn btn-success btn-sm">Print</button>
        <label>Default Card Width</label>
        <div class="col-auto"><input type="number" v-model="width" class='form-control' /></div>
      </div>
    </div>
    <div class="cards-holder" id="cardsHolder">
      <div v-for="card in cards" :key="card.id" class="init-card">
        <InitiativeCard @click="selectCard(card)" :width="width" :card="card" :selected="selectedCard == card"></InitiativeCard><br>
        <button class="dont-print delete-button btn btn-danger btn-sm" @click="deleteCard(card)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import InitiativeCard from "@/components/InitiativeCard"
// import printJS from 'print-js'
export default {
  name: 'InitiativeCards',
  data () {
    return {
      selectedCard: null,
      counter: 1,
      width: 145,
      cards: [
        {
          charname: "Charname",
          image: "http://placekitten.com/200/240",
          id: 0
        },
        ]
    }
  },
  components: {
    InitiativeCard
  },
  methods: {
    selectCard (card) {
      // console.log('hallo')
      if(this.selectedCard == card) {
        this.selectedCard = null;
      } else {
        this.selectedCard = card;
      }
    },
    addCard () {
      this.cards.push({
        charname: "Charname",
        image: "http://placekitten.com/200/240",
        id: this.counter,
      });
      this.counter++;
    },
    deleteCard: function (card) {
      // console.log( index )
      let index = this.cards.indexOf(card)
      this.cards.splice(index, 1);
    },
    printCards () {
      const prtHtml = document.getElementById('cardsHolder').innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = '';
      for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML;
      }

      const WinPrint = window.open('', '', 'left=0,top=0,width=930,height=800,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.onload = function() {
        console.log('print document loaded!');
      }
      WinPrint.document.write(`<!DOCTYPE html>
        <html>
          <head>
            ${stylesHtml}
            <style type="text/css" media="print">
              // @page { size: landscape; }
            </style>
            <style type="text/css">
              body { display: block; }
              .dont-print { display: none; }
            </style>
          </head>
          <body class='body-printing'>
            ${prtHtml}
          </body>
        </html>`);
      
      WinPrint.document.close();
      
      WinPrint.focus();
      WinPrint.print();
      // WinPrint.close();
    }
  }
}
</script>
<style>
.initiative-cards {
  position: relative;
}

.initiative-cards .card-actions button {
  margin-right: 10px;
}

.initiative-cards .card-actions {
  margin-bottom: 15px;
}

.cards-holder {
  display: flex;
  flex-wrap: wrap;
}
.init-card {
  margin-right: 15px;
  margin-bottom: 15px;
  display: inline-block;
}
.delete-button {
  margin-top: 25px;
}
</style>