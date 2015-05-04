// checks that the userId specified owns the document
ownsDocument = function(userId, document) {
  return document && document.userId === userId;
}