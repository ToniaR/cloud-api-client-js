import APIList from './APIList'

interface UploadObj {
  /**
   * Directory
   */
  dir: string;

  /**
   * Filename
   */
  filename: string;
}

/**
 * APIListFiles
 *
 * @class
 * @extends APIList
 */
class APIListFiles extends APIList {

  // Constructor
  constructor (parent: object) {
    super(parent);
    this.push('files');
  }

  // Siplifies process of uploading
  public upload (obj: UploadObj) {
    let form;

    // For NodeJS
    if (globalThis.isNodeJs) {
      const fs = require('fs');
      const FormData = require('form-data');

      form = new FormData();
      form.append('file', fs.createReadStream(obj.dir + '/' + obj.filename), {
        filename: obj.filename
      });

    /**
     * Browser
     * @todo
     */
    } else {
      throw new Error('Not supported yet!');
    }

    this.post().headers(form.getHeaders()).data(form);
  }

}

export default APIListFiles
