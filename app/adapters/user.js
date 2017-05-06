import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	findAll() {
		return {
			users: [
				{
					id: 1,
					name: "Dusan",
					email: "dusan@bevager.com",
				}
			]
		}
	}
});