export default function() {
  this.get('/contacts', function(db, request) {
    return {
      data: db.contacts.map(attrs => (
        { 
          type: 'contacts',
          id: attrs.id,
          attributes: attrs
        }
      ))
    }
  });
  this.get('/contacts/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'contacts',
        id: id,
        attributes: db.contacts.find(id)
      }
    }
  });

  this.post('/contacts', function(db, request) {
    let attrs = JSON.parse(request.requestBody);
    let contact = db.contacts.insert(attrs);
    return {
      data: {
        type: 'contact',
        id: contact.id,
        attributes: contact
      }
    }
  });

  this.del('/contacts/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'contacts',
        id: id,
        attributes: db.contacts.remove({ id: id })
      }
    }
  });
}