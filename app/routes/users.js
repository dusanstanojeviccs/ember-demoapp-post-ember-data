import Ember from 'ember';

export default Ember.Route.extend({
	model() {

		let user = this.store.createRecord('user');

		user.set('name', 'Dusan');

		user.set('name', 'Dux');

		if (user.get('hasDirtyAttributes')) {
			console.log('Users changes are not saved');
		}

		user.save().then(() => {
			console.log('User got saved');

			user.deleteRecord();
		});

		Ember.run.later(() => {
			if (user.get('isDeleted')) {
				console.log("User was deleted");
			}	
		}, 2000);

		return this.store.findAll('user');
	}
});




