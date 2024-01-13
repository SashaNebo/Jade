let dataNote = []
let currency = 'USD'

// Get currency
if (localStorage.getItem('currency')) {
  currency = JSON.parse(localStorage.getItem('currency'))
}
