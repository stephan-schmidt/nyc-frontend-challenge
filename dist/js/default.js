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
		checkForm: function (e) {
		 if (this.name && this.age) {
			 return true;
		 }

		 this.errors = [];

		 if (!this.name) {
			 this.errors.push('Name required.');
		 }
		 if (!this.age) {
			 this.errors.push('Age required.');
		 }

		 e.preventDefault();
	 },
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


      },
			validateFormFields ()
			{
			  const firstname = document.getElementById("1111");
			firstname.addEventListener("input", function (event) {
			if (firstname.validity.typeMismatch) {
			firstname.setCustomValidity("Please enter your first name!");
			} else {

			};
			});

			const lastname = document.getElementById("2222");
			lastname.addEventListener("input", function (event) {
			if (lastname.validity.typeMismatch) {
			lastname.setCustomValidity("Please enter your last name!");
			} else {

			};
			});


			  const email = document.getElementById("4444");
			email.addEventListener("input", function (event) {
			if (email.validity.typeMismatch) {
			email.setCustomValidity("Please enter a valid email address!");
			} else {

			};
			});

			const phone = document.getElementById("3333");
			phone.addEventListener("input", function (event) {
			if (phone.validity.typeMismatch) {
			phone.setCustomValidity("Please provide a 10 digit phone number without brakcets or dashes e.g. 9999999999");
			} else {
			phone.setCustomValidity("");
			}
			});

			},

      getFormValues ()
      {
				//this.validateFormFields();
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



