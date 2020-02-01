var nixt = require('nixt');

describe('Should render get lock screen image', () => {
  it('Get image by default', function(done) {
    nixt()
    .stdin('\n')
    .run(`node bin/get-lock-screen-image.js get-images`)
    .stdout(/.*Save folder.*/)
    .end(done);
  });

  it('Get image providing all arguments', function(done) {
    const folderName = Math.floor(Math.random() * Math.floor(10000));
    nixt()
    .stdin('\n')
    .run(`node bin/get-lock-screen-image.js get-images -p=D:/${folderName} -o=landscape -n=hash`)
    .stdout(/.*Save folder.*/)
    .end(done);
  });
});