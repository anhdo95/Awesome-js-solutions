function convertHTML(str) {
  const entities = {
    '<': '&lt;',
    '&': '&amp;',
    '>': '&gt;',
    '"': '&quot;',
    "'": "&apos;",
    // so on
  }

  return str.replace(/[<&>"']/, e => entities[e])
}

convertHTML('Dolce & Gabbana') // Dolce &amp; Gabbana
