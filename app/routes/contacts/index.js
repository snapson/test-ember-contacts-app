import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('contact');
	},
	actions: {
		addContact() {
			this.store.createRecord('contact', {
				picture: 'http://placehold.it/128x128',
				name: 'added',
				company: 'added',
				email: 'added',
				phone: 'added',
				address: 'added'
			}).save();
		},
		removeContact(id) {
			this.store.find('contact', id).then(function(c) {
				c.deleteRecord();
				c.get('isDeleted');
				c.save();
			});
		}
	}
});
