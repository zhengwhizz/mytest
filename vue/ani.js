var app = new Vue({
	el : '#app',
	data : {
		message : 'Hello Vue!',
		show : false,

		items : [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
		nextNum : 10,
		cells: Array.apply(null, { length: 81 })
	    	.map(function (_, index) { 
	      	return {
	        	id: index,
	        	number: index % 9 + 1
	        }
	      })

	},
	methods : {
		randomIndex : function() {
			return Math.floor(Math.random() * this.items.length)
		},
		add : function() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		remove : function() {
			this.items.splice(this.randomIndex(), 1)
		},
		shuffle : function() {
			this.items = _.shuffle(this.items)
		},
		shuffle2 : function() {
			this.cells = _.shuffle(this.cells)
		}
	}
})
