
  var firepadRef = new Firebase(env.firebaseURL);
  var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true });
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
      { richTextShortcuts: true, richTextToolbar: true, defaultText: 'Hello, World!' });
