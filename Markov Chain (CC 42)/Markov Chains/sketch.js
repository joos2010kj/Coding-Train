var txt = "Justin Drew Bieber (born March 1, 1994) is a Canadian singer, actor and songwriter. After a talent manager discovered him through his videos covering songs in 2008 and he signed to RBMG, Bieber released his debut EP, My World, in late 2009. It was certified platinum in the U.S.He became the first artist to have seven songs from a debut record chart on the Billboard Hot 100.Bieber released his first full-length studio album, My World 2.0, in 2010. It debuted at or near number one in several countries, was certified triple platinum in the U.S., and contained his single \"Baby\". Following his debut album and promotional tours, he released his 3D biopic-concert film Justin Bieber: Never Say Never and his second studio album, Under the Mistletoe (2011), which debuted at number one on the Billboard 200. His third studio album, Believe (2012) generated the single \"Boyfriend\", which reached number one in Canada. His fourth studio album Purpose was released in 2015, spawning three number one singles: \"What Do You Mean?\", \"Sorry\", and \"Love Yourself\". Afterwards, Bieber was featured on several successful collaborations, including \"Cold Water\", \"Let Me Love You\", \"Despacito (Remix)\", and \"I\'m the One\". His U.S. album and singles sales total 44.7 million.[4][6] He has sold an estimated 140 million records, making him one of the world’s best-selling music artists, and became the second person to reach 100 million followers on Twitter in August 2017 after Katy Perry. Bieber has won numerous awards throughout his career, including the American Music Award for Artist of the Year in 2010 and 2012, a Grammy Award for Best Dance Recording for the song \"Where Are U Now\", and a Latin Grammy Award. He has been listed four times by Forbes magazine among the top ten most powerful celebrities in the world, in 2011, 2012, and 2013.In 2016, Bieber became the first artist to surpass 10 billion total video views on Vevo. Bieber was born on March 1, 1994, in London, Ontario, at St Joseph's Hospital, and was raised in Stratford, Ontario. He is the only child of Jeremy Jack Bieber and Patricia \"Pattie\" Mallette. Bieber's parents were never married.Pattie, who was underaged at the time of giving birth, raised her son with the help of her mother, Diane, and stepfather, Bruce.[13] His mother is of French-Canadian descent; his paternal great-grandfather was of German ancestry, and his other roots are English, Scottish and Irish.He has also claimed that he has some undetermined Aboriginal Canadian ancestry.Through Jeremy, Bieber has two younger half-siblings, Jazmyn (born 2009) and Jaxon (born 2010). Pattie worked a series of low-paying office jobs, raising Bieber as a single mother in low-income housing. Bieber has maintained contact with his father.Bieber attended a French-language immersion elementary school in Stratford, the Jeanne Sauvé Catholic School. Growing up, he learned to play the piano, drums, guitar, and trumpet. He graduated from high school in Stratford, Ontario, the St. Michael Catholic Secondary School in 2012 with a 4.0 GPA. In early 2007, aged 12, Bieber sang Ne-Yo's \"So Sick\" for a local singing competition in Stratford and was placed second. Mallette posted a video of the performance on for their family and friends to see. She continued to upload videos of Bieber singing covers of various R&B songs, and Bieber's popularity on the site grew. When searching for videos of a different singer, Scooter Braun, a former marketing executive of So So Def Recordings, clicked on one of Bieber's 2007 videos by accident.[19] Impressed, Braun tracked down the theatre that Bieber was performing in, located Bieber's school, and finally contacted Mallette, who was reluctant because of Braun's Judaism. She remembered praying, \"God, I gave him to you. You could send me a Christian man, a Christian label!\", and, \"God, you don't want this Jewish kid to be Justin's man, do you?\" However, church elders convinced her to let Bieber go with Braun. At 13, Bieber went to Atlanta, Georgia, with Braun to record demo tapes.Bieber began singing for Usher one week later.";

var order = 10;
var ngrams = {};
var button;

function setup() {
  noCanvas();

  for (var i = 0; i <= txt.length - order; i++) {
    var gram = txt.substring(i, i + order);

    if (!ngrams[gram]) {
      ngrams[gram] = [];
    }
    ngrams[gram].push(txt.charAt(i + order));
  }
  markovIt();
  console.log(ngrams);
}

function markovIt() {

  var currentGram = txt.substring(0, order);
  var result = currentGram;

  for (var i = 0; i < 500; i++) {
    var possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }
    var next = random(possibilities);
    result += next;
    var len = result.length;
    currentGram = result.substring(len - order, len);
  }

  console.log(result);
}
