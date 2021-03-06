'use strict';

const Promise = require('bluebird');

const Types = require('../types/documentTypes');

const ALBUM = Types.ALBUM;


class AlbumsService {
  constructor(db){
    this.db = db;
  }

  /**
   * Find all the albums that belong to a band
   * @deprecated
   * @param _id The band id
   * @returns {Promise} Returns a Promise than when solved returns all the albums
   */
  findByBand(band){
	  return new Promise((resolve, reject) => {
      this.db.find({ docType: ALBUM, _id: { $in: band.albums }}, (err, albums) => {
        if (err) return reject(err);		
		resolve(albums);	
	  })
	  })
  }

  
  find(_id){
    
  }
}

module.exports = AlbumsService;