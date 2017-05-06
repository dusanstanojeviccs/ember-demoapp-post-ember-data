import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		onLogName() {
			console.log("Email: " + this.get("user").get("email"));
		}
	}
});