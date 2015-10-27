import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	actions: {
		removeContact(id) {
			if (id) {
				this.sendAction('action', id);
			}
			this.set('id', 0);
		}
	}
});
