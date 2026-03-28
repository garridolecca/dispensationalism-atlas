export let lang = "en";
export function setLang(newLang) { lang = newLang; }

const ui = {
  en: {
    appTitle: "Dispensationalism Atlas", appSubtitle: "Interactive Historical Atlas",
    splashVerse: '"Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."', splashVerseRef: "2 Timothy 2:15",
    chipAll: "All Eras", chip1: "Early Roots", chip2: "Systematization", chip3: "Classical", chip4: "Progressive",
    btnTimeline: "Timeline", btnFigures: "Figures", btnNames: "Names",
    infoTitle: "About This Map", infoLegendTitle: "Four Eras", infoFeaturesTitle: "Features",
    infoFeature1: "30+ historical locations across Europe and the Americas",
    infoFeature2: "Click any location to read detailed historical narratives",
    infoFeature3: "Filter by era to explore specific periods",
    infoFeature4: "Navigate between stops with Previous / Next buttons",
    infoFeature5: "Toggle between historical and modern place names",
    infoVerse: '"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." — 2 Timothy 3:16',
    donateTitle: "Support This Project",
    donateText: "This interactive map was built to trace the history of dispensational theology. If you find it helpful, consider supporting the project.",
    donateButton: "Donate", donateEmailLabel: "Feedback or questions?",
    sheetModernLabel: "Modern:", sheetRegionLabel: "Region:",
    showingHistorical: "Showing: Historical Names", showingModern: "Showing: Modern Names",
  },
  es: {
    appTitle: "Atlas del Dispensacionalismo", appSubtitle: "Atlas Histórico Interactivo",
    splashVerse: '"Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad."', splashVerseRef: "2 Timoteo 2:15",
    chipAll: "Todas las Eras", chip1: "Raíces", chip2: "Sistematización", chip3: "Clásico", chip4: "Progresivo",
    btnTimeline: "Cronología", btnFigures: "Figuras", btnNames: "Nombres",
    infoTitle: "Sobre Este Mapa", infoLegendTitle: "Cuatro Eras", infoFeaturesTitle: "Características",
    infoFeature1: "Más de 30 ubicaciones en Europa y las Américas",
    infoFeature2: "Haga clic en cualquier ubicación para leer narrativas detalladas",
    infoFeature3: "Filtre por era para explorar períodos específicos",
    infoFeature4: "Navegue entre paradas con los botones Anterior / Siguiente",
    infoFeature5: "Alterne entre nombres históricos y modernos",
    infoVerse: '"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." — 2 Timoteo 3:16',
    donateTitle: "Apoya Este Proyecto",
    donateText: "Este mapa interactivo fue creado para trazar la historia de la teología dispensacional.",
    donateButton: "Donar", donateEmailLabel: "¿Comentarios o preguntas?",
    sheetModernLabel: "Moderno:", sheetRegionLabel: "Región:",
    showingHistorical: "Mostrando: Nombres Históricos", showingModern: "Mostrando: Nombres Modernos",
  },
};

export function t(key) { return ui[lang]?.[key] || ui.en[key] || key; }

const eraTranslations = {
  en: {
    1: { name: "Early Roots", shortName: "Early Roots", dateRange: "1800–1840", description: "Darby, Plymouth Brethren, and the prophetic conferences that gave birth to dispensationalism." },
    2: { name: "Spread & Systematization", shortName: "Systematization", dateRange: "1840–1909", description: "Darby's American tours, Niagara Bible Conference, and Scofield's work." },
    3: { name: "Classical Dispensationalism", shortName: "Classical", dateRange: "1909–1965", description: "The Scofield Bible, Dallas Theological Seminary, and institutional establishment." },
    4: { name: "Revised & Progressive", shortName: "Progressive", dateRange: "1965–Present", description: "Ryrie's defense, Walvoord's prophecy, and progressive dispensationalism." },
  },
  es: {
    1: { name: "Raíces Tempranas", shortName: "Raíces", dateRange: "1800–1840", description: "Darby, los Hermanos de Plymouth y las conferencias proféticas." },
    2: { name: "Expansión y Sistematización", shortName: "Sistematización", dateRange: "1840–1909", description: "Los viajes de Darby a América, la Conferencia Bíblica de Niágara y la obra de Scofield." },
    3: { name: "Dispensacionalismo Clásico", shortName: "Clásico", dateRange: "1909–1965", description: "La Biblia Scofield, el Seminario Teológico de Dallas y el establecimiento institucional." },
    4: { name: "Revisado y Progresivo", shortName: "Progresivo", dateRange: "1965–Presente", description: "La defensa de Ryrie, la profecía de Walvoord y el dispensacionalismo progresivo." },
  },
};

export function eraText(eraId, field) { return eraTranslations[lang]?.[eraId]?.[field] || eraTranslations.en[eraId]?.[field] || ""; }
const locationTranslations = { es: {} };
export function locationText(locId, field) { return locationTranslations[lang]?.[locId]?.[field] || null; }
export function eventText(locId, year, field) { return null; }
