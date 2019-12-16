const {
  getFiles,
  extractFilesStat,
  filterImages,
  filterUniqueImages,
  createImagesFolder,
  copyFiles,
  trimQuotes,
  setSavePath,
} = require('../helpers');
const {
  DEFAULT_SAVE_PATH,
  PATH_TO_IMAGE,
  ORIENTATION_ALL,
} = require('../constants');

// Default Actions
module.exports = function (args, options, logger) {
  const pathToSave = trimQuotes(options.path ? options.path : DEFAULT_SAVE_PATH);
  const orientation = trimQuotes(args.orientation ? args.orientation : ORIENTATION_ALL);
  setSavePath(pathToSave);

  // Main logic
  if (!createImagesFolder(pathToSave)) {
    logger.error('\nError while create saving folder! Please try again!');
    return;
  }
  const files = getFiles(PATH_TO_IMAGE);
  const fileStats = extractFilesStat(files);
  const newImages = filterImages(fileStats, { orientation });
  const oldImages = getFiles(pathToSave);
  const uniqueImages = filterUniqueImages(newImages, oldImages, pathToSave);
  const count = copyFiles(uniqueImages, PATH_TO_IMAGE, pathToSave);

  // Announcements
  if (count) {
    logger.info(`\nSuccessfully copy ${count} new images!`);
    logger.info(`Check out now: ${pathToSave}`);
  } else logger.warn('\nI found no NEW images :) Better luck next time!');
};
