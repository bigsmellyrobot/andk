const path = require('path')
const fs = require('fs')

const branch = process.env.BRANCH == undefined ? 'master' : process.env.BRANCH
const url = process.env.DEPLOY_PRIME_URL

if(branch != undefined && branch != 'master') {

  const SRC = path.join(__dirname, 'admin')
  const DEST = path.join(__dirname, 'static/admin')

  if(!fs.existsSync(DEST)) {
    fs.mkdirSync(DEST)
  }

  const config = fs.readFileSync(path.join(SRC, 'config.yml'), 'utf8')
  fs.writeFileSync(path.join(DEST, 'config.yml'), config.replace(/\/%BRANCH%\//, branch).replace(/\/%URL%\//, url))
  fs.createReadStream(path.join(SRC, 'index.html')).pipe(fs.createWriteStream(path.join(DEST, 'index.html')))
}