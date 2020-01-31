### Startup LockScreen Extractor for Windows 10

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2299fbfcaec94989a76b0bbc5be3a1e4)](https://app.codacy.com/gh/pass-team/windows-10-lock-screen-image-extractor?utm_source=github.com&utm_medium=referral&utm_content=pass-team/windows-10-lock-screen-image-extractor&utm_campaign=Badge_Grade_Dashboard)

#### Installation
```$javascript
yarn install
```

#### Usage
```$javascript
 get-images.js [options] [orientation] [name pattern]

 Example:
    node get-images.js
    node get-images.js -p=D:/images-folder portrait hash
```

#### Command Options
```$javascript
ARGUMENTS
    
    [orientation]       Filter images based on orientation:         optional        default: "all"
                        Choose:
                            'landscape'
                            'portrait'
                            'all'
    
    [name pattern]      Output filename pattern                     optional        default: "origin"
                        Choose:
                            'origin': Keep name that windows give
                            'hash': Use image hash as name
                            'date': Use current date as name

OPTIONS
    
     -p, --path         Path to save images to                      optional        default: false

COMMANDS
    
    show-settings       Show your current saving folder
    random-desktop      Randomly set a new desktop wallpaper
    help <command>      Display help for a specific command

GLOBAL OPTIONS
    
    -h, --help          Display help
    -V, --version       Display version
    --no-color          Disable colors
    --quiet             Quiet mode - only displays warn and error messages
    -v, --verbose       Verbose mode - will also output debug messages             
```
