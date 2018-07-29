var ngram;
var txt = "A block quotation (also known as a long quotation or extract) is a quotation in a written document that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size font. This is in contrast to setting it off with quotation marks in a run-in quote. Block quotations are used for long quotations. The Chicago Manual of Style recommends using a block quotation when extracted text is 100 words or more, or approximately six to eight lines in a typical manuscript.[1]In the first centuries of typesetting, quotations were distinguished merely by indicating the speaker, and this can still be seen in some editions of the Bible. During the Renaissance, quotations were distinguished by setting in a typeface contrasting with the main body text (often Italic type with roman, or the other way round). Block quotations were set this way at full size and full measure.Quotation marks were first cut in type during the middle of the sixteenth century, and were used copiously by some printers by the seventeenth. In Baroque and Romantic-period books, they could be repeated at the beginning of every line of a long quotation. When this practice was abandoned, the empty margin remained, leaving an indented block quotation.[2] Apart from quotation marks not being used to enclose block quotations, there are no hard-and-fast rules for the exact formatting of block quotations. To a large extent the specific format may be dictated by the method of publication (e.g. handwritten text, typewritten pages, or electronic publishing) as well as the typeface being used.For writers and editors, The Chicago Manual of Style (8th edition, 2007) recommends using a block quotation when cited text is five lines or longer.[3] Other sources set the threshold at four[4] or five lines.[5] The block quotation may also be used to distinguish shorter citations from original text, though strictly speaking this does not follow APA or MLA style guidelines. Use of the block quotation for shorter passages is a stylistic choice that may or may not be acceptable depending on the situation.Some guidelines suggest an indentation of five, ten, or fifteen spaces. However, five spaces in a proportional font may be much narrower than in a typewriter font of the same point size. In addition, setting an indent based on an exact number of spaces may not be technically possible in a given word processing or electronic publishing application. In these situations, a measurement of distance rather than a number of spaces may be prescribed instead (for example, a ​1⁄2 to 1 in or 1 to 2 cm indent). Some writers indent block quotations from the right margin as well. Block quotations are generally set off from the text that precedes and follows them by also adding extra space above and below the quotation and setting the text in smaller type. Barring specific requirements, the format of the block quotation will ultimately be determined by aesthetics, making the quotation pleasing to the eye, easy to read, and appropriate for the particular writing task.In typesetting, block quotations can be distinguished from the surrounding text by variation in typeface (often italic vs. roman), type size, or by indentation. Often combinations of these methods are used, but are not necessary. Block quotations are also visually distinguished from preceding and following main text blocks by a white line or half-line space.[6] For example:Fielding hides his own opinions on the matter deep in Tom Jones:Now, in reality, the world have paid too great a compliment to critics, and have imagined them men of much greater profundity than they really are. From this complaisance the critics have been emboldened to assume a dictatorial power, and have so far succeeded that they are now become the masters, and have the assurance to give laws to those authors from whose predecessors they originally received them";

var order = 5;

function preload(){
  txt = txt.toLowerCase();
}

function setup(){
  noCanvas();
  ngram = new N_Gram(order);
  ngram.read(txt);
  ngram.pick(txt);
}



function N_Gram(order){
  this.order = order;
  this.library = {};

  function HouseOfChars(){
    this.arr = {};
    this.total = 0;
    this.holder = [];

    HouseOfChars.prototype.add = function(char){
      if(!this.arr[char]){
        this.arr[char] = {frequency : 0};
      }

      this.arr[char].frequency++;
      this.total++;
      this.holder.push(char);
    }
  }

  this.read = function(txt){ //input is a string
    for(let i = 0; i <  txt.length - this.order; i++){
      let currWord = txt.substring(i, i + this.order);
      let nextChar = txt.charAt(i + this.order);

      if(this.library[currWord] === undefined){
        this.library[currWord] = new HouseOfChars();
      }

      this.library[currWord].add(nextChar);
    }
  }

  this.pick = function(txt){
    let total = txt.substring(0, this.order);

    for(let i = 0; i < txt.length - this.order; i++){
      let word = txt.substring(i, i + this.order);
      let char = this.pickOne(this.library[word]);
      total += char;
    }

    console.log(total);
  }

  this.pickOne = function(house){
    return house.holder[Math.floor(Math.random() * house.total)];
  }
}
