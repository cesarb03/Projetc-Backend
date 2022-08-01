import fs from 'fs'


class FileContainer {
  fileName: string
  
    constructor(fileName: string) {
      this.fileName = fileName
      this.connect()
      
      if (!fs.existsSync(`./${this.fileName}`)) {
        fs.promises
          .writeFile(`./${this.fileName}`, ``)
          .then(() => console.log(`${this.fileName} created`));
    }
}

connect(){
console.log('connected to filesystem')
}
}

export default FileContainer