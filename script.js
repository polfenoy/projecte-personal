/* ==========================================================================
   DADES DEL PROJECTE (EDITABLES MANUALMENT)
   --------------------------------------------------------------------------
   NOTA (suposició): Les durades i autories principals segueixen el catàleg
   publicat, mentre que el llistat d'acords, la classificació d'estructura i
   els dies de gravació són estimacions inicials pensades perquè puguis
   personalitzar-les manualment amb les teves dades reals.

   Com editar:
   - Modifica qualsevol valor d'aquesta llista o afegeix nous objectes.
   - Totes les gràfiques, escales i filtres s'actualitzen automàticament.
   ========================================================================== */

const SONGS = [
  {
    id: "love-me-do",
    title: "Love Me Do",
    album: "Please Please Me",
    albumIndex: 0,
    year: 1963,
    durationSec: 142,
    author: "McCartney",
    chords: ["G", "C", "D"],
    structure: "AABA clàssica",
    structureDetail: "Intro · A · A · B · A · Outro",
    recordingDays: 1,
    note: "Tres acords, harmònica i fórmula directa: el punt de partida del so inicial."
  },
  {
    id: "please-please-me",
    title: "Please Please Me",
    album: "Please Please Me",
    albumIndex: 0,
    year: 1963,
    durationSec: 120,
    author: "Lennon",
    chords: ["E", "A", "B7", "C#m", "G#m"],
    structure: "AABA clàssica",
    structureDetail: "A · A · B · A · B · A",
    recordingDays: 1,
    note: "Gravada dins la cèlebre marató d'un sol dia als estudis d'Abbey Road."
  },
  {
    id: "twist-and-shout",
    title: "Twist and Shout",
    album: "Please Please Me",
    albumIndex: 0,
    year: 1963,
    durationSec: 153,
    author: "Lennon",
    chords: ["D", "G", "A"],
    structure: "Vers–Tornada",
    structureDetail: "V · C · V · C · Solo · V · C",
    recordingDays: 1,
    note: "Una sola presa vocal amb Lennon refredat al final de la sessió del 1963."
  },
  {
    id: "hard-days-night",
    title: "A Hard Day's Night",
    album: "A Hard Day's Night",
    albumIndex: 1,
    year: 1964,
    durationSec: 154,
    author: "Lennon",
    chords: ["G7sus4", "G", "C", "F", "Bm", "Em", "D"],
    structure: "AABA clàssica",
    structureDetail: "Acord inicial · A · A · B · A · Solo · B · A",
    recordingDays: 1,
    note: "Comença amb un dels acords inicials més analitzats de la història del pop."
  },
  {
    id: "and-i-love-her",
    title: "And I Love Her",
    album: "A Hard Day's Night",
    albumIndex: 1,
    year: 1964,
    durationSec: 150,
    author: "McCartney",
    chords: ["F#m", "C#m", "A", "B7", "E", "Gm", "Dm"],
    structure: "AABA clàssica",
    structureDetail: "A · A · B · A · Solo (modulat) · A",
    recordingDays: 2,
    note: "Ja introdueix un canvi de tonalitat subtil al solo de guitarra acústica."
  },
  {
    id: "cant-buy-me-love",
    title: "Can't Buy Me Love",
    album: "A Hard Day's Night",
    albumIndex: 1,
    year: 1964,
    durationSec: 132,
    author: "McCartney",
    chords: ["Em", "Am", "Dm", "G", "C", "F"],
    structure: "Vers–Tornada",
    structureDetail: "Tornada inicial · V · V · C · Solo · C",
    recordingDays: 1,
    note: "Obre directament amb la tornada, sense esperar cap introducció instrumental."
  },
  {
    id: "help",
    title: "Help!",
    album: "Help!",
    albumIndex: 2,
    year: 1965,
    durationSec: 139,
    author: "Lennon",
    chords: ["Bm", "G", "E", "A", "C#m", "F#m"],
    structure: "Vers–Tornada",
    structureDetail: "Intro · V · C · V · C · V · C",
    recordingDays: 1,
    note: "Ritme accelerat però lletra molt més personal i introspectiva."
  },
  {
    id: "yesterday",
    title: "Yesterday",
    album: "Help!",
    albumIndex: 2,
    year: 1965,
    durationSec: 125,
    author: "McCartney",
    chords: ["F", "Em7", "A7", "Dm", "Dm/C", "Bb", "C7", "Gm", "A", "G7", "C"],
    structure: "AABA clàssica",
    structureDetail: "A (7 compassos) · A · B · A · B · A",
    recordingDays: 2,
    note: "Només dura 2:05 però concentra 11 acords i un quartet de corda clàssic."
  },
  {
    id: "ticket-to-ride",
    title: "Ticket to Ride",
    album: "Help!",
    albumIndex: 2,
    year: 1965,
    durationSec: 190,
    author: "Lennon",
    chords: ["A", "Bm", "E", "F#m", "D7", "G"],
    structure: "Estructura expandida",
    structureDetail: "V · C · V · C · Pont · V · C · Coda accelerada",
    recordingDays: 1,
    note: "Supera els 3 minuts i tanca amb un canvi de ritme inesperat a la coda."
  },
  {
    id: "norwegian-wood",
    title: "Norwegian Wood",
    album: "Rubber Soul",
    albumIndex: 3,
    year: 1965,
    durationSec: 125,
    author: "Lennon",
    chords: ["E", "D", "Em", "A", "F#m7", "B7"],
    structure: "AABA clàssica",
    structureDetail: "A · B · A · Solo sitar · B · A",
    recordingDays: 2,
    note: "Compàs ternari i primera aparició destacada del sitar en un disc pop."
  },
  {
    id: "in-my-life",
    title: "In My Life",
    album: "Rubber Soul",
    albumIndex: 3,
    year: 1965,
    durationSec: 147,
    author: "Lennon",
    chords: ["A", "E", "F#m", "A7", "D", "Dm", "Bm", "G", "C#m"],
    structure: "Estructura expandida",
    structureDetail: "Intro · V · Pont · V · Pont · Solo barroc · Pont",
    recordingDays: 2,
    note: "George Martin va gravar el solo de piano a mitja velocitat per sonar com un clavecí."
  },
  {
    id: "taxman",
    title: "Taxman",
    album: "Revolver",
    albumIndex: 4,
    year: 1966,
    durationSec: 159,
    author: "Harrison",
    chords: ["D7", "C7", "G7", "F7", "A7"],
    structure: "Vers–Tornada",
    structureDetail: "Compte enrere · V · C · V · Solo · V · C",
    recordingDays: 3,
    note: "Primera vegada que George Harrison obre un àlbum dels Beatles."
  },
  {
    id: "eleanor-rigby",
    title: "Eleanor Rigby",
    album: "Revolver",
    albumIndex: 4,
    year: 1966,
    durationSec: 127,
    author: "McCartney",
    chords: ["C", "Em", "Em7", "Em6", "C/E"],
    structure: "Vers–Tornada",
    structureDetail: "Intro · V · C · V · C · Pont · V · C",
    recordingDays: 3,
    note: "Cap Beatle hi toca un instrument: només un octet de corda i veus."
  },
  {
    id: "yellow-submarine",
    title: "Yellow Submarine",
    album: "Revolver",
    albumIndex: 4,
    year: 1966,
    durationSec: 160,
    author: "Starr",
    chords: ["G", "D", "C", "Em", "Am"],
    structure: "Vers–Tornada",
    structureDetail: "V · C · V · C · Interludi sonor · V · C",
    recordingDays: 2,
    note: "Senzilla en acords però plena d'efectes sonors gravats en directe a l'estudi."
  },
  {
    id: "tomorrow-never-knows",
    title: "Tomorrow Never Knows",
    album: "Revolver",
    albumIndex: 4,
    year: 1966,
    durationSec: 177,
    author: "Lennon",
    chords: ["C", "Bb/C"],
    structure: "Suite / Experimental",
    structureDetail: "Pedal continu · Loops de cinta · Solo invertit · Coda",
    recordingDays: 3,
    note: "Gairebé un sol acord durant tres minuts, sostingut per bucles de cinta magnètica."
  },
  {
    id: "strawberry-fields",
    title: "Strawberry Fields Forever",
    album: "Magical Mystery Tour",
    albumIndex: 6,
    year: 1967,
    durationSec: 247,
    author: "Lennon",
    chords: ["A", "Em", "F#7", "D", "E", "F#m", "F#m7", "Bm7", "C#7", "G", "B7", "E7", "Dm"],
    structure: "Estructura expandida",
    structureDetail: "Intro Mellotron · C · V · C · V · C · Falsa fi · Coda",
    recordingDays: 14,
    note: "Unió de dues preses en diferent tonalitat i velocitat empalmades a mà."
  },
  {
    id: "penny-lane",
    title: "Penny Lane",
    album: "Magical Mystery Tour",
    albumIndex: 6,
    year: 1967,
    durationSec: 183,
    author: "McCartney",
    chords: ["B", "C#m7", "D#m7", "Bm", "G", "F#7", "A", "E", "A7", "D", "Bm7", "Em7", "F#m", "C", "G7", "Am"],
    structure: "Estructura expandida",
    structureDetail: "V · C · V · C · Solo trompeta · V · C (modulat)",
    recordingDays: 11,
    note: "Una joia d'enginyeria harmònica amb modulacions constants entre Si i La."
  },
  {
    id: "little-help",
    title: "With a Little Help from My Friends",
    album: "Sgt. Pepper's",
    albumIndex: 5,
    year: 1967,
    durationSec: 164,
    author: "Starr",
    chords: ["E", "B", "F#m", "A", "D", "C#m", "C", "G#m"],
    structure: "Vers–Tornada",
    structureDetail: "Enllaç directe · V · C · Pont · V · C · Final",
    recordingDays: 2,
    note: "Dissenyada a mida del registre vocal de Ringo i enllaçada sense pausa al tema anterior."
  },
  {
    id: "lucy-in-the-sky",
    title: "Lucy in the Sky with Diamonds",
    album: "Sgt. Pepper's",
    albumIndex: 5,
    year: 1967,
    durationSec: 208,
    author: "Lennon",
    chords: ["A", "A/G", "F#m", "F", "Dm", "Bb", "C", "G", "D", "G7", "Em", "A7"],
    structure: "Estructura expandida",
    structureDetail: "V (3/4) · Pre-tornada · C (4/4) · V · Pre · C · Coda",
    recordingDays: 4,
    note: "Combina versos en vals (3/4) i tornades en 4/4 amb tres tonalitats diferents."
  },
  {
    id: "day-in-the-life",
    title: "A Day in the Life",
    album: "Sgt. Pepper's",
    albumIndex: 5,
    year: 1967,
    durationSec: 333,
    author: "Lennon",
    chords: ["G", "Bm", "Em", "C", "F", "Em7", "Am", "E", "D", "B7", "C7", "A", "A7", "D7"],
    structure: "Suite / Experimental",
    structureDetail: "Part Lennon · Crescendo orquestral · Part McCartney · Crescendo · Acord Mi",
    recordingDays: 11,
    note: "Dues cançons inacabades unides per una orquestra de 40 músics i un acord final de 40 segons."
  },
  {
    id: "hey-jude",
    title: "Hey Jude",
    album: "The White Album (era)",
    albumIndex: 7,
    year: 1968,
    durationSec: 431,
    author: "McCartney",
    chords: ["F", "C", "C7", "Bb", "F7", "Gm", "Gm7", "Eb"],
    structure: "Estructura expandida",
    structureDetail: "V · V · Pont · V · Pont · V · Coda de 4 minuts",
    recordingDays: 5,
    note: "Més de la meitat de la cançó és una coda coral que va desafiar totes les emissores."
  },
  {
    id: "while-my-guitar",
    title: "While My Guitar Gently Weeps",
    album: "The White Album (era)",
    albumIndex: 7,
    year: 1968,
    durationSec: 285,
    author: "Harrison",
    chords: ["Am", "Am/G", "D/F#", "F", "G", "E", "A", "C#m", "F#m", "Bm", "C"],
    structure: "Estructura expandida",
    structureDetail: "Intro · V · Pont · V · Solo Clapton · Pont · V · Coda",
    recordingDays: 7,
    note: "Consolida Harrison com a compositor de primera línia amb un baix descendent cromàtic."
  },
  {
    id: "happiness-warm-gun",
    title: "Happiness Is a Warm Gun",
    album: "The White Album (era)",
    albumIndex: 7,
    year: 1968,
    durationSec: 164,
    author: "Lennon",
    chords: ["Am", "Am6", "Em", "A7", "C", "G", "D", "Dm", "F", "G7", "Am7", "F7"],
    structure: "Suite / Experimental",
    structureDetail: "4 micro-seccions independents amb canvis de compàs (3/4, 4/4, 9/8)",
    recordingDays: 4,
    note: "Quatre fragments musicals enganxats en menys de tres minuts sense repetir cap tornada."
  },
  {
    id: "come-together",
    title: "Come Together",
    album: "Abbey Road",
    albumIndex: 8,
    year: 1969,
    durationSec: 259,
    author: "Lennon",
    chords: ["Dm", "A7", "G7", "Bm", "G", "A"],
    structure: "Vers–Tornada",
    structureDetail: "Riff · V · C · V · C · Solo · V · C · Coda",
    recordingDays: 6,
    note: "Torna a l'economia d'acords però amb una producció de bateria i baix absolutament moderna."
  },
  {
    id: "something",
    title: "Something",
    album: "Abbey Road",
    albumIndex: 8,
    year: 1969,
    durationSec: 182,
    author: "Harrison",
    chords: ["C", "Cmaj7", "C7", "F", "D7", "G", "Am", "Am/G#", "Am/G", "D9", "A", "C#m", "F#m", "D", "Eb"],
    structure: "Estructura expandida",
    structureDetail: "V · V · Pont (en La) · Solo · V · Outro",
    recordingDays: 10,
    note: "15 acords teixits amb suavitat; Frank Sinatra la va qualificar de gran balada moderna."
  },
  {
    id: "i-want-you",
    title: "I Want You (She's So Heavy)",
    album: "Abbey Road",
    albumIndex: 8,
    year: 1969,
    durationSec: 467,
    author: "Lennon",
    chords: ["Dm", "E7b9", "Bb7", "A7", "Am7", "Gm7", "C7", "F7", "E7"],
    structure: "Suite / Experimental",
    structureDetail: "Blues progressiu · Ostinato hipnòtic de 3 min · Tall sec de cinta",
    recordingDays: 12,
    note: "Gairebé 8 minuts amb només 14 paraules diferents i un tall abrupte decidit amb tisores."
  },
  {
    id: "you-never-give",
    title: "You Never Give Me Your Money",
    album: "Abbey Road",
    albumIndex: 8,
    year: 1969,
    durationSec: 242,
    author: "McCartney",
    chords: ["Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7", "C", "E", "Am", "A7", "D", "G", "B7", "Em", "F", "Ab"],
    structure: "Suite / Experimental",
    structureDetail: "Balada piano · Boogie · Arpegi coral · Tema circular del medley",
    recordingDays: 9,
    note: "Obre la gran suite de la cara B d'Abbey Road amb 17 acords i tres estils dins un sol tema."
  },
  {
    id: "let-it-be",
    title: "Let It Be",
    album: "Let It Be",
    albumIndex: 9,
    year: 1970,
    durationSec: 243,
    author: "McCartney",
    chords: ["C", "G", "Am", "F", "Fmaj7", "Dm7"],
    structure: "Vers–Tornada",
    structureDetail: "V · C · V · C · Interludi · Solo · V · C",
    recordingDays: 6,
    note: "Retorn conscient a una harmonia clara i directa com a comiat del grup."
  }
];

/* ==========================================================================
   CONSTANTS I CONFIGURACIÓ VISUAL
   ========================================================================== */

const ALBUMS = [
  { index: 0, lines: ["Please", "Please Me"], year: "1963" },
  { index: 1, lines: ["Hard Day's", "Night"], year: "1964" },
  { index: 2, lines: ["Help!"], year: "1965" },
  { index: 3, lines: ["Rubber", "Soul"], year: "1965" },
  { index: 4, lines: ["Revolver"], year: "1966" },
  { index: 5, lines: ["Sgt.", "Pepper's"], year: "1967" },
  { index: 6, lines: ["Magical", "Mystery"], year: "1967" },
  { index: 7, lines: ["White", "Album"], year: "1968" },
  { index: 8, lines: ["Abbey", "Road"], year: "1969" },
  { index: 9, lines: ["Let It", "Be"], year: "1970" }
];

const STRUCTURES = [
  "AABA clàssica",
  "Vers–Tornada",
  "Estructura expandida",
  "Suite / Experimental"
];

const AUTHOR_COLORS = {
  Lennon: "#f47782",
  McCartney: "#012a75",
  Harrison: "#a3b938",
  Starr: "#747474"
};

const AUTHOR_BADGE_TEXT = {
  Lennon: "#012a75",
  McCartney: "#ffffff",
  Harrison: "#012a75",
  Starr: "#ffffff"
};

const VIEW_META = {
  timeline: {
    title: "Catàleg cronològic per àlbum (1963–1970)",
    subtitle: "Cada cercle és una cançó. El color indica l'autor principal."
  },
  duration: {
    title: "Durada de les cançons al llarg del temps",
    subtitle: "Eix X: any · Eix Y: durada (min:seg). Els punts pugen quan s'allarga el format."
  },
  chords: {
    title: "Nombre d'acords diferents per cançó",
    subtitle: "Eix X: any · Eix Y i mida del punt: quantitat d'acords utilitzats."
  },
  structure: {
    title: "Evolució de l'estructura musical",
    subtitle: "Les mateixes cançons s'agrupen en 4 franges segons la seva forma interna."
  },
  recording: {
    title: "Dies de gravació a l'estudi per cançó",
    subtitle: "Eix X: any · Eix Y i mida del punt: dies d'estudi (estimació provisional)."
  },
  explore: {
    title: "Laboratori lliure de paràmetres",
    subtitle: "Combina els eixos, la mida dels punts i els filtres per trobar patrons."
  }
};

const FIELD_META = {
  year: {
    label: "Any de publicació",
    min: 1962.6,
    max: 1970.4,
    ticks: [1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970],
    format: (v) => String(Math.round(v))
  },
  durationSec: {
    label: "Durada (min:seg)",
    min: 90,
    max: 495,
    ticks: [120, 180, 240, 300, 360, 420, 480],
    format: (v) => formatDuration(v)
  },
  chordCount: {
    label: "Nombre d'acords",
    min: 0,
    max: 19,
    ticks: [0, 4, 8, 12, 16],
    format: (v) => `${v}`
  },
  recordingDays: {
    label: "Dies de gravació",
    min: 0,
    max: 16,
    ticks: [1, 4, 8, 12, 15],
    format: (v) => `${v}d`
  }
};

/* ==========================================================================
   ESTAT DE L'APLICACIÓ
   ========================================================================== */

const state = {
  view: "timeline",
  authorFilter: "all",
  structureFilter: "all",
  selectedSongId: null,
  exploreX: "year",
  exploreY: "chordCount",
  exploreSize: "recordingDays"
};

// Precomputar chordCount per facilitar accessos
SONGS.forEach((song) => {
  song.chordCount = song.chords.length;
});

/* ==========================================================================
   REFERÈNCIES AL DOM
   ========================================================================== */

const elViewport = document.getElementById("chart-viewport");
const elAxes = document.getElementById("chart-axes");
const elAnnotations = document.getElementById("chart-annotations");
const elNodes = document.getElementById("chart-nodes");
const elTooltip = document.getElementById("tooltip");
const elTitle = document.getElementById("chart-title");
const elSubtitle = document.getElementById("chart-subtitle");
const elCounter = document.getElementById("chart-counter");
const elExplorerControls = document.getElementById("explorer-controls");
const elStatSongs = document.getElementById("stat-songs");

const elInspectorEmpty = document.getElementById("inspector-empty");
const elInspectorContent = document.getElementById("inspector-content");
const elInsAuthorBadge = document.getElementById("ins-author-badge");
const elInsTitle = document.getElementById("ins-title");
const elInsAlbum = document.getElementById("ins-album");
const elInsDuration = document.getElementById("ins-duration");
const elInsChordCount = document.getElementById("ins-chord-count");
const elInsDays = document.getElementById("ins-days");
const elInsStructure = document.getElementById("ins-structure");
const elInsChords = document.getElementById("ins-chords");
const elInsNote = document.getElementById("ins-note");
const elInsClose = document.getElementById("ins-close");

const elSelectX = document.getElementById("select-x");
const elSelectY = document.getElementById("select-y");
const elSelectSize = document.getElementById("select-size");
const elSelectStructure = document.getElementById("select-structure");

const stepEls = Array.from(document.querySelectorAll(".step"));
const tabEls = Array.from(document.querySelectorAll(".view-tab"));
const authorChipEls = Array.from(document.querySelectorAll(".legend-chip"));

const nodeMap = new Map();

/* ==========================================================================
   UTILITATS
   ========================================================================== */

function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function lerp(value, inMin, inMax, outMin, outMax) {
  if (inMax === inMin) return (outMin + outMax) / 2;
  const t = (value - inMin) / (inMax - inMin);
  return outMin + t * (outMax - outMin);
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, String(v));
  }
  return el;
}

/* ==========================================================================
   EVITACIÓ DE SOLAPAMENTS (BEESWARM SUAU EN JS PUR)
   Manté els cercles a prop de la seva posició real però sense tapar-se.
   ========================================================================== */

function relaxCollisions(items, bounds, lockAxis = null) {
  const padding = 3;
  const iterations = 22;

  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.hypot(dx, dy);
        const minDist = a.r + b.r + padding;

        if (dist < minDist) {
          if (dist < 0.01) {
            dx = (i % 2 === 0 ? 1 : -1) * 0.5;
            dy = (j % 2 === 0 ? 1 : -1) * 0.5;
            dist = Math.hypot(dx, dy);
          }
          const overlap = (minDist - dist) * 0.5;
          const ux = dx / dist;
          const uy = dy / dist;

          // Si un eix és prioritari, desplacem més en l'altre per no falsejar la dada
          const weightX = lockAxis === "y" ? 1.15 : lockAxis === "x" ? 0.35 : 0.9;
          const weightY = lockAxis === "x" ? 1.15 : lockAxis === "y" ? 0.35 : 0.9;

          a.x -= ux * overlap * weightX;
          a.y -= uy * overlap * weightY;
          b.x += ux * overlap * weightX;
          b.y += uy * overlap * weightY;
        }
      }
    }

    // Mantenir tots els punts dins del marge de la gràfica
    for (const item of items) {
      item.x = clamp(item.x, bounds.left + item.r, bounds.right - item.r);
      item.y = clamp(item.y, bounds.top + item.r, bounds.bottom - item.r);
    }
  }
}

/* ==========================================================================
   CREACIÓ INICIAL DELS NODES (1 NODE PERSISTENT PER CANÇÓ)
   ========================================================================== */

function initNodes() {
  if (elStatSongs) {
    elStatSongs.textContent = String(SONGS.length);
  }

  SONGS.forEach((song, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "song-node";
    btn.setAttribute("role", "listitem");
    btn.dataset.id = song.id;
    btn.dataset.author = song.author;
    btn.setAttribute(
      "aria-label",
      `${song.title} (${song.year}, ${song.author}) — ${formatDuration(song.durationSec)}, ${song.chordCount} acords, ${song.recordingDays} dies`
    );
    // Petit desfasament suau perquè la transició sembli orgànica i llegible
    btn.style.transitionDelay = `${(idx % 8) * 14}ms`;

    btn.addEventListener("mouseenter", (e) => showTooltip(song, e));
    btn.addEventListener("mousemove", (e) => positionTooltip(e));
    btn.addEventListener("mouseleave", hideTooltip);
    btn.addEventListener("focus", () => showTooltipAtNode(song, btn));
    btn.addEventListener("blur", hideTooltip);
    btn.addEventListener("click", () => selectSong(song.id));

    elNodes.appendChild(btn);
    nodeMap.set(song.id, btn);
  });
}

/* ==========================================================================
   CÀLCUL DE POSICIONS I EIXOS PER A CADA REPRESENTACIÓ
   ========================================================================== */

function render() {
  const rect = elViewport.getBoundingClientRect();
  const width = rect.width || 720;
  const height = rect.height || 430;

  // Actualitzar capçalera i controls
  const meta = VIEW_META[state.view];
  elTitle.textContent = meta.title;
  elSubtitle.textContent = meta.subtitle;
  elExplorerControls.hidden = state.view !== "explore";

  // Actualitzar pestanyes i passos actius
  tabEls.forEach((t) => {
    const active = t.dataset.view === state.view;
    t.classList.toggle("is-active", active);
    t.setAttribute("aria-selected", String(active));
  });

  stepEls.forEach((s) => {
    s.classList.toggle("is-active", s.dataset.view === state.view);
  });

  // Netejar SVG d'eixos i anotacions
  elAxes.setAttribute("viewBox", `0 0 ${width} ${height}`);
  elAxes.innerHTML = "";
  elAnnotations.innerHTML = "";

  // Calcular coordenades segons la vista
  let layout;
  switch (state.view) {
    case "timeline":
      layout = computeTimelineLayout(width, height);
      break;
    case "duration":
      layout = computeDurationLayout(width, height);
      break;
    case "chords":
      layout = computeChordsLayout(width, height);
      break;
    case "structure":
      layout = computeStructureLayout(width, height);
      break;
    case "recording":
      layout = computeRecordingLayout(width, height);
      break;
    case "explore":
      layout = computeExploreLayout(width, height);
      break;
    default:
      layout = computeTimelineLayout(width, height);
  }

  // Aplicar posicions, mides i filtres als mateixos 28 nodes
  let visibleCount = 0;

  layout.points.forEach((pt) => {
    const btn = nodeMap.get(pt.song.id);
    if (!btn) return;

    const matchAuthor =
      state.authorFilter === "all" || pt.song.author === state.authorFilter;
    const matchStructure =
      state.view !== "explore" ||
      state.structureFilter === "all" ||
      pt.song.structure === state.structureFilter;
    const isVisible = matchAuthor && matchStructure;

    if (isVisible) visibleCount++;

    const diameter = pt.r * 2;
    btn.style.width = `${diameter}px`;
    btn.style.height = `${diameter}px`;
    btn.style.transform = `translate3d(${pt.x - pt.r}px, ${pt.y - pt.r}px, 0)`;
    btn.classList.toggle("is-dimmed", !isVisible);
    btn.classList.toggle("is-selected", state.selectedSongId === pt.song.id);
  });

  elCounter.textContent = `${visibleCount} / ${SONGS.length} cançons`;

  // Pintar etiquetes de cançons destacades (posicionades en espai lliure)
  if (layout.pinLabels) {
    layout.pinLabels.forEach((pin) => {
      const pt = layout.points.find((p) => p.song.id === pin.id);
      if (!pt) return;
      const matchAuthor =
        state.authorFilter === "all" || pt.song.author === state.authorFilter;
      if (!matchAuthor) return;

      const label = document.createElement("div");
      label.className = "song-pin-label";
      label.textContent = pin.text || pt.song.title;
      label.style.left = `${pt.x}px`;
      label.style.top = `${pt.y}px`;

      const pos = pin.pos || "top";
      if (pos === "top") {
        label.style.transform = `translate(-50%, calc(-100% - ${pt.r + 6}px))`;
      } else if (pos === "top-left") {
        label.style.transform = `translate(-85%, calc(-100% - ${pt.r + 6}px))`;
      } else if (pos === "top-right") {
        label.style.transform = `translate(-15%, calc(-100% - ${pt.r + 6}px))`;
      } else if (pos === "bottom") {
        label.style.transform = `translate(-50%, ${pt.r + 6}px)`;
      } else if (pos === "left") {
        label.style.transform = `translate(calc(-100% - ${pt.r + 7}px), -50%)`;
      } else {
        label.style.transform = `translate(${pt.r + 7}px, -50%)`;
      }

      elAnnotations.appendChild(label);
    });
  }
}

/* --- VISTA 1: CATÀLEG CRONOLÒGIC PER ÀLBUM --- */
function computeTimelineLayout(W, H) {
  const m = { top: 64, right: 24, bottom: 72, left: 24 };
  const plotW = W - m.left - m.right;
  const colStep = plotW / ALBUMS.length;

  // Línia base i columnes d'àlbum
  elAxes.appendChild(
    svgEl("line", {
      x1: m.left,
      y1: H - m.bottom,
      x2: W - m.right,
      y2: H - m.bottom,
      class: "axis-baseline"
    })
  );

  ALBUMS.forEach((alb, i) => {
    const cx = m.left + colStep * (i + 0.5);

    elAxes.appendChild(
      svgEl("line", {
        x1: cx,
        y1: m.top,
        x2: cx,
        y2: H - m.bottom,
        class: "axis-grid-line"
      })
    );

    const yearText = svgEl("text", {
      x: cx,
      y: H - m.bottom + 17,
      "text-anchor": "middle",
      class: "axis-label",
      style: "font-weight: 600;"
    });
    yearText.textContent = alb.year;
    elAxes.appendChild(yearText);

    alb.lines.forEach((lineStr, lineIdx) => {
      const nameText = svgEl("text", {
        x: cx,
        y: H - m.bottom + 32 + lineIdx * 11,
        "text-anchor": "middle",
        class: "axis-label",
        style: "font-size: 8.8px; fill: #747474;"
      });
      nameText.textContent = lineStr;
      elAxes.appendChild(nameText);
    });
  });

  // Apilar cançons ordenades dins cada àlbum
  const grouped = new Map();
  SONGS.forEach((s) => {
    if (!grouped.has(s.albumIndex)) grouped.set(s.albumIndex, []);
    grouped.get(s.albumIndex).push(s);
  });

  const points = [];
  const baseRadius = W < 620 ? 10 : 12.5;
  const gap = baseRadius * 2 + 12;

  SONGS.forEach((song) => {
    const list = grouped.get(song.albumIndex);
    const rank = list.indexOf(song);
    const cx = m.left + colStep * (song.albumIndex + 0.5);
    const cy = H - m.bottom - 24 - rank * gap;
    points.push({ song, x: cx, y: cy, r: baseRadius });
  });

  // Anotacions a la banda superior lliure (sense trepitjar cap punt)
  addCallout(
    m.left + 6,
    10,
    "1963–65 · Beatlemania (duet Lennon–McCartney)",
    "is-blue"
  );
  addCallout(
    W - m.right - 220,
    10,
    "1966–70 · Etapa d'estudi i més pes de Harrison",
    ""
  );

  return {
    points,
    pinLabels: [
      { id: "twist-and-shout", text: "1963", pos: "top" },
      { id: "you-never-give", text: "Abbey Road (4 temes)", pos: "top-left" }
    ]
  };
}

/* --- VISTA 2: DURADA AL LLARG DEL TEMPS --- */
function computeDurationLayout(W, H) {
  const m = { top: 40, right: 36, bottom: 52, left: 58 };
  const xMin = 1962.6;
  const xMax = 1970.4;
  const yMin = 90;
  const yMax = 510;

  drawXYAxes(W, H, m, FIELD_META.year, FIELD_META.durationSec);

  // Línia de referència ràdio AM: 2:30 (150s)
  const refY = lerp(150, yMin, yMax, H - m.bottom, m.top);
  elAxes.appendChild(
    svgEl("line", {
      x1: m.left,
      y1: refY,
      x2: W - m.right,
      y2: refY,
      class: "ref-line"
    })
  );

  // Col·locat a la cantonada inferior dreta (sense punts a 1968–70 per sota de 2:30)
  addCallout(
    W - m.right - 205,
    refY + 8,
    "Límit clàssic ràdio AM (~2:30)",
    ""
  );

  const points = SONGS.map((song) => {
    const x = lerp(song.year, xMin, xMax, m.left, W - m.right);
    const y = lerp(song.durationSec, yMin, yMax, H - m.bottom, m.top);
    const r = lerp(song.durationSec, 120, 470, 8.5, 16);
    return { song, x, y, r };
  });

  relaxCollisions(
    points,
    { left: m.left, right: W - m.right, top: m.top, bottom: H - m.bottom },
    "y"
  );

  return {
    points,
    pinLabels: [
      { id: "day-in-the-life", text: "A Day in the Life (5:33)", pos: "top" },
      { id: "hey-jude", text: "Hey Jude (7:11)", pos: "top-left" },
      { id: "i-want-you", text: "I Want You (7:47)", pos: "top-left" }
    ]
  };
}

/* --- VISTA 3: NOMBRE D'ACORDS --- */
function computeChordsLayout(W, H) {
  const m = { top: 40, right: 36, bottom: 52, left: 58 };
  const xMin = 1962.6;
  const xMax = 1970.4;
  const yMin = 0;
  const yMax = 20;

  // Banda de referència: 3–6 acords (pop estàndard)
  const yBandTop = lerp(6.5, yMin, yMax, H - m.bottom, m.top);
  const yBandBot = lerp(2.5, yMin, yMax, H - m.bottom, m.top);
  elAxes.appendChild(
    svgEl("rect", {
      x: m.left,
      y: yBandTop,
      width: W - m.left - m.right,
      height: yBandBot - yBandTop,
      class: "ref-band"
    })
  );

  drawXYAxes(W, H, m, FIELD_META.year, FIELD_META.chordCount);

  // Cantonada superior esquerra (zona completament buida)
  addCallout(
    m.left + 12,
    m.top + 6,
    "La banda verda marca el pop clàssic (3–6 acords).",
    "is-blue"
  );

  const points = SONGS.map((song) => {
    const x = lerp(song.year, xMin, xMax, m.left, W - m.right);
    const y = lerp(song.chordCount, yMin, yMax, H - m.bottom, m.top);
    const r = lerp(song.chordCount, 2, 17, 7.5, 18.5);
    return { song, x, y, r };
  });

  relaxCollisions(
    points,
    { left: m.left, right: W - m.right, top: m.top, bottom: H - m.bottom },
    "y"
  );

  return {
    points,
    pinLabels: [
      { id: "yesterday", text: "Yesterday (11)", pos: "top" },
      { id: "tomorrow-never-knows", text: "Tomorrow Never Knows (2)", pos: "bottom" },
      { id: "penny-lane", text: "Penny Lane (16)", pos: "left" },
      { id: "you-never-give", text: "You Never Give... (17)", pos: "top-left" }
    ]
  };
}

/* --- VISTA 4: ESTRUCTURES MUSICALS (4 FRANGES HORITZONTALS) --- */
function computeStructureLayout(W, H) {
  const m = { top: 28, right: 32, bottom: 48, left: 158 };
  const plotH = H - m.top - m.bottom;
  const laneH = plotH / STRUCTURES.length;
  const xMin = 1962.6;
  const xMax = 1970.4;

  // Franges alternes per a les 4 estructures
  STRUCTURES.forEach((name, idx) => {
    const yTop = m.top + idx * laneH;
    if (idx % 2 === 0) {
      elAxes.appendChild(
        svgEl("rect", {
          x: m.left,
          y: yTop,
          width: W - m.left - m.right,
          height: laneH,
          class: "lane-band"
        })
      );
    }

    const label = svgEl("text", {
      x: m.left - 12,
      y: yTop + laneH / 2 + 4,
      "text-anchor": "end",
      class: "lane-label"
    });
    label.textContent = name;
    elAxes.appendChild(label);
  });

  // Eix X d'anys
  drawXAxisOnly(W, H, m, FIELD_META.year);

  const points = SONGS.map((song) => {
    const laneIdx = Math.max(0, STRUCTURES.indexOf(song.structure));
    const laneCenterY = m.top + (laneIdx + 0.5) * laneH;
    const x = lerp(song.year, xMin, xMax, m.left + 14, W - m.right - 14);
    return { song, x, y: laneCenterY, r: 11 };
  });

  // Relaxar dins de cada franja per separat perquè cap punt salti de categoria
  STRUCTURES.forEach((name, idx) => {
    const yTop = m.top + idx * laneH + 8;
    const yBot = m.top + (idx + 1) * laneH - 8;
    const lanePoints = points.filter((p) => p.song.structure === name);
    relaxCollisions(
      lanePoints,
      { left: m.left + 8, right: W - m.right - 8, top: yTop, bottom: yBot },
      "x"
    );
  });

  // Anotació a la cantonada superior dreta (1967–70 sense AABA)
  addCallout(
    W - m.right - 210,
    m.top + 10,
    "Des del 1966 desapareix el motlle AABA clàssic.",
    ""
  );

  return {
    points,
    pinLabels: [
      { id: "tomorrow-never-knows", text: "Tomorrow Never Knows", pos: "left" }
    ]
  };
}

/* --- VISTA 5: DIES DE GRAVACIÓ A L'ESTUDI --- */
function computeRecordingLayout(W, H) {
  const m = { top: 42, right: 36, bottom: 52, left: 58 };
  const xMin = 1962.6;
  const xMax = 1970.4;
  const yMin = 0;
  const yMax = 16.5;

  drawXYAxes(W, H, m, FIELD_META.year, FIELD_META.recordingDays);

  // Línia vertical: Agost 1966, últim concert en directe
  const concertX = lerp(1966.6, xMin, xMax, m.left, W - m.right);
  elAxes.appendChild(
    svgEl("line", {
      x1: concertX,
      y1: m.top,
      x2: concertX,
      y2: H - m.bottom,
      class: "ref-line"
    })
  );

  addCallout(
    concertX - 216,
    m.top + 8,
    "Agost 1966 · Últim concert. L'estudi passa a ser l'escenari.",
    ""
  );

  const points = SONGS.map((song) => {
    const x = lerp(song.year, xMin, xMax, m.left, W - m.right);
    const y = lerp(song.recordingDays, yMin, yMax, H - m.bottom, m.top);
    const r = lerp(Math.sqrt(song.recordingDays), 1, Math.sqrt(14), 8.5, 20.5);
    return { song, x, y, r };
  });

  relaxCollisions(
    points,
    { left: m.left, right: W - m.right, top: m.top, bottom: H - m.bottom },
    "y"
  );

  return {
    points,
    pinLabels: [
      { id: "love-me-do", text: "1 dia (1963)", pos: "top-right" },
      { id: "strawberry-fields", text: "Strawberry Fields (14d)", pos: "top-right" },
      { id: "i-want-you", text: "I Want You (12d)", pos: "top" }
    ]
  };
}

/* --- VISTA 6: EXPLORADOR LLIURE --- */
function computeExploreLayout(W, H) {
  const m = { top: 34, right: 32, bottom: 52, left: 62 };
  const xField = FIELD_META[state.exploreX];
  const yField = FIELD_META[state.exploreY];

  drawXYAxes(W, H, m, xField, yField);

  const points = SONGS.map((song) => {
    const xVal = song[state.exploreX];
    const yVal = song[state.exploreY];
    const x = lerp(xVal, xField.min, xField.max, m.left, W - m.right);
    const y = lerp(yVal, yField.min, yField.max, H - m.bottom, m.top);

    let r = 11.5;
    if (state.exploreSize === "recordingDays") {
      r = lerp(song.recordingDays, 1, 14, 8, 21);
    } else if (state.exploreSize === "chordCount") {
      r = lerp(song.chordCount, 2, 17, 8, 20);
    } else if (state.exploreSize === "durationSec") {
      r = lerp(song.durationSec, 120, 470, 8, 20);
    }
    return { song, x, y, r };
  });

  relaxCollisions(
    points,
    { left: m.left, right: W - m.right, top: m.top, bottom: H - m.bottom },
    null
  );

  return { points, pinLabels: [] };
}

/* ==========================================================================
   DIBUIX D'EIXOS SVG I ANOTACIONS
   ========================================================================== */

function drawXYAxes(W, H, m, xField, yField) {
  // Reixa i ticks Y
  yField.ticks.forEach((tick) => {
    const y = lerp(tick, yField.min, yField.max, H - m.bottom, m.top);
    elAxes.appendChild(
      svgEl("line", {
        x1: m.left,
        y1: y,
        x2: W - m.right,
        y2: y,
        class: "axis-grid-line"
      })
    );

    const lbl = svgEl("text", {
      x: m.left - 10,
      y: y + 3.5,
      "text-anchor": "end",
      class: "axis-label"
    });
    lbl.textContent = yField.format(tick);
    elAxes.appendChild(lbl);
  });

  // Títol eix Y
  const yTitle = svgEl("text", {
    x: m.left,
    y: 18,
    "text-anchor": "start",
    class: "axis-title"
  });
  yTitle.textContent = yField.label;
  elAxes.appendChild(yTitle);

  drawXAxisOnly(W, H, m, xField);
}

function drawXAxisOnly(W, H, m, xField) {
  // Línia base X
  elAxes.appendChild(
    svgEl("line", {
      x1: m.left,
      y1: H - m.bottom,
      x2: W - m.right,
      y2: H - m.bottom,
      class: "axis-baseline"
    })
  );

  xField.ticks.forEach((tick) => {
    const x = lerp(tick, xField.min, xField.max, m.left, W - m.right);
    elAxes.appendChild(
      svgEl("line", {
        x1: x,
        y1: m.top,
        x2: x,
        y2: H - m.bottom,
        class: "axis-grid-line"
      })
    );

    const lbl = svgEl("text", {
      x: x,
      y: H - m.bottom + 18,
      "text-anchor": "middle",
      class: "axis-label"
    });
    lbl.textContent = xField.format(tick);
    elAxes.appendChild(lbl);
  });

  const xTitle = svgEl("text", {
    x: (m.left + W - m.right) / 2,
    y: H - 10,
    "text-anchor": "middle",
    class: "axis-title"
  });
  xTitle.textContent = xField.label;
  elAxes.appendChild(xTitle);
}

function addCallout(left, top, text, extraClass) {
  const div = document.createElement("div");
  div.className = `chart-callout ${extraClass || ""}`.trim();
  div.style.left = `${Math.max(8, left)}px`;
  div.style.top = `${Math.max(8, top)}px`;
  div.textContent = text;
  elAnnotations.appendChild(div);
}

/* ==========================================================================
   TOOLTIP I FITXA D'INSPECCIÓ
   ========================================================================== */

function buildTooltipHTML(song) {
  return `
    <div class="tooltip-title">${song.title}</div>
    <div class="tooltip-sub">${song.album} (${song.year}) · ${song.author}</div>
    <div class="tooltip-grid">
      <div><span>Durada</span> ${formatDuration(song.durationSec)}</div>
      <div><span>Acords</span> ${song.chordCount}</div>
      <div><span>Gravació</span> ${song.recordingDays} ${song.recordingDays === 1 ? "dia" : "dies"}</div>
      <div><span>Forma</span> ${song.structure.split(" ")[0]}</div>
    </div>
  `;
}

function showTooltip(song, event) {
  elTooltip.innerHTML = buildTooltipHTML(song);
  elTooltip.hidden = false;
  positionTooltip(event);
}

function positionTooltip(event) {
  if (elTooltip.hidden) return;
  const rect = elViewport.getBoundingClientRect();
  const relX = event.clientX - rect.left;
  const relY = event.clientY - rect.top;
  placeTooltipCoords(relX, relY, rect.width, rect.height);
}

function showTooltipAtNode(song, btn) {
  elTooltip.innerHTML = buildTooltipHTML(song);
  elTooltip.hidden = false;
  const rect = elViewport.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();
  const relX = btnRect.left - rect.left + btnRect.width / 2;
  const relY = btnRect.top - rect.top + btnRect.height / 2;
  placeTooltipCoords(relX, relY, rect.width, rect.height);
}

function placeTooltipCoords(x, y, maxW, maxH) {
  const tipW = elTooltip.offsetWidth || 230;
  const tipH = elTooltip.offsetHeight || 96;
  const offset = 16;

  let left = x + offset;
  if (left + tipW > maxW - 8) {
    left = x - tipW - offset;
  }
  let top = y - tipH / 2;
  top = clamp(top, 8, maxH - tipH - 8);

  elTooltip.style.left = `${Math.max(8, left)}px`;
  elTooltip.style.top = `${top}px`;
}

function hideTooltip() {
  elTooltip.hidden = true;
}

function selectSong(songId) {
  if (state.selectedSongId === songId) {
    closeInspector();
    return;
  }

  state.selectedSongId = songId;
  const song = SONGS.find((s) => s.id === songId);
  if (!song) return;

  elInsAuthorBadge.textContent = song.author;
  elInsAuthorBadge.style.backgroundColor = AUTHOR_COLORS[song.author] || "#012a75";
  elInsAuthorBadge.style.color = AUTHOR_BADGE_TEXT[song.author] || "#ffffff";
  elInsTitle.textContent = song.title;
  elInsAlbum.textContent = `${song.album} (${song.year}) · ${song.structureDetail}`;
  elInsDuration.textContent = formatDuration(song.durationSec);
  elInsChordCount.textContent = `${song.chordCount} acords`;
  elInsDays.textContent = `${song.recordingDays} ${song.recordingDays === 1 ? "dia" : "dies"}`;
  elInsStructure.textContent = song.structure;
  elInsNote.textContent = song.note;

  elInsChords.innerHTML = "";
  song.chords.forEach((chord) => {
    const pill = document.createElement("span");
    pill.className = "chord-pill";
    pill.textContent = chord;
    elInsChords.appendChild(pill);
  });

  elInspectorEmpty.hidden = true;
  elInspectorContent.hidden = false;
  render();
}

function closeInspector() {
  state.selectedSongId = null;
  elInspectorContent.hidden = true;
  elInspectorEmpty.hidden = false;
  render();
}

/* ==========================================================================
   CANVI DE VISTA, SCROLLYTELLING I EVENTS
   ========================================================================== */

function setView(viewName) {
  if (!VIEW_META[viewName] || state.view === viewName) return;
  state.view = viewName;
  render();
}

function initInteractions() {
  // Pestanyes superiors de la gràfica
  tabEls.forEach((tab) => {
    tab.addEventListener("click", () => {
      setView(tab.dataset.view);
    });
  });

  // Clic o focus a les targetes narratives de l'esquerra
  stepEls.forEach((step) => {
    step.addEventListener("click", () => setView(step.dataset.view));
    step.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setView(step.dataset.view);
      }
    });
  });

  // Scrollytelling automàtic amb IntersectionObserver
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const view = entry.target.dataset.view;
            if (view) setView(view);
          }
        });
      },
      {
        rootMargin: "-38% 0px -45% 0px",
        threshold: 0.05
      }
    );

    stepEls.forEach((step) => observer.observe(step));
  }

  // Filtre per autor a la llegenda
  authorChipEls.forEach((chip) => {
    chip.addEventListener("click", () => {
      state.authorFilter = chip.dataset.author;
      authorChipEls.forEach((c) =>
        c.classList.toggle("is-selected", c === chip)
      );
      render();
    });
  });

  // Controls de l'explorador lliure (vista 6)
  elSelectX.addEventListener("change", () => {
    state.exploreX = elSelectX.value;
    render();
  });
  elSelectY.addEventListener("change", () => {
    state.exploreY = elSelectY.value;
    render();
  });
  elSelectSize.addEventListener("change", () => {
    state.exploreSize = elSelectSize.value;
    render();
  });
  elSelectStructure.addEventListener("change", () => {
    state.structureFilter = elSelectStructure.value;
    render();
  });

  // Tancar fitxa inspectora
  elInsClose.addEventListener("click", closeInspector);

  // Recalcular posicions quan canvia la mida de la finestra
  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(() => render());
    ro.observe(elViewport);
  } else {
    window.addEventListener("resize", render);
  }
}

/* ==========================================================================
   ARRENCADA
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNodes();
  initInteractions();
  render();
});
