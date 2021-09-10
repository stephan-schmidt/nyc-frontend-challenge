// Your application goes here
new Vue({

	el: '#formfields',

	data: {
		formItems: [],
    formDataPost:[]
	},

	created: function created() {
		this.loadFormData();
	},

	methods: {
  async loadFormData() {
      const response =  await fetch('https://putsreq.com/RWhI8ht10y5kqfmemrML');
      const fields =  await response.json();
      console.log(fields);
      this.formItems = fields;
    //this.formItems = this.formData;
    },

  async sendFormData() {
      self = this;


      const rawResponse = await fetch('https://putsreq.com/RWhI8ht10y5kqfmemrML', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(self.formDataPost)
  });
  const content = await rawResponse.json();

  console.log(content);
      },

      getFormValues ()
      {
        self.formDataPost = [];
        self = this;
          self.formItems.map( function(a,b){
            const obj ={};
            obj['name'] = a.name;
            if(a.name != 'contactPreferred'){
              obj['value'] = self.$refs.form[a.name].value;
            }
            else
            {
              var phone = self.$refs.form.contactPreferred[0].checked;
              var email = self.$refs.form.contactPreferred[1].checked;

              if(email)obj['value']='email';
              if(phone)obj['value']='phone';
            }
            self.formDataPost.push(obj);
          })
					console.log(self.formDataPost);
          self.sendFormData();
      }

}
});



