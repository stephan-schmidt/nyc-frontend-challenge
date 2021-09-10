// Your application goes here
new Vue({

	el: '#formfields',

	data: {
		formItems: [],
    formData: [{
      "id": "1111",
      "label": "First Name",
      "name": "nameFirst",
      "type": "text",
      "required": 1
    },
    {
      "id": "2222",
      "label": "Last Name",
      "name": "nameLast",
      "type": "text",
      "required": 1
    },
    {
      "id": "3333",
      "label": "Your Phone Number",
      "name": "contactPhone",
      "type": "tel",
      "pattern": "[0-9]{10}",
      "required": 0
    },
    {
      "id": "4444",
      "label": "Your Email",
      "name": "contactEmail",
      "type": "email",
      "required": 0
    },
    {
      "id": "5555",
      "legend": "Your preferred contact",
      "name": "contactPreferred",
      "type": "radio",
      "required": 1,
      "options": [
        {
          "id": "5555-1",
          "label": "Phone",
          "value": "phone"
        },
        {
          "id": "5555-2",
          "label": "Email",
          "value": "email"
        }]
      }],
    // formDataPostDev:[{
    //   "name": "nameFirst",
    //   "value": "Jane"
    // },
    // {
    //   "name": "nameLast",
    //   "value": "Doe"
    // },
    // {
    //   "name": "contactPhone",
    //   "value": "9999999999"
    // },
    // {
    //   "name": "contactEmail",
    //   "value": "jd@email.com"
    // },
    // {
    //   "name": "contactPreferred",
    //   "value": "phone"
    // }],
    formDataPost:[]
	},

	created: function created() {
		this.loadFormData();
    console.log(this.formData);
	},

	methods: {
  async loadFormData() {
      // const response =  await fetch('https://putsreq.com/RWhI8ht10y5kqfmemrML');
      // const fields =  await response.json();
      // console.log(fields);
      // this.formItems = fields;
      this.formItems = this.formData;
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
          self.formData.map( function(a,b){
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
          self.sendFormData();
      }

}
});



