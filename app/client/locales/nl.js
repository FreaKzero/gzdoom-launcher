export default {
  atoms: {
    reset: 'Opnieuw Instellen',
    selectFile: 'Bestand',
    selectDir: 'Bestandslijst'
  },
  filters: {
    lastplayed: 'Laatst gespeeld',
    oldest: 'Oudste eerst',
    newest: 'Nieuwste eerst',
    active: 'Actieve eerst'
  },
  wads: {
    filter: 'Zoek in {{size}} Mods',
    toastIndex: 'Reindexed Mod Directory',
    packEdit: 'Wijzig',
    packSaveAs: 'Opslaan als',
    packSave: 'Opslaan',
    packReset: 'Opnieuw Instellen'
  },
  sourceports: {
    parameter: 'Parameter',
    filename: 'Bestandsnaam',
    delete: 'Verwijder',
    save: 'Opslaan',
    binary: 'Locatie Bronpoort',
    name: 'Naam Bronpoort',
    savegameparam: 'Afzonderlijke Games Opslaan Per Pakket',
    configDefault: 'Standaard Configuratiebestand',
    configparam: 'Afzonderlijke Configuratie Per Pakket',
    toastSaved: 'Bronpoort Succesvol Opgeslagen',
    toastDeleted: 'Bronpoort Verwijderd'
  },
  settings: {
    savepath: 'SSGL Bestandsgegevens',
    waddir: 'WAD Bestandslijst',
    wallpaper: 'Achtergrond Afbeelding',
    save: 'Instellingen Opslaan',
    toastSaved: 'Instellingen Succesvol Opgeslagen',
    startView: 'Open View when SSGL starts'
  },
  common: {
    loading: 'Laden',
    language: 'Taal',
    success: 'Succes',
    error: 'Fout',
    cancel: 'Annuleren',
    ok: 'Ok',
    required: 'Verplicht',
    toastRequired: 'Vul Alstublieft De Verplichte Velden In',
    toastStart: 'Starting Sourceport',
    toastStartText: `Starting {{sourceport}} with {{num}} Mods`
  },
  nav: {
    appname: 'Super Shotgun Launcher',
    wads: 'Mods',
    packages: 'Pakketten',
    sourceports: 'Bronpoorten',
    settings: 'Instellingen'
  },
  packages: {
    lastplayed: 'Laatst Gespeeld: {{value, date}}',
    never: 'Laatst Gespeeld: Nooit',
    filter: 'Zoek in {{size}} pakketten',
    titleSave: 'Opslaan Als: {{name}}',
    titleEdit: 'Wijzig: {{name}}',
    toastSave: 'Opgeslagen Pakket',
    use: 'Gebruik',
    play: 'Nu Spelen',
    delete: 'Verwijder',
    selectPackage: 'Kies een pakket',
    datadir: 'gegevens'
  },
  errors: {
    SETTINGS_FILE: 'No Settings found',
    UNEXPECTED: 'Unexpected Error happened',
    WALKER_ERROR: 'FileWalker Error',
    JSON_WRITE: 'Error while writing JSON File'
  }
};
