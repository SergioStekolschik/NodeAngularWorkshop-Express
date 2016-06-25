'use strict';

const Promise = require('bluebird');

const Types = require('../types/documentTypes');
const ARTIST = Types.ARTIST;

class ArtistsService {
  constructor(db){
    this.db = db;
  }

  /**
   * Find all the albums that belong to a band
   * @deprecated
   * @param _id The band id
   * @returns {Promise} Returns a Promise than when solved returns all the albums
   */

/*
   findByBand(_id){
   }  
   
*/   

    findByBand(band){
	  return new Promise((resolve, reject) => {
      this.db.find({ docType: ARTIST, _id: { $in: band.artists }}, (err, artists) => {		  
        if (err) return reject(err);
		
		resolve(artists);	
	  })
	  })
  }

  find(_id){
    
  }
}

module.exports = ArtistsService;
