const fs = require('fs');
const { promisify } = require('util');
const Promise = require('bluebird');
const opn = require('opn');
const path = require('path');
const { actions, util } = require('vortex-api');

class OxygenNotIncluded {
  constructor(context) {
    this.context = context;
    this.id = 'oxygennotincluded';
    this.name = 'Oxygen Not Included';
    this.logo = 'gameart.png';
    this.mergeMods = true;
    this.queryModPath = () => '';	// 'Mods'
    this.executable = () => 'OxygenNotIncluded.exe';
    this.requiredFiles = [
      'OxygenNotIncluded.exe'
    ];
    this.details = {
      steamAppId: 457140,
    };
  }

  async queryPath() {
    return util.steam.findByAppId('457140')
        .then(game => game.gamePath);
  }
  /*
  async getPathExistsAsync(path) {
      try {
       await promisify(fs.access)(path, fs.constants.R_OK);
       return true;
      }
      catch(err) {
        return false;
      }
  }
  
  async prepareForModding(discovery) {
      return fs.ensureDirAsync(path.join(discovery.path, ''));	//'Mods'
  }
  
  async setup(discovery) {
    // skip if ModLoader found
	
    let modLoaderPath = path.join(discovery.path, 'OxygenNotIncluded_Data', 'Managed', 'ModLoader.dll')
    let modLoaderFound = await this.getPathExistsAsync(modLoaderPath);
    if (modLoaderFound) {
      return;
    }
  
    // show need-ModLoader dialogue
    var context = this.context;
    return new Promise((resolve, reject) => {
      context.api.store.dispatch(
        actions.showDialog(
          'question',
          'Action required',
          { message: 'You must install ONI-ModLoader to use mods with Oxygen Not Included.' },
          [
            { label: 'Cancel', action: () => reject(new util.UserCanceled()) },
            { label: 'Go to ONI-ModLoader page', action: () => { opn('https://www.nexusmods.com/oxygennotincluded/mods/9/').catch(err => undefined); reject(new util.UserCanceled()); } }
          ]
        )
      );
    });
	
  }
  */
}

module.exports = {
  default: function(context) {
    context.registerGame(new OxygenNotIncluded(context));
  }
};